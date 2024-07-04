import { Stack } from "@fluentui/react/lib/components/Stack/Stack";
import { Text } from "@fluentui/react/lib/components/Text/Text";
import React from 'react';
import { SheetJSApp } from '../../Components/sheetjs';

const Index = () => (
<Stack tokens={{childrenGap:20}}>
<Text variant="large">Sheet js demo</Text>
	<SheetJSApp />
</Stack>
);
export default Index;