import { Groq } from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_KEY });

export const chatCompletion = async (comments) => {
  // Convert array of comment objects into a string
  const commentText = comments.map((c, i) => `${i + 1}. ${c.text}`).join('\n');

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `I want you to analyze these comments and divide
        them into 3 categories - agree, disagree, and neutral. Return the answer in JSON format, with the corresponding number of comments for each field. Give a concise and accurate summary from positive and negative comments, along with queries the viewers have mentioned in the comments. Also, provide any additional information from all the comments that might be useful. 
        The comments are:
        ${commentText}
        Generate the output as:   
        {
            total: (total comments in numerical value),
            positive: (positive comments in numerical value),   
            neutral: (neutral comments in numerical value),   
            negative: (negative comments in numerical value),
            positive_comments_summary:(summary of positive comments),
            negative_comments_summary: (negative comments summary), 
            queries:(list of queries mentioned in the comments),
            additional_info: (any additional information from the comments)
        }
        Respond ONLY in JSON. Do not include any explanation or markdown formatting.
        `,
      },
    ],
    model: 'deepseek-r1-distill-llama-70b',
    temperature: 0.6,
    max_completion_tokens: 4096,
    top_p: 0.95,
    stream: true,
    stop: null,
  });

  let output = "";

  for await (const chunk of completion) {
    output += chunk.choices[0]?.delta?.content || '';
  }

  return output; // returns a JSON string
};

