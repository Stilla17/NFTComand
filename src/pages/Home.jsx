import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, filterData } from "../features/games/gamesSlice";
import { Link } from "react-router";

const ITEMS_PER_PAGE = 4;

const Home = () => {
  const dispatch = useDispatch();
  const { filteredGames, searchTerm } = useSelector((state) => state.games);

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setStartIndex(0);
  }, [filteredGames]);

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < filteredGames.length) {
      setStartIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  const visibleGames = filteredGames.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
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
              <img
                className="w-full h-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBT5njPXJ2oSF_d7OmrqLVeYnVIxYYyUS_p3xqFUn_qRci60TvTapyUHxpAMzp1CNqzvQfvTa08J7cq5pkKsRVgW-LecftOXVva67KZMHAqesd43PQWvgA02KveMKjL2C8uA0CdouPKCDgoi9bRFyw_RE3HMX16_2lICkd8CPZvcIIIamRkcWPQGUcviPT5bjW7GAeFuzZ9ommSQicncX-L4rRCumQFVYRibrE8Uuf6R5Ru34tdpeFKHnLwOX4MORdMizMd6VzyUQi"
                alt="User profile avatar icon"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Area */}
          <div className="flex-1 space-y-6 md:space-y-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-xl h-[280px] sm:h-[360px] md:h-[480px] group">
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-8 md:p-12 max-w-2xl gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs sm:text-sm font-bold tracking-widest uppercase">
                    Featured Release
                  </span>
                  <h2 className="text-2xl sm:text-4xl md:text-6xl font-black leading-tight italic">
                    CYBERPUNK 2077: PHANTOM LIBERTY
                  </h2>
                  <p className="text-sm sm:text-lg text-slate-300 line-clamp-2">
                    Experience the high-stakes world of espionage in this massive expansion. Includes all previous DLCs and v2.1 update.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="bg-primary text-background-dark px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-bold flex items-center gap-2 custom-glow transition-all">
                    <span className="material-symbols-outlined">download</span> Download Now
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-bold transition-all border border-white/10">
                    View Details
                  </button>
                </div>
              </div>
            </section>

            {/* Trending Games */}
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
                <span className="material-symbols-outlined text-primary text-lg sm:text-xl">trending_up</span> Trending Games
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                  className="p-1.5 sm:p-2 border border-primary/20 rounded hover:bg-primary/10 transition-colors disabled:opacity-30"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={startIndex + ITEMS_PER_PAGE >= filteredGames.length}
                  className="p-1.5 sm:p-2 border border-primary/20 rounded hover:bg-primary/10 transition-colors disabled:opacity-30"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Game Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {visibleGames.map((game, index) => (
                <div key={index}>
                  <Link to={`/${game.id}`}>
                    <img src={game.gameImg} alt={game.gameName} className="rounded-[20px] w-full" />
                    <p className="mt-3 sm:mt-5 text-center text-[16px] sm:text-[20px]">{game.gameName}</p>
                    <p className="text-center text-gray-600 text-[12px] sm:text-[13px]">{game.gameJanr}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-6 lg:space-y-8 hidden lg:block">
            <nav className="bg-black/10 dark:bg-white/5 rounded-xl p-4 border border-primary/10">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Library</h4>
              <div className="space-y-1">
                <a className="flex items-center gap-3 p-3 rounded-lg bg-primary text-background-dark font-bold" href="#">
                  <span className="material-symbols-outlined">trending_up</span> Top Downloads
                </a>
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors" href="#">
                  <span className="material-symbols-outlined">schedule</span> Latest Releases
                </a>
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors" href="#">
                  <span className="material-symbols-outlined">bolt</span> Most Seeded
                </a>
                <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors" href="#">
                  <span className="material-symbols-outlined">forum</span> Community Forum
                </a>
              </div>
            </nav>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 md:mt-20 border-t border-primary/10 py-12 bg-black/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-background-dark font-bold text-xs">bolt</span>
              </div>
              <h1 className="text-lg font-bold tracking-tighter uppercase italic">
                Torrent<span className="text-primary">Games</span>
              </h1>
            </div>
            <p className="text-sm text-slate-500">The #1 source for verified game torrents. High speed, no ads, always free.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
