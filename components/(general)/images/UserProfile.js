import { classnames, getPlaceholderImage } from "@/helpers"

const UserProfile = ({ width = "max-w-[40px]" }) => {
    return (
        <picture
            className={classnames(
                "w-full block mx-auto rounded-full overflow-hidden",
                width
            )}
        >
            <img src={getPlaceholderImage()} alt="User Pic" />
        </picture>
    )
}

export default UserProfile
