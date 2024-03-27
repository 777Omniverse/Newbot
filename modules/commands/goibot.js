const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "lul",
  description: "goi bot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["I'm a cute bot", "Hey bot, listen !!", "Then say something quickly", "Play with dyke hong", "Scream -.-", "Modern Gothic", "1+1=3 nha", "Frog croak frog croak🐸", "Too bad you've been banned","I have these questions but keep telling me I don't know you're mentally retarded ?", "I'm here~~~~", "Admin seen hey my dear", "I'm tired!", "Cute is not on your listu", "Ultr?", "Is there any tissue paper??","Use callad to tell me I am boy u can check my?", "Don't be too happy, bro", "Moan for me ah ah ah", "ah ah ah ah ah ah ah", "Baby bird uwu", "Oh, this girl likes me", "Kick youq, honey", "I'll report to the police", "Sorry :((( ", "4 blink 1 I can't stand the night k" ,"Êyyyyyyyyyy hot stuff", "Spam 5 times in 60 seconds and you will be banned for 2 days (forever)", "Giving you smile", "Just putting in a tutu hurts :'(", "Loving you is like torture\bobbing up and down, we both moan", "Something holy sucks and licks","The pussy screams", "Come to bed, please??","So terrible....🌚😳 And this is Folontiloô!😱😱 Folontilô ui... 🥶🥶👿😳A dance situation must be said to be extremely 👿extreme!! *music🤯 Shamelessly watching you turn on your heels and walk away😞😞💔 I stood frozen in the rain😭😭 Even though you already have someone by your side But here I'm still waiting 🤗🤗🥱...","admin said: you are ugly","I'm Monday, no one is Sunday","Shoot me in the mouth","Click hard","So horny","Do you love me? Let me kill you in bed","Your breasts are too big for me to get used to.","I don't know who you are but I love you okay","If you like, use the command to call the bald head","Your fruit so big. Touching will bring fruit","It's been a long time since I posted it, so I'll ask for a private print","26 Hello, Son. Shake shake","I know how to fan dance ahihi","The little stork landed on your cheek","I think you love me, no, I love admin the most","I want to marry you, but I don't have money"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot he is")) {
    return api.sendMessage("", threadID);
  };

  if ((event.body.toLowerCase() == "walnut bot")) {
    return api.sendMessage("I have brains like you, so we're both chess players 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot dog") || (event.body.toLowerCase() == "bot dog")) {
    return api.sendMessage("Who the hell just said bad things about me, do you want to die? 😾", threadID);
  };

  if ((event.body.toLowerCase() == "Oh") || (event.body.toLowerCase() == "hey")) {
    return api.sendMessage("Oh, the thunder of the heavens, let's interact 🥶", threadID);
  };

  if ((event.body.toLowerCase() == "oh") || (event.body.toLowerCase() == "oh")) {
    return api.sendMessage("Oi cailon knows how to interact k 🤷‍♂️", threadID);
  };

  if ((event.body.toLowerCase() == "yeah") || (event.body.toLowerCase() == "hey")) {
    return api.sendMessage("Good boy, I gave you a spell that is\nI like you so much :3", threadID);
  };

  if ((event.body.toLowerCase() == "Yes") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("Yes 😞 do you know? Lie 😼", threadID);
  };

  if ((event.body.toLowerCase() == "yeah") || (event.body.toLowerCase() == "do")) {
    return api.sendMessage("Oh yeah 😞 do you know? Lie :)))", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage( "uk cc should be uh which is correct =)))", threadID);
  };

  if ((event.body.toLowerCase() == "Yes") || (event.body.toLowerCase() == "and")) {
    return api.sendMessage("Good girl, you deserve to have 10 lovers ❤", threadID);
  };

  if ((event.body.toLowerCase() == "Love") || (event.body.toLowerCase() == "love")) {
    return api.sendMessage("Loving your cc, money, car, house is not enough to love your partner, worry about studying and going to work to make money so you can love later", threadID);
  };

  if ((event.body.toLowerCase() == "mmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("If you say that without filial piety to your biological father, you're a bad person", threadID);
  };

  if ((event.body.toLowerCase() == "mmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("If you don't pay respect to your biological father and mother, you say that, you're a crazy personi", threadID);
  };

  if ((event.body.toLowerCase() == "curse cm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("If you say that without filial piety to your biological father, you're a bad person", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("Who cares about people who like to punch each other, why are they so angry? :)", threadID);
  };

  if ((event.body.toLowerCase() == "fuck") || (event.body.toLowerCase() == "")) {
    return api.sendMessage("Fuck cc do you like to fuck? :)", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dict cc")) {
    return api.sendMessage("Hey :)", threadID);
  };

  if ((event.body.toLowerCase() == "I'm sorry") || (event.body.toLowerCase() == "Ah they")) {
    return api.sendMessage("Although he is not handsome or talented in anything, he is humorous and always wants to achieve the goals he wants <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "ah teo") || (event.body.toLowerCase() == "a teo")) {
    return api.sendMessage("Although he is not handsome or talented in anything, he is humorous and always wants to achieve the goals he wants <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "Teo") || (event.body.toLowerCase() == "teo")) {
    return api.sendMessage("Although he is not handsome or talented in anything, he is humorous and always wants to achieve the goals he wants <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "boss ") || (event.body.toLowerCase() == "admin")) {
    return api.sendMessage("Who called my boss, but please don't tag him but contact her ITS MARIA ", threadID);
  };

  if ((event.body.toLowerCase() == "bot yeah") ||  (event.body.toLowerCase() == "bot yeah")) {
    return api.sendMessage("Tell me, you still have to serve other boxes :3 ", threadID);
  };

  if ((event.body.toLowerCase() == "Love bot") || (event.body.toLowerCase() == "love bot")) {
    return api.sendMessage("Hmm... The bot is so shy, I love the bot's admin :))", threadID);
  };

   if ((event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "love you")) {
    return api.sendMessage("I love you too <3", threadID);
  };

   if ((event.body.toLowerCase() == "@Maria Tj") || (event.body.toLowerCase() == "maria")) {
    return api.sendMessage("️Stay away from her i am her baby go to hell 😡😡", threadID);
  };

  if ((event.body.toLowerCase() == "hentai") || (event.body.toLowerCase() == "hentai")) {
    return api.sendMessage("Huh 😋, I really like watching it", threadID);
  };

  if ((event.body.toLowerCase() == "Fuck off") || (event.body.toLowerCase() == "cc Fuck off")) {
    return api.sendMessage("Why don't you go away? But tell me :) I'm so tired :>", threadID);
  };

  if ((event.body.toLowerCase() == "shit") || (event.body.toLowerCase() == "fuck")) {
    return api.sendMessage("Its bad 🙄....:)))", threadID);
  };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("Hi!! Interact with the box quickly :3", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("Hell!! Interact with the box quickly :)", threadID);
  };

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "link")) {
    return api.sendMessage("Please let me see the link in how many minutes 🤤", threadID);
  };

  if ((event.body.toLowerCase() == "rescue") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("If you save stupid people, you'll die wisely, then you'll live, my boss told me <3", threadID);
  };

  if ((event.body.toLowerCase() == "war") || (event.body.toLowerCase() == "fight")) {
    return api.sendMessage("War cc, try war and see if I kick them all :) I'm here and causing trouble :))))", threadID);
  };

  if ((event.body.toLowerCase() == "go to war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("War cc, try war and see if I kick them all :) I'm here and causing trouble :))))", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao ᥫບ 七ÈᎧ có gì dùng lệnh .adbot admin để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tao ᥫບ 七ÈᎧ có gì dùng lệnh .adbot admin để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick, 3 là ăn đấm, 4 là ăng nhăng nhăng, 5 là á á á ớ ớ kimochi:))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️Đm móc ra bố check hàng :)))", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "a tèo") || (event.body.toLowerCase() == "a teo")) {
    return api.sendMessage("️Kêu chủ của tôi gì á :)?", threadID);
  };

  if ((event.body.toLowerCase() == "ông tèo") || (event.body.toLowerCase() == "ong teo")) {
    return api.sendMessage("️Sao nói gì admin tôi đấy ?", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ quá khen ạ hihi :>", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha dui quá ha :>> cười cười con mẹ mày😏 :)", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️Haha dui quá ha :>> cười buồi m à :)", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :)", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi thề cho nên người đi bạn êi :))) ko tao vả chetmemay giờ", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("Im cc :))) m bớt sủa lại hộ tao, nưng hay gì bảo t im :>>", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("Mày cút rồi bố mày cút, ko khiến mày lên tiếng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có link fb của admin ko") || (event.body.toLowerCase() == "bot co link fb của admin ko")) {
    return api.sendMessage("Dĩ nhiên rồi có gì liên hệ anh ấy nha <3\nLink fb nè: https://www.facebook.com/hacker4104", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("À ý mày bảo mày là chó á hả sủa đi tao nghe :)", threadID);
  }; 
  if ((event.body.toLowerCase() == "á") || (event.body.toLowerCase() == "á đ m")) {
    return api.sendMessage("Hả gì ai đụ mày hả", threadID);
  };
if ((event.body.toLowerCase() == "cái qq") || (event.body.toLowerCase() == "qq")) {
    return api.sendMessage("quần què là cái quần éo gì", threadID);
  };
  if ((event.body.toLowerCase() == "ulatr") || (event.body.toLowerCase() == "ulatroi")) {
    return api.sendMessage("U là trời là cái gì, trời bị u hả 🤔", threadID);
  };
  if ((event.body.toLowerCase() == "cái nịt") || (event.body.toLowerCase() == "còn cái nịt")) {
    return api.sendMessage("Còn đúng cái nịt thôi, Cho em xin", threadID);
  };
  if ((event.body.toLowerCase() == "hăi") || (event.body.toLowerCase() == "hăii")) {
    return api.sendMessage("Cái đấy là chào kiểu ngoài hành tinh đó hả", threadID);
  };
if ((event.body.toLowerCase() == "xin in4") || (event.body.toLowerCase() == "xin in tư đi")) {
    return api.sendMessage("Hông bé ơi, bé hông phô lâu anh mà đòi xin in4 của anh. anh ko cho đâu", threadID);
  };
if ((event.body.toLowerCase() == "war") || (event.body.toLowerCase() == "war ko")) {
    return api.sendMessage("war hả. tag em zô em chủi chết mẹ chúng nó", threadID);
  };
  if ((event.body.toLowerCase() == "khum") || (event.body.toLowerCase() == "khum cho đâu")) {
    return api.sendMessage("khum khum là cái lồn gì zậy", threadID);
  };
if ((event.body.toLowerCase() == "ahihi") || (event.body.toLowerCase() == "ahihi")) {
    return api.sendMessage("Cười gì giống bede quá hà 😊", threadID);
  };
  if ((event.body.toLowerCase() == "xin") || (event.body.toLowerCase() == "cho xin")) {
    return api.sendMessage("có làm mới có ăn nha", threadID);
  };
  if ((event.body.toLowerCase() == "2") || (event.body.toLowerCase() == "hai")) {
    return api.sendMessage("Ba bốn năm sáu bảy tám chín mười mày cười tao khóc", threadID);
  };
if ((event.body.toLowerCase() == "có cái nịt") || (event.body.toLowerCase() == "cai nịt")) {
    return api.sendMessage("Lấy nịt buộc tiền", threadID);
  };
  if ((event.body.toLowerCase() == "cho xin in4 đi") || (event.body.toLowerCase() == "cho em xin in4")) {
    return api.sendMessage("Hông bé ơi, bé chưa phô lâu anh mà đòi xin in4 của anh,anh ko cho đâu", threadID);
  };
if ((event.body.toLowerCase() == "lz") || (event.body.toLowerCase() == "cái lz")) {
    return api.sendMessage("lz là cái gì cơ, phải lồn mới đúng nghen", threadID);
  };
  if ((event.body.toLowerCase() == "cút") || (event.body.toLowerCase() == "cút đi")) {
    return api.sendMessage("Á à. Bảo tao cút hả, Cút thì cút sợ lồn gì mày 😎", threadID);
  };
  if ((event.body.toLowerCase() == "biến") || (event.body.toLowerCase() == "biến đi")) {
    return api.sendMessage("Xin lỗi mày nhưng tao đéo có phép", threadID);
  };
if ((event.body.toLowerCase() == "pp") || (event.body.toLowerCase() == "pai")) {
    return api.sendMessage("Chào mày mày đi đi", threadID);
  };
  if ((event.body.toLowerCase() == "=))") || (event.body.toLowerCase() == "=)))")) {
    return api.sendMessage("Icon cười đấy là cười kiểu đéo gì vậy ", threadID);
  };
if ((event.body.toLowerCase() == ":))") || (event.body.toLowerCase() == ":)))")) {
    return api.sendMessage("Mày cười cái giề. vui lắm gì gì, cho tao cười ké zới :)))", threadID);
  };
  if ((event.body.toLowerCase() == "clm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("Cái lồn mẹ mày thì nói mẹ đi, bày bày đặt clm", threadID);
  };
  if ((event.body.toLowerCase() == "vc") || (event.body.toLowerCase() == "vc luôn")) {
    return api.sendMessage("Á đù. vãi cặc :)", threadID);
  };
  if ((event.body.toLowerCase() == "tvm") || (event.body.toLowerCase() == "hi tvm")) {
    return api.sendMessage("Thành viên mới vào tương tác nhiều không tao đá chết mẹ mày", threadID);
  };
if ((event.body.toLowerCase() == ".nude") || (event.body.toLowerCase() == ".mông")) {
    return api.sendMessage("Bớt dâm lại đĩ lồn ơi. Tao méc má mày giờ", threadID);
  };
if ((event.body.toLowerCase() == "điên") || (event.body.toLowerCase() == "đin")) {
    return api.sendMessage("Điên điên , quá điên, điên hết rồi, điên cc", threadID);
  };
  if ((event.body.toLowerCase() == "khùng") || (event.body.toLowerCase() == "khung")) {
    return api.sendMessage("Khùng lắm nha con, để tao gọi người bắt mày đi", threadID);
  };
  if ((event.body.toLowerCase() == "dâm") || (event.body.toLowerCase() == "dam dang")) {
    return api.sendMessage("Em có dâm đâu, em chỉ muốn được địt thôi❤️", threadID);
  };
  if ((event.body.toLowerCase() == "câm") || (event.body.toLowerCase() == "nín")) {
    return api.sendMessage("Nó bảo mày câm lại kìa, quánh nó cho tao", threadID);
  };
if ((event.body.toLowerCase() == "ỉa") || (event.body.toLowerCase() == "ỹa")) {
    return api.sendMessage("Mày dơ nó vừa vừa thôi. ỉa chung với tao ko", threadID);
  };
if ((event.body.toLowerCase() == "đi") || (event.body.toLowerCase() == "đi ko")) {
    return api.sendMessage("Đi địt nhau hả. cho em đi vớiiii, chúng mình threesome😘", threadID);
  };
  if ((event.body.toLowerCase() == "đĩ") || (event.body.toLowerCase() == "/cave")) {
    return api.sendMessage("hazzzzz. làm đĩ có vui ko sao ngày nào cũng làm vậy, cho tao làm với😌", threadID);
  };
  if ((event.body.toLowerCase() == "đỉ") || (event.body.toLowerCase() == "đỷ")) {
    return api.sendMessage("làm đĩ zui lắm cho em làm với", threadID);
  };
  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
    return api.sendMessage("", threadID);
  };
  if ((event.body.toLowerCase() == "lẹ") || (event.body.toLowerCase() == "lẹ coi")) {
    return api.sendMessage("Từ từ bố mày đang ỉa hối cl", threadID);
  };
if ((event.body.toLowerCase() == "omg") || (event.body.toLowerCase() == "umg")) {
    return api.sendMessage("Bất ngờ chưa😎", threadID);
  };
  if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "oke")) {
    return api.sendMessage("Là oke hay là bao cao su", threadID);
  };
  if ((event.body.toLowerCase() == "kê") || (event.body.toLowerCase() == "oce")) {
    return api.sendMessage("Kê là gà chứ đéo phải oke", threadID);
  };
  if ((event.body.toLowerCase() == "vg") || (event.body.toLowerCase() == "vâng")) {
    return api.sendMessage("Bé ngoan thế. Yêu bé lắm 😘", threadID);
  };
  if ((event.body.toLowerCase() == "ủa") || (event.body.toLowerCase() == "ũa")) {
    return api.sendMessage("Hả gì ủa ủa gì gì", threadID);
  };
  if ((event.body.toLowerCase() == "dcm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Sao mày lại đòi địt mẹ ngta vậy con", threadID);
  };
if ((event.body.toLowerCase() == "jz") || (event.body.toLowerCase() == "j")) {
    return api.sendMessage("Gì gì hỏi tao tao biết hỏi ai", threadID);
  };
if ((event.body.toLowerCase() == "?") || (event.body.toLowerCase() == "ủa?")) {
    return api.sendMessage("Chấm hỏi cc. dùng não đi", threadID);
  };
  if ((event.body.toLowerCase() == "đẹp ") || (event.body.toLowerCase() == "đẹp vậy")) {
    return api.sendMessage("awww. đẹp thì làm ngiu em nha😘", threadID);
  };
  if ((event.body.toLowerCase() == "hok") || (event.body.toLowerCase() == "hong")) {
    return api.sendMessage("không là không chứ hok là cái lz gì", threadID);
  };
  if ((event.body.toLowerCase() == "tồi") || (event.body.toLowerCase() == "tồy")) {
    return api.sendMessage("Tồi quá thì chơi minh đi nha", threadID);
  };
    if ((event.body.toLowerCase() == "ủa gì") || (event.body.toLowerCase() == "ủa gì zậy")) {
    return api.sendMessage("Ủa cái qq ấy chứ ủa. Biết gì chưa tao kể cho nghe nè", threadID);
  };
    if ((event.body.toLowerCase() == ":v") || (event.body.toLowerCase() == "v:")) {
    return api.sendMessage("Cười cái con chim non nè. Cười quái dị vc", threadID);
  };
    if ((event.body.toLowerCase() == "xD") || (event.body.toLowerCase() == ":c")) {
    return api.sendMessage("Cười nhe cả hàm ghê quá tròi", threadID);
  };
if ((event.body.toLowerCase() == "-.-") || (event.body.toLowerCase() == ".-.")) {
    return api.sendMessage("Thái độ gì đấy. Tin tao đấm mày không", threadID);
  };
if ((event.body.toLowerCase() == "biến thái") || (event.body.toLowerCase() == "đồi trụy")) {
    return api.sendMessage("Thứ như này bắn ngay đừng cho đẻ trứng", threadID);
  };
    if ((event.body.toLowerCase() == "kick") || (event.body.toLowerCase() == "kik")) {
    return api.sendMessage("Kick mẹ nó đi ở đây chật đất", threadID);
  };
if ((event.body.toLowerCase() == "ờ") || (event.body.toLowerCase() == "ò")) {
    return api.sendMessage("Ờ Ò cái qq. Phải dạ vâng nghe hông", threadID);
  };
    if ((event.body.toLowerCase() == "um") || (event.body.toLowerCase() == "ừm")) {
    return api.sendMessage("Ừ thì ừ mẹ đi cho nó truất. ừm cái đb", threadID);
  };
if ((event.body.toLowerCase() == "đù") || (event.body.toLowerCase() == "á đù")) {
    return api.sendMessage("aduvip. Á đù anh bạn à. Dân chơi đù cơ", threadID);
  };
    if ((event.body.toLowerCase() == "hô hô") || (event.body.toLowerCase() == "ho ho")) {
    return api.sendMessage("Cười kiểu đéo gì ra tiếng hô hô hay vậy. Cười đểu tao à😡", threadID);
  };
  if ((event.body.toLowerCase() == "nhục") || (event.body.toLowerCase() == "nhục chưa")) {
    return api.sendMessage("Nhục như con cá nục. Này chắc phải đội quần mới hết nhục", threadID);
  };
if ((event.body.toLowerCase() == "quê") || (event.body.toLowerCase() == "quê vl")) {
    return api.sendMessage("Ôi con sông quê con sông quê. Tao cười vào mặt", threadID);
  };
if ((event.body.toLowerCase() == "hay") || (event.body.toLowerCase() == "hay quá")) {
    return api.sendMessage("Hay. quá Hay cho 1 tràng pháo tay nào 👏👏👏", threadID);
  };
    if ((event.body.toLowerCase() == "đỉnh") || (event.body.toLowerCase() == "đỉnh chưa")) {
    return api.sendMessage("Quá đỉnh quá tuyện vời. Gút chóp 👌👌👌", threadID);
  };
    if ((event.body.toLowerCase() == "lạy") || (event.body.toLowerCase() == "tao lạy")) {
    return api.sendMessage("Tao xin khép đít mở háng lạy mày luôn con chó 🙏🏿🙏🏿🙏🏿", threadID);
  };
    if ((event.body.toLowerCase() == "cút lẹ") || (event.body.toLowerCase() == "biến lẹ")) {
    return api.sendMessage("Đuổi đuổi cái lồn tao nè", threadID);
  };
    if ((event.body.toLowerCase() == "aaaaaa") || (event.body.toLowerCase() == "aaaaa")) {
    return api.sendMessage("Em bị sao. Ai hiếp em anh tham gia với", threadID);
  };
if ((event.body.toLowerCase() == "á") || (event.body.toLowerCase() == "á á")) {
    return api.sendMessage("Ai đụ mày hay gì mà rên ghê vậy", threadID);
  };
if ((event.body.toLowerCase() == "á á á") || (event.body.toLowerCase() == "á á á á")) {
    return api.sendMessage("Ai đụ đụ mày hay gì mà rên ghê zậy", threadID);
  };
if ((event.body.toLowerCase() == "aaaa") || (event.body.toLowerCase() == "aaaaaaa")) {
    return api.sendMessage("Sao sao mày bị gì. Ai hiếp mày hả", threadID);
  };
if ((event.body.toLowerCase() == "may vc") || (event.body.toLowerCase() == "may vl")) {
    return api.sendMessage("May thế. Chúa hù hộ em", threadID);
  };
if ((event.body.toLowerCase() == "lắc lắc") || (event.body.toLowerCase() == "lắc đầu")) {
    return api.sendMessage("26 sơn la xin chào anh em. Lắc lắc giật giật", threadID);
  };
if ((event.body.toLowerCase() == "iu") || (event.body.toLowerCase() == "iu ck")) {
    return api.sendMessage("Nít nôi học không lo học chồng con cái đb", threadID);
  };
if ((event.body.toLowerCase() == "iu vk") || (event.body.toLowerCase() == "aie")) {
    return api.sendMessage("Lo học đi. Yêu đương cc", threadID);
  };
if ((event.body.toLowerCase() == "eya") || (event.body.toLowerCase() == "eia")) {
    return api.sendMessage("Chúng mày lo học đi. Ba mẹ thì còng lưng 🤦", threadID);
  };
    if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "à à")) {
    return api.sendMessage("À thế làm sao mà à.", threadID);
  };
    if ((event.body.toLowerCase() == "kệ tao") || (event.body.toLowerCase() == "kệ mẹ tao")) {
    return api.sendMessage("kệ mày thì kệ mày 😏", threadID);
  };
    if ((event.body.toLowerCase() == "kệ mày") || (event.body.toLowerCase() == "kệ mẹ mày")) {
    return api.sendMessage("kệ tao thì kệ mày 😏", threadID);
  };
    if ((event.body.toLowerCase() == "sợ") || (event.body.toLowerCase() == "sợ à")) {
    return api.sendMessage("Từ lớp 1 đến lớp 5 tao còn chưa sợ. Cậy gì đầu buồi lớp 7 như mày.", threadID);
  };
    if ((event.body.toLowerCase() == "rén") || (event.body.toLowerCase() == "rén à")) {
    return api.sendMessage("Rén cc tao đang bận đi ỉa thôi", threadID);
  };
    if ((event.body.toLowerCase() == "cút ngay") || (event.body.toLowerCase() == "cút giùm")) {
    return api.sendMessage("Cút con cặc tao ở đây ám mày nha đĩ lồn", threadID);
  };
