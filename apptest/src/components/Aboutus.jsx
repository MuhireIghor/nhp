import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import brideImage from '../../public/WhatsApp Image 2022-10-24 at 8.31 10.png';
import camImage from '../../public/PhotoEditing.png';
import menImage from '../../public/PartyDressing.png'
const Aboutus = () => {
    return (
        <div
            id='About'
            className='flex items-start bg-black p-4 gap-6 justify-center'
        >
  
            <div className='bg-[#C4C4C4] w-1/3 h-[32rem] flex flex-col p-4 items-center gap-6  '>
                <p className='text-black font-bold text-2xl flex  p-6'>ABOUT US</p>
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
            <img src={brideImage} className='w-full h-[30rem]' />

        </div>
        <div>
            <img src={camImage} className='w-full h-[30rem]' />
    
        </div>
        <div>
            <img src={menImage} className='w-full h-[30rem]' />
        </div>
    </Carousel>
);