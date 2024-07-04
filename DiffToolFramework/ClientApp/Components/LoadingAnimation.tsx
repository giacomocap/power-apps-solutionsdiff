import { Overlay, Spinner, SpinnerSize, Stack } from "@fluentui/react";
import React from "react";

export default function Waiter() {
    return (
        <Overlay>
            <Stack verticalFill verticalAlign="center" horizontalAlign="center">
                <Spinner size={SpinnerSize.large} />
            </Stack>
        </Overlay>
    );
};