if ((event.body.toLowerCase() == "lộn") || (event.body.toLowerCase() == "lộn rồi")) {
    return api.sendMessage("Ko sao. Trứng còn lộn huống hồ gì con người", threadID);
  };
    if ((event.body.toLowerCase() == "cmm") || (event.body.toLowerCase() == "cm")) {
    return api.sendMessage("Chửi mẹ ngta thế mày vui lắm hay gì 😏", threadID);
  };
    if ((event.body.toLowerCase() == "má") || (event.body.toLowerCase() == "má nó")) {
    return api.sendMessage("Ơi ơi má đây con. Về má cho bú", threadID);
  };
if ((event.body.toLowerCase() == "kệ chị") || (event.body.toLowerCase() == "kệ em")) {
    return api.sendMessage("Kệ con cặc anh em với nhau. Quan tâm xíu đi", threadID);
  };
if ((event.body.toLowerCase() == "kệ anh") || (event.body.toLowerCase() == "kệ con")) {
    return api.sendMessage("Kệ kệ cái đầu buồi. Yêu thương nhau đi", threadID);
  };
if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
    return api.sendMessage("", threadID);
  };if ((event.body.toLowerCase() == "sao mày") || (event.body.toLowerCase() == "sao em")) {
    return api.sendMessage("Sao trăng gì. Tao đang ỉa", threadID);
  };
