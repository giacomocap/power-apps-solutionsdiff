import { Stack } from "@fluentui/react/lib/components/Stack/Stack";
import { Text } from "@fluentui/react/lib/components/Text/Text";
import React from "react";

const Home = () => {
    return (
        <Stack tokens={{ childrenGap: 10 }}>
            <Stack horizontal horizontalAlign="center" tokens={{ padding: 40 }}>
                <Text variant="xxLarge">Super Mega XRM TDS Dataverse Tool</Text>
            </Stack>
            <Stack horizontal horizontalAlign="center" tokens={{ padding: 40 }}>
                <Text variant="medium">Solution comparison between organization, object publisher, solution exporter and much more! (Maybe)</Text>
            </Stack>
        </Stack>
    );
}

export default Home;