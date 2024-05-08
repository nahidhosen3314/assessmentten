const About = () => {
    return (
        <div className="py-20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="">
                        <div className="text-base uppercase text-primary mb-4">
                            THE BEST TRAVEL AGENCY
                        </div>
                        <h2 className="uppercase mb-4">
                            Discover the{" "}
                            <span className="text-primary">world</span> with our
                            guide
                        </h2>
                        <p className="text-base mb-4">
                            Our story began with a shared love for exploration
                            and a vision to create transformative travel
                            experiences that inspire, enlighten, and rejuvenate.
                        </p>
                        <p className="text-base">
                            Since our inception, we have been dedicated to
                            exceeding the expectations of discerning travelers
                            by offering tailor-made itineraries that reflect
                            their unique interests, preferences, and
                            aspirations.
                        </p>
                    </div>
                    <div className="lg:pl-20">
                        <div className="p-7 relative z-10">
                            <div className="absolute h-40 w-40 bottom-0 right-0 bg-primary -z-10"></div>
                            <div className="absolute h-40 w-40 top-0 left-0 bg-primary -z-10"></div>
                            <img
                                src="https://i.ibb.co/bdBs8Wv/beach.jpg"
                                alt=""
                                className="w-full object-cover aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
