import React from "react"
import ConnectionStringManager from "../../Components/ConnectionStringManager/ConnectionStringManager"
import { SolutionPicker } from "../../Components/SolutionPicker/SolutionPicker"

const SingleConnectionPage = () => {
    return <ConnectionStringManager {...{ SelectionMode: "single" }}>
        <SolutionPicker connectionStrings={[]} />
    </ConnectionStringManager>
}

export default SingleConnectionPage