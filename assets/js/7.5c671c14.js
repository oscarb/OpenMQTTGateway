(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{412:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_devices_rf1.97b46f9c.png"},413:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_devices_rf2.26da8a3a.png"},414:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_devices_rf3.85e5cb30.png"},415:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_devices_ble.eccdbc5d.png"},463:function(t,e,a){"use strict";a.r(e);var r=a(45),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#devices"}},[t._v("#")]),t._v(" Devices")]),t._v(" "),r("p",[t._v("You can take a look to the "),r("a",{attrs:{href:"https://compatible.openmqttgateway.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenMQTTGateway compatible website"),r("OutboundLink")],1),t._v(" to have a view of the "),r("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/devices/",target:"_blank",rel:"noopener noreferrer"}},[t._v("supported devices"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("Added to that is an overview of devices supported by OpenMQTTGateway:")]),t._v(" "),r("h2",{attrs:{id:"for-radio-frequency-devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-radio-frequency-devices"}},[t._v("#")]),t._v(" For radio frequency devices")]),t._v(" "),r("p",[t._v("OpenMQTTGateway can support a wide range of 433mhz/315mhz devices, all the ones with SC5262 / SC5272, HX2262 / HX2272, PT2262 / PT2272, EV1527, RT1527, FP1527, HS1527 chipsets are supported by the RF gateway. Added to that RF2 support Kaku and Pilight an "),r("a",{attrs:{href:"https://wiki.pilight.org/devices",target:"_blank",rel:"noopener noreferrer"}},[t._v("huge list"),r("OutboundLink")],1),t._v(".\nNote that for the moment RF, RF2 and Pilight can not be activated on the same boards together.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(412),alt:"boards",title:":size=250%"}}),t._v(" "),r("img",{attrs:{src:a(413),alt:"boards",title:":size=250%"}}),t._v(" "),r("img",{attrs:{src:a(414),alt:"boards",title:":size=250%"}})]),t._v(" "),r("h2",{attrs:{id:"for-ble-devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-ble-devices"}},[t._v("#")]),t._v(" For BLE devices")]),t._v(" "),r("p",[t._v("OpenMQTTGateway is able to scan all the BLE devices that advertise their data so as to do presence detection.\nAdded to that it retrieves the measures from the devices below. By default the data are read from the advertisements (no impact on device battery life). When a (c) is present after the model name, this means that the gateway connects to it so as to retrieve data or control the device. For some devices we may connect only to retrieve one or several parameters (the rest being advertised), in this case the (c) is placed with the parameter.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Devices")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Model")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Measurements")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Amazfit Smart Watch(1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("steps, heart rate")])]),t._v(" "),r("tr",[r("td",[t._v("ATorch Battery Capacity Monitor (c)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("DT24")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("volt/amp/watt")])]),t._v(" "),r("tr",[r("td",[t._v("BLE watches with fixed MAC")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("rssi for presence detection")])]),t._v(" "),r("tr",[r("td",[t._v("BLE beacons keychains")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("rssi for presence detection")])]),t._v(" "),r("tr",[r("td",[t._v("BlueMaestro")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("TempoDisc")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/duepoint/voltage")])]),t._v(" "),r("tr",[r("td",[t._v("BM2 Battery Monitor")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("BM2")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("battery")])]),t._v(" "),r("tr",[r("td",[t._v("ClearGrass")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CGG1")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery")])]),t._v(" "),r("tr",[r("td",[t._v("ClearGrass alarm clock")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CGD1")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity")])]),t._v(" "),r("tr",[r("td",[t._v("ClearGrass with atmospheric pressure")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CGP1W")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/air pressure")])]),t._v(" "),r("tr",[r("td",[t._v("Clock")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("LYWDS02")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity")])]),t._v(" "),r("tr",[r("td",[t._v("Eddystone TLM")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("protocol")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/count/volt/time")])]),t._v(" "),r("tr",[r("td",[t._v("GOVEE")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("H5055")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature1/temperature2/temperature3/temperature4/temperature5/temperature6/battery")])]),t._v(" "),r("tr",[r("td",[t._v("GOVEE")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("H5075")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery")])]),t._v(" "),r("tr",[r("td",[t._v("GOVEE")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("H5072")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery")])]),t._v(" "),r("tr",[r("td",[t._v("GOVEE")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("H5102")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery")])]),t._v(" "),r("tr",[r("td",[t._v("HONEYWELL")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("JQJCY01YM")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("formaldehyde/temperature/humidity/battery")])]),t._v(" "),r("tr",[r("td",[t._v("Ibeacon")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("protocol")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("UUID/MFID/Major/Minor/Power")])]),t._v(" "),r("tr",[r("td",[t._v("INKBIRD (1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IBS-TH1")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery")])]),t._v(" "),r("tr",[r("td",[t._v("INKBIRD (1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IBS-TH2/P01B")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/battery")])]),t._v(" "),r("tr",[r("td",[t._v("INKBIRD (1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IBT-2X")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature1/temperature2")])]),t._v(" "),r("tr",[r("td",[t._v("INKBIRD (1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IBT-4XS")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature1/temperature2/temperature3/temperature4")])]),t._v(" "),r("tr",[r("td",[t._v("INKBIRD (1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IBT-6XS")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature1/temperature2/temperature3/temperature4/temperature5/temperature6")])]),t._v(" "),r("tr",[r("td",[t._v("iNode Energy Meter (1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("power/energy/battery")])]),t._v(" "),r("tr",[r("td",[t._v("Mokosmart (1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M1")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("x_axis/y_axis/z_axis/battery")])]),t._v(" "),r("tr",[r("td",[t._v("Mokosmart (1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("H4")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/volt")])]),t._v(" "),r("tr",[r("td",[t._v("Qingping")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CGDK2")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity")])]),t._v(" "),r("tr",[r("td",[t._v("Qingping")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CGH1")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("open")])]),t._v(" "),r("tr",[r("td",[t._v("Qingping")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CGPR1")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("presence/luminance")])]),t._v(" "),r("tr",[r("td",[t._v("RBaron")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("b-parasite")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("moisture, temperature, humidity, luminance (v1.1.0+), voltage")])]),t._v(" "),r("tr",[r("td",[t._v("RuuviTag Raw V1")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("RuuviTag")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/pressure/acceleration/volt")])]),t._v(" "),r("tr",[r("td",[t._v("RuuviTag Raw V2")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("RuuviTag")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/pressure/acceleration/volt/TX power/movement/counter/sequence number")])]),t._v(" "),r("tr",[r("td",[t._v("SmartDry")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Laundry Sensor")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/shake/voltage/wake")])]),t._v(" "),r("tr",[r("td",[t._v("Switchbot")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Bot(c)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("mode/state/battery")])]),t._v(" "),r("tr",[r("td",[t._v("Switchbot")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Motion Sensor")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("movement/light level/sensing distance/led/scope tested/battery")])]),t._v(" "),r("tr",[r("td",[t._v("Switchbot")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Contact Sensor")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("contact/movement/scope tested/light level/battery")])]),t._v(" "),r("tr",[r("td",[t._v("Switchbot")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Curtain")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("motion state/position/light level/battery/calibration state")])]),t._v(" "),r("tr",[r("td",[t._v("Switchbot")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Meter (Plus)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery")])]),t._v(" "),r("tr",[r("td",[t._v("Thermobeacon")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("WS02")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/volt")])]),t._v(" "),r("tr",[r("td",[t._v("Thermobeacon")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("WS08")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/volt")])]),t._v(" "),r("tr",[r("td",[t._v("TPMS")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("TPMS")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/pressure/battery/alarm/count")])]),t._v(" "),r("tr",[r("td",[t._v("Vegtrug")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/moisture/luminance/fertility")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Flora")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("HHCCJCY01HHCC")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/moisture/luminance/fertility/battery(1)(c)")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Ropot")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("HHCCPOT002")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/moisture/fertility")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Jia")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSDCGO")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Jia")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSD02")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Jia 2 (1)(c)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSD03MMC")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery/volt")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Jia 2 custom firmware (2)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSD03MMC ATC")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery/volt")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Jia 2 custom firmware (3)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("LYWSD03MMC PVVX")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery/volt")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Lamp")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("MUE4094RT")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("presence")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Smart Scale (1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("XMTZC01HM/XMTZC04HM")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("weighing mode/unit/weight")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Body Composition Scale (1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("XMTZC02HM/XMTZC05HM")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("weighing mode/unit/weight/impedance")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Temp/Humidity v1 (1)(c)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("MHO-C401")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery/volt")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI Mi Temp/Humidity v2 (1)(c)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("XMWSDJ04MMC")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("temperature/humidity/battery/volt")])]),t._v(" "),r("tr",[r("td",[t._v("XIAOMI")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("Mi band(1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("steps, heart rate")])])])]),t._v(" "),r("p",[t._v("Exhaustive list "),r("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/devices/ble-devices/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("ul",[r("li",[t._v("(1) Not supported with HM10.")]),t._v(" "),r("li",[t._v("(2) See https://github.com/atc1441/ATC_MiThermometer")]),t._v(" "),r("li",[t._v("(3) See https://github.com/pvvx/ATC_MiThermometer")])])]),t._v(" "),r("p",[r("img",{attrs:{src:a(415),alt:"devices",title:":size=250%"}})]),t._v(" "),r("h2",{attrs:{id:"for-infrared-ir-devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-infrared-ir-devices"}},[t._v("#")]),t._v(" For infrared IR devices")]),t._v(" "),r("p",[t._v("The list of supported devices for ESP is "),r("a",{attrs:{href:"https://github.com/crankyoldgit/IRremoteESP8266/blob/master/SupportedProtocols.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(", and "),r("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/6f73160d1421bebf2c1bbc9b8017978ff5b16520/main/config_IR.h#L123",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(" for Arduino boards, as there is also the possibility of using raw and global cache (ESP) sending possibilities of this gateway is huge!")]),t._v(" "),r("h2",{attrs:{id:"lora"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lora"}},[t._v("#")]),t._v(" LORA")]),t._v(" "),r("p",[t._v("LORA is more dedicated at this moment for tinkering and DIY and there is no Off the shelves devices compatible to my knowledge with this gateway.")])])}),[],!1,null,null,null);e.default=i.exports}}]);