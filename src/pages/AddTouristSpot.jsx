import { useForm } from "react-hook-form";
import useTitle from "../components/useTitle";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AddTouristSpot = () => {
    useTitle({ title: "Add Tourist Spot" });
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm();

    const onSubmit = (data) => {
        //const { areaImage, area, country, location, description, avg_cost, seasonality, total_visitors } = data;
        data.user_id = user?.uid

        fetch("https://happy-travel-server-seven.vercel.app/tourists", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    toast.success("Added Tourist Spot Successfully!");
                    navigate(`/mylist/${user?._id}`)
                }
            });
    };

    return (
        <div className="py-10 md:py-20">
            <div className="container">
                <div className="bg-primary/10 p-5 lg:p-10 rounded">
                    <h3 className="mb-3">Add Tourist Spot</h3>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10"
                    >
                        <label className="">
                            <div className="mb-2">Spot Image URL</div>
                            <input
                                {...register("areaImage", {
                                    required: "Spot Image URL is required.",
                                })}
                                type="text"
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                            />
                            {errors.areaImage && (
                                <div className="text-red-500">
                                    {errors.areaImage.message}
                                </div>
                            )}
                        </label>
                        <label className="">
                            <div className="mb-2">Spot Name</div>
                            <input
                                {...register("area", {
                                    required: "Area name is required.",
                                })}
                                type="text"
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                            />
                            {errors.area && (
                                <div className="text-red-500">
                                    {errors.area.message}
                                </div>
                            )}
                        </label>
                        <label className="">
                            <div className="mb-2">Country Name</div>
                            <input
                                {...register("country", {
                                    required: "Country name is required.",
                                })}
                                type="text"
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                            />
                            {errors.country && (
                                <div className="text-red-500">
                                    {errors.country.message}
                                </div>
                            )}
                        </label>
                        <label className="">
                            <div className="mb-2">Location</div>
                            <input
                                {...register("location", {
                                    required: "Location is required.",
                                })}
                                type="text"
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                            />
                            {errors.location && (
                                <div className="text-red-500">
                                    {errors.location.message}
                                </div>
                            )}
                        </label>
                        <label className="col-span-full">
                            <div className="mb-2">Short Description</div>
                            <textarea
                                {...register("description")}
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800 h-32"
                            ></textarea>
                        </label>
                        <label className="">
                            <div className="mb-2">Average Cost</div>
                            <input
                                type="text"
                                {...register("avg_cost")}
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                            />
                        </label>
                        <label className="">
                            <div className="mb-2">Seasonality</div>
                            <input
                                type="text"
                                {...register("seasonality")}
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                            />
                        </label>
                        <label className="">
                            <div className="mb-2">Travel Duration</div>
                            <input
                                type="text"
                                {...register("duration")}
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                            />
                        </label>
                        <label className="">
                            <div className="mb-2">Total visitos per year</div>
                            <input
                                type="text"
                                {...register("total_visitors")}
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                            />
                        </label>
                        <label className="">
                            <div className="mb-2">Email Address</div>
                            <input
                                {...register("email")}
                                defaultValue={user?.email}
                                readOnly
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                            />
                        </label>
                        <label className="">
                            <div className="mb-2">Full Name</div>
                            <input
                                {...register("fullname", {
                                    required: "User Name is required.",
                                })}
                                type="text"
                                className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                            />
                            {errors.fullname && (
                                <div className="text-red-500">
                                    {errors.fullname.message}
                                </div>
                            )}
                        </label>
                        <div className="col-span-full text-center mt-5">
                            <button className="tw-btn tw-btn-primary">
                                Add Tourist Spot
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTouristSpot;
