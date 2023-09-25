(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{371:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_Wifi_Manager_menu.a42869cd.png"},372:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_Wifi_Manager_enter_parameters.b56b5f33.png"},373:function(t,e,a){t.exports=a.p+"assets/img/OpenMQTTGateway_Wifi_Manager_save.15fcfc72.png"},427:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"wifi-and-mqtt-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wifi-and-mqtt-configuration"}},[t._v("#")]),t._v(" WiFi and MQTT configuration")]),t._v(" "),e("h2",{attrs:{id:"wifi-and-mqtt-configuration-portal-for-wifi-boards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wifi-and-mqtt-configuration-portal-for-wifi-boards"}},[t._v("#")]),t._v(" WiFi and MQTT configuration portal for WiFi boards")]),t._v(" "),e("p",[t._v("Once loaded into your ESP, and if you don't use the manual configuration, you have to set your network parameters with WiFi Manager portal.")]),t._v(" "),e("p",[t._v("From your smartphone, search for  OpenMQTTGateway or OMG WiFi network and connect to it with the "),e("code",[t._v("WifiManager_password")]),t._v(" you have defined (the default password is "),e("strong",[t._v('"your_password"')]),t._v("), or if you are using a device sold by Theengs or the macro "),e("code",[t._v("-DWM_PWD_FROM_MAC=true")]),t._v(", the password will be the last eight digits of the device MAC Address with upper case.\nExample, the password would be "),e("code",[t._v("CCDDEEFF")]),t._v(" for a MAC Address "),e("code",[t._v("AABBCCDDEEFF")]),t._v(".\nFor Theengs devices, the MAC Address can be found on the device sticker, and for all the devices, it is printed on the serial monitor logs.")]),t._v(" "),e("p",[t._v('Once connected to the WiFi, a web page should appear. On Android, you may also have a popup asking you if you want to connect to it without an internet connection. Answer yes always/all the time. If the web page doesn\'t appear, click on the WiFi Access Point and "Manage router".')]),t._v(" "),e("p",[e("img",{attrs:{src:a(371),alt:"WiFi manager menu"}})]),t._v(" "),e("ul",[e("li",[t._v("Click on Configure WiFi")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(372),alt:"WiFi manager parameters"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Select your WiFi")])]),t._v(" "),e("li",[e("p",[t._v("Set your WiFi password")])]),t._v(" "),e("li",[e("p",[t._v("Set your MQTT Server IP")])]),t._v(" "),e("li",[e("p",[t._v("Set your MQTT Server Port (default: 1883)")])]),t._v(" "),e("li",[e("p",[t._v("Set the MQTT secure connection box to select whether or not the connection should be secure")])]),t._v(" "),e("li",[e("p",[t._v("Copy/paste the MQTT server certificate in the MQTT server cert box (only required if using a secure connection), be sure to include the "),e("code",[t._v("-----BEGIN CERTIFICATE-----")]),t._v(" and "),e("code",[t._v("-----END CERTIFICATE-----")]),t._v(" markers")])]),t._v(" "),e("li",[e("p",[t._v("Set your MQTT Server username (optional, 64 characters maximum)")])]),t._v(" "),e("li",[e("p",[t._v("Set your MQTT Server password (optional, 64 characters maximum)")])]),t._v(" "),e("li",[e("p",[t._v("Set your MQTT base topic if you need to change it (you must keep the / at the end) (default: home/, 64 characters maximum)")])]),t._v(" "),e("li",[e("p",[t._v("Set your gateway name if you need to change it")])]),t._v(" "),e("li",[e("p",[t._v("Set your Over The Air password "),e("code",[t._v("ota_password")]),t._v(", this password is used for local and remote OTA - it is also the password being used for the WebUI login. (default: OTAPASSWORD,  64 characters maximum)")])]),t._v(" "),e("li",[e("p",[t._v("Click on save")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(373),alt:"WiFi manager save"}})]),t._v(" "),e("p",[t._v("The ESP restart and connect to your network. Note that your credentials are saved into the ESP memory, if you want to redo the configuration you have to erase the ESP memory with the flash download tool.")]),t._v(" "),e("p",[t._v("Once done the gateway should connect to your network and your broker, you should see it into the broker in the form of the following messages:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("home/OpenMQTTGateway/LWT Online \nhome/OpenMQTTGateway/version\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("Note that the web portal appears only on first boot, if you want to configure again the setting you can do a long press on TRIGGER_GPIO or "),e("RouterLink",{attrs:{to:"/use/gateway.html#erase-the-esp-settings"}},[t._v("erase the settings")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"mqtt-and-network-configuration-for-ethernet-and-wifi-boards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-and-network-configuration-for-ethernet-and-wifi-boards"}},[t._v("#")]),t._v(" MQTT and network configuration for Ethernet and WiFi boards")]),t._v(" "),e("p",[t._v("You can configure your MQTT server credentials and network configuration before building the application. It can be done either in Arduino or in Platformio IDE thought the User_config.h file. Note that with Platformio IDE you can also set your credentials into the platformio.ini file or an *_env.ini file, here is an example with the Olimex ESP32 gateway:")]),t._v(" "),e("div",{staticClass:"language-ini line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token section"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("env:esp32-olimex-gtw-ble")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("platform")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("${com.esp32_platform}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("board")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("esp32-gateway")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("board_build.partitions")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("min_spiffs.csv")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("lib_deps")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n  ${com-esp.lib_deps}\n  ${libraries.ble}\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("build_flags")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n  ${com-esp.build_flags}\n  "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("'-DZgatewayBT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('"BT"\'')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("'-DLED_INFO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("33'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("'-DLED_INFO_ON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("'-DESP32_ETHERNET")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("'-DMQTT_SERVER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('"11.22.33.44"\'')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("'-DMQTT_USER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('"salut"\'')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("'-DMQTT_PASS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('"atoi"\'')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("'-DGateway_Name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v('"OpenMQTTGateway_ESP32_OLM_GTW"\'')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);