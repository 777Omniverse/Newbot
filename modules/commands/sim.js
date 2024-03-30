module.exports.config = {

    name: "sim",

    version: "1.0.0",

    hasPermssion: 0,

    credits: "ATF-TEAM",

    description: "Talk to sim",

    commandCategory: "sim",

    usages: "[ask]",

    cooldowns: 2,

};



module.exports.run = async function({ api, event, args }) {

    const axios = require("axios");

    let { messageID, threadID, senderID, body } = event;

    let tid = threadID,

    mid = messageID;

    const content = encodeURIComponent(args.join(" "));

    if (!args[0]) return api.sendMessage("Ask Anything 😒", tid, mid);

    try {

        const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=en&message=[message text]&filter=true`);

        const respond = res.data.success;

        if (res.data.error) {

            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {

                if (error) {

                    console.error(error);

                }

            }, mid);

        } else {

            api.sendMessage(respond, tid, (error, info) => {

                if (error) {

                    console.error(error);

                }

            }, mid);

        }

    } catch (error) {

        console.error(error);

        api.sendMessage("An error occurred while fetching the data.", tid, mid);

    }

};
