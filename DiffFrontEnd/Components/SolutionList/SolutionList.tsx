import { DefaultButton } from "@fluentui/react/lib/components/Button/DefaultButton/DefaultButton";
import { IconButton } from "@fluentui/react/lib/components/Button/IconButton/IconButton";
import { ContextualMenu } from "@fluentui/react/lib/components/ContextualMenu/ContextualMenu";
import { DirectionalHint, IContextualMenuItem, IContextualMenuProps } from "@fluentui/react/lib/components/ContextualMenu/ContextualMenu.types";
import { ConstrainMode, DetailsListLayoutMode, IColumn, IColumnDragDropDetails, IDetailsHeaderProps } from "@fluentui/react/lib/components/DetailsList/DetailsList.types";
import { ShimmeredDetailsList } from "@fluentui/react/lib/components/DetailsList/ShimmeredDetailsList";
import { ScrollablePane } from "@fluentui/react/lib/components/ScrollablePane/ScrollablePane";
import { ScrollbarVisibility } from "@fluentui/react/lib/components/ScrollablePane/ScrollablePane.types";
import { SearchBox } from "@fluentui/react/lib/components/SearchBox/SearchBox";
import { Stack } from "@fluentui/react/lib/components/Stack/Stack";
import { Sticky } from "@fluentui/react/lib/components/Sticky/Sticky";
import { Text } from "@fluentui/react/lib/components/Text/Text";
import { StickyPositionType } from "@fluentui/react/lib/components/Sticky/Sticky.types";
import { TooltipHost } from "@fluentui/react/lib/components/Tooltip/TooltipHost";
import { ITooltipHostStyles } from "@fluentui/react/lib/components/Tooltip/TooltipHost.types";
import { SelectionMode, Selection } from "@fluentui/react/lib/utilities/selection";
import { IRenderFunction } from "@fluentui/react/lib/Utilities";
import { IDetailsColumnProps, IDetailsColumnRenderTooltipProps } from "@fluentui/react/lib/components/DetailsList/DetailsColumn.types";
import React from "react";
import { Helpers } from "../../Helper/Helpers";
import { ListHelpers } from "../../Helper/ListHelpers";
import { VersionStatus, XrmConnectionString } from "../../Helper/Model";
import { DataConnector } from "../DataConnector/DataConnector";
import { SolutionDetail } from "../SolutionDetail/SolutionDetail";
import { getClassNames } from "./SolutionList.classNames";
import { ViewSelection } from '../ViewSelection'
import { Panel } from "@fluentui/react/lib/components/Panel/Panel";
import { PanelType } from "@fluentui/react/lib/components/Panel/Panel.types";


export interface SolutionListProp {
    connectionStrings: XrmConnectionString[];
}
interface Row { version: string, solutionName: string, connectionUrl: string, connectionId: string, modifiedOn: Date }

interface SolutionListState {
    rows: SolutionForNConnections[];
    isLoading: boolean;
    columns: IColumn[];
    allItems: SolutionForNConnections[];
    selected?: string;
    selectedToPass?: string;
    allRows: Row[];
    contextualMenuProps?: IContextualMenuProps;
    isOpen: boolean;
    numberOfRows?: number;
}
type SolutionInfoForConnection = `${any}.com`;

interface SolutionForNConnections {
    key: string;
    solutionName: string;
    [prop: SolutionInfoForConnection]: {
        url: string;
        version: string;
        id: string
        status: VersionStatus;
        modifiedOn: Date;
    }
}

const calloutProps = { gapSpace: 0 };
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };
const refreshButtonStyles = { root: { verticalAlign: 'middle' } };


export class SolutionList extends React.Component<SolutionListProp, SolutionListState> {
    controller = new AbortController()
    signal = this.controller.signal
    connector = new DataConnector(this.signal);
    classNames = getClassNames({ height: "85vh" });
    _selection: Selection;
    firstsColNames = [{ colName: "Soluzioni", order: 0, id: "solutionName" }];

