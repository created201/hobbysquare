import { classnames } from "@/helpers"
import { FiSearch } from "react-icons/fi"

const SearchBar = ({ search, onChange, displayPattern }) => {
    return (
        <div
            className={classnames(
                "border-2 rounded-full shadow-xl shadow-slate-400/20 bg-theme-white overflow-hidden lg:col-span-12 grid-cols-12",
                search ? "border-emerald-500" : "border-slate-400/25",
                displayPattern
            )}
        >
            <button className="rounded-full bg-slate-100 text-theme-gray w-max p-2 col-span-2 lg:col-span-1 m-1">
                <FiSearch size={22} />
            </button>
            <input
                value={search}
                onChange={onChange}
                placeholder="Enter keywords to see related posts."
                className="col-span-10 lg:col-span-11 py-0.5 px-3 border-none outline-none ring-none placeholder:text-slate-400 text-theme-gray"
            />
        </div>
    )
}

export default SearchBar
