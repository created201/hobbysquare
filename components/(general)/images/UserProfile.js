import { classnames, getPlaceholderImage } from "@/helpers"

const UserProfile = ({ width = "max-w-[40px]", user }) => {
    return (
        <div
            className={classnames(
                "w-full mx-auto rounded-full overflow-hidden border bg-gradient-to-r from-orange-400 via-pink-400 to-amber-400 flex justify-center items-center shadow-2xl shadow-amber-400/20",
                width
            )}
        >
            <picture
                className={classnames(
                    "w-full block mx-auto rounded-full overflow-hidden"
                )}
            >
                <img
                    alt={"Placeholder Image"}
                    src={user ? user.data.image : getPlaceholderImage()}
                />
            </picture>
        </div>
    )
}

export default UserProfile
