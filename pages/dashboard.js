import { classnames, getCategories, getMockFeeds } from "@/helpers"
import { useState } from "react"
import dynamic from "next/dynamic"

const PrimaryLayout = dynamic(() => import("@/(general)/layouts/PrimaryLayout"))
const SearchBar = dynamic(() => import("@/(dashboard)/containers/SearchBar"))
const Feeds = dynamic(() => import("@/(dashboard)/containers/Feeds"))
const CategoriesBar = dynamic(() =>
    import("@/(dashboard)/containers/CategoriesBar")
)
const UserProfileBar = dynamic(() =>
    import("@/(dashboard)/containers/UserProfileBar")
)

const DashboardPage = () => {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState(getCategories()[0])
    const [expandProfile, setExpandProfileBar] = useState(true)

    function onSelectCategory(_category) {
        setCategory(_category)
    }

    function onExpandProfileBar(shouldExpand) {
        setExpandProfileBar(shouldExpand)
    }

    return (
        // DashboardPage
        <div className="min-h-screen flex flex-col justify-start items-center">
            <section
                className={classnames(
                    "w-full grid grid-cos-1 lg:grid-cols-12 gap-8 h-full",
                    expandProfile ? "lg:gap-4" : "lg:gap-8"
                )}
            >
                <div
                    className={classnames(
                        "w-full grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-12 px-4 2xl:px-8 py-20 lg:py-24 bg-theme-white text-theme-gray",
                        expandProfile ? "lg:col-span-8" : "lg:col-span-11"
                    )}
                >
                    <SearchBar
                        search={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        displayPattern="grid lg:hidden"
                    />
                    <CategoriesBar
                        selectedCategory={category}
                        onSelect={onSelectCategory}
                        categories={getCategories()}
                    />
                    <div
                        className={classnames(
                            "w-full flex flex-col gap-y-8 lg:col-span-8"
                        )}
                    >
                        {" "}
                        <SearchBar
                            search={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                            displayPattern="lg:grid hidden"
                        />
                        <Feeds expand={!expandProfile} feeds={getMockFeeds()} />
                    </div>
                </div>
                <UserProfileBar
                    expand={expandProfile}
                    user={{}}
                    onExpand={onExpandProfileBar}
                />
            </section>
        </div>
    )
}

DashboardPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default DashboardPage