    constructor(prop: SolutionListProp) {
        super(prop);
        this.state = {
            rows: [],
            isLoading: false,
            columns: [],
            allItems: [],
            allRows: [],
            isOpen: false
        };

        this._selection = new Selection({ onSelectionChanged: () => this.getSelectionDetail() });
    }

    render() {
        const { rows, isLoading, columns, contextualMenuProps, isOpen, selectedToPass, numberOfRows } = this.state;
        return (
            <Stack tokens={{ childrenGap: 20 }}>
                {this.props.connectionStrings.length < 1 ? <Text variant="mediumPlus">Seleziona una o più organizzazioni</Text> : <DefaultButton text="Soluzioni" onClick={this.onPanelOpen.bind(this)} />}
                <Panel
                    headerText="Filtri"
                    isOpen={isOpen}
                    onDismiss={this.dismissPanel.bind(this)}
                    closeButtonAriaLabel="Close"
                    type={PanelType.large}
                    isHiddenOnDismiss={true}
                >
                    <div className={this.classNames.wrapper}>
                        <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                            <Sticky stickyPosition={StickyPositionType.Header}>
                                <Stack horizontal horizontalAlign="space-between" style={{ alignItems: 'center', paddingLeft: '10px' }}>
                                    <Stack horizontal horizontalAlign="start" verticalAlign="center" tokens={{ childrenGap: 20 }}>
                                        <SearchBox
                                            className={this.classNames.filter}
                                            placeholder="Cerca"
                                            onChange={this.onFilterChange}
                                        />
                                        {!isLoading &&
                                            <TooltipHost
                                                content="Ricarica"
                                                id={Helpers.GetUUID()}
                                                calloutProps={calloutProps}
                                                styles={hostStyles}
                                            >
                                                <IconButton
                                                    styles={refreshButtonStyles}
                                                    className='refresh'
                                                    iconProps={{ iconName: 'Refresh' }}
                                                    onClick={this.onReloadClick.bind(this)}
                                                />
                                            </TooltipHost>
                                        }
                                        {!isLoading && rows.length > 0 && <DefaultButton text="Excel export" onClick={this.handleExport.bind(this)} />}
                                        {numberOfRows ? <Text variant="mediumPlus">{numberOfRows} Soluzioni  {this.state.selected ? ' ' + this.state.selected + ' selezionata' : ', seleziona una soluzione'}</Text> : this.props.connectionStrings.length > 0 ? <Text variant="mediumPlus">0 Soluzioni trovate</Text> : <Text variant="mediumPlus">Seleziona una o più organizzazioni</Text>}
                                    </Stack>
                                </Stack>
                            </Sticky>

                            <ViewSelection selection={this._selection} items={rows} >
                                <ShimmeredDetailsList
                                    items={rows}
                                    columns={columns}
                                    setKey="set"
                                    onRenderItemColumn={this.onRenderItemColumn}
                                    onRenderDetailsHeader={onRenderDetailsHeader}
                                    layoutMode={DetailsListLayoutMode.fixedColumns}
                                    constrainMode={ConstrainMode.unconstrained}
                                    enableShimmer={isLoading}
                                    selectionMode={SelectionMode.single}
                                    selection={this._selection}
                                    // onColumnHeaderClick={this.onColumRenderClick.bind(this)}
                                    columnReorderOptions={{ frozenColumnCountFromStart: 1, onColumnDrop: this._handleColumnReorder.bind(this) }}
                                    selectionPreservedOnEmptyClick={true}
                                />
                            </ViewSelection>
                            {contextualMenuProps && <ContextualMenu {...contextualMenuProps} />}
                        </ScrollablePane>
                    </div>
                </Panel>
                {selectedToPass && <SolutionDetail {...{ Name: selectedToPass, OnlySolutionComponent: true, ...this.props }} />}
            </Stack>
        );
    }

    componentDidMount() {
        // this.load();
    }

    componentDidUpdate(prevProps: SolutionListProp) {
        if (!Helpers.arraysEqual(prevProps.connectionStrings, this.props.connectionStrings)) {
            this.setState({ selectedToPass: undefined, selected: undefined });
            this.reloadConnector();
            this.load();
        }
    }

