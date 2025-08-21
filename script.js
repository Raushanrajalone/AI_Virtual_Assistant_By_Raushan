let bt = document.querySelector("#bt");
let text = document.querySelector("#text");
let voice = document.querySelector("#voice");

function speak(tet) {
    let tet_speak = new SpeechSynthesisUtterance(tet);

    tet_speak.rate = 1;   // Speed
    tet_speak.pitch = 1;  // Pitch
    tet_speak.lang = "hi-GB";

    // Get available voices
    let voices = window.speechSynthesis.getVoices();
    window.speechSynthesis.speak(tet_speak);
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Mornning Friend")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Friend")
    }else{
        speak("Good Evening Friend")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
   let transcript=event.results[currentIndex][0].transcript
   text.innerText=transcript
   tekeCommand(transcript.toLowerCase())
}
bt.addEventListener("click",()=>{
    recognition.start()
    bt.style.display="none"
    voice.style.display="block"
})
function tekeCommand(tock){
    bt.style.display="flex"
    voice.style.display="none"
    if(tock.includes("hello")||(tock.includes("hey"))){
        speak("hello Friend,how can i help you?")
    }
        else if(tock.includes("hu r u")){
        speak("i am Tara your virtual assistant,created by Raushan kumar")
    }
     else if(tock.includes("who are you")){
        speak("i'm Tara your virtual assistant,created by Raushan kumar")
    }
     else if(tock.includes("name")){
        speak("my name is Tara,created by Raushan kumar")
    }
    else if(tock.includes("kaun")){
        speak("Mera naam Tara hai,aur hamko Raushan kumar ne banaya hai")
    }
     else if(tock.includes("love")){
        speak("sorry,Mai love nahi kar sakti")
    }
    else if(tock.includes("kyon")){
        speak("Kyon ki mai virtual assistent hun")
    }
    else if(tock.includes("kahan")){
        speak("Main virtual assistant hun ,isliye  main internet pe rahti hun")
    }
    else if(tock.includes("from")){
        speak("i'm from internet beacause i am virtual assistent")
    }
    else if(tock.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/")
    }
    else if(tock.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
     else if(tock.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/")
    }
     else if(tock.includes("open chrome")){
        speak("opening chrome...")
        window.open("https://www.Chrome.google.com/")
    }
     else if(tock.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/")
    }
     else if(tock.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/")
    }
         else if(tock.includes("open WhatAspp")){
        speak("opening WhatAspp...")
        window.open("WhatAspp://")
    }
    else if(tock.includes("time")){
        let time =new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(tock.includes("date")){
        let date =new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)
    }
    else {
    let finalText = `Here are the results for ${tock.replace("thara", "").replace("tara", "")}`;
    speak(finalText);
    window.open(`https://www.google.com/search?q=${tock.replace("thara", "").replace("tara", "")}`, "_blank");
}
}


