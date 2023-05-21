import { classnames, getPlaceholderImage } from "@/helpers"
import { useSession } from "next-auth/react"

const UserProfile = ({ width = "max-w-[40px]" }) => {
    const { data } = useSession()

    return (
        data && (
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
                        alt={data.user.data.name ?? "Placeholder Image"}
                        src={data.user.data.image ?? getPlaceholderImage()}
                    />
                </picture>
            </div>
        )
    )
}

export default UserProfile