    reloadConnector() {
        this.controller.abort();
        this.controller = new AbortController()
        this.signal = this.controller.signal
        this.connector = new DataConnector(this.signal);
    }

    componentWillUnmount() {
        this.controller.abort();
    }

    onPanelOpen(_ev: any) {
        this.setState({ isOpen: true });
    }

    dismissPanel() {
        this.setState({ isOpen: false, selectedToPass: this.state.selected });
    }

    handleExport(_ev: any) {

        const fileName = "CompareEnvironments" + new Date().toLocaleString().split(' ').join('_');
        const sheetProps = {
            Title: "Compare Environments",
            Subject: "Solutions",
            CreatedDate: new Date()
        };

        const firstRow: { key: string, label: string }[] = this.firstsColNames.map(e => { return { key: e.id, label: e.colName } });

        const transform = (el: {
            url: string;
            version: string;
            id: string
            status: VersionStatus;
            modifiedOn: Date;
        } | undefined) => {
            let toPut: any = '---';
            if (el && typeof (el) === "object") {
                toPut = el.version;
            }
            return toPut;
        }

        ListHelpers.exportList(firstRow, this.props.connectionStrings.map(e => e.OrganizationUrl), this.state.rows, sheetProps, fileName, transform);
    }

    async load() {
        this.setState({ isLoading: true });
        this._selection.setAllSelected(false);

        const colsOrder = this.firstsColNames.concat(this.props.connectionStrings.map((e, i) => {
            return {
                colName: `${e.OrganizationUrl.replace(".com", "")}.com`,
                order: i + 1,
                id: Helpers.trimCurlyBraces(e.Id).toLowerCase()
            }
        }));

        const cols: IColumn[] = colsOrder.map(a => {
            return {
                key: a.id,
                name: a.colName,
                minWidth: 210,
                data: { isCompareFrom: a.order === 1 },
                onRenderHeader: this.onRenderHeader,
                onColumnClick: this.onColumnClick,
                isResizable: true,
            }
        });

        this.setState({ columns: cols });

        const data = await this.connector.GetSolutionsForConnectionStrings({
            ConnectionStrings: this.props.connectionStrings.map(e => {
                return {
                    Id: e.Id, Url: e.OrganizationUrl, Client: e.ClientId, Secret: e.Secret
                }
            })
        });
        if (data) {
            let allSolutions: Row[] = [];
            data.forEach(e => {
                allSolutions = allSolutions.concat(e.Solutions.map(a => {
                    return {
                        version: a.Version,
                        solutionName: a.UniqueName,
                        connectionUrl: e.Url,
                        connectionId: e.ConnectionStringId,
                        modifiedOn: a.ModifiedOn
                    }
                }))
            });
            const orderedByProps = this.mapItems(allSolutions, cols);
            const count = orderedByProps.length;
            this.setState({ rows: orderedByProps, allItems: orderedByProps, allRows: allSolutions, numberOfRows: count });
        }
        this.setState({ isLoading: this.signal ? false : true });
    }


    _handleColumnReorder = (dragDropDetails: IColumnDragDropDetails) => {
        const draggedIndex = dragDropDetails.draggedIndex;
        const targetIndex = dragDropDetails.targetIndex;
        const draggedItems = this.state.columns[draggedIndex];
        const newColumns: IColumn[] = [...this.state.columns];

        // insert before the dropped item
        newColumns.splice(draggedIndex, 1);
        newColumns.splice(targetIndex, 0, draggedItems);
        this.setState({ columns: newColumns });
    };