if ((event.body.toLowerCase() == "sao chị") || (event.body.toLowerCase() == "sao anh")) {
    return api.sendMessage("Hazz. Toang rồi. Sao trăng gì nữa", threadID);
  };
if ((event.body.toLowerCase() == "dơ") || (event.body.toLowerCase() == "dơ vc")) {
    return api.sendMessage("Eo ôi khiếp thế. Tránh xa tao ra", threadID);
  };
if ((event.body.toLowerCase() == "black pink") || (event.body.toLowerCase() == "blackpink")) {
    return api.sendMessage("4 chị đẹp hát hay và là vợ em", threadID);
  };
if ((event.body.toLowerCase() == "ặc") || (event.body.toLowerCase() == "ặc ặc")) {
    return api.sendMessage("Sao zậy. Bú cu mắc nghẹn hả", threadID);
  };
if ((event.body.toLowerCase() == "cho xin đi") || (event.body.toLowerCase() == "cho tao xin")) {
    return api.sendMessage("Có làm mới có ăn. xin cái lồn", threadID);
  };
if ((event.body.toLowerCase() == "bai") || (event.body.toLowerCase() == "baiii")) {
    return api.sendMessage("Tạm biệt mày nha.", threadID);
  };
    if ((event.body.toLowerCase() == "jztr") || (event.body.toLowerCase() == "cái jztr")) {
    return api.sendMessage("Hỏi trời chứ sao hỏi tao", threadID);
  };
