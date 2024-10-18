/* eslint-disable react/prop-types */
const AnimeCard = ({anime}) => {
    return (
        <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={anime.images.webp.image_url}
                    alt="Anime" className="w-full h-72 object-cover rounded-t-xl" />
            <div className="px-2 py-3 w-full">
                <p className="text-base font-bold text-slate-800 block">{anime?.title}</p>
            </div>
        </a>
    </div>
    )
}

export default AnimeCard