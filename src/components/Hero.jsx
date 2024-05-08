import { Link } from "react-router-dom";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        fade: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="relative z-10">
            <Slider {...settings} className="relative z-0">
                <img
                    className="h-[500px] lg:h-[700px] w-full object-cover"
                    src="https://i.ibb.co/bdBs8Wv/beach.jpg"
                    alt=""
                />
                <img
                    className="h-[500px] lg:h-[700px] w-full object-cover"
                    src="https://i.ibb.co/CJCLxdS/hotel.jpg"
                    alt=""
                />
                <img
                    className="h-[500px] lg:h-[700px] w-full object-cover"
                    src="https://i.ibb.co/WDkvZ3Q/david-emrich-od-II8-Bzu-WU8-unsplash.jpg"
                    alt=""
                />
            </Slider>
            <div className="bg-slate-900/50 absolute h-full z-10 w-full left-0 top-0">
                <div className="container flex items-center justify-center h-full w-full">
                    <div className="text-center">
                        <div className="text-lg uppercase mb-4 text-white">Let&apos;s travel the world with us</div>
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl uppercase font-bold">
                            We assist to&nbsp;
                            <div className="text-white text-outline-2 !text-transparent">
                                <Typewriter
                                    words={["explore the world", "discover the world"]}
                                    loop={9999}
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                                <Cursor cursorColor='#2095AE' />
                            </div>
                        </h1>
                        <Link to="/all-tourist-spot" className="tw-btn tw-btn-primary text-xl mt-7">Explore Places</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
