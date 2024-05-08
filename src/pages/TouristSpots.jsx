import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";
import useTitle from "../components/useTitle";
import { useState } from "react";

const TouristSpots = () => {
    useTitle({ title: "All Tourist Spots" });
    const [sortCriteria, setSortCriteria] = useState("")

    const allTourists = useLoaderData();

    const sortingOptions = [
        { label: "Sort by price", value: "" },
        { label: "Sort by lowest price", value: "lowestPrice" },
        { label: "Sort by highest price", value: "HighestPrice" },
    ];

    const handleChange = (e) => {
        setSortCriteria(e.target.value)
    }

    let sortedTourists = [...allTourists]
    if(sortCriteria === "lowestPrice"){
        sortedTourists.sort((a, b) => a.avg_cost - b.avg_cost)
    }
    if(sortCriteria === 'HighestPrice'){
        sortedTourists.sort((a, b) => b.avg_cost - a.avg_cost)
    }

    return (
        <div className="py-20">
            <div className="container">
                <div className="flex justify-between flex-wrap gap-5 mb-5">
                    <h2>All Tourist Spots</h2>
                    <select onChange={handleChange} className="bg-gray-300 dark:bg-slate-800">
                        {sortingOptions.map((option, idx) => (
                            <option key={idx} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-7">
                    {sortedTourists?.map((item, idx) => (
                        <TouristSpotCard
                            key={idx}
                            data={item}
                        ></TouristSpotCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TouristSpots;
