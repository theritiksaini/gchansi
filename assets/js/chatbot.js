let mic = document.getElementById("mic");
let chatareamain = document.querySelector(".chatarea-main");
let chatareaouter = document.querySelector(".chatarea-outer");

let intro = ["Hello, I am Chatbot", "Hi, I am a Robo", "Hello, My name is Sofia"];

let help = ["How may i assist you?", "How can i help you?", "What i can do for you?"];

let whichBrand = ["which brand shoes do you want?", "what are you looking for?"];

let shoesType = ["Do you want sneakers running shoes or sports shoes"];

let ggreatChoice = [
    "Great choice do you want to know anything else sir",
    "very good choice do you want to know anything else sir",
];

let checkAbove = ["check student discount in home page", "yes off course"];

let closing = ["ok by by", "my pleasure sir", "thank you take care"];

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

function showusermsg(usermsg) {
    let output = "";
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
    let output = "";
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand";
    if (message.includes("hello")) {
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }

    if (message.includes("help" || "i need help")) {
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }

    if (message.includes("I want to buy shoes")) {
        let finalresult = whichBrand[Math.floor(Math.random() * whichBrand.length)];
        speech.text = finalresult;
    }

    if (message.includes("Nike shoes")) {
        let finalresult = shoesType[Math.floor(Math.random() * shoesType.length)];
        speech.text = finalresult;
    }

    if (message.includes("sneakers" || "i want sneakers")) {
        let finalresult = ggreatChoice[Math.floor(Math.random() * ggreatChoice.length)];
        speech.text = finalresult;
    }

    if (message.includes("discount" || "any discount")) {
        let finalresult = checkAbove[Math.floor(Math.random() * checkAbove.length)];
        speech.text = finalresult;
    }

    if (message.includes("ok thank you")) {
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }

    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function (e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
};
recognition.onend = function () {
    mic.style.background = "#ff3b3b";
};
mic.addEventListener("click", function () {
    mic.style.background = "#39c81f";
    recognition.start();
    console.log("Activated");
});
