import React from 'react'
import GameCard from '../components/GameCard'

const Home = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300">

            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between gap-8">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-primary rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-background-dark">bolt</span>
                        </div>
                        <h1 className="text-xl font-bold italic uppercase">
                            Torrent<span className="text-primary">Games</span>
                        </h1>
                    </div>

                    {/* Nav */}
                    <nav className="hidden md:flex gap-6">
                        {["Home", "Browse", "Categories", "Requests"].map(link => (
                            <a
                                key={link}
                                href="#"
                                className="text-sm font-semibold hover:text-primary transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    {/* Search */}
                    <div className="flex-1 max-w-xl">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/50">
                                search
                            </span>
                            <input
                                type="text"
                                placeholder="Search 5,000+ games..."
                                className="w-full bg-black/5 dark:bg-white/5 border border-primary/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>
                    </div>

                </div>
            </header>

            {/* Main */}
            <main className="max-w-[1440px] mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-6">Trending Games</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

                    {/* Card */}
                    <GameCard
                        title="Elden Ring"
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuAlvgXb_MmXDLChKq4RjCMqH8BdqvNfl1zFvsU1tbLjsDLZU2Qjf0te1Se7B3j3EIJNedN1oTVeQruxRPLaqGryIvSHewXzrZCgVd-8QCVVgrccHzNHlQP_vmUNeiUwSxK-RXJDdVgR_cvMZEA0B6uAdNd3Ng0DqTxzf8ZKpX_D9c3nmjFPF2wjA9IYyuTb4LE9pztqSCoqW7QQeSO9fOR0zIA3cRZiNHnCquQGp8OsZWUyz_KJxeccs5J9oJN-TCuUaipk55hNHu17"
                        genre="Action, Open World"
                        size="60GB"
                    />

                </div>
            </main>

            {/* Footer */}
            <footer className="mt-20 border-t border-primary/10 py-10 text-center text-sm text-slate-500">
                © 2024 TorrentGames Inc. All rights reserved.
            </footer>

        </div>
    )
}

export default Home