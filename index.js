import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8484604597:AAFUKp5va185-YQY4jbxxMZXPCYXkERYOBQ";

const bot = new TelegramBot(TOKEN, {polling: true});
bot.on("massage", function(msg) {
    const chatId = msg.chat.Id;
    const text = msg.text;

    bot.sendMessage(chatId, 'salom');
    
    console.log(msg);
    
})


console.log(salom);

