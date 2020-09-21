require('dotenv').config();

var steamClientFactory = require('./steamClient.js');
var configsArray = [];
var config;
var botArray = [];

config = {};
config.username = process.env.USERNAME;
config.password = process.env.PASSWORD;
config.sharedSecret = ''; //Shared Secret(for 2FA only) https://github.com/Jessecar96/SteamDesktopAuthenticator/releases
config.games = [4000]
configsArray.push(config);

console.log('Number of configurations set up: ' + configsArray.length);
 
for	(let index = 0; index < configsArray.length; index++) {
    var config1 = configsArray[index];
    
    var bot = steamClientFactory.buildBot(config1);
    bot.doLogin();
    botArray.push(bot);
}
 
console.log('Running ' + botArray.length + ' bots.');