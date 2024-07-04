import { mergeStyleSets } from '@fluentui/merge-styles';
import { FontWeights } from '@fluentui/style-utilities';



export const getClassNames = () => mergeStyleSets({
    sectionHeader: {
        borderBottom: '1px solid rgb(161, 159, 157)',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative'
    },
    card: {
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "3px",
        //width:"48%"
    },
    container: {
        padding: "2px 16px"
    },
    cardtoPick: {
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "3px",
        ':hover': {
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
        }
    },
    badge: {
        position: 'absolute',
        background: 'blue',
        color: 'white',
        borderRadius: '10px',
        width: '20px',
        height: '20px'
    },
    wrapper: {
        height: '70vh',
        position: 'relative',
        backgroundColor: 'white',
    },
    bold: {
        fontWeight: FontWeights.bold
    },
    control: {
        margin: '0 0 15px 0',
        maxWidth: '400px',
    },
});
