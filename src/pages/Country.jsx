import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";
import { AuthContext } from "../providers/AuthProvider";

const Country = () => {
    const { country, description, image_url } = useLoaderData();
    const [countrySpots, setCountrySpots] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://happy-travel-server-seven.vercel.app/tourists/country/${country}`)
            .then((res) => res.json())
            .then((data) => {
                setCountrySpots(data);
                setLoading(false);
            });
    }, [country, loading, setLoading]);

    return (
        <>
            <div className="bg-gray-100 dark:bg-slate-900 py-10 md:py-20">
                <div className="container">
                    <div className="grid sm:grid-cols-1 gap-10 md:grid-cols-2 items-center">
                        <div className="">
                            <h2 className="mb-5">{country}</h2>
                            <p className="text-base">{description}</p>
                        </div>
                        <div className="">
                            <img src={image_url} alt={country} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-10 md:py-20">
                {loading ? (
                    <div className="text-center">
                        Loading{" "}
                        <span className="loading loading-spinner loading-xs"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-7">
                        {countrySpots?.map((item, idx) => (
                            <TouristSpotCard
                                key={idx}
                                data={item}
                            ></TouristSpotCard>
                        ))}
                    </div>
                )}
                {!countrySpots.length && (
                    <div className="text-center">
                        <h4>
                            No Tourist Spot Found in <u>{country}</u>!
                        </h4>
                        <Link className="mt-8 tw-btn tw-btn-primary" to="/">
                            Back to home
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Country;
