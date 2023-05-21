const { useState } = require("react")

export const __useInput__ = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    function __onChange__(e) {
        setValue(e.target.value)
    }

    function __onReset__() {
        setValue("")
    }

    return {
        value,
        onChange: __onChange__,
        onReset: __onReset__,
    }
}