if ((event.body.toLowerCase() == "gà") || (event.body.toLowerCase() == "non")) {
    return api.sendMessage("Thôi về nhà ngủ đi em. Để ngta nói zậy nhục như tró", threadID);
  };
if ((event.body.toLowerCase() == "bot khùng") || (event.body.toLowerCase() == "bot điên")) {
    return api.sendMessage("Khùng điên cũng éo tới lượt mày đánh giá", threadID);
  };
if ((event.body.toLowerCase() == "ko") || (event.body.toLowerCase() == "ko có")) {
    return api.sendMessage("Ừ ừ tao biết rồi", threadID);
  };
if ((event.body.toLowerCase() == "có") || (event.body.toLowerCase() == "có nè")) {
    return api.sendMessage("Có gì, bao cao su hả. Chịch thoaiii", threadID);
  };
if ((event.body.toLowerCase() == "nhanh") || (event.body.toLowerCase() == "nhanh lên")) {
    return api.sendMessage("Từ từ hối hối cl", threadID);
  };
if ((event.body.toLowerCase() == "ê") || (event.body.toLowerCase() == "ê m")) {
    return api.sendMessage("Ê cc. Biết tao nhiêu tuổi ko mà ê", threadID);
  };
if ((event.body.toLowerCase() == "hú") || (event.body.toLowerCase() == "hú le")) {
    return api.sendMessage("Hú qq. người ko làm đi làm chó", threadID);
  };
  if ((event.body.toLowerCase() == "hai tvm") || (event.body.toLowerCase() == "hăi tvm")) {
    return api.sendMessage("Mới vào nhớ tương tác ko là ăn đạp", threadID);
  };
