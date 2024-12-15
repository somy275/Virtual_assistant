import Virtualassistant from "./Virtualassistant";
import { useRef } from "react";
import { useState } from "react";
import aiVoice from "./assets/aiVoice.gif"
const Virtualai = () => {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const [mic, setmic] = useState(false);
  let value=[ref,mic,ref1,ref2,ref3];
  return (
    <>
    <div className="h-screen w-screen relative flex justify-center">
    <img src="/src/assets/iron-man-jarvis-desktop-l35dno2i63e8fd7m.jpg" className="w-[auto] h-[max(50%,100vw)] lg:h-[77%] min-[450px]:bottom-[max(-10em,3vw)] max-h-[50rem] bottom-[-7%] relative lg:bottom-[1rem] object-cover bg-center" alt="Jarvis"></img>
<img ref={ref} src="/src/assets/3459e0e117b5d35a51aef0cf1e443831.gif" className="absolute bottom-[18%] min-[450px]:bottom-[7%] h-[20%] w-[auto] min-[450px]:h-[max(12rem,18vw)] min-[450px]:max-h-[18rem] lg:h-[calc(8rem+1vw)] lg:max-h-[12rem] lg:min-h-[7rem] min-[450px]:min-h-[12rem] object-cover hidden" alt="listening"></img>
<img ref={ref2} className="h-[40vw] w-[23rem] min-[450px]:w-[max(25rem,75vw)] min-[450px]:h-[15rem] min-[450px]:bottom-[2.2vh] lg:w-[calc(31rem+2vw)] lg:h-[min(15vw,30vh)]  absolute bottom-[16vh] hidden" src={aiVoice} alt="Response"></img>
<button ref={ref1} type="button" className="bg-[#9B7637] h-[2.2rem] w-[5rem] min-[450px]:w-[calc(5rem+4vw)] min-[450px]:h-[calc(2rem+2.2vw)] lg:w-[calc(4.5rem+1vw)] lg:h-[calc(2rem+0.5vw)] rounded-lg absolute bottom-[25%] min-[450px]:bottom-[13%] flex items-center justify-center active:scale-[0.9] transition-all duration-100" onClick={() =>setmic(!mic) } title="Click to start mic">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[1.9em] w-[1.5em] min-[450px]:w-[max(1.9rem,3.7vw)] min-[450px]:h-auto lg:w-[calc(1rem+1vw)]  text-[#251106]"><path d="M11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z"></path></svg>
</button>
<span className="absolute bottom-[2%]">
  <h5 ref={ref3} className="text-white  h-[6.5rem] min-[450px]:h-[3rem] lg:h-auto max-w-[90vw] min-[450px]:text-[clamp(1.2rem,calc(.2787vw+1.3216rem),1.3rem)] lg:text-[calc(0.8rem+0.1vw)] hidden">listening...</h5>
</span>
    </div>
    <Virtualassistant value={value} />
    </>
  )
}
export default Virtualai
