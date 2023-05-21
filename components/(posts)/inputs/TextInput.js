import { TfiClose } from "react-icons/tfi"

const TextInput = ({
    label,
    placeholder,
    value,
    onChange,
    onReset,
    variant = "input" | "textarea",
    rows = 6,
}) => {
    return (
        <div className="flex flex-col gap-y-2 relative">
            <label className="font-medium text-xl">{label}</label>
            {variant === "input" && (
                <>
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        className="w-full px-0 border-t-0 border-x-0 border-b-2 focus:ring-0 focus:outline-0 ring-0"
                    />
                    {value && (
                        <button
                            type="button"
                            onClick={onReset}
                            className="absolute z-10 right-1 bottom-3 transform text-red-500 flex justify-center items-center"
                        >
                            <TfiClose size={18} />
                        </button>
                    )}
                </>
            )}
            {variant === "textarea" && (
                <textarea
                    value={value}
                    rows={rows}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full p-2 border-2 focus:ring-0 focus:outline-0 ring-0"
                />
            )}
        </div>
    )
}

export default TextInput