if ((event.body.toLowerCase() == "tt") || (event.body.toLowerCase() == "tt đi")) {
    return api.sendMessage("Đéo tương tác thì kick mẹ đi. kêu với chả gọi", threadID);
  };
if ((event.body.toLowerCase() == "cl") || (event.body.toLowerCase() == "cái lz")) {
    return api.sendMessage("Tao có 1 cái. Muốn đụ thì zô đây", threadID);
  };
if ((event.body.toLowerCase() == ":((") || (event.body.toLowerCase() == ":(((")) {
    return api.sendMessage("Sao buồn zậy. Không sao đâu mọi chuyện sẽ ổn thôi", threadID);
  };
if ((event.body.toLowerCase() == "chán") || (event.body.toLowerCase() == "chán quá")) {
    return api.sendMessage("Học bài đi. Chán chán đb", threadID);
  };
if ((event.body.toLowerCase() == "khóc") || (event.body.toLowerCase() == "chắc tao khóc")) {
    return api.sendMessage("Khóc đi khóc đi đừng ngại ngùng", threadID);
  };
  if ((event.body.toLowerCase() == "sủa") || (event.body.toLowerCase() == "sủa cc")) {
    return api.sendMessage("Mày có hiểu không mà bảo nó sủa", threadID);
  };
