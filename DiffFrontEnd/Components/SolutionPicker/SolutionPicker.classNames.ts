import { getTheme, mergeStyleSets } from "@fluentui/react/lib/Styling";


const theme = getTheme();

export const getClassNames = (props: { height: string }) => mergeStyleSets({
    wrapper: {
        height: props.height,
        position: 'relative',
        backgroundColor: 'white',
    },
    filter: {
        backgroundColor: 'white',
        width: 300,
    },
    onDrag: {
        backgroundColor: theme.palette.neutralLight
    },
    callout: {
        width: 250,
        maxWidth: '90%',
        padding: '5px 6px',
    },
    commandBar: {
        height: 30
    }
});
