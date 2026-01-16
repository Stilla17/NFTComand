const GameCard = ({ title, img, genre, size }) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-3/4 rounded-lg overflow-hidden mb-3">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-primary text-background-dark px-4 py-2 rounded font-bold">
                        Download
                    </button>
                </div>

                <span className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-primary">
                    {size}
                </span>
            </div>

            <h4 className="font-bold group-hover:text-primary transition-colors truncate">
                {title}
            </h4>
            <p className="text-xs text-slate-500">{genre}</p>
        </div>
    );
};

export default GameCard;
