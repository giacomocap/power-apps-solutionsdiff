
import { Overlay } from "@fluentui/react/lib/components/Overlay/Overlay";
import { Spinner } from "@fluentui/react/lib/components/Spinner/Spinner";
import { SpinnerSize } from "@fluentui/react/lib/components/Spinner/Spinner.types";
import { Stack } from "@fluentui/react/lib/components/Stack/Stack";
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