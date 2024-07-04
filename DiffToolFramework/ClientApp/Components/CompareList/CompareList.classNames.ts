import { mergeStyleSets } from '@fluentui/merge-styles';
import { getTheme } from '@fluentui/react/lib/Styling';


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
    row: {
        flex: '0 0 auto',
    }
});