// const test = [
//   {
//     "text": "*Correction: I made a mistake about the specs! The display for this 40mm version is 1.3\" (432 x 432) and the battery capacity is 300 mAh.\n\nThank you @HjVegter for the correction 🙏",
//     "date": "2024-10-19T11:38:33Z"
//   },
//   {
//     "text": "I am galaxy 7 watch user,  when i start workout in watch.. screen turns off and goes back to watch face instead of current workout page",
//     "date": "2025-06-13T02:11:15Z"
//   },
//   {
//     "text": "Is korean version has LGu logo on startup?",
//     "date": "2025-06-12T07:24:25Z"
//   },
//   {
//     "text": "I just bought one today ❤",
//     "date": "2025-06-08T17:53:19Z"
//   },
//   {
//     "text": "How can we download the new shapes",
//     "date": "2025-06-08T17:42:35Z"
//   },
//   {
//     "text": "This is an excellent  watch the only thing is that the battery drains fast if you keep using it, samsung needs to so something about this",
//     "date": "2025-06-03T21:50:00Z"
//   },
//   {
//     "text": "Is the gps accurate?",
//     "date": "2025-06-03T08:00:48Z"
//   },
//   {
//     "text": "How can a huawei watch last for over a week and samsung only last a day after so many years? We need to stop buy it so samsung has no choice but to improve it.",
//     "date": "2025-05-30T06:58:07Z"
//   },
//   {
//     "text": "Which Watch face you're using ?",
//     "date": "2025-05-27T23:21:16Z"
//   },
//   {
//     "text": "Really helpful, thank you!❤",
//     "date": "2025-05-27T20:47:36Z"
//   },
//   {
//     "text": "is the fall protection free",
//     "date": "2025-05-25T06:42:44Z"
//   },
//   {
//     "text": "AFTER HAVING IT FOR A WEEK WHY DOES IT KEEP TURNING ON WHILE I CHARGE IT? ALSO I DONT SEE ANYHTING A.I. ABOUT IT",
//     "date": "2025-05-19T00:41:29Z"
//   },
//   {
//     "text": "I can relate with using the \"other workout\" for strength training😅",
//     "date": "2025-05-06T22:43:27Z"
//   },
//   {
//     "text": "I got the 44mm version (and very glad I did). The 44mm version has longer battery life and the 40mm version looks like a womens watch on my wrist.",
//     "date": "2025-04-26T17:47:50Z"
//   },
//   {
//     "text": "Had the Galaxy watch 4 classic for over 3 years but I went in the sea and it stopped working. Was gonna buy the Tag Heuer connected e4 but decided against it because of poor battery life. Now I'm thinking of this, I suppose I can't go wrong for £240",
//     "date": "2025-04-20T20:42:27Z"
//   },
//   {
//     "text": "$180 ",
//     "date": "2025-04-19T14:32:32Z"
//   },
//   {
//     "text": "Excellent advice thanks!",
//     "date": "2025-04-12T18:02:29Z"
//   },
//   {
//     "text": "L310 to l315.  nothing listed. ? band maybe  ?",
//     "date": "2025-04-01T01:18:40Z"
//   },
//   {
//     "text": "Fast charging is must have if the battery life is just over 1 day . Watch should charge in the same time while you take your shower",
//     "date": "2025-03-30T15:49:28Z"
//   },
//   {
//     "text": "the only weakness now is battery life... come on SAMSUNG",
//     "date": "2025-03-27T13:31:38Z"
//   },
//   {
//     "text": "Got mine last week! It was awesome! Enjoying changing the watchface using gif!❤❤❤",
//     "date": "2025-03-26T21:30:47Z"
//   },
//   {
//     "text": "At the beginning of the video a watch face showed. What is the name of that watch face???",
//     "date": "2025-03-23T20:21:00Z"
//   },
//   {
//     "text": "Can you put this galaxy watch 7 strap on a galaxy watch 6 ?",
//     "date": "2025-03-22T09:31:33Z"
//   },
//   {
//     "text": "Does this scratch easily? Will I need a case?",
//     "date": "2025-03-21T19:26:02Z"
//   },
//   {
//     "text": "battery is too bad in all samsung watches they should increase",
//     "date": "2025-03-21T17:32:09Z"
//   },
//   {
//     "text": "So which means that Huawei watch gt5 is best in battery? My huawei gt5 can last up to 13 days on a single charge 😮",
//     "date": "2025-03-20T06:15:08Z"
//   },
//   {
//     "text": "Which watch face is this?",
//     "date": "2025-03-18T20:20:05Z"
//   },
//   {
//     "text": "Can I pair this watch on Motorola g85 and use watch to call (speak) over the watch?",
//     "date": "2025-03-15T20:25:00Z"
//   },
//   {
//     "text": "Great overview, THANKS! Battery life may be a deal breaker for me. Have to think about it...",
//     "date": "2025-03-11T09:03:32Z"
//   },
//   {
//     "text": "i found a brand new watch7 for 139usd. i love it but ye battery life sucks :<",
//     "date": "2025-03-06T19:37:58Z"
//   },
//   {
//     "text": "Is ur Watch scratched yer? Mine is already scratched by removing the band , the quality is so crap! 😭😭😭😭😭",
//     "date": "2025-03-05T12:01:37Z"
//   },
//   {
//     "text": "I wish you would have talked more about battery life. If i wear mine at night and use for fitness, the battery 🔋 life has a lot to be desired.  Can't get two days use out of mine.",
//     "date": "2025-03-03T13:16:28Z"
//   },
//   {
//     "text": "Is this 40mm? What is your wrist size?",
//     "date": "2025-03-02T12:38:13Z"
//   },
//   {
//     "text": "hello please share the power brick u use. mine always charge close to 2 hours for a full battery charge.",
//     "date": "2025-02-28T06:53:50Z"
//   },
//   {
//     "text": "Green or white ? Which color is better?",
//     "date": "2025-02-27T09:58:01Z"
//   },
//   {
//     "text": "Is Vivo active 5 better than this?",
//     "date": "2025-02-23T02:00:45Z"
//   },
//   {
//     "text": "Just bought a brand new one for 98 bucks lol, coming from a watch 4 classic 46mm the 40 mm watch 7 feels so tiny, almost like a toy, but that's gonna be an advantage because i found the watch 4 way too heavy for sleep tracking sometimes, also, although there was a lot of controversy regarding the sensors accuracy back when the watch 7 was launched I hope that with the updates it got better, it definitely should be leagues ahead when compared with the 4",
//     "date": "2025-02-08T19:32:17Z"
//   },
//   {
//     "text": "Incorrect fact about the strength exercises. It does track reps and sets. you set how many sets you wanna do and how many reps per set at the start and it will track each rep and even give a little chime (if you want) when you do a rep. And let you know when you are halfway. The it auto gives a break (which you can also set how long you want to be) then let you know when to do the next set. It's the one thing I always keep coming back to galaxy watches for is it really helps motivate me in strength workouts. Other watches are just basic glorified heart rate monitors when doing strength exercises. Even ones that do boast \"track your reps\" just guestimate how many you did at the end. Samsung actually guides you through them. Not just strength exercises either it will track reps on any workout that it can, push ups, sit ups, pull ups, stretches, pilates etc.",
//     "date": "2025-02-03T15:05:32Z"
//   },
//   {
//     "text": "3:06 how do I enable the function of generating SMS responses from AI? Tell me please.",
//     "date": "2025-02-03T06:17:03Z"
//   },
//   {
//     "text": "I upgraded from the first Galaxy Watch to the 7 44mm and I couldn’t be happier yeah I miss the rotating bezel but everything else is such a huge upgrade",
//     "date": "2025-02-02T07:39:47Z"
//   },
//   {
//     "text": "The worst GPS I've ever had.",
//     "date": "2025-02-01T16:44:36Z"
//   },
//   {
//     "text": "How to add apps like FB, Messenger, etc.\nThanks",
//     "date": "2025-01-28T20:12:50Z"
//   },
//   {
//     "text": "I preordered the S25 Ultra and it came with a free Watch 7 40mm LTE and Buds 3. Your video is so helpful! I am coming from an S22 Ultra and Watch 4 classic so its my first time using a 40mm one.\n\nHow is the battery life now? My 4 classic barely lasts a day granted that I have it for more than two years now. Also, will is it a big adjustment with the crownless watch?",
//     "date": "2025-01-26T12:28:57Z"
//   },
//   {
//     "text": "Thanks for your review has helped me. I've just bought it on amazon for UK 183 GBP, returning my huawei fit 3, this suits my lifestyle",
//     "date": "2025-01-23T12:25:10Z"
//   },
//   {
//     "text": "00:01 could you please share the face for this?",
//     "date": "2025-01-23T02:28:48Z"
//   },
//   {
//     "text": "Hey man, love your content and this video! 1 tip I can give you for your battery life is to turn off WiFi on the watch, as I found that with my galaxy watch 5, it improved the battery life to the point where I could wear it for a whole 24 hours with some exercise and wake up with enough juice to have it last a few more hours.",
//     "date": "2025-01-18T12:45:07Z"
//   },
//   {
//     "text": "I personally feel that it doesn't worth not more than 120usd",
//     "date": "2025-01-16T22:35:29Z"
//   },
//   {
//     "text": "Battery is crap",
//     "date": "2025-01-16T04:02:52Z"
//   },
//   {
//     "text": "A day and a half battery :)))) nice joke, my 4 years old huawei GT3 with all sensor on holds battery up to 10 days and without up to 14 days :))",
//     "date": "2025-01-10T02:55:54Z"
//   },
//   {
//     "text": "What??? 2 days batrery life sounds like a JOKE. I use Huawei gt-2 watch (daily wear, fitness and sleep tracking) and the battery lasts so long I can't even tell you how long it actually is because I forget when was the last time I charged it.",
//     "date": "2025-01-05T19:31:34Z"
//   },
//   {
//     "text": "How do you unlock offensive words in the Samsung Galaxy 7 smartwatch",
//     "date": "2024-12-31T06:11:05Z"
//   },
//   {
//     "text": "I get mine tomorrow! Cant wait! Its a beautiful watch with nice features, slightly larger screen, better battery and MORE storage!  Traded my watch 4 in for a good discount on shop Samsung",
//     "date": "2024-12-29T20:18:40Z"
//   },
//   {
//     "text": "Recently, I ordered galaxy watch 7 and returned due to the way too high heart rate during exercise Today I have received another one (new) because I thought maybe it was just a bad example. Well the current one has the same issue. When I just walk and my heart rate is between 70 and 80 samsung watch 7 claims my heart rate to be over 120 or even over 140 !!!!!!!!!!!! It looks like all of them have the same issue!!!!!!",
//     "date": "2024-12-29T19:18:46Z"
//   },
//   {
//     "text": "Im going to miss my watch3 rotating bezel 😢",
//     "date": "2024-12-25T15:14:55Z"
//   },
//   {
//     "text": "İ have watch 4 classic and where i can find your watchface",
//     "date": "2024-12-15T21:44:09Z"
//   },
//   {
//     "text": "Love how smooth mine is. I believe the reason for that is its 5 core processor vs its dual core predecessors.",
//     "date": "2024-12-15T14:09:56Z"
//   },
//   {
//     "text": "I was really considering to buy it. LTE version. But alot of reviewers complain about battery. Now that means with LTE will be worse🤦🏻",
//     "date": "2024-12-12T22:24:16Z"
//   },
//   {
//     "text": "green, cream or silver, which looks cooler for men?",
//     "date": "2024-12-07T08:25:51Z"
//   },
//   {
//     "text": "Yeah it's a good upgrade from the original Galaxy watch which I owned and I also got it for free so although my current watch is still going strong, I decided to use this",
//     "date": "2024-12-02T20:27:14Z"
//   },
//   {
//     "text": "Lol I use the \"other\" when I'm in my hula class which  can be strenuous.   I have a watch 5 and looking at upgrading to 7.",
//     "date": "2024-12-02T01:02:02Z"
//   },
//   {
//     "text": "Which one better? Garmin vivoactive 5 or galaxy watch 7?",
//     "date": "2024-11-30T17:07:32Z"
//   },
//   {
//     "text": "How big is tour wrist",
//     "date": "2024-11-30T06:17:01Z"
//   },
//   {
//     "text": "The blue and orange dots are ugly as hell.",
//     "date": "2024-11-29T08:22:01Z"
//   },
//   {
//     "text": "On amazon there is opreting system is listed tizen but the opreting system is watch 7 wear os, please reply why there is difference on amazon and samsung website ?",
//     "date": "2024-11-18T04:05:29Z"
//   },
//   {
//     "text": "Why is my Galaxy Watch 7 40mm battery always drop? A day always charge twice",
//     "date": "2024-11-17T05:33:02Z"
//   },
//   {
//     "text": "Can u send messages on this",
//     "date": "2024-11-13T16:39:47Z"
//   },
//   {
//     "text": "I have the watch and really like it.  The battery is similar to my old Watch 5 Pro so I have no gripes about it.  The one thing that bothers me a little is the space around the outer edge.  Why is there an open space?  I feel like it should go all the way to the outer edge of the face.",
//     "date": "2024-11-12T17:42:37Z"
//   },
//   {
//     "text": "Hi has anyone reported burning on the skin from the sensor on the back? I had this issue with a 5 series, but don't want to spend if it'll do it again to me",
//     "date": "2024-11-10T10:38:05Z"
//   },
//   {
//     "text": "Thanks for the video! Question.. do you need an additional plan for the watch or can it work just bluetoothed to a phone?",
//     "date": "2024-11-06T19:38:21Z"
//   },
//   {
//     "text": "I had apple watch and gave it away since I dont think it has much anything to it. I just got the watch 7 and so far its so nice with all the widgets and samsung health",
//     "date": "2024-11-06T12:45:40Z"
//   },
//   {
//     "text": "The only thing I don't like about this watch is that they have removed rotating bezels🥴",
//     "date": "2024-11-06T02:09:24Z"
//   },
//   {
//     "text": "The sleep tracking its just the worst i ever saw in a smartwatch",
//     "date": "2024-11-01T17:12:33Z"
//   },
//   {
//     "text": "hey is it with LTE mode ?",
//     "date": "2024-10-29T14:59:15Z"
//   },
//   {
//     "text": "I have a question can it show heart rate continuously during workout or intermittently ?? \nBecause when I standing it will not showing when I sit then it will show me ?",
//     "date": "2024-10-28T12:31:57Z"
//   },
//   {
//     "text": "Great Video... what watchface is it at 0.55 sec?",
//     "date": "2024-10-26T16:41:39Z"
//   },
//   {
//     "text": "why samsung not bring back for galaxy watch can using on IOS...\n\n😪",
//     "date": "2024-10-23T07:48:30Z"
//   },
//   {
//     "text": "this was filmed on my birthday",
//     "date": "2024-10-21T22:33:35Z"
//   },
//   {
//     "text": "I own this watch. It's great. Battery life could be better. I always use my watch to listen to podcasts without my phone on me and I get through the day but 2 days would be nicer.",
//     "date": "2024-10-20T14:22:49Z"
//   },
//   {
//     "text": "Hello, if I use this watch for constant blood pressure monitoring and nothing else, turn off always on display, how long would the battery last on full charge?",
//     "date": "2024-10-20T11:19:54Z"
//   },
//   {
//     "text": "Can my 5 series watch band fit the 7 series?",
//     "date": "2024-10-19T15:22:30Z"
//   },
//   {
//     "text": "I have the 44 version, except for the battery I have no complaints.",
//     "date": "2024-10-19T14:11:58Z"
//   },
//   {
//     "text": "I disagree with your statement about the stock watchfaces being \"meh\". I'd argue that they are the best in the android space. Most stock watchfaces from other brands like oneplus and huawei look like they are stuck in 2018 while most of the non stock watchfaces look way too cartoonish or gaudy.",
//     "date": "2024-10-19T12:44:31Z"
//   },
//   {
//     "text": "The specs you mention are for the 44mm not 40mm right? Battery for the 40mm is only 300 mah an the screen is 1.3\"",
//     "date": "2024-10-19T11:31:08Z"
//   },
//   {
//     "text": "0:55 which watch face is this?",
//     "date": "2024-10-19T10:52:20Z"
//   },
//   {
//     "text": "My biggest gripe for the non-ultra watch 7's are its poor GPS tracking accuracy (for outdoor runs) which severely overestimates distance and pace, and sub-par battery life, it won't last a long run.",
//     "date": "2024-10-19T08:36:43Z"
//   },
//   {
//     "text": "Thanks for the video, I am using Galaxy watch 4 Classic from year 2021, Am I the only one who cannot see a major difference between galaxy watch 4 and 7 when it comes to SW?",
//     "date": "2024-10-19T08:21:34Z"
//   },
//   {
//     "text": "I prefer Garmin smartwatches. They are accurate enough for health monitoring, they work with any smartphone and they have a very good battery life.\r\nI tried the Galaxy Watch 7 40mm and found that the heart rate sensor is so inaccurate that it is not really usable for health monitoring. Similarly, the blood pressure measurement is too imprecise. In the end, Garmin combines the best of both worlds: health tracking and connected features. Samsung excels in the connected watch aspect if the watch is paired with a Samsung smartphone only, but is really not up to date on the health monitoring aspect because of the inaccuracy of its biometric sensors and its too low battery life.",
//     "date": "2024-10-19T08:20:38Z"
//   },
//   {
//     "text": "Would you say upgrading from the watch 6 to the watch 7 is a good idea?",
//     "date": "2024-10-19T06:04:53Z"
//   },
//   {
//     "text": "samsung’s new watches are probably the best looking smart watches out right now.",
//     "date": "2024-10-19T04:44:36Z"
//   },
//   {
//     "text": "In the market for a new smartwatch too! Contemplating between the Galaxy Watch 7 or the Garmin Forerunner 165 (because the Vivoactive doesn't have elevation stats for cycling). Currently use a Galaxy Watch 4 but the charging is really pretty annoying hahah",
//     "date": "2024-10-18T21:17:28Z"
//   },
//   {
//     "text": "Is it better to get 7 compared to Watch 6? Do you have experience with those two?",
//     "date": "2024-10-18T15:15:23Z"
//   },
//   {
//     "text": "Is galaxy watch 6 worth in 2024",
//     "date": "2024-10-18T14:40:24Z"
//   },
//   {
//     "text": "Picking a smartwatch was way more complicated than I thought. Considering everything, what smartwatch do you think is the best out there regardless of price?",
//     "date": "2024-10-18T14:24:47Z"
//   },
//   {
//     "text": "Great video!! I'm tempted to get one now hehe 😅",
//     "date": "2024-10-18T14:22:14Z"
//   }
// ]
// Sample call
// const run = async () => {
//   const result = await chatCompletion(JSON.parse(test));
//   if (result) {
//     console.log("Result is:", result);
//   }
// };

// run();
