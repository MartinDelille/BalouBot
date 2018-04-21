const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

console.log("Il en faut peu pour être heureux!");

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears(/camion/i, (ctx) => ctx.reply('Pouet pouet!'))
bot.hears(/prout/i, (ctx) => ctx.reply('💩'))

bot.startPolling()
