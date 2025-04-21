import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  let txt = 'ゲ◜៹ New Member ៹◞ゲ'
  let txt1 = 'ゲ◜៹ Bye Member ៹◞ゲ'
  let groupSize = participants.length

  if (m.messageStubType == 27) {
    groupSize++;
  } else if (m.messageStubType == 28 || m.messageStubType == 32) {
    groupSize--;
  }

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `✿ *¡Bienvenid@ a* ${groupMetadata.subject} *!* ✿\n╰➤ @${m.messageStubParameters[0].split`@`[0]} se ha unido a este pequeño grupo con buen rollo.\n${global.welcom1}\n\n☁️ *Ahora somos ${groupSize} personitas compartiendo este espacio.*\n\nGracias por estar aquí, ojalá te sientas cómodo/a. \n\n⌦ Usa *#help* para ver los comandos disponibles.`
    await conn.sendMini(m.chat, txt, dev, bienvenida, img, img, redes, fkontak)
  }

  if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32)) {
    let bye = `✿ *Un miembro se ha ido de* ${groupMetadata.subject} *.* ✿\n╰➤ @${m.messageStubParameters[0].split`@`[0]} ha salido del grupo.\n${global.welcom2}\n\n☁️ *Ahora quedamos ${groupSize} personas aquí.*\n\nTe deseamos lo mejor. Vuelve cuando quieras, las puertas siempre están abiertas.`
    await conn.sendMini(m.chat, txt1, dev, bye, img, img, redes, fkontak)
  }
}
