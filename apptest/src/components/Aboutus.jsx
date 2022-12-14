import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Aboutus = () => {
    return (
        <div
            id='About'
            className='flex items-start bg-black p-4 gap-6 justify-center mt-36'
        >
  
            <div className='bg-[#C4C4C4] w-1/3 h-[32rem] flex flex-col p-4 items-center gap-6 md:gap-4 sm:gap-2 md:p-2 sm:p-3 sm:w-2/3   '>
                <p className='text-black font-bold text-2xl flex  p-6 sm:text-start'>ABOUT US</p>
                <p className='text-md'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ac
                    nibh nullam feugiat. Accumsan vestibulum varius arcu posuere orci
                    vitae sagittis posuere vitae.
                </p>
                <button className='bg-black text-white p-6 mt-4 rounded-[10px] '>
                    LET'S CHAT
                </button>
            </div>
            <div className='flex flex-col gap-4 w-1/2'>
                <SlideShow />
            </div>
        </div>
    );
};
export default Aboutus;
export const SlideShow = () => (
    <Carousel showThumbs={false} autoPlay infiniteLoop labels={{}}
     showStatus={false} stopOnHover swipeable showIndicators={false} >
        <div>
            <img src='/WhatsApp Image 2022-10-24 at 8.31 10.png' className='w-full h-[30rem]' />

        </div>
        <div>
            <img src='/PhotoEditing.png' className='w-full h-[30rem]' />
    
        </div>
        <div>
            <img src='/PartyDressing.png' className='w-full h-[30rem]' />
        </div>
    </Carousel>
);