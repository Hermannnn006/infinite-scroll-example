/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import AnimeCard from "../../components/Cards/AnimeCard"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import SkeletonCard from "../../components/skeletons/SkeletonCard"

const Home = () => {
    const [animes, setAnimes] = useState([])
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null)
    const [hasMore, setHasMore] = useState(true)
    const base_url = 'https://api.jikan.moe/v4'

    const fetchAnimes = async () => {
        setError(null)
        try {
            const response = await axios.get(`${base_url}/anime?page=${page}&limit=20&sfw=true`)
            const animeArr = response.data.data
            console.log(response.data.pagination)
            setAnimes(prevData => [...prevData, ...animeArr])
            if(animeArr < 20){
                setHasMore(false);
            } else {
                setPage(prev => prev + 1);
            }
        } catch (error) {
            setError(true)
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchAnimes()
    }, [])

    return (
        <div className="p-4 lg:px-20">
        <h3 className="mb-2 text-2xl font-bold">Daftar Anime</h3>
            <InfiniteScroll
                dataLength={animes.length}
                next={fetchAnimes}
                hasMore={hasMore}
                loader={
                    error 
                    ? 
                    <div className="flex justify-center mt-3">
                        <button className="py-2 px-3 bg-blue-600 text-white rounded-lg" onClick={fetchAnimes}>Retry</button>
                    </div>
                    :
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-3">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>
                }
                endMessage={
                <p className="text-center">
                    <b>No more Anime</b>
                </p>
                } 
            >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                { animes?.map((anime, i) => 
                    <AnimeCard
                        key={i}
                        anime={anime}
                    />
                ) }
            </div>
            </InfiniteScroll>
        </div>
    )
}

export default Home