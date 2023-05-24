import { useState } from "react"

export const __useInput__ = <T extends string | "" = string>(
    initialValue: T
) => {
    const [value, setValue] = useState(initialValue)

    function __onChange__(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value as T)
    }

    function __onReset__() {
        setValue("" as T)
    }

    return {
        value,
        onChange: __onChange__,
        onReset: __onReset__,
    }
}
