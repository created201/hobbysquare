import { classnames } from "@/helpers"
import dynamic from "next/dynamic"

const ChooseCategory = dynamic(() =>
    import("@/(dashboard)/buttons/ChooseCategory")
)

const CategoriesBar = ({ selectedCategory, categories, onSelect }) => {
    return (
        <article
            className={classnames(
                "w-full overflow-x-scroll flex flex-col gap-y-8 lg:col-span-4 lg:p-8 lg:border lg:rounded-md lg:h-max lg:sticky lg:top-20 border-solid shadow-2xl"
            )}
        >
            <h3 className="hidden lg:block font-bold text-2xl">Categories</h3>
            <ul className="w-max lg:w-full flex lg:grid lg:gap-4 gap-x-10 flex-row pb-4 lg:pb-0 lg:grid-cols-1">
                {categories.map((category, idx) => (
                    <ChooseCategory
                        key={idx}
                        category={category}
                        onSelect={() => onSelect(category)}
                        isSelected={category === selectedCategory}
                    />
                ))}
            </ul>
        </article>
    )
}

export default CategoriesBar
