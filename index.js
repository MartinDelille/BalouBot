const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears(/camion/i, (ctx) => ctx.reply('Pouet pouet!'))
bot.hears(/prout/i, (ctx) => ctx.reply('💩'))
bot.hears('il est ou', (ctx) => ctx.reply('Dans ton cul'))

bot.startPolling()
