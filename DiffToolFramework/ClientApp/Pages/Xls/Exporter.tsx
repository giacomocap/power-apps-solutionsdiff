
import { Stack, Text } from '@fluentui/react';
import React from 'react';
import { SheetJSApp } from '../../Components/sheetjs';

const Index = () => (
<Stack tokens={{childrenGap:20}}>
<Text variant="large">Sheet js demo</Text>
	<SheetJSApp />
</Stack>
);
export default Index;