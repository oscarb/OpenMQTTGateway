(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{377:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_serial1.b8169d69.jpg"},378:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_serial2.9629e5a0.jpg"},379:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_Pilight_Digoo-DG-R8S.8a0f9d60.png"},427:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"rf-gateways-433mhz-315mhz"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rf-gateways-433mhz-315mhz"}},[e._v("#")]),e._v(" RF gateways  (433mhz/315mhz)")]),e._v(" "),t("h2",{attrs:{id:"changing-active-receiver-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changing-active-receiver-modules"}},[e._v("#")]),e._v(" Changing Active Receiver Modules")]),e._v(" "),t("p",[e._v("With version 0.9.7 the ability to switch active signal receiver and decoder is supported between RF, RF2, RTL_433 and Pilight receiver modules.")]),e._v(" "),t("h3",{attrs:{id:"switching-active-receiver-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switching-active-receiver-module"}},[e._v("#")]),e._v(" Switching Active Receiver Module")]),e._v(" "),t("p",[e._v("Switching of the active receiver module is available between the RF, RF2, RTL_433 and Pilight Gateway modules, allowing for changing of signal decoders without redeploying the openMQTTGateway package.  Sending a JSON message to the command topic of the desired receiver will change the active receiver module.")]),e._v(" "),t("p",[e._v("To enable the RF Gateway module send a json message to the RF Gateway module command subject with the key being 'active', and any value.  The value at this time is ignored.")]),e._v(" "),t("p",[e._v("Example:\n"),t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTto433" -m \'{"active":true}\'')])]),e._v(" "),t("p",[e._v("To enable the PiLight Gateway module send a json message to the PiLight Gateway module command subject with the key being 'active', and any value.  The value at this time is ignored.")]),e._v(" "),t("p",[e._v("Example:\n"),t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"active":true}\'')])]),e._v(" "),t("p",[e._v("To enable the RF2 Gateway module send a json message to the RF2 Gateway module command subject with the key being 'active', and any value.  The value at this time is ignored.")]),e._v(" "),t("p",[e._v("Example:\n"),t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoRF2" -m \'{"active":true}\'')])]),e._v(" "),t("p",[e._v("To enable the RTL_433 Gateway module send a json message to the RTL_433 Gateway module command subject with the key being 'active', and any value.  The value at this time is ignored.")]),e._v(" "),t("p",[e._v("Example:\n"),t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoRTL_433" -m \'{"active":true}\'')])]),e._v(" "),t("h3",{attrs:{id:"status-messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status-messages"}},[e._v("#")]),e._v(" Status Messages")]),e._v(" "),t("p",[e._v("The openMQTTGateway status message contains a key "),t("code",[e._v("actRec")]),e._v(" which is the current active receiver module.")]),e._v(" "),t("p",[e._v("1 - PiLight\n2 - RF\n3 - RTL_433\n4 - RF2")]),e._v(" "),t("h2",{attrs:{id:"rcswitch-based-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rcswitch-based-gateway"}},[e._v("#")]),e._v(" RCSwitch based gateway")]),e._v(" "),t("h3",{attrs:{id:"receiving-data-from-rf-signal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-rf-signal"}},[e._v("#")]),e._v(" Receiving data from RF signal")]),e._v(" "),t("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),t("p",[t("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),t("p",[e._v("Generate your RF signals by pressing a remote button or other and you should see :")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/433toMQTT {"value":1315156,"protocol":1,"length":24,"delay":317}')])]),e._v(" "),t("h3",{attrs:{id:"disabling-transmit-function-to-safe-a-pin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disabling-transmit-function-to-safe-a-pin"}},[e._v("#")]),e._v(" Disabling Transmit function to safe a PIN")]),e._v(" "),t("p",[e._v("To disable transmit functions to allow the use of another pin, add the following to the config_rf.h file :")]),e._v(" "),t("p",[t("code",[e._v("#define RF_DISABLE_TRANSMIT")])]),e._v(" "),t("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-rf-signal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-rf-signal"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on RF signal")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTto433" -m \'{"value":1315156}\'')])]),e._v(" "),t("p",[e._v("This command will send by RF the code 1315156 and use the default parameters (protocol 1, delay 350)")]),e._v(" "),t("p",[e._v("Arduino IDE serial data received when publishing data by MQTT")]),e._v(" "),t("p",[t("img",{attrs:{src:a(377),alt:""}})]),e._v(" "),t("p",[e._v('We see that the Arduino receive the value 1315156 on the MQTT subject "MQTTto433" and send the data by RF')]),e._v(" "),t("p",[e._v("Arduino IDE serial data received when receiving data by 433Mhz")]),e._v(" "),t("p",[t("img",{attrs:{src:a(378),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"send-data-by-mqtt-with-advanced-rf-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-with-advanced-rf-parameters"}},[e._v("#")]),e._v(" Send data by MQTT with advanced RF parameters")]),e._v(" "),t("p",[e._v("RF sending support three advanced parameters: bits length, RF protocol and RF pulselength")]),e._v(" "),t("p",[e._v('-if you want to use a bits number different than 24 put inside your topic "length":24 for example')]),e._v(" "),t("p",[e._v('-if you want to use a different RCswitch protocol put inside your payload the protocol number 2, "protocol":2.')]),e._v(" "),t("p",[e._v('-if you want to use a pulselength 315 put inside your topic "delay":315')]),e._v(" "),t("p",[e._v("Example:\n"),t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTto433" -m \'{"value":1315156,"protocol":2,"length":24,"delay":315}\'')]),e._v("\nwill make RCSwitch use the protocol 2 with a pulselength of 315ms and a bits number of 24 with a power of 5")]),e._v(" "),t("h3",{attrs:{id:"repeat-the-rf-signal-openmqttgateway-receive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repeat-the-rf-signal-openmqttgateway-receive"}},[e._v("#")]),e._v(" Repeat the RF signal OpenMQTTGateway receive")]),e._v(" "),t("p",[e._v("So as to repeat the RF signal received by the gateway once set the following parameter to true in config_RF.h")]),e._v(" "),t("p",[t("code",[e._v("#define repeatRFwMQTT true")])]),e._v(" "),t("h3",{attrs:{id:"repeat-the-rf-signal-several-times"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repeat-the-rf-signal-several-times"}},[e._v("#")]),e._v(" Repeat the RF signal several times")]),e._v(" "),t("p",[e._v('You can add a "repeat" key/value to the MQTTto433 JSON message to override the default number of repeats.')]),e._v(" "),t("p",[e._v("Example:\n"),t("code",[e._v('home/OpenMQTTGateway/commands/MQTTto433 {"value":1315156,"protocol":1,"length":24,"delay":317, "repeat":10}')])]),e._v(" "),t("h3",{attrs:{id:"set-transmit-and-receive-frequency-and-transmit-power-of-cc1101-transceiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-transmit-and-receive-frequency-and-transmit-power-of-cc1101-transceiver"}},[e._v("#")]),e._v(" Set Transmit and Receive Frequency and Transmit Power of CC1101 Transceiver")]),e._v(" "),t("p",[e._v("Default transmit frequency of the CC1101 module is 433.92 Mhz, and this can be can changed by including the frequency in the transmit message.  Parameter is "),t("code",[e._v("mhz")]),e._v(" and valid values are 300-348 Mhz, 387-464Mhz and 779-928Mhz.  Actual frequency support will depend on your CC1101 board.")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/commands/MQTTto433 {"value":1150,"protocol":6,"length":12,"delay":450,"repeat":8,"mhz":303.732}')])]),e._v(" "),t("p",[e._v("Default receive frequency of the CC1101 module is 433.92 Mhz, and this can be can changed by sending a message with the frequency.  Parameter is "),t("code",[e._v("mhz")]),e._v(" and valid values are 300-348 Mhz, 387-464Mhz and 779-928Mhz.  Actual frequency support will depend on your CC1101 board")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/commands/MQTTto433 {"mhz":315.026}')])]),e._v(" "),t("p",[e._v("Messages received will include the frequency, and when transmitting on a different frequency the module return to the receive frequency afterwards.  ie transmit messages on 303.732 Mhz then receive messages on 433.92 Mhz")]),e._v(" "),t("p",[t("code",[e._v('{"value":4534142,"protocol":6,"length":26,"delay":356,"mhz":315.026}')])]),e._v(" "),t("p",[e._v("You can adjust the tx-power in db for a transmission. Parameter is "),t("code",[e._v("cc1101_pa")]),e._v(" and valid values in decibel are (-30  -20  -15  -10  -6    0    5    7    10   11   12) Default is max!\nThat can be done to reduce range and therefore disturbances with other nearby devices.\nIf you want to send a transmission with a power of 5 db than use the message")]),e._v(" "),t("p",[t("code",[e._v('{"value":1315156,"protocol":2,"length":24,"delay":315, "cc1101_pa":5}')])]),e._v(" "),t("h2",{attrs:{id:"pilight-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pilight-gateway"}},[e._v("#")]),e._v(" Pilight gateway")]),e._v(" "),t("h3",{attrs:{id:"receiving-data-from-rf-signal-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-rf-signal-2"}},[e._v("#")]),e._v(" Receiving data from RF signal")]),e._v(" "),t("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),t("p",[t("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),t("p",[e._v("Generate your RF signals by pressing a remote button or other and you will see :")]),e._v(" "),t("p",[t("img",{attrs:{src:a(379),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"limit-protocols"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-protocols"}},[e._v("#")]),e._v(" Limit Protocols")]),e._v(" "),t("p",[e._v("It is possible to limit the protocols that Pilight will respond to, this can help reduce noise from unwanted devices and in some cases disable conflicting protocols.")]),e._v(" "),t("h4",{attrs:{id:"available-protocols"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#available-protocols"}},[e._v("#")]),e._v(" Available protocols")]),e._v(" "),t("p",[e._v("To list the available protocols on the Serial -")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight/protocols" -m \'{"available":true}\'')])]),e._v(" "),t("h4",{attrs:{id:"limit-protocols-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-protocols-2"}},[e._v("#")]),e._v(" Limit protocols")]),e._v(" "),t("p",[e._v("To limit the protocols, send a JSON array of protocols as below -")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight/protocols -m \'{"limit": ["array", "of", "protocols"]}\'')])]),e._v(" "),t("p",[e._v("eg: "),t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight/protocols" -m \'{"limit":["tfa", "ev1527"}\'')])]),e._v(" "),t("h4",{attrs:{id:"reset-protocols"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reset-protocols"}},[e._v("#")]),e._v(" Reset protocols")]),e._v(" "),t("p",[e._v("To reset and listen to all protocols -\n"),t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight/protocols -m \'{"reset": true}')]),e._v("'")]),e._v(" "),t("h4",{attrs:{id:"enabled-protocols"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabled-protocols"}},[e._v("#")]),e._v(" Enabled protocols")]),e._v(" "),t("p",[e._v("To list the enabled protocols on the Serial -")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight/protocols" -m \'{"enabled":true}\'')])]),e._v(" "),t("h3",{attrs:{id:"send-data-by-mqtt-to-transmit-a-rf-signal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-transmit-a-rf-signal"}},[e._v("#")]),e._v(" Send data by MQTT to transmit a RF signal")]),e._v(" "),t("h4",{attrs:{id:"using-a-known-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-a-known-protocol"}},[e._v("#")]),e._v(" Using a known protocol")]),e._v(" "),t("p",[t("strong",[e._v("ON")]),e._v(" "),t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"message":"{\\"systemcode\\":12,\\"unitcode\\":22,\\"on\\":1}","protocol":"elro_400_switch"}\'')])]),e._v(" "),t("p",[t("strong",[e._v("OFF")]),e._v(" "),t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"message":"{\\"systemcode\\":12,\\"unitcode\\":22,\\"off\\":1}","protocol":"elro_400_switch"}\'')])]),e._v(" "),t("p",[e._v("These commands will transmit by RF the signals to actuate an elro_400 switch.")]),e._v(" "),t("h4",{attrs:{id:"using-a-raw-signal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-a-raw-signal"}},[e._v("#")]),e._v(" Using a raw signal")]),e._v(" "),t("p",[e._v('You can transmit raw signal data by using the "raw" protocol. This uses the Pilight pulse train string format. One such example string, representing a transmission for Nexus protocol weather stations, looks like this: '),t("code",[e._v("c:03020202010102020102010101010101010202020201020102020202020101010201010202;p:500,1000,2000,4000;r:12@")]),e._v(". This string represents pulses and gaps directly.")]),e._v(" "),t("p",[e._v("Each number in the list after "),t("code",[e._v("p:")]),e._v(" that ends with "),t("code",[e._v(";")]),e._v(" stands for "),t("strong",[e._v("p")]),e._v("ulse and gap lengths in microseconds (µs). In this example, we have a list containing lengths of 500µs, 1000µs, 2000µs, and 4000µs.")]),e._v(" "),t("p",[e._v("Each number after "),t("code",[e._v("c:")]),e._v(" and ended by "),t("code",[e._v(";")]),e._v(" represents a "),t("strong",[e._v("c")]),e._v("ode that references the "),t("code",[e._v("p:")]),e._v(" list by index. In this example, the first 4 numbers after "),t("code",[e._v("c:")]),e._v(" are 0, 3, 0, and 2, which reference "),t("code",[e._v("p:")]),e._v("[0] = 500, "),t("code",[e._v("p:")]),e._v("[3] = 4000, "),t("code",[e._v("p:")]),e._v("[0] = 500, and "),t("code",[e._v("p:")]),e._v("[2] = 2000, respectively. In the language of digital radio transceiving, the most basic unit is usually a pulse and gap pair; in other words, 0s and 1s are represented by a pulse followed by a gap (lack of pulse) and the time lengths of these pulses and gaps. Different protocols have different pulse lengths and gap lengths representing 0, and a different one representing 1. Because of this pulse-gap nature, the codes in "),t("code",[e._v("c:")]),e._v(" must be taken as pairs; the first number in a pair represents the length of the pulse, and the second number the subsequent gap. In this example, the first pair, 03, represents a pulse of 500µs followed by a gap of 4000µs. The next pair, 02, represents a pulse of 500µs followed by a gap of 2000µs.")]),e._v(" "),t("p",[e._v("The number after "),t("code",[e._v("r:")]),e._v(" represents how many times the message in the string is to be "),t("strong",[e._v("r")]),e._v("epeated. The "),t("code",[e._v("r:")]),e._v(" block is optional. The default number of repeats if "),t("code",[e._v("r:")]),e._v(" is not specified is 10. Greater than about 100 repeats will cause a crash due to memory usage. If this example were written without specifying repeats, it would look like this: "),t("code",[e._v('{"raw":"c:03020202010102020102010101010101010202020201020102020202020101010201010202;p:500,1000,2000,4000@"}')])]),e._v(" "),t("p",[e._v("The entire string must end in a "),t("code",[e._v("@")]),e._v(". Each block must end in a "),t("code",[e._v(";")]),e._v(", but if it is the last block in the string, the "),t("code",[e._v("@")]),e._v(" replaces the "),t("code",[e._v(";")]),e._v(". Since the "),t("code",[e._v("r:")]),e._v(" block is optional, this last block could be either "),t("code",[e._v("p:")]),e._v(" or "),t("code",[e._v("r:")]),e._v(".")]),e._v(" "),t("p",[e._v("The JSON for the MQTT message to "),t("code",[e._v("home/OpenMQTTGateway/commands/MQTTtoPilight")]),e._v(' should specify the pulse train string as the value for the "raw" key: '),t("code",[e._v('{"raw":"c:03020202010102020102010101010101010202020201020102020202020101010201010202;p:500,1000,2000,4000;r:12@"}')]),e._v(".")]),e._v(" "),t("p",[e._v("e.g. "),t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"raw":"c:03020202010102020102010101010101010202020201020102020202020101010201010202;p:500,1000,2000,4000;r:12@"}\'')])]),e._v(" "),t("h2",{attrs:{id:"rf-with-sonoff-rf-bridge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rf-with-sonoff-rf-bridge"}},[e._v("#")]),e._v(" RF with SONOFF RF BRIDGE")]),e._v(" "),t("h3",{attrs:{id:"receiving-data-from-rf-signal-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-rf-signal-3"}},[e._v("#")]),e._v(" Receiving data from RF signal")]),e._v(" "),t("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),t("p",[t("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),t("p",[e._v("Generate your RF signals by pressing a remote button or other and you will see:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('home/OpenMQTTGateway/SRFBtoMQTT {"raw":"2B660186042E00E7E5","value":"59365","delay":"1111","val_Thigh":"390","val_Tlow":"1070"}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The first parameter is the raw value extracted from the RF module of the Sonoff bridge. The data are in hexadecimal and correspond to the details below:\nhttps://www.itead.cc/wiki/images/5/5e/RF_Universal_Transeceive_Module_Serial_Protocol_v1.0.pdf\nOpenMQTTGateway process the raw value to extract the other decimal values that can be reused to reproduce a signal (raw value can also be reused).")]),e._v(" "),t("p",[e._v("NOTE: currently the device doesn't receive correct values from Switches remote control")]),e._v(" "),t("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-rf-signal-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-rf-signal-2"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on RF signal")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSRFB" -m \'{"value":1315156}\'')])]),e._v(" "),t("p",[e._v("This command will send by RF the code 1315156 and use the default parameters:\nRepeat = 1\nLow time= 320\nHigh time= 900\nSYNC = 9500")]),e._v(" "),t("h3",{attrs:{id:"send-data-by-mqtt-with-advanced-rf-parameters-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-with-advanced-rf-parameters-2"}},[e._v("#")]),e._v(" Send data by MQTT with advanced RF parameters")]),e._v(" "),t("p",[e._v('RF bridge sending support four advanced parameters; Repeat, Low time, High time & Sync\nif you want to repeat your signal sending put into your json payload "repeat":2, 2 means 2 repetitions of signal')]),e._v(" "),t("p",[e._v('if you want to use a low time of 315 put inside your json payload "Tlow":315')]),e._v(" "),t("p",[e._v('if you want to use a high time of 845 put inside your json payload "Thigh":845')]),e._v(" "),t("p",[e._v('if you want to use a sync time of 9123 put inside your json payload "Tsyn":9123')]),e._v(" "),t("p",[e._v("Example:\n"),t("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSRFB/Tlow_315/Thigh_845/Tsyn_9123 -m \'{"value":"33151562","delay":"9123","val_Thigh":"845","val_Tlow":"315"}\'')]),e._v("\nwill make RF Bridge send a signal with the use of listed parameters 315, 845, 9123...")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoSRFB/Raw -m \'{"raw":"267A013603B6140551"}\'')]),e._v("\nwill make RF Bridge send a signal with the use of advanced parameters defined in the raw string")]),e._v(" "),t("h2",{attrs:{id:"rf2-gateway-kaku"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rf2-gateway-kaku"}},[e._v("#")]),e._v(" RF2 gateway KAKU")]),e._v(" "),t("p",[e._v("RF2 gateway enables to send command to RF devices with the KAKU protocol. DIO chacon devices are an example.\nIt uses the same pinout as the RF gateway and both gateways can be used on the same setup.")]),e._v(" "),t("p",[e._v("Receiving RF codes with the KAKU protocol is not compatible with ZgatewayRF , so as to get the code of your remotes you should comment ZgatewayRF in User_config.h.\nTransmitting can be done with both ZgatewayRF and ZgatewayRF2")]),e._v(" "),t("h3",{attrs:{id:"receiving-data-from-kaku-signal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-kaku-signal"}},[e._v("#")]),e._v(" Receiving data from KAKU signal")]),e._v(" "),t("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),t("p",[t("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),t("p",[e._v("Generate your RF signals by pressing a remote button or other and you will see :")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/RF2toMQTT {"unit":0,"groupBit":0,"period":273,"address":8233228,"switchType":0}')])]),e._v(" "),t("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-kaku-signal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-kaku-signal"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on KAKU signal")]),e._v(" "),t("p",[e._v("Once you get the infos publish the parameters with MQTT like that for off:")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoRF2 -m "{"unit":0,"groupBit":0,"period":273,"address":8233228,"switchType":0}"')])]),e._v(" "),t("p",[e._v("for on:")]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoRF2 -m "{"unit":0,"groupBit":0,"period":273,"address":8233228,"switchType":1}"')])]),e._v(" "),t("h2",{attrs:{id:"rtl-433-device-decoders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rtl-433-device-decoders"}},[e._v("#")]),e._v(" rtl_433 device decoders")]),e._v(" "),t("p",[e._v("This feature is only available on a ESP32 based device with a supported transceiver connected due to the resource requirements of the rtl_433 device decoders.  At the present time only Pulse Position Modulation (OOK_PPM) and Pulse Width Modulation (OOK_PWM) based decoders are available.")]),e._v(" "),t("h3",{attrs:{id:"supported-hardware-combinations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware-combinations"}},[e._v("#")]),e._v(" Supported hardware combinations")]),e._v(" "),t("ul",[t("li",[e._v("ESP32 based device with a CC1101 transceiver")]),e._v(" "),t("li",[e._v("Heltec WiFi LoRa 32 (V2.1) and LilyGo Lora 32 V2.1")])]),e._v(" "),t("h3",{attrs:{id:"supported-decoders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-decoders"}},[e._v("#")]),e._v(" Supported Decoders")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Registering protocol [2] "Acurite 609TXC Temperature and Humidity Sensor"\nRegistering protocol [3] "Acurite 592TXR Temp/Humidity, 5n1 Weather Station, 6045 Lightning, 3N1, Atlas"\nRegistering protocol [4] "Acurite 986 Refrigerator / Freezer Thermometer"\nRegistering protocol [5] "Acurite 606TX Temperature Sensor"\nRegistering protocol [6] "Acurite 00275rm,00276rm Temp/Humidity with optional probe"\nRegistering protocol [7] "Acurite 590TX Temperature with optional Humidity"\nRegistering protocol [8] "Acurite Grill/Meat Thermometer 01185M"\nRegistering protocol [9] "Akhan 100F14 remote keyless entry"\nRegistering protocol [10] "AlectoV1 Weather Sensor (Alecto WS3500 WS4500 Ventus W155/W044 Oregon)"\nRegistering protocol [11] "Ambient Weather TX-8300 Temperature/Humidity Sensor"\nRegistering protocol [13] "Auriol AFT 77 B2 temperature sensor"\nRegistering protocol [14] "Auriol AFW2A1 temperature/humidity sensor"\nRegistering protocol [15] "Auriol AHFL temperature/humidity sensor"\nRegistering protocol [16] "Auriol HG02832, HG05124A-DCF, Rubicson 48957 temperature/humidity sensor"\nRegistering protocol [18] "Blyss DC5-UK-WH"\nRegistering protocol [20] "Bresser Thermo-/Hygro-Sensor 3CH"\nRegistering protocol [22] "Burnhard BBQ thermometer"\nRegistering protocol [23] "Calibeur RF-104 Sensor"\nRegistering protocol [24] "Cardin S466-TX2"\nRegistering protocol [25] "Chuango Security Technology"\nRegistering protocol [26] "Companion WTR001 Temperature Sensor"\nRegistering protocol [29] "Ecowitt Wireless Outdoor Thermometer WH53/WH0280/WH0281A"\nRegistering protocol [30] "Eurochron EFTH-800 temperature and humidity sensor"\nRegistering protocol [34] "Esperanza EWS"\nRegistering protocol [36] "Fine Offset Electronics, WH2, WH5, Telldus Temperature/Humidity/Rain Sensor"\nRegistering protocol [37] "Fine Offset Electronics, WH0530 Temperature/Rain Sensor"\nRegistering protocol [38] "Fine Offset WH1050 Weather Station"\nRegistering protocol [39] "Fine Offset Electronics WH1080/WH3080 Weather Station"\nRegistering protocol [41] "FT-004-B Temperature Sensor"\nRegistering protocol [42] "Generic wireless motion sensor"\nRegistering protocol [43] "Generic Remote SC226x EV1527"\nRegistering protocol [44] "Generic temperature sensor 1"\nRegistering protocol [45] "Govee Water Leak Dectector H5054, Door Contact Sensor B5023"\nRegistering protocol [46] "Globaltronics QUIGG GT-TMBBQ-05"\nRegistering protocol [47] "Globaltronics GT-WT-02 Sensor"\nRegistering protocol [48] "Globaltronics GT-WT-03 Sensor"\nRegistering protocol [49] "Microchip HCS200 KeeLoq Hopping Encoder based remotes"\nRegistering protocol [50] "Honeywell ActivLink, Wireless Doorbell"\nRegistering protocol [51] "HT680 Remote control"\nRegistering protocol [52] "inFactory, nor-tec, FreeTec NC-3982-913 temperature humidity sensor"\nRegistering protocol [54] "Interlogix GE UTC Security Devices"\nRegistering protocol [56] "Kedsum Temperature & Humidity Sensor, Pearl NC-7415"\nRegistering protocol [57] "Kerui PIR / Contact Sensor"\nRegistering protocol [58] "LaCrosse TX Temperature / Humidity Sensor"\nRegistering protocol [59] "LaCrosse TX141-Bv2, TX141TH-Bv2, TX141-Bv3, TX141W, TX145wsdth sensor"\nRegistering protocol [60] "LaCrosse/ELV/Conrad WS7000/WS2500 weather sensors"\nRegistering protocol [61] "LaCrosse WS-2310 / WS-3600 Weather Station"\nRegistering protocol [63] "Markisol, E-Motion, BOFU, Rollerhouse, BF-30x, BF-415 curtain remote"\nRegistering protocol [64] "Maverick et73"\nRegistering protocol [66] "Missil ML0757 weather station"\nRegistering protocol [68] "Nexus, FreeTec NC-7345, NX-3980, Solight TE82S, TFA 30.3209 temperature/humidity sensor"\nRegistering protocol [70] "Opus/Imagintronix XT300 Soil Moisture"\nRegistering protocol [71] "Oregon Scientific SL109H Remote Thermal Hygro Sensor"\nRegistering protocol [73] "Philips outdoor temperature sensor (type AJ3650)"\nRegistering protocol [74] "Philips outdoor temperature sensor (type AJ7010)"\nRegistering protocol [75] "Prologue, FreeTec NC-7104, NC-7159-675 temperature sensor"\nRegistering protocol [76] "Quhwa"\nRegistering protocol [78] "Rubicson Temperature Sensor"\nRegistering protocol [79] "Rubicson 48659 Thermometer"\nRegistering protocol [80] "Conrad S3318P, FreeTec NC-5849-913 temperature humidity sensor"\nRegistering protocol [81] "Silvercrest Remote Control"\nRegistering protocol [82] "Skylink HA-434TL motion sensor"\nRegistering protocol [83] "Wireless Smoke and Heat Detector GS 558"\nRegistering protocol [84] "Solight TE44/TE66, EMOS E0107T, NX-6876-917"\nRegistering protocol [85] "Springfield Temperature and Soil Moisture"\nRegistering protocol [86] "TFA Dostmann 30.3221.02 T/H Outdoor Sensor"\nRegistering protocol [87] "TFA Drop Rain Gauge 30.3233.01"\nRegistering protocol [88] "TFA pool temperature sensor"\nRegistering protocol [89] "TFA-Twin-Plus-30.3049, Conrad KW9010, Ea2 BL999"\nRegistering protocol [90] "Thermopro TP11 Thermometer"\nRegistering protocol [91] "Thermopro TP08/TP12/TP20 thermometer"\nRegistering protocol [93] "TS-FT002 Wireless Ultrasonic Tank Liquid Level Meter With Temperature Sensor"\nRegistering protocol [94] "Visonic powercode"\nRegistering protocol [95] "Waveman Switch Transmitter"\nRegistering protocol [96] "WG-PB12V1 Temperature Sensor"\nRegistering protocol [97] "WS2032 weather station"\nRegistering protocol [98] "Hyundai WS SENZOR Remote Temperature Sensor"\nRegistering protocol [99] "WT0124 Pool Thermometer"\nRegistering protocol [100] "X10 RF"\nRegistering protocol [101] "X10 Security"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br"),t("span",{staticClass:"line-number"},[e._v("45")]),t("br"),t("span",{staticClass:"line-number"},[e._v("46")]),t("br"),t("span",{staticClass:"line-number"},[e._v("47")]),t("br"),t("span",{staticClass:"line-number"},[e._v("48")]),t("br"),t("span",{staticClass:"line-number"},[e._v("49")]),t("br"),t("span",{staticClass:"line-number"},[e._v("50")]),t("br"),t("span",{staticClass:"line-number"},[e._v("51")]),t("br"),t("span",{staticClass:"line-number"},[e._v("52")]),t("br"),t("span",{staticClass:"line-number"},[e._v("53")]),t("br"),t("span",{staticClass:"line-number"},[e._v("54")]),t("br"),t("span",{staticClass:"line-number"},[e._v("55")]),t("br"),t("span",{staticClass:"line-number"},[e._v("56")]),t("br"),t("span",{staticClass:"line-number"},[e._v("57")]),t("br"),t("span",{staticClass:"line-number"},[e._v("58")]),t("br"),t("span",{staticClass:"line-number"},[e._v("59")]),t("br"),t("span",{staticClass:"line-number"},[e._v("60")]),t("br"),t("span",{staticClass:"line-number"},[e._v("61")]),t("br"),t("span",{staticClass:"line-number"},[e._v("62")]),t("br"),t("span",{staticClass:"line-number"},[e._v("63")]),t("br"),t("span",{staticClass:"line-number"},[e._v("64")]),t("br"),t("span",{staticClass:"line-number"},[e._v("65")]),t("br"),t("span",{staticClass:"line-number"},[e._v("66")]),t("br"),t("span",{staticClass:"line-number"},[e._v("67")]),t("br"),t("span",{staticClass:"line-number"},[e._v("68")]),t("br"),t("span",{staticClass:"line-number"},[e._v("69")]),t("br"),t("span",{staticClass:"line-number"},[e._v("70")]),t("br"),t("span",{staticClass:"line-number"},[e._v("71")]),t("br"),t("span",{staticClass:"line-number"},[e._v("72")]),t("br"),t("span",{staticClass:"line-number"},[e._v("73")]),t("br"),t("span",{staticClass:"line-number"},[e._v("74")]),t("br"),t("span",{staticClass:"line-number"},[e._v("75")]),t("br"),t("span",{staticClass:"line-number"},[e._v("76")]),t("br"),t("span",{staticClass:"line-number"},[e._v("77")]),t("br"),t("span",{staticClass:"line-number"},[e._v("78")]),t("br"),t("span",{staticClass:"line-number"},[e._v("79")]),t("br"),t("span",{staticClass:"line-number"},[e._v("80")]),t("br")])]),t("h3",{attrs:{id:"change-receive-frequency"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-receive-frequency"}},[e._v("#")]),e._v(" Change receive frequency")]),e._v(" "),t("p",[e._v("Default receive frequency of the CC1101 module is 433.92 Mhz, and this can be can changed by sending a message with the frequency.  Parameter is "),t("code",[e._v("mhz")]),e._v(" and valid values are 300-348 Mhz, 387-464Mhz and 779-928Mhz.  Actual frequency support will depend on your CC1101 board")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/commands/MQTTtoRTL_433 {"mhz":315.026}')])]),e._v(" "),t("h3",{attrs:{id:"change-signal-rssi-threshold-delta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-signal-rssi-threshold-delta"}},[e._v("#")]),e._v(" Change Signal RSSI Threshold Delta")]),e._v(" "),t("p",[e._v("Delta applied to RSSI floor noise level to determine start and end of signal, defaults to 9db.")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/commands/MQTTtoRTL_433 {"rssi": 9}')])]),e._v(" "),t("h3",{attrs:{id:"retrieve-current-status-of-receiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-current-status-of-receiver"}},[e._v("#")]),e._v(" Retrieve current status of receiver")]),e._v(" "),t("p",[t("code",[e._v('home/OpenMQTTGateway/commands/MQTTtoRTL_433 {"status":1}')])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{"model":"status",\n"protocol":"debug",\n"debug":0,                  - rtl_433 verbose setting\n"duration":11799327,        - duration of current signal\n"Gap length":-943575,       - duration of gap between current signal\n"rssi":-38,                 - most recent received signal strength\n"train":1,                  - signal processing train #\n"messageCount":3,           - total number of signals received\n"totalSignals":9,           - RegOokFix signal quality count ( of 10 )\n"ignoredSignals":0,         - RegOokFix signal quality ignored signals\n"unparsedSignals":3,        - RegOokFix signal quality unparseable signals\n"_enabledReceiver":1,       - which receiver is enabled\n"receiveMode":0,            - is the receiver currently receiving a signal\n"currentRssi":-89,          - current rssi level\n"rssiThreshold":-82,        - minimum rssi level to start signal processing\n"pulses":0,                 - how many pulses have been received in the current signal\n"StackHighWaterMark":5528,  - ESP32 Stack\n"freeMem":112880}           - ESP32 memory available\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);