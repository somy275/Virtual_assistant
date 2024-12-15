/* eslint-disable react/prop-types */
import run from "./gemini";
const Virtualassistant = ({value}) => {
        function speak(text){
            let spoken=text;
            clearTimeout(set);
        // if(text!=""){
        //      }
        value[3].current.style.display = "flex";
        value[0].current.style.display = 'none';
        let text_speak = new SpeechSynthesisUtterance(spoken);
        text_speak.lang = "en-US";
        text_speak.pitch = 1.5;
        text_speak.volume = 1;
        text_speak.rate = 0.8;
        let synth = window.speechSynthesis;
        synth.speak(text_speak);
        value[4].current.innerHTML = spoken;
        console.log(text_speak)
        text_speak.onend = () => {
            value[2].current.style.display = 'flex';
         value[3].current.style.display = 'none';
         value[4].current.innerHTML = "";
       }
    }
      
      async function response(text) {
        text=text.toLowerCase();
          let text1;
          if(text.includes("hello") || text.includes("hi") || text.includes("hey") || text.includes("who are you?")) {
            text1 = tellyourself(text);
         }
          else if(text.includes("open")){
            text1=openApps(text);
            value[4].current.innerHTML = text;
        }
        else if(text.includes("search")){
text1=searchresult(text);
        }
        else if(text.includes("date")){
            text1=showdate();    
            console.log(text1);  
        }
        else if(text.includes("time")){
text1=showtime();
        }
        else if(text.includes("day")){
            text1=showday();
        }
        else{
            text1=await run(text);
        }
        setTimeout(() => {
            speak(text1);
            },500)
}

// eslint-disable-next-line no-undef
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();


// This runs when the speech recognition service starts
recognition.onstart = function() {
    value[4].current.innerHTML = "listenning...";
    console.log(value);
    console.log("We are listening. Try speaking into the microphone.");
};
let set;
recognition.onspeechend = function() {
    // when user is done speaking
    //
    set=setTimeout(() => {
        value[2].current.style.display = 'flex';
        value[3].current.style.display = 'none';
        value[0].current.style.display = 'none';  
        value[4].current.innerHTML = "";
    },12000); 
}

// This runs when the speech recognition service returns result
recognition.onresult =async function(event) {
    let transcript = event.results[0][0].transcript;
    value[4].current.innerHTML = transcript;
    response(transcript);
};
// start recognition
if(value[1]==true){
value[2].current.style.display = 'none';
value[0].current.style.display = 'flex';
value[4].current.style.display = 'flex';
recognition.start();
}


let tellyourself=(spoken)=>{
    let text = spoken;
    if(text.includes("hello") || text.includes("hi") || text.includes("hey")){
         text = "Hello, I am your virtual assistant. How can I help you today?";
      }
      else if(text.includes("who")){
          text = "I am your virtual assistant developed by somyranjan sir."
        }
    return text;
}

//This function is for opening apps when user says open then fuction openApps is called and the app is opened

let openApps=(text)=>{
   let openning = "Opening "+text.replace(/Open/gi, "");
    let open = text.replace(/open/gi, "");
    open = open.replace(".", "");
  open=open.replaceAll(" ", "");
  open = open.replace(`${open}`, `${open}`);  
  window.open(`${open+"://"}`, '_blank');
  console.log(`${open+"://"}`);
  return openning;
}

let searchresult=(text)=>{
    let search = "Searching "+text.replace(/search/gi, "");
    search=search.replaceAll(".", "");
  window.open("https://www.bing.com/search?pglt=395&q="+`${text.replaceAll("search", "")}`, '_blank');
  return search;
}

let showdate=()=>{
    let date = new Date();
    let date1=date.toDateString()
    console.log(date1);
    return date1;
}
let showtime=()=>{
    let date = new Date();
    let date1=date.toLocaleTimeString();
    console.log(date1);
    return date1;
}
let showday=()=>{
    let date = new Date();
let date1=date.toDateString().slice(0, 3);
console.log(date1);
return "Today is "+date1;
}


  return (
    <div></div>
        
    
)
}

export default Virtualassistant