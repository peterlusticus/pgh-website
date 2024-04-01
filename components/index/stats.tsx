export function StatsSection() {
    return (
        <div className="mb-20 mt-10 md:mx-20">
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                <div className="text-center md:border-r md:border-gray-500">
                    <h6 className="text-4xl text-green-200 font-bold lg:text-5xl xl:text-6xl">144K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-300 uppercase lg:text-base">
                        Downloads
                    </p>
                </div>
                <div className="text-center md:border-r">
                    <h6 className="text-4xl text-green-200 font-bold lg:text-5xl xl:text-6xl">12.9K</h6>
                    <p className="text-sm text-gray-300 font-medium tracking-widest uppercase lg:text-base">
                        Subscribers
                    </p>
                </div>
                <div className="text-center md:border-r">
                    <h6 className="text-4xl text-green-200 font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-300 uppercase lg:text-base">
                        Users
                    </p>
                </div>
                <div className="text-center">
                    <h6 className="text-4xl text-green-200 font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-300 uppercase lg:text-base">
                        Cookies
                    </p>
                </div>
            </div>
        </div>
    )
}