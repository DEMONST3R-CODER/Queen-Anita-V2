//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/42ZNlLn.jpeg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349153596300";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 1;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/42ZNlLn.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0U2cml6VTM2aC9seGRVc0hNZ0dib2U5b25Kb3hSYkFXdkRPN2QxNWpXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEZ0dUp6b0NEWWp6RmFZaFJMb1dkVXhhRkpMMGFmcm1IZWhjSTN0TFZrdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRmY4eXpqSmViaGJoOVowK2pqVlh3WEFmRTd3cGRJTXlaN2U1U2t5TTBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRE10OEE4K1lFZUkxYm5FVHBXbE5YRDQ3a0VhMEdXWWYxNk05dU8wNHg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIZWcvMGZENkk0aExjdStYSlZ5NmpoVE13RHVucWtEWUtFSjJYVVBZa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImgxTUlZdlJyME42RStYemdFNUZ5a1pWdGg5Q1FWZ3ZuZDdrZjJoNzNIUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkg4Mng4WjduZndZNVM2TEljcjJmZExoTW5CWmdSejg1VUl2TStWUjZtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURpWnVxcU9LSllEQWFsMzJVKzNtL3ZCT0RkSjVoM0xKVHVjMTc2K0lITT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFnM1ExYzZ0Rk9JUjdPOU9TbTU2cGpBek9CUkZscy8wYStvMkVZdEF3RzJJRGVmbk9uMTRhU1dDM1hsTVozOXdkMHFPeVozRU43bmRwbkNLSGd4UGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJYbGM2S0xGQlhQbVd1MDVIaGdteFBuNWYwTGxRQURkR0t1eUtUUitJaVd3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRc1NiTzl1QVJxU2g4aTBiOTc1SlFRIiwicGhvbmVJZCI6IjhmMWJmYTAyLWEwODktNDU2OC05YTUyLWQ0N2Q1MmVjMTE4YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFMlVjWGR1cmVaWnVZNjIwSTNCd2lIMmxGbzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnZoWjNEVllWL3IzdFRobTdlc05JNkU4UXhjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRETFFKS1RaIiwibWUiOnsiaWQiOiIyMzQ5MTUzNTk2MzAwOjI1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMR3c0ZXdFRUxTejZiY0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiKzhFSVZxaHl1dis1MUhjbzZrZ2hZYndTZlAxSEg4S0QvV3I4bTZvVWdrPSIsImFjY291bnRTaWduYXR1cmUiOiJieUkxRWt6d3ZET2ExakRXZnVzdlltUzVRdEh0UGUrTlZHSVpJeG1wbVE4aG40OE9KTlBIL0dNZG9wZ0t2SHpOa2F3alA0c0gyVTU2bUNQWDR2YXdEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNUtaYlVmRVp5WG94Wmlha3JIZUNVMXlUSEc1VTJBNnNsbyszY1JWdExkRTFJMThGQlFLV2VXU0l6MFgyckJZbkpFK0lvL0cxcDdiWGxxL0E2amtmZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTUzNTk2MzAwOjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcvdkJDRmFvY3JyL3VkUjNLT3BJSVdHOEVuejlSeC9DZy8xcS9KdXFGSUoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2ODMwMTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmZIIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "シ︎𝓚𝓲𝓷𝓰👑 ༒︎𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙༒︎💀",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
