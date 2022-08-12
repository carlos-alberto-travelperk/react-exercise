import { useState } from "react"

function UseToggle(initialState = false) {
    const [state, setValue] = useState(initialState)

    const toggle = () => setValue(!state)

    return [state, toggle]
}

export default UseToggle