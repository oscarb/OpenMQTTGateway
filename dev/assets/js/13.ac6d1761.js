(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{365:function(e,o,t){e.exports=t.p+"assets/img/OpenMQTTgateway_ESP32_binary_flash.e2aec4db.png"},366:function(e,o,t){e.exports=t.p+"assets/img/OpenMQTTgateway_ESP32_binary_flash2.047e266a.png"},367:function(e,o,t){e.exports=t.p+"assets/img/OpenMQTTgateway_NodeMCU_PyFlasher.71bc778e.png"},414:function(e,o,t){"use strict";t.r(o);var a=t(14),s=Object(a.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"option-2-upload-ready-to-go-binaries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-2-upload-ready-to-go-binaries"}},[e._v("#")]),e._v(" (Option 2) Upload ready-to-go binaries")]),e._v(" "),o("p",[e._v("This section is useful if you want to directly flash your ESP from your desktop. Once flashed you can change  wifi and broker settings.\nNevertheless you will not be able to change advanced parameters; if you want to do so, refer to "),o("RouterLink",{attrs:{to:"/upload/builds.html"}},[e._v("Upload your configurations")]),e._v(" section.")],1),e._v(" "),o("p",[e._v("Download the binary corresponding to your board and gateway "),o("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" from github and uncompress it.")]),e._v(" "),o("h2",{attrs:{id:"esp32"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#esp32"}},[e._v("#")]),e._v(" ESP32")]),e._v(" "),o("ul",[o("li",[e._v("Download the bootloader "),o("a",{attrs:{href:"https://github.com/espressif/arduino-esp32/raw/2.0.5/tools/sdk/esp32/bin/bootloader_dio_80m.bin",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Download the boot_app0 from "),o("a",{attrs:{href:"https://github.com/espressif/arduino-esp32/raw/2.0.5/tools/partitions/boot_app0.bin",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Download the flash tool utility from espressif:\nhttps://www.espressif.com/en/products/hardware/esp32/resources")]),e._v(" "),o("li",[e._v("Uncompress the package")]),e._v(" "),o("li",[e._v("Execute "),o("code",[e._v("flash_download_tools")])]),e._v(" "),o("li",[e._v("Choose Developer mode")]),e._v(" "),o("li",[e._v("Choose ESP32 DownloadTool")]),e._v(" "),o("li",[e._v("Set the files and the address as below:\n"),o("img",{attrs:{src:t(365),alt:"Flash download tool"}}),e._v("\nAnd set the parameters used by Arduino IDE, we are able to upload to ESP32 a binary file containing OpenMQTTGateway.")]),e._v(" "),o("li",[e._v("Set the config as above")]),e._v(" "),o("li",[e._v("Connect your ESP32 board and select the COM port")]),e._v(" "),o("li",[e._v("Click on erase if it is your first upload")]),e._v(" "),o("li",[e._v("If you see SYNC (above the START button) for more than 5 seconds, press the boot button of your ESP32")]),e._v(" "),o("li",[e._v("Once done you can click on START button")]),e._v(" "),o("li",[e._v("If you see SYNC (above the START button) for more than 5 seconds, press the boot button of your ESP32\nThe upload details appears in the rear shell windows, you can see also the progress bar changing.")]),e._v(" "),o("li",[e._v('Once done the flash tool display "FINISH" like below\n'),o("img",{attrs:{src:t(366),alt:"Flash download tool 2"}})])]),e._v(" "),o("h3",{attrs:{id:"linux-esptool-py"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#linux-esptool-py"}},[e._v("#")]),e._v(" Linux - esptool.py")]),e._v(" "),o("p",[e._v("If you want to upload the ready-to-go binary from Linux (or any other OS where you have Python) you can use the "),o("a",{attrs:{href:"https://github.com/espressif/esptool",target:"_blank",rel:"noopener noreferrer"}},[e._v("esptool.py"),o("OutboundLink")],1),e._v(". This an official Python based flashing tool from Espressif for ESP82XX and ESP32.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Install esptool from PyPI via pip: "),o("code",[e._v("pip install esptool")]),e._v(" (or using the python package manager of your choice)")])]),e._v(" "),o("li",[o("p",[e._v("Now you should be able to run "),o("code",[e._v("esptool.py -h")]),e._v(" to see a summary of all available commands, command line options and verify the installation")])]),e._v(" "),o("li",[o("p",[e._v("Download the bootloader, boot_app0 and the binary for your board from the respective links "),o("a",{attrs:{href:"#esp32"}},[e._v("above")])])]),e._v(" "),o("li",[o("p",[e._v("Use the below command to upload the binary files to the board (change file names and serial port as needed, for Windows use port number e.g.: "),o("code",[e._v("COM4")]),e._v("):")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("esptool.py --port /dev/ttyUSB0 --chip esp32 --baud 921600 --before default_reset --after hard_reset write_flash -z --flash_mode dout --flash_size detect 0xe000 boot_app0.bin 0x1000 bootloader_dio_80m.bin 0x8000 esp32dev-ble-cont-partitions.bin 0x10000 esp32dev-ble-cont-firmware.bin\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Output for a successful upload should look like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("esptool.py v2.8\nSerial port /dev/ttyUSB0\nConnecting.....\nChip is ESP32D0WDQ6 (revision 1)\nFeatures: WiFi, BT, Dual Core, 240MHz, VRef calibration in efuse, Coding Scheme None\nCrystal is 40MHz\nMAC: 30:ae:a4:ff:48:14\nUploading stub...\nRunning stub...\nStub running...\nChanging baud rate to 921600\nChanged.\nConfiguring flash size...\nAuto-detected Flash size: 4MB\nCompressed 8192 bytes to 47...\nWrote 8192 bytes (47 compressed) at 0x0000e000 in 0.0 seconds (effective 15741.5 kbit/s)...\nHash of data verified.\nFlash params set to 0x0320\nCompressed 17312 bytes to 11972...\nWrote 17312 bytes (11972 compressed) at 0x00001000 in 0.2 seconds (effective 903.1 kbit/s)...\nHash of data verified.\nCompressed 3072 bytes to 129...\nWrote 3072 bytes (129 compressed) at 0x00008000 in 0.0 seconds (effective 5168.4 kbit/s)...\nHash of data verified.\nCompressed 1444624 bytes to 838880...\nWrote 1444624 bytes (838880 compressed) at 0x00010000 in 13.1 seconds (effective 881.2 kbit/s)...\nHash of data verified.\n\nLeaving...\nHard resetting via RTS pin...\n")])])])]),e._v(" "),o("li",[o("p",[e._v("The board resets after the upload and boots the gateway firmware")])])]),e._v(" "),o("h2",{attrs:{id:"esp8266"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#esp8266"}},[e._v("#")]),e._v(" ESP8266")]),e._v(" "),o("ul",[o("li",[e._v("Download the NodeMCU Py Flasher tool :\nhttps://github.com/marcelstoer/nodemcu-pyflasher/releases")]),e._v(" "),o("li",[e._v("Execute "),o("code",[e._v("NodeMCU-PyFlasher")])]),e._v(" "),o("li",[e._v("Set the files and parameters as below:\n"),o("img",{attrs:{src:t(367),alt:""}})]),e._v(" "),o("li",[e._v("Connect your board and select the COM port")]),e._v(" "),o("li",[e._v("Click on "),o("em",[e._v("FlashNodeMCU")]),e._v("\nThe upload details appears.")])]),e._v(" "),o("p",[e._v("With an ESP if you did not set your network and MQTT parameters manually you can now open the "),o("RouterLink",{attrs:{to:"/upload/portal.html"}},[e._v("web portal configuration")]),e._v(".")],1),e._v(" "),o("p",[e._v("Note that to reset the wifi and MQTT settings you can check "),o("em",[e._v("yes, wipes all data")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://hits.seeyoufarm.com",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fdocs.openmqttgateway.com%2Fupload%2Fbinaries.html&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false",alt:"Hits"}}),o("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=s.exports}}]);