const SkeletonCard = () => {
    return (
        <div className="bg-white shadow-md rounded-md animate-pulse">
            <div className="w-full h-64 md:h-72 bg-gray-300 rounded-t-md"></div>
            <div className="px-6 py-4">
                <div className="h-6 bg-gray-300 mb-2 rounded-md"></div>
                <div className="h-4 bg-gray-300 w-2/3 rounded-md"></div>
            </div>
        </div>
    )
}

export default SkeletonCard