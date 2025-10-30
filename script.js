const funnyPredictions = [
    "2030 tak tumhari crush tumhare story react karegi... ek baar 😜",
    "Tumhare pyaar life mai aayega, par Wi-Fi ke signal se slow hoga 💔📶",
    "Future mai tumhari shaadi hogi… par shaadi.com wale bhi shock ho jayenge 😆",
    "Aliens ne bola — ‘ye toh sigma for our galaxy’ 🛸💪",
    "Tumhara soulmate abhi bhi Netflix pe timepass kar raha hai 🍿😂",
    "Tum apni hi story per heart react karego 💔😂",
    "System ne bola: ‘isko girlfriend dena illegal hai, ye overload ho jayega’ 💘💀",
    "Temhara future itna bright hai ki sunglasses free milne chahiye 😎🕶️",
    "Tumhara future itna dark hai ki sunscreen bhi dare kare 🌞🔥",
    "2030 mai tum itna rich banoge ki calculator bhi respect karega 💸",
    "2035 mai tum gym jaane ka plan banayege… aur wahi tak rahego 🏋️‍♂️🛏️",
    "Tum coding karego, duniya dekhegi 💻🔥",
    "NASA ne bola — ‘isko study karna zaroori hai, logic se pare hai’ 🚀🤯",
    "2035 tak tum Elon Musk ko memes bhej rahe hoge 🚀😂",
    "System ne bola — ‘reality buffering... try again later’ 😵💫",
    "Tumhara luck Google ke algorithm se bhi unpredictable hai 🔍🤣",
    "System ne bola — 2030 mai duniya khatam hai, tum fir bhi late uth rahe hoge 😴😂",
    "Aliens ne confirm kiya — tum unke favourite human hai 👽🫡",
    "Tumhara dimaag quantum computer se fast chalega… kabhi kabhi 🤯",
    "Tumhara sleep schedule aur Pluto ka orbit same hai — unpredictable 😴🌌",
    "Tum per ek biopic banegi — 'The Legend of Laziness' 🎬😂",
    "Tumhara future mai 99% chance hai ki tum kahin na kahin overthink karego 🤔💭",
    "2033 mai tum bol rahe hoge — ‘bas ek aur chance’... life ke sab topic pe 😭💫",
    "System calling ISRO... ISRO bola: ‘hum bhi confuse hai bhai’ 🛰️😵‍💫",
    "Time machine crash ho gayi — tumhare future ke vibes overload the 💫💀",
    "System analyzing aura... result: full-time legend, part-time clown 🤡🔥",
    "Tumhari love story likhi gayi thi — by ChatGPT beta version 🥲🤖",
    "Tumhari destiny script hone se pehle developer ne bola — ‘bhagwan bachaye’ 💻🙏",
];

const loadingSteps = [
    "Connecting to your soul server 🧘‍♂️...",
    "Calling NASA, ISRO aur Mars aliens 👽...",
    "Activating time machine 2077 ⏳...",
    "Analyzing your crush data 💞...",
    "Decrypting future files 🔐...",
    "Calculating vibes using quantum AI 🤖...",
    "Almost done... grabbing coffee ☕...",
    "Prediction ready! 😎"
];

function predictFuture() {
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const loading = document.getElementById("loading");
    const output = document.getElementById("output");

    loading.innerHTML = "";
    output.innerHTML = "";

    if (!name || !dob || !gender) {
        output.innerHTML = "Please fill all details pehle 😅";
        return;
    }

    let step = 0;
    const interval = setInterval(() => {
        if (step < loadingSteps.length - 2) {
            // Show each line briefly then remove
            loading.innerHTML = loadingSteps[step];
            step++;
        } else if (step === loadingSteps.length - 2) {
            // Show last two lines and keep them
            clearInterval(interval);
            loading.innerHTML = `${loadingSteps[step]}<br>${loadingSteps[step + 1]}`;
            setTimeout(() => {
                loading.innerHTML += `<br><br>✨ ${name}, your future prediction is: ✨<br>`;
                const random = funnyPredictions[Math.floor(Math.random() * funnyPredictions.length)];
                output.innerHTML = "<strong>" + random + "</strong>";
            }, 1500);
        }
    }, 1000);
}
