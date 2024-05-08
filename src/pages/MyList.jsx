import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaEdit, FaTimes } from "react-icons/fa";
import useTitle from "../components/useTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const MyList = () => {
    useTitle({ title: "My List" });

    const { user, loading, setLoading } = useContext(AuthContext);
    const [myList, setMyList] = useState(null);

    useEffect(() => {
        fetch(`https://happy-travel-server-seven.vercel.app/mylist/${user?.uid}`)
            .then((res) => res.json())
            .then((data) => {
                setMyList(data);
                setLoading(false);
            });
    }, [user, loading, setLoading]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://happy-travel-server-seven.vercel.app/mylist/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remainSpots = myList.filter(
                                (item) => item._id !== id
                            );
                            console.log("Remain: ", remainSpots);
                            setMyList(remainSpots);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success",
                            });
                        }
                    })
                    .catch((error) => {
                        console.log("Error: ", error);
                        Swal.fire({
                            title: "Error",
                            text: error.message,
                            icon: "error",
                        });
                    });
            }
        });
    };

    return (
        <div className="container py-20">
            {loading ? (
                <div className="text-center">
                    Loading
                    <span className="loading loading-spinner loading-xs"></span>
                </div>
            ) : (
                <table className="table ">
                    <thead>
                        <tr>
                            <th className="dark:text-white">Area</th>
                            <th className="dark:text-white">Country</th>
                            <th className="dark:text-white">Avg Cost</th>
                            <th className="dark:text-white">Time</th>
                            <th className="dark:text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myList?.map((data) => {
                            return (
                                <tr key={data._id}>
                                    <td>
                                        <Link
                                            to={`/tourists/${data?._id}`}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={data?.areaImage}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {data.area}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {data.location}
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                    <td>{data.country}</td>
                                    <td>{data.avg_cost}</td>
                                    <td>{data.duration}</td>
                                    <th>
                                        <div className="flex gap-2">
                                        <Tooltip id="my-tooltip" />
                                            <Link
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content="Edit"
                                                to={`/update-mylist/${data._id}`}
                                                className="bg-primary text-white rounded-full flex items-center justify-center w-8 h-8"
                                            >
                                                <FaEdit />
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(data._id)
                                                }
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content="Remove"
                                                className="bg-red-700 text-white rounded-full flex items-center justify-center w-8 h-8"
                                            >
                                                <FaTimes />
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MyList;
