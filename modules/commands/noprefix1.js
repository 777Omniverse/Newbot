const fs = require("fs");
module.exports.config = {
	name: "behna",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "For Sister",
	commandCategory: "no prefix",
	usages: "Behna or anu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Anu")==0 || event.body.indexOf("Ishika")==0 || event.body.indexOf("Behna")==0 || event.body.indexOf("Bhaiya")==0) {
		var msg = {
				body: "💞💞 𝙼𝚢 𝚋𝙾𝚜𝚜 𝙰𝚗𝚍 𝙷𝚒𝚜 Best friend 💞💞 \n 🌹Jackson's best friend Maria😘 🥀",
				attachment: fs.createReadStream(__dirname + `/cache/bro.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
