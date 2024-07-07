const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_07_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTczLFxuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM5LFxuICAgICAgICA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgxLFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU0LFxuICAgICAgICA2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0QUFmRUJxM0p4S2IrUC9NNFZab2RFUkttUXFLV2Z0Mkx0Um1tMnc3azhVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLS1pKcmN3ZVRPdUpfS3ZuZTlvalVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEyMjE4Zjk0LTRmMjQtNDgzYi05MDJlLWQ4MWFlODc0Y2IyZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDY5LFxuICAgICAgMjA5LFxuICAgICAgMzMsXG4gICAgICAyNixcbiAgICAgIDIzOCxcbiAgICAgIDIxNSxcbiAgICAgIDEzMCxcbiAgICAgIDE3NyxcbiAgICAgIDY0LFxuICAgICAgMTEzLFxuICAgICAgMjEwLFxuICAgICAgNzgsXG4gICAgICAxNDEsXG4gICAgICAyMTYsXG4gICAgICA2OCxcbiAgICAgIDE4MSxcbiAgICAgIDUxLFxuICAgICAgMTgzLFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMjAwLFxuICAgICAgNTcsXG4gICAgICAxODIsXG4gICAgICAxMDcsXG4gICAgICAxMTIsXG4gICAgICA5MyxcbiAgICAgIDE5LFxuICAgICAgNTMsXG4gICAgICAxODAsXG4gICAgICAyMTIsXG4gICAgICAzMCxcbiAgICAgIDgzLFxuICAgICAgMTYxLFxuICAgICAgMTQwLFxuICAgICAgMTk3LFxuICAgICAgMTU4LFxuICAgICAgMjQyLFxuICAgICAgMjMsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOThDV0gxUkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxOTY0NjgzNzo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwMjM1NDQ2OTgwNjEyOjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kzZzZNd0VFSUx1cWJRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXAxaHB3TnZvaGQ1SE9XQmlCUzVyeFJwNHd2b0l0aW5TNHIvWjlwakxEaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpMTk4MTdDUWRxeW5saU1Hbm9ndnd6WnhaS2VUclI5M3dsVGV2clhSMWx4RHFhNStNQ0NJMDNLY2ZLRkFaRkFGTjE1SHV6V1FUSEJTVlFBRGNUbUVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtTEpQRUQyUUIxeFhiRUFJbkRHQnhzOVZ0Nk5TNXoxRTJ3QjAvWCtPUXh5enFGR0N2ZkhXMkdSNlYyak00Y2hod2RrUUhSQzdDS2V1YXpuS21oYjNodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTk2NDY4Mzc6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM1MDQ3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdMNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0w2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiS2ptK211cEtyS1hTU2tlOXJTTEVrWTJNQi9EbG8zT3dxTWFRWE81MXA2ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjM0ODQxNjA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
