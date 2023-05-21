import dynamic from "next/dynamic"

const Feed = dynamic(() => import("@/(dashboard)/cards/Feed"))

const Feeds = ({ feeds }) => {
    return (
        <article className="w-full flex flex-col gap-y-8">
            <h3 className="font-bold text-2xl">Feeds</h3>
            {feeds && (
                <>
                    {feeds.length >= 1 && (
                        <ul className="flex flex-col gap-y-4">
                            {feeds.map((feed, idx) => (
                                <Feed
                                    data={feed.data}
                                    _id={feed._id}
                                    key={idx}
                                />
                            ))}
                        </ul>
                    )}
                    {feeds.length === 0 && (
                        <p className="bg-pink-500/5 text-pink-500 border border-pink-500/25 text-center p-8 rounded-md">
                            There is no feed for you right now.
                        </p>
                    )}
                </>
            )}
        </article>
    )
}

export default Feeds
