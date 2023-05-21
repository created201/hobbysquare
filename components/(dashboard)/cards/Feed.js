import dynamic from "next/dynamic"

const UserProfile = dynamic(() => import("@/(general)/images/UserProfile"))

const Feed = ({ _id, data }) => {
    // _id, data: {title, description, when, where, what, skillLevel, category}
    const { title, description, when, where, what, skillLevel, category } = data

    // bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500
    // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    return (
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 p-[0.05rem] rounded-md overflow-hidden">
            <div className="grid grid-cols-6 relative gap-x-5 p-4 h-full w-full bg-white rounded-md">
                {/* Profile Section */}
                <div className="col-span-3 sm:col-span-2">
                    <h3 className="text-xl font-bold text-center">{_id}</h3>
                    <UserProfile width="max-w-[100px]" />
                    <p>{skillLevel}</p>
                    <p>{category}</p>
                </div>

                {/* Description */}
                <div className="col-span-3 sm:col-span-4">
                    <h3 className="font-bold text-2xl text-center">{title}</h3>
                    <p>{when}</p>
                    <p>{what}</p>
                    <p>{where}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Feed
