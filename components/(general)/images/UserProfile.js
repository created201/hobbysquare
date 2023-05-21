const { default: Image } = require("next/image")

const UserProfile = ({ src }) => {
    return (
        <Image
            src={src}
            alt="User Pic"
            className={
                src
                    ? "rounded-full w-7 h-7 xl:w-10 xl:h-10 border-solid border-2"
                    : "rounded-full w-7 h-7 xl:w-10 xl:h-10 border-solid border-2 bg-emerald-100"
            }
        />
    )
}

export default UserProfile