if ((event.body.toLowerCase() == "hazzz") || (event.body.toLowerCase() == "hazz")) {
    return api.sendMessage("How are you? Is there something wrong?", threadID);
  };
if ((event.body.toLowerCase() == "hazzzz") || (event.body.toLowerCase() == "haysss")) {
    return api.sendMessage("How are you? What happened", threadID);
  };
if ((event.body.toLowerCase() == "haiz") || (event.body.toLowerCase() == "haizz")) {
    return api.sendMessage("What's wrong. Did something happen?", threadID);
  };
if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😞")) {
    return api.sendMessage("Tell me who make you sad i wil make that person cry ?.", threadID);
  };
  if ((event.body.toLowerCase() == ":<") || (event.body.toLowerCase() == ":<<")) {
    return api.sendMessage("What's wrong with my baby? 🥺", threadID);
  };
  if ((event.body.toLowerCase() == "smoke") || (event.body.toLowerCase() == "cry here")) {
    return api.sendMessage("Cry to relieve all your sadness", threadID);
  };
if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "What's up")) {
    return api.sendMessage("In the name of Jesus everything good ", threadID);
  };
if ((event.body.toLowerCase() == "terrible") || (event.body.toLowerCase() == "so terrible")) {
    return api.sendMessage("How terrible. ebe scared. awwwwwww", threadID);
  };
  if ((event.body.toLowerCase() == "aww") || (event.body.toLowerCase() == "awww")) {
    return api.sendMessage("Why are you so angry? die in a place that is not fair", threadID);
  };
if ((event.body.toLowerCase() == "awwww") || (event.body.toLowerCase() == "awwwwww")) {
    return api.sendMessage("What's so terrible? I'm so confused", threadID);
  };
  if ((event.body.toLowerCase() == "like") || (event.body.toLowerCase() == " ")) {
    return api.sendMessage("Like a sad head. ", threadID);
  };
  if ((event.body.toLowerCase() == "Horror") || (event.body.toLowerCase() == "Wow")) {
    return api.sendMessage("Too disgusting 😁😁", threadID);
  };
if ((event.body.toLowerCase() == "fuck") || (event.body.toLowerCase() == "pek you")) {
    return api.sendMessage("So stupid. Fuck anything", threadID);
  };
if ((event.body.toLowerCase() == "dont play") || (event.body.toLowerCase() == "don't like it")) {
    return api.sendMessage("Come, my friend. What are you shy about?", threadID);
  };
if ((event.body.toLowerCase() == "Stop") || (event.body.toLowerCase() == "that's it")) {
    return api.sendMessage("Stop what? We only live once in this world", threadID);
};
if ((event.body.toLowerCase() == "stop mom") || (event.body.toLowerCase() == "stop it my friend")) {
    return api.sendMessage("Stop what. Come now", threadID);
  };
if ((event.body.toLowerCase() == "die") || (event.body.toLowerCase() == "damn")) {
    return api.sendMessage("Say goodbye to life. Life is miserable", threadID);
  };
  if ((event.body.toLowerCase() == "dead father") || (event.body.toLowerCase() == "I'm dead")) {
    return api.sendMessage("Please say goodbye. Rest in peace", threadID);
  };
  if ((event.body.toLowerCase() == "insist") || (event.body.toLowerCase() == "beg")) {
    return api.sendMessage("Begging cc. Get a gun and shoot it, mom will give it to you", threadID);
  };
if ((event.body.toLowerCase() == "flop vc") || (event.body.toLowerCase() == "flop vl")) {
    return api.sendMessage("If you flop, give me the key and I'll kick them all so you can recruit someone else", threadID);
  };
  if ((event.body.toLowerCase() == "crazy") || (event.body.toLowerCase() == "Are you crazy")) {
    return api.sendMessage("Send him to the hospital. Let me call 113", threadID);
  };
  if ((event.body.toLowerCase() == "gay") || (event.body.toLowerCase() == "gay")) {
    return api.sendMessage("Never mind, why are you so disrespectful?👎🏿", threadID);
  };
  if ((event.body.toLowerCase() == "im mouth") || (event.body.toLowerCase() == "hold back")) {
    return api.sendMessage("You have a barking mouth. You tell me to keep quiet", threadID);
  };
if ((event.body.toLowerCase() == "boss") || (event.body.toLowerCase() == "cluster")) {
    return api.sendMessage("The boss is soft, what kind of cheeks is the boss? I'm the boss", threadID);
  };
if ((event.body.toLowerCase() == "boss") || (event.body.toLowerCase() == "tao là trùm")) {
    return api.sendMessage("Boss, do you feel like you have to vomit? I'm the boss", threadID);
  };
if ((event.body.toLowerCase() == "boss") || (event.body.toLowerCase() == "box boss")) {
    return api.sendMessage("Shut up. I'm the boss", threadID);
  };
if ((event.body.toLowerCase() == "matter") || (event.body.toLowerCase() == "cHave you thrown it yet?")) {
    return api.sendMessage("Too cool. The quality is like refrigerator. Ah, wrong distilled water", threadID);
  };
if ((event.body.toLowerCase() == "too cool") || (event.body.toLowerCase() == "depose")) {
    return api.sendMessage("You're so full of love, my friend. You are the best", threadID);
  };
if ((event.body.toLowerCase() == "oẹ") || (event.body.toLowerCase() == "ow ow")) {
    return api.sendMessage("It's so ugly, why is it so bad? But I admit it's ugly =)))", threadID);
  };
  if ((event.body.toLowerCase() == "easy") || (event.body.toLowerCase() == "easy")) {
    return api.sendMessage("Easy cock. Who can say it? 😏", threadID);
  };
if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
    return api.sendMessage("If it's okay then say it. my pwet icon 😏", threadID);
  };
  if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "😊")) {
    return api.sendMessage("I looked at the icon and thought it was okay", threadID);
  };
  if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😼")) {
    return api.sendMessage("Smirking his cock. Who are you planning to fuck?", threadID);
  };
  if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😂")) {
    return api.sendMessage("Laugh just enough. Tears and runny nose are so bad", threadID);
  };
