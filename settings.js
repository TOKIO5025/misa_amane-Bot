import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 50248019799

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['50248019799', '🜲 Propietario NeoTokyo 🜲', true],
  ['50493732693', 'Wirk', true] 
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['50248019799'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = '𝗺𝗶𝘀𝗮 𝗮𝗺𝗮𝗻𝗲 𝗯𝗼𝘁'
global.namebot = '🖤🌸 𝗠𝗶𝘀𝗮 𝗔𝗺𝗮𝗻𝗲 𝗕𝗼𝘁 🌸🖤'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '🎀 𝗠𝗶𝘀𝗮 𝗔𝗺𝗮𝗻𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗕𝗼𝘁 🎀'
global.botname = '🖤𝗠𝗶𝘀𝗮 𝗔𝗺𝗮𝗻𝗲🖤'
global.wm = '💖 𝗺𝗶𝘀𝗮 𝗮𝗺𝗮𝗻𝗲 𝗯𝗼𝘁 | 𝐁𝐲 ꕤ ℕ𝕖𝕠𝕋𝕠𝕜𝕪𝕠 𝔹𝕖𝕒𝕥𝕤 ☘︎ 💖'
global.author = '𝗠𝗮𝗱𝗲 𝐁𝐲 ꕤ ℕ𝕖𝕠𝕋𝕠𝕜𝕪𝕠 𝔹𝕖𝕒𝕥𝕤 ☘︎'
global.dev = '© 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝐁𝐲 ꕤ ℕ𝕖𝕠𝕋𝕠𝕜𝕪𝕠 𝔹𝕖𝕒𝕥𝕤 ☘︎'
global.textbot = '🌸 𝗠𝗶𝘀𝗮 𝗔𝗺𝗮𝗻𝗲 𝗕𝗼𝘁 | 𝐁𝐲 ꕤ ℕ𝕖𝕠𝕋𝕠𝕜𝕪𝕠 𝔹𝕖𝕒𝕥𝕤 ☘︎ 🌸'
global.etiqueta = 'ꕤ ℕ𝕖𝕠𝕋𝕠𝕜𝕪𝕠 𝔹𝕖𝕒𝕥𝕤 ☘︎'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = '༺AmaneCoins༻'
global.welcom1 = '💖 ¡Bienvenido/a a este grupo! 💖'
global.welcom2 = '💔 ¡Hasta pronto! Esperamos verte de nuevo. 💔'
global.banner = 'https://qu.ax/tpoHM.jpg'
global.avatar = 'https://qu.ax/mDtZO.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://chat.whatsapp.com/GOGUnToPcic0BHmPyaUDNE'
global.comunidad1 = 'https://chat.whatsapp.com/KC6rrPoGCciLA4a7NaPL7u'
global.channel = 'https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A'
global.channel2 = 'https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A'
global.md = 'https://github.com/The-King-Destroy/Yuki_Suou-Bot'
global.correo = 'albertodovi100@gmail.com'
global.cn ='https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363341523880410@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
