let btn = document.querySelector('#btn')
let content = document.querySelector('#content')
let voice = document.querySelector('#voice')
function speak (text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang='hi-IN'
    window.speechSynthesis.speak(text_speak)
}
function wishme(){
    let day = new Date()
   let hours =  day.getHours()
   console.log(hours)
   if(hours>=0 && hours<12){
       speak("Good Morning sandhya")
   }
   else if(hours>=12 && hours<16){
       speak("Good Afternoon sandhya")
   }
   else{
       speak("Good Evening sandhya")
   }
}
//  window.addEventListener('load',()=>{
//    wishme()
// })
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new SpeechRecognition()

recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;


recognition.onstart=()=>{
    console.log("voice is activated, you can speak to me")
}
recognition.onerror=(e)=>{
    console.log("error:",e.error)
}
recognition.onresult=(event)=>{
    
    
     let currentIndex = event.resultIndex
     let transcript=event.results[currentIndex][0].transcript
        content.innerText = transcript
        takecommand(transcript.toLowerCase())
    console.log(event)
}
btn.addEventListener('click',()=>{
    recognition.start()
    btn.style.display='none'
    voice.style.display='block'
})
function takecommand(message){
    btn.style.display='flex'
    voice.style.display='none'
    message=message.toLowerCase()
    if(message.includes('hello') || message.includes('hi')){
        speak("hello sandhya, how can i help you?")
    }
    else if (message.includes('who are you')){
        speak("I am your personal assistant , created by sandhya mam")
    }
    else if (message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com","_blank")
    }
    else if (message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com","_blank")
    }
    else if (message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com","_blank")
    }
    else if (message.includes("open instagram")){       
        speak("opening instagram...")
        window.open("https://www.instagram.com","_blank")
    }
    else if (message.includes("open calculator")){       
        speak("opening calculator...")
        window.open("https://www.desmos.com/scientific","_blank")
    }

    else{
        let finaltext="this is what i found on internet regarding"+ message.replace("shipra","") || message.replace("shifra","")

        speak(finaltext) 
        window.open(`https://www.google.com/search?q=${message.replace("shifra","") || message.replace("shifra","")}`,"_blank")
    }
}