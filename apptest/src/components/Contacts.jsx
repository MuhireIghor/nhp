import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
const Contacts = () => {
    return (
        <div id='Contact' className="flex flex-col p-12 bg-[#E5E5E5] ">
            <p className='text-center text-[18px] font-bold'>Contact</p>
            <p className='text-[14px] font-semibold'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
            <div className="flex justify-between p-4 md:flex-col md:gap-4 ">
                <div className="flex flex-col  gap-4 basis-1/2">
                    <div className='flex flex-col items-center justify-center gap-4 bg-[#C4C4C4] p-12 rounded-[3px] '>
                        <div className='flex flex-col justify-center items-center rounded-full w-12 h-12  border-2 border-dashed border-red-900 text-3xl '><GoLocation /></div>
                        <p className='text-center text-[18px] font-bold'>Our Address</p>
                        <p className='text-[14px] font-medium'>A108 Adam Street, Rwanda, KG 535022</p>
                    </div>

                    <div className="flex justify-between gap-4 md:gap-2" >
                        <div className="flex flex-col items-center justify-center bg-[#C4C4C4] gap-4 p-12 basis-1/2  rounded-[3px]">
                            <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 border-2 border-dashed border-red-900 text-3xl">
                                <HiOutlineMail />
                            </div>
                            <p className='text-center text-[18px] font-bold'>Email Us</p>
                            <div className='flex flex-col'>
                                <p className='text-[14px] font-medium'>mustaphairadukunda@gmail.com</p>
                                <p className='text-[14px] font-medium'>mustaphairadukunda@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center basis-1/2 bg-[#C4C4C4] gap-4 p-12  rounded-[3px]'>
                            <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 border-2 border-dashed border-red-900 text-3xl">
                                <HiOutlineMail />
                            </div>
                            <p className='text-center text-[18px] font-bold'>Call Us</p>
                            <div className='flex flex-col'>
                                <p className='text-[14px] font-medium'>+250781043617</p>
                                <p className='text-[14px] font-medium'>+250781043617</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col bg-[#C4C4C4]  p-8 items-center space-y-4' >

                    <div className='flex justify-between items-center gap-4  '>
                        <input type="text" required placeholder='Your Name' className='p-4 rounded' />
                        <input type="email" required placeholder='Your Email' className='p-4 rounded' />
                    </div>
                    <div className='w-full'>
                        <input type={'text'} placeholder="Subject" className='w-full p-4 rounded' />
                    </div>
                    <div className='w-full'>
                        <textarea placeholder='Message' className='w-full resize-none p-4 rounded' />
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <button className='bg-black text-white p-6 mt-4 rounded-[10px] w-1/2 '>Send Message</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Contacts;