if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😍")) {
    return api.sendMessage("I know I'm beautiful. Ahihi", threadID);
  };
if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😁")) {
    return api.sendMessage("Smile like that so I can laugh with you 😁😁😁", threadID);
  };
  if ((event.body.toLowerCase() == "?") || (event.body.toLowerCase() == "!")) {
    return api.sendMessage("Lệnh là . mày dùng cái đéo gì vậy", threadID);
  };
if ((event.body.toLowerCase() == "/") || (event.body.toLowerCase() == ",")) {
    return api.sendMessage("Lệnh là . mày dùng cái đéo gì vậy", threadID);
  };
if ((event.body.toLowerCase() == "#") || (event.body.toLowerCase() == "+")) {
    return api.sendMessage("Lệnh là . mày dùng cái đéo gì vậy", threadID);
  };
  if ((event.body.toLowerCase() == "wthanh") || (event.body.toLowerCase() == "wall")) {
    return api.sendMessage("===A few words about Wthanh===\n🇹​🇭​🇦​🇳​🇭\n 🇩​🇪​🇵\n 🇹​🇷​🇦​🇮\n 🇻​🇱​", threadID);
  };
  if ((event.body.toLowerCase() == "itself") || (event.body.toLowerCase() == "Cloud")) {
    return api.sendMessage("==>Đôi lời nói về tvan<==\nxιηн đε̣ρ\n cυтε\n ∂αм ∂αηg\n đάηg үε̂υ vcℓ", threadID);
  };
  if ((event.body.toLowerCase() == "valve bar") || (event.body.toLowerCase() == "there is")) {
    return api.sendMessage("•••• Đôi lời về tvan ••••\nⓍⒾⓃⒽ ⒹⒺⓅ\n ⒸⓊⓉⒺ\n ⒹⒶⓂ ⒹⒶⓃⒼ\n ⒹⒶⓃⒼ ⓎⒺⓊ ⓋⒸⓁ", threadID);
  };
  if ((event.body.toLowerCase() == "gentle girl") || (event.body.toLowerCase() == "@Maria is gentle and gentle")) {
    return api.sendMessage("🍁🍁🍁 A few words about tphong🍁🍁🍁🅡ố🅘 🅛🅞ạ🅝 🅒ươ🅝🅖 🅓ươ🅝🅖\n🅧🅤ấ🅣 🅣🅘🅝🅗 🅢ớ🅜\n🅣🅗ầ🅝 🅚🅘🅝🅗 🅟🅗â🅝 🅛🅘ệ🅣\n🅥🅘ê🅜 🅜à🅝🅖 🅣ú🅘/n🅣🅗ườ🅝🅖 🅧🅤🅨ê🅝 🅝ứ🅝🅖 🅒ặ🅒\n============================", threadID);
  };
  if ((event.body.toLowerCase() == "bear") || (event.body.toLowerCase() == "I agree")) {
    return api.sendMessage("I agree too. I can't stop its stupidity", threadID);
  };
if ((event.body.toLowerCase() == "me") || (event.body.toLowerCase() == "moa")) {
    return api.sendMessage("I'm here, baby. Back to the mother to breastfeed", threadID);
  };
  if ((event.body.toLowerCase() == "withered") || (event.body.toLowerCase() == "noble traveler")) {
    return api.sendMessage(" 🏵️🏵️🏵️Đôi lời về tqb🏵️🏵️🏵️\n 🅗ã🅜 🅛ồ🅝\n 🅨ế🅤 🅢🅘🅝🅗 🅛ý\n 🅣🅡ẻ 🅣🅡â🅤\n 🅢á🅣 🅑🅞🅘\n 🅟🅔🅣 🅒ủ🅐 🅣🅥🅐🅝\n💮💮💮But handsome💮💮💮", threadID);
  };
  if ((event.body.toLowerCase() == "travel") || (event.body.toLowerCase() == "noble literature")) {
    return api.sendMessage("🏵️🏵️🏵️ĐOh word about tqb🏵️🏵️🏵️\n 🅗ã🅜 🅛ồ🅝\n 🅨ế🅤 🅢🅘🅝🅗 🅛ý\n 🅣🅡ẻ 🅣🅡â🅤\n 🅢á🅣 🅑🅞🅘\n 🅟🅔🅣 🅒ủ🅐 🅣🅥🅐🅝", threadID);
  };
  if ((event.body.toLowerCase() == "tp") || (event.body.toLowerCase() == "wind")) {
    return api.sendMessage("🍁🍁🍁 A few words about wind🍁🍁🍁\n🅡ố🅘 🅛🅞ạ🅝 🅒ươ🅝🅖 🅓ươ🅝🅖\n🅧🅤ấ🅣 🅣🅘🅝🅗 🅢ớ🅜\n🅣🅗ầ🅝 🅚🅘🅝🅗 🅟🅗â🅝 🅛🅘ệ🅣\n🅥🅘ê🅜 🅜à🅝🅖 🅣ú🅘\n🅣🅗ườ🅝🅖 🅧🅤🅨ê🅝 🅝ứ🅝🅖 🅒ặ🅒\n============================", threadID);
  };
  if ((event.body.toLowerCase() == "slimy") || (event.body.toLowerCase() == "rot")) {
    return api.sendMessage("Please get out of my way. I'm smelling so good.", threadID);
  };
  if ((event.body.toLowerCase() == "key") || (event.body.toLowerCase() == "give key")) {
    return api.sendMessage("Key your bald head, are you planning on stealing my box? Dream on, honey 😏", threadID);
  };
  if ((event.body.toLowerCase() == "z huh") || (event.body.toLowerCase() == "really")) {
    return api.sendMessage("But what's the matter, you moron?", threadID);
  };
