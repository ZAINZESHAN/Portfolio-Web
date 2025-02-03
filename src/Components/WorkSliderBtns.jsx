import { useSwiper } from "swiper/react";

const WorkSliderBtns = () => {
    const swiper = useSwiper();

    return (
        <div className="flex gap-2 absolute right-0 bottom-2 md:bottom-0 lg:bottom-5 items-end z-20 w-auto">
            <button
                className="text-[#1c1c22] bg-accent hover:bg-accent text-[24px] w-[24px] h-[24px] md-w-[30px] lg:w-[35px] md:h-[25px] lg:h-[35px] flex justify-center items-center transition-all"
                onClick={() => swiper.slidePrev()}
                aria-label="Previous Slide"
            >
                <i className="ri-arrow-left-s-line"></i>
            </button>
            <button
                className="text-[#1c1c22] bg-accent hover:bg-accent text-[24px] w-[24px] h-[24px] md-w-[30px] lg:w-[35px] md:h-[25px] lg:h-[35px] flex justify-center items-center transition-all"
                onClick={() => swiper.slideNext()}
                aria-label="Next Slide"
            >
                <i className="ri-arrow-right-s-line"></i>
            </button>
        </div>
    );
}

export default WorkSliderBtns;
