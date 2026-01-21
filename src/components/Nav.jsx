import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, filterData } from "../features/games/gamesSlice";
import { Link } from "react-router";

const Nav = () => {
    const dispatch = useDispatch();
    const { filteredGames, searchTerm } = useSelector((state) => state.games);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        setStartIndex(0);
    }, [filteredGames]);

    return (
        <header className="sticky bg-black top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-16 flex items-center justify-between gap-4 md:gap-8">
                {/* Logo */}
                <div className="flex items-center gap-3 shrink-0">
                    <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                        <span className="material-symbols-outlined text-background-dark font-bold">
                            bolt
                        </span>
                    </div>
                    <h1 className="text-lg sm:text-xl font-bold tracking-tighter uppercase italic">
                        Torrent<span className="text-primary">Games</span>
                    </h1>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Home</a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Browse</a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Categories</a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Requests</a>
                </nav>

                {/* Mobile Menu Icon */}
                <div className="flex md:hidden">
                    <button className="p-2">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-xl">
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/50 group-focus-within:text-primary">
                            search
                        </span>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => dispatch(filterData(e.target.value))}
                            placeholder="Search 5,000+ games..."
                            className="w-full bg-black/5 dark:bg-white/5 border border-primary/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        />
                    </div>
                </div>

                {/* User Actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors relative">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                    </button>
                    <div className="h-10 w-10 rounded-full border border-primary/30 p-0.5">
                        <Link to='/admin'>
                            <img
                                className="w-full h-full rounded-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBT5njPXJ2oSF_d7OmrqLVeYnVIxYYyUS_p3xqFUn_qRci60TvTapyUHxpAMzp1CNqzvQfvTa08J7cq5pkKsRVgW-LecftOXVva67KZMHAqesd43PQWvgA02KveMKjL2C8uA0CdouPKCDgoi9bRFyw_RE3HMX16_2lICkd8CPZvcIIIamRkcWPQGUcviPT5bjW7GAeFuzZ9ommSQicncX-L4rRCumQFVYRibrE8Uuf6R5Ru34tdpeFKHnLwOX4MORdMizMd6VzyUQi"
                                alt="User profile avatar icon"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav