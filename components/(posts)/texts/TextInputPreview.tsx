import { classnames } from "@/helpers"
const TextInputPreview = ({
    withLabel,
    label,
    value,
    font = "font-base",

    margin = "m-0",
}) => {
    return (
        <div className={classnames("w-full", font, margin)}>
            {withLabel && <h5 className="font-bold mb-1">{label}</h5>}
            {value && <p className="w-full flex flex-wrap">{value}</p>}
            {!value && (
                <p className="text-red-500 font-medium">
                    Missing input field <strong>{label}</strong>
                </p>
            )}
        </div>
    )
}

export default TextInputPreview