if ((event.body.toLowerCase() == "xin key") || (event.body.toLowerCase() == "give key")) {
    return api.sendMessage("Do you like the key? Look at yourself, do you deserve it? 😏", threadID);
  };
  if ((event.body.toLowerCase() == "What is the sixth key?") || (event.body.toLowerCase() == "give me the key")) {
    return api.sendMessage("don't give it to him. It's old pussy with key 😏", threadID);
  };
  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hii")) {
    return api.sendMessage("Chào cậu nha ( ˘ ³˘)♥", threadID);
  };
  if ((event.body.toLowerCase() == "hiiii") || (event.body.toLowerCase() == "hiiiii")) {
    return api.sendMessage("Hello (๑˙❥˙๑)", threadID);
  };
if ((event.body.toLowerCase() == "pp mn") || (event.body.toLowerCase() == "Hello mn")) {
    return api.sendMessage("Everyone please say hello. He went peacefully", threadID);
  };
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
    return api.sendMessage("Glaring at the cock. Gouge your eyes now", threadID);
  };
if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🧐")) {
    return api.sendMessage("This afternoon's lottery number is 78. Listen to me without thinking", threadID);
  };
  if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤭")) {
    return api.sendMessage("Tell me something, mom. Secret with honey rolls", threadID);
  };
  if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "😟")) {
    return api.sendMessage("Stop showing that expression in front of me. no results /awwwwww so cute/", threadID);
  };
  if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "😕")) {
    return api.sendMessage("What's wrong, Bae? Whatever you're sad about, just talk to everyone here (●´⌓`●)", threadID);
  };
  if ((event.body.toLowerCase() == "🌚") || (event.body.toLowerCase() == "🌝")) {
    return api.sendMessage("Something something. Brighten up", threadID);
  };
if ((event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😥")) {
    return api.sendMessage("What are you worried about, bae? It's okay, everything will be okay", threadID);
  };
if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😡")) {
    return api.sendMessage("Damn it, damn it. Who makes you angry?", threadID);
  };
if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😲")) {
    return api.sendMessage("Surprise w(°ｏ°)w", threadID);
  };
  if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😛")) {
    return api.sendMessage("Cut your tongue now. Lol ", threadID);
  };
  if ((event.body.toLowerCase() == "scare") || (event.body.toLowerCase() == "hey hey")) {
    return api.sendMessage("Scare qq. I'm not afraid, kakaka", threadID);
  };
   if ((event.body.toLowerCase() == "bot crazy") || (event.body.toLowerCase() == "crazy")) {
    return api.sendMessage("I'm crazy, I'm crazy, ignore my mother. What's wrong with you, babe?", threadID);
  };
   if ((event.body.toLowerCase() == "bot leave") || (event.body.toLowerCase() == "leper bot")) {
    return api.sendMessage("Is that okay? Better than someone as short and ugly as you", threadID);
  };
   if ((event.body.toLowerCase() == "bot Hey") || (event.body.toLowerCase() == "fake bot etc")) {
    return api.sendMessage("No matter where you go, just look. I'm not funny", threadID);
  };
   if ((event.body.toLowerCase() == ";.;") || (event.body.toLowerCase() == ";-;")) {
    return api.sendMessage("What kind of expression, do you like to be punched?", threadID);
  };
   if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hmmm")) {
    return api.sendMessage("Don't think any more, this afternoon's lottery came out 47. Bang immediately until it's hot", threadID);
  };
   if ((event.body.toLowerCase() == "xin  off") || (event.body.toLowerCase() == "xin out")) {
    return api.sendMessage("Hello there. Come back and play with me when you have time ", threadID);
  };
   if ((event.body.toLowerCase() == "What's up") || (event.body.toLowerCase() == "sao")) {
    return api.sendMessage("What stars and moon are in this range? I guess I ran out of fai fai deposit money again", threadID);
  };
   if ((event.body.toLowerCase() == "dcm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("Come and fuck me. How much cock do you want to fuck my mother?", threadID);
  };
   if ((event.body.toLowerCase() == "cunt bot") || (event.body.toLowerCase() == "cock bot")) {
    return api.sendMessage("If so, show it to your dad", threadID);
  };
   if ((event.body.toLowerCase() == "rude") || (event.body.toLowerCase() == "lose your temper")) {
    return api.sendMessage("Something like it should dig into its beak. Don't let spawn", threadID);
  };
   if ((event.body.toLowerCase() == "Oh") || (event.body.toLowerCase() == "ok")) {
    return api.sendMessage("Surprise. kekekekekeke", threadID);
  };
   if ((event.body.toLowerCase() == "Sad") || (event.body.toLowerCase() == "Sad vl")) {
    return api.sendMessage("nothing but sad. cheer up. There is not much life to be indifferent", threadID);
  };
   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "so sad")) {
    return api.sendMessage("nothing but sad. cheer up. There is not much life to be indifferent", threadID);
  };
   if ((event.body.toLowerCase() == "huhu") || (event.body.toLowerCase() == "huhuhu")) {
    return api.sendMessage("If you're stupid, you'll die crying and sad", threadID);
  };
  if ((event.body.toLowerCase() == "hic") || (event.body.toLowerCase() == "here")) {
    return api.sendMessage("If you're stupid, you'll die crying with a sad head", threadID);
  };
  if ((event.body.toLowerCase() == "pretty") || (event.body.toLowerCase() == "pretty")) {
    return api.sendMessage("Then she is definitely my wife kekekekeke. Love chị <3", threadID);
  };
  if ((event.body.toLowerCase() == "so cute") || (event.body.toLowerCase() == "xinh nha")) {
    return api.sendMessage("Then she is definitely my wife kekekekeke. Love her <3", threadID);
  };
  if ((event.body.toLowerCase() == "In tư admin ") || (event.body.toLowerCase() == "In4 admin ")) {
    return api.sendMessage("Its Maria Tj my boss ", threadID);
  };
  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "Who is Adbot?")) {
    return api.sendMessage(" Why don't you tell the beautiful admin that she's sleeping, don't disturb her ", threadID);
  };
  if ((event.body.toLowerCase() == "Pretty") || (event.body.toLowerCase() == "so beautiful")) {
    return api.sendMessage("So I fell in love with you at first sight. Marry me <3", threadID);
  };
  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
    return api.sendMessage("", threadID);
  };
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }