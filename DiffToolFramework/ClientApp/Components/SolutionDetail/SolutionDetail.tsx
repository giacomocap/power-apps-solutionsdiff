import { ConstrainMode, ContextualMenu, ContextualMenuItemType, DetailsListLayoutMode, DetailsRow, DirectionalHint, IColumn, IColumnDragDropDetails, IconButton, IContextualMenuItem, IContextualMenuProps, IDetailsColumnProps, IDetailsColumnRenderTooltipProps, IDetailsFooterProps, IDetailsHeaderProps, IDetailsRowBaseProps, IRenderFunction, ITooltipHostStyles, ScrollablePane, ScrollbarVisibility, SearchBox, SelectionMode, ShimmeredDetailsList, Stack, Sticky, StickyPositionType, Text, TooltipHost } from "@fluentui/react";
import React from "react";
import { Helpers } from "../../Helper/Helpers";
import { VersionStatus } from "../../Helper/Model";
import { DataConnector } from "../DataConnector/DataConnector";
import { SolutionListProp } from "../SolutionList/SolutionList";
import { getClassNames } from "./SolutionDetail.classNames";

const calloutProps = { gapSpace: 0 };
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };
const refreshButtonStyles = { root: { verticalAlign: 'middle' } };

export interface SolutionDetailProp extends SolutionListProp {
    Name: string;
}

interface SolRow { version: string, displayName: string, connectionUrl: string, connectionId: string, logicalName: string, modifiedOn: Date, referenceEntity: string }

interface SolutionListState {
    rows: SolutionDetailForNConnections[];
    isLoading: boolean;
    columns: IColumn[];
    allItems: SolutionDetailForNConnections[];
    allRows: SolRow[];
    contextualMenuProps?: IContextualMenuProps;
}

type SolutionDetailInfoForConnection = `${any}.com`;

interface SolutionDetailForNConnections {
    logicalName: string;
    displayName: string;
    referenceEntity: string
    [prop: SolutionDetailInfoForConnection]: {
        url: string;
        version: string;
        modifiedOn: Date;
        id: string;
        status: VersionStatus;
    }
}

export class SolutionDetail extends React.Component<SolutionDetailProp, SolutionListState> {
    controller = new AbortController()
    signal = this.controller.signal
    connector = new DataConnector(this.signal);
    classNames = getClassNames({ height: "75vh" });

    constructor(prop: SolutionDetailProp) {
        super(prop);
        this.state = {
            rows: [],
            isLoading: false,
            columns: [],
            allItems: [],
            allRows: []
        };
    }

    render() {
        const { rows, isLoading, columns, contextualMenuProps } = this.state;
        return (
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
                                <Text variant="mediumPlus" >Soluzione selezionata: {this.props.Name}</Text>
                            </Stack>
                        </Stack>
                    </Sticky>
                    <ShimmeredDetailsList
                        items={rows}
                        columns={columns}
                        setKey="set"
                        onRenderItemColumn={this.onRenderItemColumn}
                        onRenderDetailsHeader={onRenderDetailsHeader}
                        layoutMode={DetailsListLayoutMode.fixedColumns}
                        constrainMode={ConstrainMode.unconstrained}
                        enableShimmer={isLoading}
                        selectionMode={SelectionMode.none}
                        onColumnHeaderClick={this.onColumnClick}
                        columnReorderOptions={{ frozenColumnCountFromStart: 2, onColumnDrop: this._handleColumnReorder.bind(this) }}
                    />
                    {contextualMenuProps && <ContextualMenu {...contextualMenuProps} />}
                </ScrollablePane>
            </div>
        );
    }

    componentDidMount() {
        this.load();
    }

    componentDidUpdate(prevProps: SolutionDetailProp) {
        if (!Helpers.objectsEqual(prevProps, this.props)) {
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


    async load() {
        this.setState({ isLoading: true });
        const others = [{ colName: "Tipo", order: 0, id: "logicalName" }, { colName: "Nome", order: 1, id: "displayName" }];
        const colsOrder = others.concat(this.props.connectionStrings.map((e, i) => {
            return {
                colName: `${e.OrganizationUrl.replace(".com", "")}.com`, order: i + 2, id: Helpers.trimCurlyBraces(e.Id).toLowerCase()
            }
        }));

        const cols: IColumn[] = colsOrder.map(a => {
            return {
                key: a.id,
                name: a.colName,
                minWidth: 210,
                data: {
                    isCompareFrom: a.order === 2,
                    filters: {
                        contains: false,
                        notcontains: false
                    }
                },
                onRenderHeader: this.onRenderHeader,
                onColumnClick: this.onColumnClick,
                isResizable: true,
            }
        });

        this.setState({ columns: cols });

        const data = await this.connector.GetSolutionDetailsForConnectionStrings({
            ConnectionStrings: this.props.connectionStrings.map(e => {
                return {
                    Id: e.Id, Url: e.OrganizationUrl, Client: e.ClientId, Secret: e.Secret
                }
            }), Name: this.props.Name
        });
        if (data) {
            let allSolutions: SolRow[] = [];
            data.forEach(e => {
                allSolutions = allSolutions.concat(e.SolutionDetails.map(a => {
                    return {
                        version: a.Version,
                        displayName: a.DisplayName,
                        connectionUrl: e.Url,
                        modifiedOn: a.ModifiedOn,
                        connectionId: e.ConnectionStringId,
                        logicalName: a.LogicalName,
                        referenceEntity: a.EntityReference
                    }
                }))
            });
            const orderedByProps = this.mapItems(allSolutions, cols);
            this.setState({ rows: orderedByProps, allItems: orderedByProps, allRows: allSolutions });
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

    mapItems(allSolutions: SolRow[], cols: IColumn[]) {
        const groupedBySolution = Helpers.groupBy(allSolutions, (e) => e.displayName?.toLowerCase());
        const items: SolutionDetailForNConnections[] = [];
        const defaultCompare = cols.find(e => e.data?.isCompareFrom);
        for (const uniqueName of groupedBySolution.keys()) {
            const elems = groupedBySolution.get(uniqueName);
            if (elems) {
                const item: SolutionDetailForNConnections = {
                    logicalName: elems[0].logicalName,
                    displayName: uniqueName,
                    referenceEntity: elems[0].referenceEntity
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

    getStatus(elem: {
        version: string;
        displayName: string;
        connectionUrl: string;
        connectionId: string;
        logicalName: string;
        modifiedOn: Date;
    }, compareVal?: string, compareId?: string) {
        if (compareId && compareVal) {
            if (elem.connectionId === compareId) {
                return VersionStatus.Default
            } else
                return elem.version === compareVal ? VersionStatus.Equal : (elem.version > compareVal ? VersionStatus.Above : VersionStatus.Under);
        }
        return VersionStatus.Default;
    }

    onFilterChange = (_ev?: React.FormEvent<HTMLElement>, text?: string) => {
        const elems = this.state.allItems;
        Helpers.StringIsNotNullOrEmpty(text) ? this.setState({ rows: elems.filter((item) => this.hasText(item, text as string)) }) : this.setState({ rows: elems });

    }

    hasText = (item: any, text: string): boolean => {
        const stringed = Object.keys(item).map(prop => item[prop] !== null && item[prop] !== undefined ? item[prop].toString().toLowerCase() : "").join('|');
        return stringed.indexOf(text.toLowerCase()) > -1;
    }

    onColumnClick = (ev?: React.MouseEvent<HTMLElement>, column?: IColumn) => {
        if (column && ev && !this.state.isLoading) {
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
            menuItems.push({
                key: 'divider_1',
                itemType: ContextualMenuItemType.Divider,
            });
            menuItems.push({
                key: 'contains',
                name: "Contains Data",
                iconProps: { iconName: 'Filter' },
                canCheck: true,
                checked: column.data?.filters.contains,
                onClick: () => {
                    this.onFilterSelect(column, 'contains', !column.data?.filters.contains);
                    this.onContextualMenuDismissed()
                },
            });
            menuItems.push({
                key: 'notcontains',
                name: "Does not Contains Data",
                iconProps: { iconName: 'Filter' },
                canCheck: true,
                checked: column.data?.filters.notcontains,
                onClick: () => {
                    this.onFilterSelect(column, 'notcontains', !column.data?.filters.notcontains);
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
        columns.forEach(e => { e.data.isCompareFrom = false });
        const interestedCol = columns.find(e => e.key === key);
        if (interestedCol && selected) {
            interestedCol.data.isCompareFrom = selected;
        }
        else {
            const defaultCompare = columns.find(e => e.key === this.props.connectionStrings?.[0]?.Id);
            if (defaultCompare) {
                defaultCompare.data.isCompareFrom = true;
            }
        }
        const data = this.mapItems(allRows, columns);
        this.setState({ columns: columns, allItems: data, rows: data });
    }

    onFilterSelect = (column: IColumn, filterKey: string, isCheck: boolean) => {
        const { columns, allRows } = this.state;
        columns.filter(e => e.data?.filters).forEach(a => Object.keys(a.data.filters).forEach(e => a.data.filters[e] = false));
        const interestedCol = columns.find(e => e.key === column.key);
        let newAllRows = allRows;
        if (interestedCol) {
            Object.keys(interestedCol.data.filters).forEach(e => interestedCol.data.filters[e] = false);
            interestedCol.data.filters[filterKey] = isCheck;
            if (isCheck) {
                const groupedBySolution = Helpers.groupBy(allRows, (e) => e.displayName?.toLowerCase());
                for (const uniqueName of groupedBySolution.entries()) {
                    if (uniqueName[1]) {
                        let contains: SolRow | undefined;
                        switch (filterKey) {
                            case 'notcontains':
                                contains = uniqueName[1].find(e => e.connectionId === column.key);
                                if (contains) {
                                    groupedBySolution.delete(uniqueName[0]);
                                }
                                break;
                            case 'contains':
                                contains = uniqueName[1].find(e => e.connectionId === column.key);
                                if (!contains) {
                                    groupedBySolution.delete(uniqueName[0]);
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
                newAllRows = [];
                for (const uniqueName of groupedBySolution.entries()) {
                    newAllRows = newAllRows.concat(uniqueName[1]);
                }
            }
        }

        const data = this.mapItems(newAllRows, columns);
        const groupedByConnection = Helpers.groupBy(newAllRows, (e) => e.connectionId);
        columns.forEach(e => {
            const foundGroup = groupedByConnection.has(e.key);
            if (foundGroup) {
                e.data.count = groupedByConnection.get(e.key)?.length;
            }
        })
        this.setState({ columns: columns, allItems: data, rows: data });
    }


    onContextualMenuDismissed = () => {
        this.setState({ contextualMenuProps: undefined })
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

    onRenderHeader: IRenderFunction<IDetailsColumnProps> = (props, defaultRender) => {
        if (props && defaultRender) {
            return (
                <Stack horizontal tokens={{ childrenGap: 5 }} verticalAlign="center">
                    <Text variant="smallPlus">{props.column.name ?? props.column.fieldName}</Text>
                    <IconButton iconProps={{ iconName: "ChevronDown" }}></IconButton>
                    {props.column.data?.isCompareFrom && <IconButton iconProps={{ iconName: "Compare" }}></IconButton>}
                </Stack>
            );
        }
        return null;
    }

    onRenderItemColumn = (item: any, _index?: number, column?: IColumn): JSX.Element | string | number => {
        let result = "---";
        if (column && column.name) {
            const el = item[column.name] ?? item[column.key];
            if (el && typeof (el) === "object") {
                let color = "";
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
        return <Text variant="medium">{result}</Text>;
    };

    onRenderDetailsFooter: IRenderFunction<IDetailsFooterProps> = (props, _defaultRender) => {
        if (!props) {
            return null;
        }
        return (
            <Sticky stickyPosition={StickyPositionType.Footer} isScrollSynced>
                <div className={this.classNames.row}>
                    <DetailsRow
                        columns={props.columns}
                        item={{}}
                        itemIndex={-1}
                        selection={props.selection}
                        selectionMode={(props.selection && props.selection.mode) || SelectionMode.none}
                        rowWidth={props.rowWidth}
                        onRenderItemColumn={this._renderDetailsFooterItemColumn}
                    />
                </div>
            </Sticky>
        );
    };
    _renderDetailsFooterItemColumn: IDetailsRowBaseProps['onRenderItemColumn'] = (_item, _index, column) => {
        if (column) {
            return (
                <div>
                    <b>{column.data.count}</b>
                </div>
            );
        }
        return undefined;
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