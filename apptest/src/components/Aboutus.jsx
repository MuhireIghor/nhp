import React from "react";
import brideImage from '../assets/bride1.png'
const Aboutus = () =>{
    return(
        <div className="flex items-center items-between bg-black p-4 gap-6 ">
            <img src={brideImage} className="w-1/2 h-[30rem]" />
            <div className="bg-[#C4C4C4] w-1/3 h-[32rem] flex flex-col p-4 items-center gap-6  ">
<p className="text-black font-bold text-2xl flex  p-6">ABOUT US</p>
<p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ac nibh nullam feugiat. Accumsan vestibulum varius arcu posuere orci vitae sagittis posuere vitae.</p>
<button className="bg-black text-white p-6 mt-4 rounded-[10px]  ">LET'S CHAT</button>



            </div>

        </div>
    )
}
export default Aboutus;