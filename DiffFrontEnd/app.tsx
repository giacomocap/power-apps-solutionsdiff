import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Collapser } from "./Components/Collapser";
import { Route, BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import Waiter from "./Components/LoadingAnimation";
import Home from "./Pages/Home/Home";
import MultiConnectionPage from "./Pages/MultiConnection/MultiConnection";
import SingleConnectionPage from "./Pages/SingleConnection/SingleConnectionViewer";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { FontWeights, getTheme, mergeStyleSets } from "@fluentui/react/lib/Styling";
import { INavLink, INavLinkGroup, INavStyles } from "@fluentui/react/lib/components/Nav/Nav.types";
import { Nav } from "@fluentui/react/lib/components/Nav/Nav";
import { Stack } from "@fluentui/react/lib/components/Stack/Stack";
import { Modal } from "@fluentui/react/lib/components/Modal/Modal";
import EntityNavigatorPage from "./Pages/EntityNavigator/EntityNavigator";
// import Index from "./Pages/Xls/Exporter";

interface IApp {
    InError: boolean;
    Error?: Error;
    ErrorInfo?: React.ErrorInfo;
}
initializeIcons();
const theme = getTheme();
export const modalStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        width: '70%'
    },
    header: [
        theme.fonts.xLargePlus,
        {
            flex: '1 1 auto',
            borderTop: `4px solid ${theme.palette.themePrimary}`,
            color: theme.palette.neutralPrimary,
            display: 'flex',
            alignItems: 'center',
            fontWeight: FontWeights.semibold,
            padding: '12px 12px 14px 24px',
        },
    ],
    body: {
        flex: '4 4 auto',
        padding: '0 24px 24px 24px',
        overflowY: 'hidden',
        selectors: {
            p: { margin: '14px 0' },
            'p:first-child': { marginTop: 0 },
            'p:last-child': { marginBottom: 0 },
        },
    },
});

// const HomePage = React.lazy(() => import('./Pages/Home/Home'));
// const MultiConnections = React.lazy(() => import('./Pages/MultiConnection/MultiConnection'));
// const SingleConnections = React.lazy(() => import('./Pages/SingleConnection/SingleConnectionViewer'));

const navLinkGroups: INavLinkGroup[] = [
    {
        name: 'Pages',
        expandAriaLabel: 'Expand Basic components section',
        collapseAriaLabel: 'Collapse Basic components section',
        links: [
            {
                key: 'Home',
                name: 'Home',
                url: '/',
            },
            {
                key: 'Multi',
                name: 'Solution Diff Tool - Multi Connection',
                url: '/multi',
            },
            {
                key: 'Single',
                name: 'Solution Diff Tool - Single Connection',
                url: '/single',
            },
            {
                key: 'MultiTables',
                name: 'Entity Diff Tool - Multi Connection',
                url: '/entities',
            },            
        ],
    }
];

const navStyles: Partial<INavStyles> = { root: { width: 300 } };

const NavApp = () => {
    let history = useHistory();
    const onCLick = (ev?: React.MouseEvent<HTMLElement, MouseEvent> | undefined, item?: INavLink | undefined) => {
        if (ev && item) {
            ev.preventDefault()
            history.push(item.url)
        }
    }
    return (
        <Nav styles={navStyles} groups={navLinkGroups} onLinkClick={onCLick} />
    );
};

class App extends React.Component<{}, IApp> {

    constructor(props: any) {
        super(props);
        this.state = {
            InError: false
        };
    }

    public render() {
        if (!this.state.InError) {
            return (
                <React.Suspense fallback={<Waiter />}>
                    <Router>
                        <Stack horizontal style={{ width: '100%' }}>
                            <NavApp />
                            <Switch>
                                <Route exact path="/" component={() => <Home />} />
                                <Route path="/multi" component={() => <MultiConnectionPage />} />
                                <Route path="/entities" component={() => <EntityNavigatorPage />} />
                                <Route path="/single" component={() => <SingleConnectionPage />} />
                                {/* <Route path="/xlsx" component={() => <Index />} /> */}
                                {/* <Route exact path="/" render={() => <HomePage />} />
                                <Route path="/multi" render={() => <MultiConnections />} />
                                <Route exact path="/single" render={() => <SingleConnections />} /> */}
                            </Switch>
                        </Stack>
                    </Router>
                </React.Suspense >
            );
        }
        return (
            <div>
                <Modal
                    isOpen={this.state.InError}
                    isBlocking={true}
                    containerClassName={modalStyles.container}
                >
                    <div className={modalStyles.header}>
                        <span>Errore</span>
                    </div>
                    <div className={modalStyles.body}>
                        <Collapser label="dettagli errore" children={<> <p>{this.state.Error?.message}</p>
                            <p>{this.state.ErrorInfo?.componentStack}</p></>} />
                    </div>
                </Modal>
            </div>
        );
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            InError: true,
            Error: error,
            ErrorInfo: errorInfo
        });
    }
}

ReactDOM.render(<App />, document.getElementById('root'));