    mapItems(allSolutions: Row[], cols: IColumn[]) {
        const groupedBySolution = Helpers.groupBy(allSolutions, (e) => e.solutionName.toLowerCase());
        const items: SolutionForNConnections[] = [];
        const defaultCompare = cols.find(e => e.data?.isCompareFrom);
        for (const uniqueName of groupedBySolution.keys()) {
            const elems = groupedBySolution.get(uniqueName);
            if (elems) {
                const item: SolutionForNConnections = {
                    solutionName: uniqueName,
                    key: uniqueName
                }
                let versionVal: string;
                let id: string;
                if (defaultCompare) {
                    id = defaultCompare.key;
                    const compareElem = elems.find(e => e.connectionId === id);
                    if (compareElem) {
                        versionVal = compareElem.version;
                    }
                }
                elems.forEach(e => {
                    item[`${e.connectionUrl.replace(".com", "")}.com`] = { id: e.connectionId, url: e.connectionUrl, version: e.version, modifiedOn: new Date(e.modifiedOn), status: this.getStatus(e, versionVal, id) };
                });
                items.push(item);
            }
        }
        const orderedByProps = items.sort((a, b) => {
            const numberOfA = Object.keys(a).length;
            const numberOfB = Object.keys(b).length;
            return (numberOfA > numberOfB) ? -1 : 1;
        });
        return orderedByProps;
    }

    onRenderHeader: IRenderFunction<IDetailsColumnProps> = (props, defaultRender) => {
        if (props && defaultRender) {
            return (
                <Stack horizontal tokens={{ childrenGap: 5 }} verticalAlign="center">
                    <Text variant="medium">{props.column.name ?? props.column.fieldName}</Text>
                    <IconButton iconProps={{ iconName: "ChevronDown" }}></IconButton>
                    {props.column.data?.isCompareFrom && <IconButton iconProps={{ iconName: "Compare" }}></IconButton>}
                </Stack>
            );
        }
        return null;
    };

    onColumnClick = (ev?: React.MouseEvent<HTMLElement>, column?: IColumn) => {
        if (column && ev) {
            const prop = this.getContextualMenuProps(ev, column);
            this.setState({ contextualMenuProps: prop })
        }
    }

    getContextualMenuProps = (ev: React.MouseEvent<HTMLElement>, column: IColumn): IContextualMenuProps => {
        const menuItems: IContextualMenuItem[] = [];
        if (!column.name.toLowerCase().includes("com")) {
            menuItems.push({
                key: 'aToZ',
                name: "Sort A to Z",
                iconProps: { iconName: 'SortUp' },
                canCheck: true,
                checked: column.isSorted && !column.isSortedDescending,
                onClick: () => {
                    this.onSort(column, false);
                    this.onContextualMenuDismissed()
                },
            });

            menuItems.push({
                key: 'zToA',
                name: "Sort Z to A",
                iconProps: { iconName: 'SortDown' },
                canCheck: true,
                checked: column.isSorted && column.isSortedDescending,
                onClick: () => {
                    this.onSort(column, true);
                    this.onContextualMenuDismissed()
                },
            });
        } else {
            menuItems.push({
                key: 'compare',
                name: "Compare From",
                iconProps: { iconName: 'Compare' },
                canCheck: true,
                checked: column.data?.isCompareFrom,
                disabled: column.data?.isCompareFrom,
                onClick: () => {
                    this.onToggleSelect(column.key, !column.data?.isCompareFrom);
                    this.onContextualMenuDismissed()
                },
            });
        }

        return {
            items: menuItems,
            target: ev.currentTarget as HTMLElement,
            directionalHint: DirectionalHint.bottomLeftEdge,
            gapSpace: 10,
            isBeakVisible: false,
            onDismiss: this.onContextualMenuDismissed,
        };
    }


    onToggleSelect = (key: string, selected: boolean) => {
        const { columns, allRows } = this.state;
        columns.forEach(e => { e.data = { isCompareFrom: false } });
        const interestedCol = columns.find(e => e.key === key);
        if (interestedCol && selected) {
            interestedCol.data = { isCompareFrom: selected };
        }
        else {
            const defaultCompare = columns.find(e => e.key === this.props.connectionStrings?.[0]?.Id);
            if (defaultCompare) {
                defaultCompare.data = { isCompareFrom: true };
            }
        }
        const data = this.mapItems(allRows, columns);
        this.setState({ columns: columns, allItems: data, rows: data });
    }

