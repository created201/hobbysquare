import { classnames } from "@/helpers"
import dynamic from "next/dynamic"

const ExpandProfile = dynamic(() =>
    import("@/(dashboard)/buttons/ExpandProfile")
)
const UserProfile = dynamic(() => import("@/(dashboard)/cards/UserProfile"))

const UserProfileBar = ({ onExpand, user, expand }) => {
    console.log(user)
    return (
        <article
            className={classnames(
                "w-full hidden lg:flex flex-col px-4 2xl:px-8 py-20 bg-theme-white text-theme-gray h-full lg:border-l",
                expand
                    ? "lg:col-span-4 gap-y-6 lg:border-transparent"
                    : "lg:col-span-1 gap-y-4 lg:border-slate-400/40"
            )}
        >
            <div
                className={classnames(
                    "flex items-center",
                    expand ? "justify-between " : "flex-col"
                )}
            >
                {expand && (
                    <h5 className="font-semibold text-xl">Hi, James Johns</h5>
                )}
                <ExpandProfile
                    expand={expand}
                    onExpand={
                        expand
                            ? () => {
                                  onExpand(false)
                              }
                            : () => {
                                  onExpand(true)
                              }
                    }
                />
            </div>
            <UserProfile />
        </article>
    )
}

export default UserProfileBar
