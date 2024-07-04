import React from "react"
import ConnectionStringManager from "../../Components/ConnectionStringManager/ConnectionStringManager"
import { SolutionList } from "../../Components/SolutionList/SolutionList"

const EntityNavigatorPage = () => {
    return <ConnectionStringManager {...{ SelectionMode: "multiple" }}>
        <SolutionList connectionStrings={[]} />
    </ConnectionStringManager>
}

export default EntityNavigatorPage