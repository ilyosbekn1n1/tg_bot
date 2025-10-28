import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8484604597:AAH5xq6_pBRRFT5vqN-laZfkB7XOCKD1GsA";
const bot = new TelegramBot(TOKEN, { polling: true });
bot.on("message", function (msg) {
  const chatid = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  bot.sendMessage(chatid, `salom -> ${firstname}`, {
    reply_markup: {
      keyboard: [[{ text: "boshlash😊" }]],
    },
  });

  console.log(msg);
});
console.log("Bot ishga tushdi . . .");
