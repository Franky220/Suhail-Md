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



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349117572263";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_42_05_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY5LFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDcwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICA1LFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU0LFxuICAgICAgICA3MixcbiAgICAgICAgMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFjYVc4ODV3dnZoR0ppK09yOE92bkhyclI5SUVIYTZ1L012c2R3azU3b3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndJay1YdjVuU2ItdTlIZ2FPeEVpZ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzA1OWZlNTEtZThkMy00ZGFjLWFkYTQtMTllMWE0ZWM4MTVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgNzgsXG4gICAgICAyNDksXG4gICAgICA3OSxcbiAgICAgIDEwNCxcbiAgICAgIDE4MSxcbiAgICAgIDgyLFxuICAgICAgMTUxLFxuICAgICAgODcsXG4gICAgICAyMTMsXG4gICAgICAyMTUsXG4gICAgICAyMjIsXG4gICAgICAxMDcsXG4gICAgICA4MixcbiAgICAgIDE3NSxcbiAgICAgIDE3MSxcbiAgICAgIDAsXG4gICAgICAxODIsXG4gICAgICAzOCxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMTA0LFxuICAgICAgMTU5LFxuICAgICAgMjE1LFxuICAgICAgMTcyLFxuICAgICAgMTgwLFxuICAgICAgMTMsXG4gICAgICAxOTAsXG4gICAgICAxNjgsXG4gICAgICAxMDAsXG4gICAgICAyMjksXG4gICAgICAxNzksXG4gICAgICAxNDMsXG4gICAgICAxODgsXG4gICAgICA1MyxcbiAgICAgIDEzNSxcbiAgICAgIDE0OSxcbiAgICAgIDE5LFxuICAgICAgMTI4LFxuICAgICAgMjE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIks3TUs1VEEzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE3NTcyMjYzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY4NTIyMjEwMjkxOTQ5OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTGlsIEZyYW5rIFhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPaUpnc1VIRUl2QzM3RUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndhLzJIRFBQNCtZVEpKK2xXd0drOHMycEpXLzJWajZ0R1l4Ny9aWkVSZzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT3VSR2lWRGJEM0JQU3E1amd1cUtRQXZsYTNhZUd3TzBoT2o1WXI1My9hRVE2UUNsK3lJSG1DT01hL3VQQXRNcTFGY3pWeVI5TWJkMjFyaktMM1VnQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVDkxSVNvencwOTMzdUo5VkhVOHc5V2xCMTROZjZYRlJRSTRGNE9pMnZGUnpHNHFLWmQyVEtQamhqQUZsd0tYcFFrb0pjOE1XdGRScWlyWkJCSVhxQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExNzU3MjI2MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDkzODEyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlnM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWczLmpzb24iOiAie1wia2V5RGF0YVwiOlwiME5yN3RaV1ZsaVVJeW5ta0JHUVZ1YkRRcGQ4RXpqWCt4K0R2M015bHIzdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDIzNzg1NzAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Franky,


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
