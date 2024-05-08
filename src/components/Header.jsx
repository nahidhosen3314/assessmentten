import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { RxAvatar } from "react-icons/rx";
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
    const [theme, setTheme] = useState("light");
    const handleSwitchTheme = () => {
        if (localStorage.theme === "dark" || !("theme" in localStorage)) {
            //add class=dark in html element
            document.documentElement.classList.add("dark");
        } else {
            //remove class=dark in html element
            document.documentElement.classList.remove("dark");
        }
        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
            setTheme("light");
        } else {
            localStorage.theme = "dark";
            setTheme("dark");
        }
    };

    const { user, loading, setLoading, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success("Logged Out Successfully!");
                setLoading(false);
            })
            .catch((error) => {
                toast.success(error.message);
                setLoading(false);
            });
    };

    const navItems = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/all-tourist-spot">All Tourists Spot</NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink to="/add-tourist-spot">
                            Add Tourist Spot
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/mylist/${user?.uid}`}>
                            My List
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="bg-gray-50 dark:bg-slate-800 py-2">
                <div className="navbar container">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="mr-4 lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <Link to="/">
                            <Logo
                                height="45"
                                className="text-slate-800 dark:text-white"
                            ></Logo>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-black dark:text-white">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-3">
                        {loading && (
                            <span className="loading loading-spinner loading-lg"></span>
                        )}
                        {!loading && user && (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        {user.photoURL ? (
                                            <img
                                                src={user.photoURL}
                                                alt={user.displayName}
                                            />
                                        ) : (
                                            <RxAvatar className="w-10 h-10" />
                                        )}
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="z-30 mt-3 p-2 shadow menu menu-sm dropdown-content dark:bg-slate-900 bg-base-100 rounded-box w-52"
                                >
                                    {user.displayName && (
                                        <li>
                                            <div className="font-bold">
                                                {user.displayName}
                                            </div>
                                        </li>
                                    )}
                                    <li>
                                        <div>{user.email}</div>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <button
                            onClick={handleSwitchTheme}
                            className="h-8 w-8 rounded-full bg-gray-300 text-slate-800 dark:bg-slate-700 dark:text-white flex items-center justify-center"
                        >
                            {theme === "dark" ? <IoSunny /> : <FaRegMoon />}
                        </button>
                        {!loading && !user && (
                            <div className="flex gap-2">
                                <Link
                                    to="/login"
                                    className="tw-btn tw-btn-primary py-1.5 px-3"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="tw-btn tw-btn-primary py-1.5 px-3"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
