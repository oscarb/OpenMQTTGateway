(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{482:function(e,t,s){"use strict";s.r(t);var a=s(45),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"system-commands-esp-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system-commands-esp-only"}},[e._v("#")]),e._v(" System commands (ESP only)")]),e._v(" "),s("h2",{attrs:{id:"restart-the-esp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restart-the-esp"}},[e._v("#")]),e._v(" Restart the ESP")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSYS/config" -m \'{"cmd":"restart"}\'')])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("With Home Assistant, this command is directly available through MQTT auto discovery as a switch into the HASS OpenMQTTGateway device entities list.")])]),e._v(" "),s("h2",{attrs:{id:"erase-the-esp-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#erase-the-esp-settings"}},[e._v("#")]),e._v(" Erase the ESP settings")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSYS/config" -m \'{"cmd":"erase"}\'')])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("With Home Assistant, this command is directly available through MQTT auto discovery as a switch into the HASS OpenMQTTGateway device entities list.")])]),e._v(" "),s("h2",{attrs:{id:"retrieve-current-status-of-the-esp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-current-status-of-the-esp"}},[e._v("#")]),e._v(" Retrieve current status of the ESP")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSYS/config" -m \'{"cmd":"status"}\'')])]),e._v(" "),s("h2",{attrs:{id:"auto-discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-discovery"}},[e._v("#")]),e._v(" Auto discovery")]),e._v(" "),s("p",[e._v("You can deactivate the MQTT auto discovery function, this function enables to automatically create devices/entities with Home Assistant convention.")]),e._v(" "),s("h3",{attrs:{id:"deactivate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deactivate"}},[e._v("#")]),e._v(" Deactivate")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSYS/config" -m \'{"discovery":false}\'')])]),e._v(" "),s("h3",{attrs:{id:"activate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activate"}},[e._v("#")]),e._v(" Activate")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSYS/config" -m \'{"discovery":true}\'')])]),e._v(" "),s("p",[e._v("If you want the settings to be kept upon gateway restart, you can publish the command with the retain flag.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Auto discovery is enable by default on release binaries, on platformio (except for UNO). With Arduino IDE please read the "),s("a",{attrs:{href:"../upload/advanced-configuration#auto-discovery"}},[e._v("advanced configuration section")]),e._v(" of the documentation.")])]),e._v(" "),s("h2",{attrs:{id:"change-the-wifi-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-the-wifi-credentials"}},[e._v("#")]),e._v(" Change the WiFi credentials")]),e._v(" "),s("p",[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSYS/config" -m \'{"wifi_ssid":"ssid", "wifi_pass":"password"}\'')])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("If the new connection fails the gateway will fallback to the previous connection.")])]),e._v(" "),s("h2",{attrs:{id:"change-the-mqtt-broker-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-the-mqtt-broker-credentials"}},[e._v("#")]),e._v(" Change the MQTT broker credentials")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSYS/config" -m\n\'{\n  "mqtt_user": "user_name",\n  "mqtt_pass": "password",\n  "mqtt_server": "host",\n  "mqtt_port": "port",\n  "mqtt_secure": "false"\n}\'\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("::: info\nBy default this function is not available on the pre built binary of RFBridge, in order to have less code size and enable to have OTA update working properly. So as to enable it remove from the rf bridge env:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("build_flags = '-UMQTTsetMQTT'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Arduino boards does not have this function per default also, to add it:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("build_flags = '-DMQTTsetMQTT'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v(":::")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Server, port, and secure_flag are only required if changing connection to another broker."),s("br"),e._v("\nIf the new connection fails the gateway will fallback to the previous connection.")])]),e._v(" "),s("h2",{attrs:{id:"change-the-mqtt-main-topic-and-or-gateway-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-the-mqtt-main-topic-and-or-gateway-name"}},[e._v("#")]),e._v(" Change the MQTT main topic and or gateway name")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSYS/config" -m\n\'{\n  "mqtt_topic": "topic/",\n  "gateway_name": "name"\n}\'\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("::: info\nThis will change the subscribed and published mqtt_topic/gateway_name that the gateway uses. No parameters are mandatory, the current topic or gateway name will be used if not supplied.\n:::")]),e._v(" "),s("h2",{attrs:{id:"switching-brokers-and-using-self-signed-and-client-certificates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switching-brokers-and-using-self-signed-and-client-certificates"}},[e._v("#")]),e._v(" Switching brokers and using self signed and client certificates")]),e._v(" "),s("p",[e._v("In the "),s("code",[e._v("user_config.h")]),e._v(" file it is possible to specify multiple MQTT brokers and client certificates. These are commonly self signed and are supported by defining "),s("code",[e._v("MQTT_SECURE_SELF_SIGNED")]),e._v(" as true or 1."),s("br"),e._v("\nAdditionally, support for multiple brokers and client certificates has been added. To use this, it is required that the server certificate, client certificate, and client key are provided as their own constant string value as demonstrated in the file."),s("br"),e._v("\nTo add more than one broker and switch between them it is necessary to provide all of the relevant certificates/keys and add their respective variable names in the "),s("code",[e._v("certs_array")]),e._v(" structure, as shown in "),s("code",[e._v("user_config.h")]),e._v(", and changing the array size to the number of different connections -1.")]),e._v(" "),s("p",[e._v("To switch between these servers with an MQTT command message, the format is as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoSYS/config" -m\n\'{\n  "mqtt_user": "user",\n  "mqtt_pass": "password",\n  "mqtt_server": "host",\n  "mqtt_port": "port",\n  "mqtt_secure": "true",\n  "mqtt_cert_index":0\n }\'\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("mqtt_cert_index")]),e._v(" value corresponds to the 0 to X index of the "),s("code",[e._v("certs_array")]),e._v(" in "),s("code",[e._v("user_config.h")]),e._v(".")])]),e._v(" "),s("h1",{attrs:{id:"firmware-update-from-mqtt-esp-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firmware-update-from-mqtt-esp-only"}},[e._v("#")]),e._v(" Firmware update from MQTT (ESP only)")]),e._v(" "),s("p",[e._v("The gateway can be updated through an MQTT message by providing a JSON formatted message with a version number, OTA password (optional, see below), and URL to fetch the update from.")]),e._v(" "),s("p",[e._v("To enable this functionality, "),s("code",[e._v("MQTT_HTTPS_FW_UPDATE")]),e._v(" will need to be defined or the line that defines in in user_config.h will need to be uncommented.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("If using an unsecure MQTT broker it is "),s("strong",[e._v("highly recommended")]),e._v(" to disable the password checking by setting the macro "),s("code",[e._v("MQTT_HTTPS_FW_UPDATE_USE_PASSWORD")]),e._v(" to 0 (default is 1 (enabled)), otherwise a clear text password may be sent over the network.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("server_cert")]),e._v(" parameter is optional. If the update server has changed or certificate updated or not set in "),s("code",[e._v("user_config.h")]),e._v(" then you can provide the certificate here.")])]),e._v(" "),s("h3",{attrs:{id:"example-firmware-update-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-firmware-update-message"}},[e._v("#")]),e._v(" Example firmware update message:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway_ESP32_BLE/commands/firmware_update" -m \'{\n  "version": "test",\n  "password": "OTAPASSWORD",\n  "url": "https://github.com/1technophile/OpenMQTTGateway/releases/download/v0.9.12/esp32dev-ble-firmware.bin",\n  "server_cert": "-----BEGIN CERTIFICATE-----\nMIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT\nMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j\nb20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB\nCSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97\nnh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt\n43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P\nT19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4\ngdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO\nBgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR\nTLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw\nDQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr\nhMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg\n06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF\nPnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls\nYSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk\nCAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=\n-----END CERTIFICATE-----"}\'\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br")])]),s("p",[e._v("A bash script is available "),s("a",{attrs:{href:"ota_command_cert.zip"}},[e._v("here")]),e._v(" to simplify the use of the "),s("code",[e._v("server_cert")]),e._v(" parameter.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("The pre-built binaries for "),s("strong",[e._v("rfbridge")]),e._v(" and "),s("strong",[e._v("avatto-bakeey-ir")]),e._v(" have the above WiFi and MQTT broker credentials and the Firmware update via MQTT options disabled. This is due to the restricted available flash, so as to still be able to use OTA firmware updates for these boards.")])]),e._v(" "),s("h1",{attrs:{id:"state-led-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-led-usage"}},[e._v("#")]),e._v(" State LED usage")]),e._v(" "),s("p",[e._v("The gateway can support up to 3 LED to display its operating state:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("LED_INFO\nswitched ON when network and MQTT connection are OK\n5s ON, 5s OFF when WIFI is disconnected\n1s ON, 4s OFF when MQTT is disconnected")])]),e._v(" "),s("li",[s("p",[e._v("LED_RECEIVE\nBlink for "),s("code",[e._v("TimeLedON")]),e._v(" 1s when the gateway receive a signal from one of its module so as to send to MQTT")])]),e._v(" "),s("li",[s("p",[e._v("LED_SEND\nBlink for "),s("code",[e._v("TimeLedON")]),e._v(" 1s when the gateway send a signal with one of its module from an MQTT command")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);