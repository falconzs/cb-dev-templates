var library = require('cb-framework').library({
        cbjs: cbjs
    }),
    Bot = require('cb-framework').bot,
    ChatCleaner = require('cb-plugin-cleaner');

var bot = new Bot(cb, library);
bot.register(new ChatCleaner());
bot.run();
