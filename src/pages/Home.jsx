import About from "../components/About";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";
import useTitle from "../components/useTitle";
import RecentTouristSpots from "../components/RecentTouristSpots";
import Countries from "../components/Countries";

const Home = () => {
    useTitle({ title: "Home" });

    return (
        <div>
            <Hero></Hero>
            <About></About>
            <RecentTouristSpots></RecentTouristSpots>
            <Countries></Countries>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;
