import { useContext, useEffect, useState } from "react";
import TouristSpotCard from "./TouristSpotCard";
import { AuthContext } from "../providers/AuthProvider";

const RecentTouristSpots = () => {
    const [tourists, setTourists] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        fetch("https://happy-travel-server-seven.vercel.app/tourists")
            .then((res) => res.json())
            .then((data) => {
                setTourists(data);
                setLoading(false);
            });
    }, [loading, setLoading]);

    return (
        <div className="bg-gray-100 dark:bg-slate-600 py-10 md:py-20">
            <div className="container">
                <h3 className="mb-4">Recent Tourist Places</h3>
                {loading ? (
                    <div className="text-center">
                        Loading{" "}
                        <span className="loading loading-spinner loading-xs"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-7">
                        {tourists.slice(0, 6).map((item, idx) => (
                            <TouristSpotCard
                                key={idx}
                                data={item}
                            ></TouristSpotCard>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecentTouristSpots;
