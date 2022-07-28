let handler = async (m, { conn, usedPrefix }) => {
conn.sendButton(m.chat, `
╭─「 *DONASI* 」
│ > Ingin donasi ke BOT?
│ > Dana : 085779150501
│ > Pulsa : 085779150501
│ _Hasil donasi akan dipakai untuk membuat BOT ONLINE 24 JAM_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m)
}
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
