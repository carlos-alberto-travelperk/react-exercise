import { useState } from "react";

function UseInputState(initialValue) {
    const [value, setValue] = useState(initialValue);
    const change = (e) => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue("");
    }
    return [value, change, reset]
}

export default UseInputState