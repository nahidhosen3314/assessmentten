import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);

    useEffect(()=> {
        fetch("https://happy-travel-server-seven.vercel.app/countries")
        .then((res) => res.json())
        .then((data) => {
            setCountries(data)
            setLoading(false)
        });
    }, [loading, setLoading])

    return (
        <div className="py-20 container">
            <h3 className="mb-4">Popular Countries</h3>
            {loading ? (
                <div className="text-center">
                    Loading{" "}
                    <span className="loading loading-spinner loading-xs"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {countries?.map((country) => {
                        return (
                            <Link
                                to={`/countries/${country.country}`}
                                className="relative overflow-hidden group"
                                key={country._id}
                            >
                                <img
                                    className="absolute h-full w-full left-0 top-0 object-cover group-hover:scale-110 duration-500"
                                    src={country.image_url}
                                    alt={country.country}
                                />
                                <div className="absolute h-1/2 w-full left-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="relative px-6 pb-6 pt-40">
                                    <h4 className="text-white mb-4">
                                        {country.country}
                                    </h4>
                                    <p className="text-white text-base line-clamp-3">
                                        {country.description.slice(0, 150)}...
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Countries;
