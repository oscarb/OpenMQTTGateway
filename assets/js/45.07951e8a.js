(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{487:function(e,t,a){"use strict";a.r(t);var n=a(45),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rfm69-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rfm69-gateway"}},[e._v("#")]),e._v(" RFM69 gateway")]),e._v(" "),a("p",[e._v("The RFM69 gateway enables to send and receive signal from/to another RFM69 module. It is based on the work of @bbx10 https://github.com/bbx10/nanohab")]),e._v(" "),a("h3",{attrs:{id:"receiving-data-from-rfm-signal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receiving-data-from-rfm-signal"}},[e._v("#")]),e._v(" Receiving data from RFM signal")]),e._v(" "),a("p",[e._v("Subscribe to all the messages with mosquitto or open your MQTT client software:")]),e._v(" "),a("p",[a("code",[e._v("sudo mosquitto_sub -t +/# -v")])]),e._v(" "),a("p",[e._v("Generate your RF signals with a Moteino on other RFM69 based devices, you will receive :")]),e._v(" "),a("p",[a("code",[e._v("home/OpenMQTTGateway/RFM69toMQTT 60,-98,0")])]),e._v(" "),a("p",[e._v('In this case "60,-98,0" is the signal sent by another RFM69 + a wemos D1 with the sample sketch '),a("a",{attrs:{href:"https://github.com/1technophile/rfm69send/blob/master/rfm69send.ino",target:"_blank",rel:"noopener noreferrer"}},[e._v("rfm69send"),a("OutboundLink")],1),e._v(" loaded in it.")]),e._v(" "),a("h3",{attrs:{id:"send-data-by-mqtt-to-convert-it-on-rfm69-signal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-to-convert-it-on-rfm69-signal"}},[e._v("#")]),e._v(" Send data by MQTT to convert it on RFM69 signal")]),e._v(" "),a("p",[a("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoPilight" -m \'{"data":"test"}\'')])]),e._v(" "),a("p",[e._v("This command will send by RFM69 the string "),a("em",[e._v("test")]),e._v(" to the default receiver id 99")]),e._v(" "),a("h3",{attrs:{id:"send-data-by-mqtt-with-advanced-rfm69-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-data-by-mqtt-with-advanced-rfm69-parameters"}},[e._v("#")]),e._v(" Send data by MQTT with advanced RFM69 parameters")]),e._v(" "),a("p",[e._v("RFM69 sending support one advanced parameters the target receiver ID.")]),e._v(" "),a("p",[e._v("Example:\nSimplePublishing\n"),a("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoRFM69/RCV_34 -m 33151562")]),e._v("\nwill make the gateway send to the receiver ID 34 (node number) instead of 99")]),e._v(" "),a("p",[e._v("JsonPublishing\n"),a("code",[e._v('mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoRFM69 -m \'{"data":1315156,"receiverid":34}\'')]),e._v("\nThis command will send by RFM69 the string "),a("em",[e._v("test")]),e._v(" to the receiver id 34 instead of 99")]),e._v(" "),a("h3",{attrs:{id:"rfm69-acknowledgment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rfm69-acknowledgment"}},[e._v("#")]),e._v(" RFM69 acknowledgment")]),e._v(" "),a("p",[e._v("Unlike RF or IR RFM69 as a complete acknowledgment mechanism. When a signal is sent the RFM69 can acknowledge the fact that the recipient received the message.\nIn this case the gateway will publish the sent message to the topic defined by subjectGTWRFM69toMQTT macro.")])])}),[],!1,null,null,null);t.default=s.exports}}]);