    onContextualMenuDismissed = () => {
        this.setState({ contextualMenuProps: undefined })
    }

    getSelectionDetail = () => {
        const selected = this._selection.getSelection() as SolutionForNConnections[];
        this.setState({ selected: selected[0]?.solutionName });
    }

    onFilterChange = (_ev?: React.FormEvent<HTMLElement>, text?: string) => {
        const elems = this.state.allItems;
        Helpers.StringIsNotNullOrEmpty(text) ? this.setState({ rows: elems.filter((item) => this.hasText(item, text as string)) }) : this.setState({ rows: elems });

    }

    hasText = (item: any, text: string): boolean => {
        const stringed = Object.keys(item).map(prop => item[prop] !== null && item[prop] !== undefined ? item[prop].toString().toLowerCase() : "").join('|');
        return stringed.indexOf(text.toLowerCase()) > -1;
    }

    onSort = (column: IColumn, isDescending: boolean): void => {
        const { columns, rows } = this.state;
        const newColumns: IColumn[] = columns.slice();
        const currColumn = newColumns.find(e => e.key === column.key);
        if (currColumn) {
            newColumns.forEach((newCol: IColumn) => {
                if (newCol === currColumn) {
                    currColumn.isSortedDescending = isDescending;
                    currColumn.isSorted = true;
                } else {
                    newCol.isSorted = false;
                    newCol.isSortedDescending = true;
                }
            });
            // Sort the items.
            const newRows = Helpers.copyAndSort(rows, column.key!, isDescending);

            // Reset the items and columns to match the state.
            this.setState({
                rows: newRows,
                columns: newColumns
            });
        }
    };


    onReloadClick = () => {
        this.setState({ rows: [] });
        this.load();
    };

    getStatus(elem: {
        version: string;
        solutionName: string;
        connectionUrl: string;
        connectionId: string;
    }, compareVal?: string, compareId?: string) {
        if (compareId && compareVal) {
            if (elem.connectionId === compareId) {
                return VersionStatus.Default
            } else {
                const compare = Helpers.compareVer(elem.version, compareVal);
                return compare === 0 ? VersionStatus.Equal : (compare === 1 ? VersionStatus.Above : VersionStatus.Under);
            }
        }
        return VersionStatus.Default;
    }

    onRenderItemColumn = (item: any, _index?: number, column?: IColumn): JSX.Element | string | number => {
        let result = "---";
        let color = "";
        if (column && column.name) {
            const el = item[column.name] ?? item[column.key];
            if (el && typeof (el) === "object") {
                result = el.version;
                const status = el.status;
                if (status)
                    switch (Number(el.status) as VersionStatus) {
                        case VersionStatus.Equal.valueOf():
                            color = "green";
                            break;
                        case VersionStatus.Under.valueOf():
                            color = "red";
                            break;
                        case VersionStatus.Above.valueOf():
                            color = "gold";
                            break;
                        default:
                            break;
                    }
                const rend = (
                    <Stack>
                        <Stack horizontal horizontalAlign="space-between">
                            <Text variant="medium">{"Versione:"}</Text>
                            <Text variant="medium" style={{ color: color }}>{el.version}</Text>
                        </Stack>
                        <Stack horizontal horizontalAlign="space-between">
                            <Text variant="medium">{"Ultima modifica:"}</Text>
                            <Text variant="medium">{el.modifiedOn?.toLocaleString() ?? ''}</Text>
                        </Stack>
                    </Stack>);
                return rend;
            }
            else if (el)
                result = el;
        }
        return <Text variant="medium" style={{ color: color }}>{result}</Text>;
    };

}

const onRenderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (props, defaultRender) => {
    if (!props) {
        return null;
    }
    const onRenderColumnHeaderTooltip: IRenderFunction<IDetailsColumnRenderTooltipProps> = tooltipHostProps => (
        <TooltipHost {...tooltipHostProps} />
    );
    return (
        <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced>
            {defaultRender!({
                ...props,
                onRenderColumnHeaderTooltip,
            })}
        </Sticky>
    );
};