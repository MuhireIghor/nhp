import { links } from "../data/Links";
import { adminAddress } from "../data/Links";
import { socialMedia } from "../data/Links";
const Footbar = () => {
    return (
        <div className="flex items-center px-32 py-8 justify-between bg-black text-white ">
            
            <div className="flex flex-col items-start justify-center gap-2">
                <div className="flex flex-col">
                    <p className="text-[25px] font-bold">LINKS</p>
                    <div className="flex flex-col items-start gap-1 ">
                        {links.map((link, index) => (
                            <p className="hover:underline decoration-[#C4C4C4] decoration-[1px] hover:text-[gray]" key={index}>{link}</p>
                        ))}

                    </div>
                </div>
                <div>
                    <p className="text-[25px] font-bold">Social Media</p>
                     <div className="flex gap-8 py-4">
                      {socialMedia.map((slink,index)=>(
                        <img key={index} src={slink} />
                      ))}
                        </div>       
                </div>


            </div>
 
            <div className="flex flex-col  gap-12 px-24 ">
                <p className="text-[25px] font-bold">GET IN TOUCH</p>
<div className="flex flex-col ">
    <div className="flex justify-between items-start">
        <div className="flex flex-col items-start w-full">
        <p className="text-[18px] font-semibold  ">Email</p>
        </div>
        <div className="flex flex-col items-start w-full pr-16">
        <p className="text-[18px] font-semibold ">Phone</p>
        </div>

    </div>
       {adminAddress.map((admin,index)=>(
        <div key={index} className="flex gap-16 py-4 ">
            <p>{admin.name}</p>
            <p>{admin.email}</p>

        </div>

       ))}
</div>

            </div>

        </div>
    )
}
export default Footbar;