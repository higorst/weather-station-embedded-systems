#include <SPI.h>
#include "DHT.h"
#include <Wire.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define DHTPIN 15
#define DHTTYPE DHT11
#define UVPIN 35
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1
#define LOGO_HEIGHT 16
#define LOGO_WIDTH 16

char* ssid = (char*)"Rocha";
char* password = (char*)"9689645844";
const char* serverName = (char*)"http://192.168.0.110:3000/values";

HTTPClient http;
WiFiClient client;
DHT dht(DHTPIN, DHTTYPE);
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

DynamicJsonDocument sensors(2048);

void setup()
{
  Serial.begin(115200);
  dht.begin();
  
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { 
    Serial.println("Erro na instância do display.");
    for(;;);
  }

  WiFi.begin(ssid, password);
   while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando a rede Wifi..");
   }
   Serial.println("Conectado a rede Wifi com sucesso!");
  
  display.display();
  delay(2000);
}

void loop() 
{
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  float uvPin = analogRead(UVPIN);
  
  float uvValue = 0.0;
  int auxUV = 0;
  String payload;

  uvValue = uvPin/(1024.0*3.3);
  auxUV = (int(uvValue*100));
  uvValue = (float(auxUV)/100);
  
  sensors["humidity"] = humidity;
  sensors["temperature"] = temperature;
  sensors["uv"] = uvValue;

  serializeJson(sensors, payload);

  if(WiFi.status()== WL_CONNECTED) {
    Serial.println(payload);
    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");
    int httpResponseCode = http.POST(payload);
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
    http.end();
  }

  display.clearDisplay();
  
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Falha na leitura do sensor de temperatura.");
    return;
  }
  
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print(" %\t");
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" *C ");
  Serial.print("UV: ");
  Serial.println(uvValue);

  display.clearDisplay();
  
  showHumidity(humidity);
  showTemperature(temperature);
  showUV(uvValue);
  delay(30000);
}

void showHumidity(float h) 
{
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0, 20);
  display.print("Humidade: ");
  display.print(h);
  display.println("%");
  display.display();
}

void showTemperature(float t) 
{
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0, 30);
  display.print("Temperatura: ");
  display.print(t);
  display.println("C");
  display.display();
}

void showUV(float uv) 
{
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0, 40);
  display.print("Indice UV: ");
  display.println(uv);
  display.display();
}
