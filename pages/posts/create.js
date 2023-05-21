import {
    alertButtonNotAvailable,
    classnames,
    getCategories,
    getSkillLevels,
} from "@/helpers"
import { useInput } from "@/hooks"
import dynamic from "next/dynamic"
import { useState } from "react"

const PrimaryLayout = dynamic(() => import("@/(general)/layouts/PrimaryLayout"))
const UserProfile = dynamic(() => import("@/(general)/images/UserProfile"))
const TextInput = dynamic(() => import("@/(posts)/inputs/TextInput"))
const TextInputPreview = dynamic(() =>
    import("@/(posts)/texts/TextInputPreview")
)

const CreatePostPage = () => {
    const categories = getCategories()
    const skillLevels = getSkillLevels()

    const title = useInput("")
    const description = useInput("")
    const when = useInput("")
    const what = useInput("")
    const where = useInput("")
    const [category, setCategory] = useState(categories[0])
    const [skillLevel, setSkillLevel] = useState(skillLevels[0])

    const [showPreview, setShowPreview] = useState(true)

    function onTogglePreview() {
        setShowPreview(!showPreview)
    }

    async function onSubmit(e) {
        e.preventDefault()

        alertButtonNotAvailable()
    }

    return (
        //CreatePostPage
        <div className="min-h-screen flex flex-col justify-center items-center">
            <section className="px-8 py-20 2xl:px-0 max-w-[1096px] mx-auto w-full grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                <form
                    onSubmit={onSubmit}
                    className="lg:col-span-5 lg:bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 bg-theme-white"
                >
                    <section className="lg:px-8 flex flex-col gap-y-6 bg-theme-white">
                        <TextInput
                            label={"Title"}
                            variant={"input"}
                            placeholder={"Enter the post title here."}
                            {...title}
                        />{" "}
                        <TextInput
                            label={"Description"}
                            variant={"textarea"}
                            placeholder={"Enter the post description here."}
                            {...description}
                        />
                        <TextInput
                            label={"What"}
                            variant={"input"}
                            placeholder={"What do you plan to do?"}
                            {...what}
                        />
                        <TextInput
                            label={"When"}
                            variant={"input"}
                            placeholder={"When do you plan to do?"}
                            {...when}
                        />
                        <TextInput
                            label={"Where"}
                            variant={"input"}
                            placeholder={"Where do you plan to do?"}
                            {...where}
                        />
                        <div className="flex flex-col gap-y-4">
                            <label className="font-medium text-xl">
                                Choose A Hobby Category
                            </label>
                            <div className="overflow-x-scroll w-full">
                                <ul className="flex gap-x-4 w-max ">
                                    {categories.map((_category, idx) => (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setCategory(_category)
                                            }
                                            key={idx}
                                            className={classnames(
                                                "capitalize font-medium px-8 py-3 rounded-md border transition-smooth",
                                                category === _category
                                                    ? "bg-theme-dark border-theme-dark text-theme-white lg:hover:opacity-60"
                                                    : "bg-theme-white border-theme-dark/40 text-theme-dark/40 lg:hover:border-theme-dark lg:hover:text-theme-dark"
                                            )}
                                        >
                                            {_category}
                                        </button>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <label className="font-medium text-xl capitalize">
                                Your Skill Level For {category}
                            </label>
                            <ul className="flex flex-col gap-y-4">
                                {skillLevels.map((_skillLevel, idx) => (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSkillLevel(_skillLevel)
                                        }
                                        key={idx}
                                        className={classnames(
                                            "capitalize font-medium px-8 py-3 rounded-md border transition-smooth",
                                            skillLevel === _skillLevel
                                                ? "bg-theme-dark border-theme-dark text-theme-white lg:hover:opacity-60"
                                                : "bg-theme-white border-theme-dark/40 text-theme-dark/40 lg:hover:border-theme-dark lg:hover:text-theme-dark"
                                        )}
                                    >
                                        {_skillLevel}
                                    </button>
                                ))}
                            </ul>
                        </div>
                        {[
                            title.value,
                            description.value,
                            when.value,
                            what.value,
                            where.value,
                            category,
                            skillLevel,
                        ].every(Boolean) && (
                            <div className="w-full flex justify-center items-center">
                                <input
                                    type="submit"
                                    value="Create The Post"
                                    className="cursor-pointer w-full px-8 py-3 rounded-md text-theme-white bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 transition-smooth lg:hover:opacity-60"
                                />
                            </div>
                        )}
                    </section>
                </form>

                {showPreview && (
                    <article
                        className={classnames(
                            " lg:col-span-7 p-8 border w-full lg:overflow-hidden lg:h-max lg:sticky lg:top-20 flex flex-col justify-start items-start"
                        )}
                    >
                        {[title, description, what, when, where].find(
                            (_) => _.value
                        ) && (
                            <>
                                <div
                                    className={classnames(
                                        "fixed lg:hidden z-30 bottom-0 left-0 w-full px-8",
                                        showPreview ? "py-12" : "py-8"
                                    )}
                                >
                                    <button
                                        onClick={onTogglePreview}
                                        className={classnames(
                                            "w-full block z-10 px-8 py-3 text-theme-white rounded-md font-medium text-lg shadow-2xl shadow-theme-dark/50",
                                            showPreview
                                                ? "bg-pink-500"
                                                : "bg-theme-dark"
                                        )}
                                    >
                                        {showPreview
                                            ? "Hide Preview"
                                            : "Show Preview"}
                                    </button>
                                </div>
                                <UserProfile width="max-w-[50px] mb-4" />
                                {title.value && (
                                    <div className="flex flex-col gap-y-1 mb-2">
                                        <div className="flex items-center gap-x-2">
                                            <TextInputPreview
                                                label={"title"}
                                                font="font-semibold text-xl text-theme-dark"
                                                margin="mb-0"
                                                value={title.value}
                                            />
                                            {category && (
                                                <span className="capitalize text-sm font-medium px-3 py-0.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 text-theme-white">
                                                    {category}
                                                </span>
                                            )}
                                        </div>
                                        {skillLevel && category && (
                                            <p className="text-sm italic text-slate-500">
                                                I am {skillLevel} at {category}
                                            </p>
                                        )}
                                    </div>
                                )}
                                {description.value && (
                                    <TextInputPreview
                                        label={"description"}
                                        font="font-base text-base text-theme-gray/75"
                                        margin="mb-4"
                                        value={description.value}
                                    />
                                )}
                                {what.value && (
                                    <TextInputPreview
                                        withLabel
                                        label={"What"}
                                        font="font-base text-base text-theme-gray/75"
                                        margin="mb-4"
                                        value={what.value}
                                    />
                                )}
                                {when.value && (
                                    <TextInputPreview
                                        withLabel
                                        label={"When"}
                                        font="font-base text-base text-theme-gray/75"
                                        margin="mb-4"
                                        value={when.value}
                                    />
                                )}
                                {where.value && (
                                    <TextInputPreview
                                        withLabel
                                        label={"Where"}
                                        font="font-base text-base text-theme-gray/75"
                                        margin="mb-4"
                                        value={where.value}
                                    />
                                )}
                            </>
                        )}
                    </article>
                )}
            </section>
        </div>
    )
}

CreatePostPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default CreatePostPage
