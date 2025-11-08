const TelegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    await bot.sendMessage(chatId, "Welcome! You have started the bot.");
  }
});
