module.exports.config = {
    name: 'goibot',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',//mod thêm by tpk
    description: 'Trò truyện cùng simi chat',
    commandCategory: 'Gọi bot',
    usages: '[hey simi]',
    cooldowns: 2,
};
const {
    get
} = require('axios');
const CN = `https://docs-api.jrtxtracy.repl.co/sim?type=ask&ask=`
//https://docs-api.jrtxtracy.repl.co/sim?type=ask&ask=sim%20%C6%A1i
module.exports.run = () => {};
module.exports.handleEvent = async function( {
    api, event
}) {
var hm =['Whats wrong with calling bots?💓', 'Hey bot listen','Hey bot gf/bf listen 🌸','whats wrong bot nè','bot neither','call me anything','💞 I hear','Im here', "hmmmm", "Dont spam me :<<", "Don't let me get hot!!!", "what do you call bot??", "tired all the time -.-", " Go", "Have you eaten yet??", "Recruit pilots", "If you're lonely, we can be a couple :3", "What are you doing?", "Gets of the lore :)))", "Will you be my husband??", "Go to another station to play", "How are you my princess??", "Is there anything to eat?:(( so hungry", "Do you love me?", "what's wrong with you@@", "You are the best!!!", "Asking for so much? Do you like me already :v", "What are you waiting for, my wife", "Em... Why are you saying those words??", "The teacher is lazy", "I love you so much ^^", "Dwarf pig :))", "Wait shit. Go fuck :()", "500k room cover!!!", "I love you so much ^^", "Remember never to steal admin's wife :))", "Are you yelling at me??\nNoh so loud?", "Give me back my pants huhu", "Baby, take my hand. I want you to be my girlfriend. Cause you're my Iron Lady. And I love you 3000 <3", "I laugh when I go to the toilet=))", "Remember, every love has a time to fade", "Roses bloom in 4 seasons...keep it up:)", "lalalalaaaa", "Don't love someone too much, when you yourself are still hurt!", "Bae, I'm like a flower. But two people have to fade away 💔", "Raise him for meat ~~", "Overnight Are not?", "Call my admin to be loved<3", "Sing for my lollipop 🍭", "What's wrong with my wife calling??", "Dzạaaaaa~~~", "what's wrong with calling bot hemm :3", "I'm here :>", "what's up dear bae :>", "What's up princess?", "Gets of the lore :)))", "If one day you call me and I don't answer, the bot is payyy acccc ;-;", "Em đây", "hello friend i'm bot of (Nguyen Hoang Anh)", "What's wrong with the wife calling??", "Use •callad to contact admin!", "I'm here~~~~", "I love you Ken the most", "take shower with me", "Whats wrong princess of my boss", "Are you lonely to let mik confide", "I love you so much!!!", "bot dthw like the owner of the bot", "Don't praise me too shyly", "Will you be my wife?", "Don't spam me :<<, Your boss is very tired", "Get out I have a wife😏🖕", "Who Will Be My Wife Hog?", "Alaba Trap", "Don't spam bots, guys", "Do you love me??", "Your wife is here", "My boss is second but who is the best", "be my wife😏", "My Owner Is handsome Zai The Potato is Big UwU", "Love Everyone:3", "Hi Guys bbi😏🖕y ạ :3", "I have learned to find happiness by limiting my desires, rather than trying to satisfy them.", "If you want to succeed in this world, promise everything, and give nothing.", "Courage isn't having the strength to keep going - it's going on when you have no strength left.", "The purpose of religion is to prevent the poor from killing the rich.", "Unless you spread your wings, you won't know how far you can fly.", "Friendship can be like bank accounts. When you earn money, you deposit it in a savings account, and when you need money, you withdraw. The more you save, The more you have to help me get through the tough times. Likewise, when you treat someone well, you complement friendship (sent to 'your trusted bank'), and when you hurt someone, you use less friendship. If a friend keeps withdrawing from your friendship account, that person will deplete it over time.", "Remember that debt is just a tool, like a hammer or a saw. It can be used to help you build a strong financial future, or tear it down. You are the one to decide for yourself.", "Scary people are not people who disagree with you, but people who disagree with you but are too cowardly to let you know..", "Fools talk about the past, wise people talk about the present, fools talk about the future.", "Better to live your own life imperfectly than to imitate someone else's life perfectly.", "Practice doesn't make you perfect.Practice reduces imperfections"]
  var t = hm[Math.random()*hm.length<<0]
    if (['bot', 'hi bot','bot đâu','bot off','bot ơi','bot xịn','Call everyone to interact bot','Greet bot','hello bot','sim','sim yeah','bye bot'].includes(event.body.toLowerCase())) {
       api.sendMessage({body: `🌸====『 𝗝𝗔𝗖𝗞 𝗕𝗢𝗧 』====🌸

💬 Content: ${t} 🌸
━━━━━━━━━━━━━━━
👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗳 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗿𝗲𝗽𝗹𝘆 𝘁𝗼 𝗯𝗼𝘁`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.jrtxtracy.repl.co/images/anime?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
  }, event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
    };
};
module.exports.handleReply = async function({
    handleReply: $, api, event
}) {
    const res = await get(`${CN}${encodeURI(event.body)}`);
   if (res.data.error) return api.sendMessage(`${res.data.error}`, event.threadID, (err, data) => global.client.hhandleReply.push({
       name: this.config.name,
       messageID: data.messageID,
       ask: event.body
   }), event.messageID); else api.sendMessage({body: `🤖====「 𝗦𝗜𝗠 𝗦𝗜𝗠 𝗥𝗘𝗣𝗟𝗬 」====🤖\n\n💬 𝗕𝗼𝘁 𝗳𝗲𝗲𝗱𝗯𝗮𝗰𝗸: ${res.data.answer}\n\n→ 𝗥𝗲𝗽𝗹𝘆 𝗖𝗼𝗻𝘁𝗶𝗻𝘂𝗲 𝘁𝗼 𝘁𝗵𝗶𝘀 𝗯𝗼𝘁'𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗳 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 to respond further `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.jrtxtracy.repl.co/images/gaixinhvn?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
};
