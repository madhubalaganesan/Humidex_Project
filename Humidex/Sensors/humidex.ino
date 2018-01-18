#include "cactus_io_DHT22.h"



#define DHT22_PIN 2 

DHT22 dht(DHT22_PIN);

// Gas Sensor Definitions 


#define         MG_PIN                       (2)     //define which analog input channel you are going to use
#define         BOOL_PIN                     (8)     //Arduino D2-CO2 sensor digital pinout, labled with "D" on PCB  
#define         DC_GAIN                      (8.5)   //define the DC gain of amplifier
 
/***********************Software Related Macros************************************/
#define         READ_SAMPLE_TIMES            (10)     //define how many samples you are going to take in normal operation
#define         READ_SAMPLE_INTERVAL         (50)    //define the time interval(in milisecond) between each samples in
//normal operation
 
/**********************Application Related Macros**********************************/
//These values differ from sensor to sensor. User should derermine this value.
#define         ZERO_POINT_X                 (2.602) //lg400=2.602, the start point_on X_axis of the curve
#define         ZERO_POINT_VOLTAGE           (0.324) //define the output of the sensor in volts when the concentration of CO2 is 400PPM
#define         MAX_POINT_VOLTAGE            (0.265) //define the output of the sensor in volts when the concentration of CO2 is 10,000PPM
#define         REACTION_VOLTGAE             (0.059) //define the voltage drop of the sensor when move the sensor from air into 1000ppm CO2
 
/*****************************Globals***********************************************/
float           CO2Curve[3]  =  {ZERO_POINT_X, ZERO_POINT_VOLTAGE, (REACTION_VOLTGAE / (2.602 - 4))};


void setup()
{
  Serial.begin(9600); // open serial port, set the baud rate to 9600 bps

  dht.begin();

  pinMode(BOOL_PIN, INPUT);                        //set pin to input
  digitalWrite(BOOL_PIN, HIGH);
  
}
void loop()
{
      int val;
      val=analogRead(1);   //connect grayscale sensor to Analog 0
      Serial.print("Ambient Light: ");
      Serial.println(val,DEC);//print the value to serial        
      delay(100);

     
      Serial.println("");

      // Reading temperature or humidity takes about 250 milliseconds!
      // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
      dht.readHumidity();
      dht.readTemperature();
      
      // Check if any reads failed and exit early (to try again).
      if (isnan(dht.humidity) || isnan(dht.temperature_C)) {
        Serial.println("DHT sensor read failure!");
        return;
      }

      Serial.print("Temperature(C): ");
      Serial.println(dht.temperature_C);
       
      Serial.print("Humidity(%): ");
      Serial.println(dht.humidity);

      Serial.print("Heat Index: ");
      Serial.println(dht.computeHeatIndex_C());

      int percentage;
      float volts;
     
      volts = MGRead(MG_PIN);
      
      percentage = MGGetPercentage(volts, CO2Curve);
       Serial.print("CO2(ppm): ");
      if (percentage == -1) {
        Serial.println("Not calibrated");
      } else {
         Serial.println(percentage);
      }
      
      // Wait a few seconds between measurements. The DHT22 should not be read at a higher frequency of
      // about once every 2 seconds. So we add a 3 second delay to cover this.
      delay(3000);

      
}

/*****************************  MGRead *********************************************
Input:   mg_pin - analog channel
Output:  output of SEN-000007
Remarks: This function reads the output of SEN-000007
************************************************************************************/
float MGRead(int mg_pin) {
  int i;
  float v = 0;
 
  for (i = 0; i < READ_SAMPLE_TIMES; i++) {
    v += analogRead(mg_pin);
    delay(READ_SAMPLE_INTERVAL);
  }
  v = (v / READ_SAMPLE_TIMES) * 5 / 1024 ;
  return v;
}
 
/*****************************  MQGetPercentage **********************************
Input:   volts   - SEN-000007 output measured in volts
         pcurve  - pointer to the curve of the target gas
Output:  ppm of the target gas
Remarks: By using the slope and a point of the line. The x(logarithmic value of ppm)
         of the line could be derived if y(MG-811 output) is provided. As it is a
         logarithmic coordinate, power of 10 is used to convert the result to non-logarithmic
         value.
************************************************************************************/
int  MGGetPercentage(float volts, float *pcurve) {
  volts = volts / DC_GAIN;
  if (volts > ZERO_POINT_VOLTAGE || volts < MAX_POINT_VOLTAGE ) {
    return -1;
  } else {
    return pow(10, (volts - pcurve[1]) / pcurve[2] + pcurve[0]);
    volts = 0;
  }
}
