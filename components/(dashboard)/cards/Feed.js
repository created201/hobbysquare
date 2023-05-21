import dynamic from "next/dynamic"

const UserProfile = dynamic(() => import("@/(general)/images/UserProfile"))

const Feed = ({ _id, data }) => {
    // _id, data: {title, description, when, where, what, skillLevel, category}
    const { title, description, when, where, what, skillLevel, category } = data

    // bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500
    // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    return (
        <div className="grid grid-cols-6 relative border-solid border-2 gap-x-5 p-4 h-full w-ful rounded-md hover:shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]">
            {/* Description */}
            <div className="col-span-3 sm:col-span-4 p-2">
                <h3 className="font-bold text-2xl">{title}</h3>
                <div className="my-[0.5rem]">
                    <h4 className="text-sm">{what}</h4>
                    <p className="text-sm">On: {when}</p>
                    <p className="text-sm">At: {where}</p>
                    <p className="text-sm capitalize">Category: {category}</p>
                </div>

                <p>{description}</p>
            </div>

            {/* Profile Section */}
            <div className="col-span-3 sm:col-span-2 p-2 flex flex-col justify-center gap-y-1">
                <h3 className="text-xl font-bold text-center">{_id}</h3>
                <UserProfile width="max-w-[100px]" />
                <div className="flex flex-col items-center">
                    <p className="text-center capitalize">{skillLevel}</p>
                </div>
                <button className="rounded-full px-2 py-1 text-[#ffffff] bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500">
                    Send Interest
                </button>
            </div>
        </div>
    )
}

export default Feed
