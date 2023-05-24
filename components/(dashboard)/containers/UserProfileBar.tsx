import { classnames } from "@/helpers"
import dynamic from "next/dynamic"

const ExpandProfile = dynamic(
    () => import("@/(dashboard)/buttons/ExpandProfile")
)
const UserProfile = dynamic(() => import("@/(general)/images/UserProfile"))

const UserProfileBar = ({ onExpand, user, expand }) => {
    return (
        <article
            className={classnames(
                "w-full hidden lg:flex flex-col px-4 2xl:px-8 pb-20 bg-theme-white text-theme-gray h-full lg:border-l relative",
                expand
                    ? "lg:col-span-4 gap-y-6 lg:border-transparent"
                    : "lg:col-span-1 gap-y-4 lg:border-slate-400/40"
            )}
        >
            <div className="lg:sticky lg:top-20 flex flex-col gap-y-4">
                <div
                    className={classnames(
                        "flex items-center",
                        expand ? "justify-between " : "flex-col"
                    )}
                >
                    {expand && (
                        <div className="flex items-center gap-x-4">
                            <UserProfile user={user} width={"max-w-[40px]"} />
                            <h5 className="font-semibold text-xl">
                                Hi, {user.data.name}
                            </h5>
                        </div>
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
                {!expand && <UserProfile user={user} width={"max-w-[40px]"} />}
            </div>
        </article>
    )
}

export default UserProfileBar
