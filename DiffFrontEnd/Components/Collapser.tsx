import { Link } from "@fluentui/react/lib/components/Link/Link";
import { Stack } from "@fluentui/react/lib/components/Stack/Stack";
import React from "react"

export interface CollapserProps {
    label: string;
    children?: React.ReactNode;
}
export const Collapser: React.FC<CollapserProps> = (props) => {
    const [visible, setVisible] = React.useState(false);
    const handleClickOnLink = () => {
        setVisible(!visible);
    }
    return (
        <Stack>
            <Link onClick={handleClickOnLink} underline>
                {props.label}
            </Link>
            {visible && props.children}
        </Stack>
    )
}