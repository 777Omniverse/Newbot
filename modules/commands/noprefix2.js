const fs = require("fs");
module.exports.config = {
	name: "ishika",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Ishika",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Maria")==0 || event.body.indexOf("maria")==0 || event.body.indexOf("@Maria tj")==0 || event.body.indexOf("@Maria Tj")==0) {
		var msg = {
				body: "Dont call her I am her baby 😡🤬",
				attachment: fs.createReadStream(__dirname + `/noprefix/ishi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💓", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
