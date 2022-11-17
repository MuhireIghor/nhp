import MenStaff from '../assets/nhnMenStaff.png'
const WorkPlace = ()=>{
    return(
        <div className="flex items-between justify-between h-[32rem] bg-[#E5E5E5] gap-4 p-4">
            <div className='bg-[#C4C4C4] flex flex-col items-center justify-center relative'>
<div className="flex flex-col w-full  bg-black items-center justify-center -mr-16 p-12 gap-8 ">
<p className="text-white">LET'S  WORK  TOGETHER</p>
<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis scelerisque pharetra molestie eget ultrices massa nibh odio turpis. </p>
<button className="bg-[#C4C4C4] text-black p-6 mt-4 rounded-[10px] text-[24px] ">LET'S CHAT</button>
</div>
            </div>
<div className="flex flex-col w-full h-full items-end ">
    <img src={MenStaff} className="w-2/3 h-full" />
</div>
        </div>
    )

}
export default WorkPlace;