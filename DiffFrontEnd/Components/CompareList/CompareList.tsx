import { DefaultButton } from "@fluentui/react/lib/components/Button/DefaultButton/DefaultButton";
import { IconButton } from "@fluentui/react/lib/components/Button/IconButton/IconButton";
import { ContextualMenu } from "@fluentui/react/lib/components/ContextualMenu/ContextualMenu";
import { ContextualMenuItemType, DirectionalHint, IContextualMenuItem, IContextualMenuProps } from "@fluentui/react/lib/components/ContextualMenu/ContextualMenu.types";
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
import { SelectionMode} from "@fluentui/react/lib/utilities/selection";
import { IRenderFunction } from "@fluentui/react/lib/Utilities";
import { IDetailsColumnProps, IDetailsColumnRenderTooltipProps } from "@fluentui/react/lib/components/DetailsList/DetailsColumn.types";
import React from "react";
import { Helpers } from "../../Helper/Helpers";
import { ListHelpers } from "../../Helper/ListHelpers";
import { VersionStatus } from "../../Helper/Model";
import { DataConnector } from "../DataConnector/DataConnector";
import { SolutionListProp } from "../SolutionList/SolutionList";
import { getClassNames } from "./CompareList.classNames";
import { IDetailsFooterProps } from "@fluentui/react/lib/components/DetailsList/DetailsFooter.types";
import { DetailsRow, IDetailsRowBaseProps } from "@fluentui/react/lib/components/DetailsList/DetailsRow";

const calloutProps = { gapSpace: 0 };
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };
const refreshButtonStyles = { root: { verticalAlign: 'middle' } };

export interface SolutionDetailProp extends SolutionListProp {
    Names: string[];
    OnlySolutionComponent: boolean;
}

interface ElementRow {
    version: string, displayName: string, solutionName: string, logicalName: string, modifiedOn: Date, referenceEntity: string
}

interface SolutionListState {
    rows: ElementDetailInfoForNSolution[];
    isLoading: boolean;
    columns: IColumn[];
    allItems: ElementDetailInfoForNSolution[];
    allRows: ElementRow[];
    contextualMenuProps?: IContextualMenuProps;
}

type ElementDetailInfoForSolution = `${any}`;

interface ElementDetailInfoForNSolution {
    logicalName: any;
    displayName: any;
    referenceEntity: any;
    [prop: ElementDetailInfoForSolution]: {
        version: string;
        modifiedOn: Date;
        solutionName: string;
        status: VersionStatus;
    }
}

export class SolutionCompare extends React.Component<SolutionDetailProp, SolutionListState> {
    controller = new AbortController()
    signal = this.controller.signal
    connector = new DataConnector(this.signal);
    classNames = getClassNames({ height: "75vh" });
    firstsColNames = [{ colName: "Tipo", order: 0, id: "logicalName" }, { colName: "Nome", order: 1, id: "displayName" }, { colName: "Entità", order: 1, id: "referenceEntity" }];

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
                                {!isLoading && rows.length > 0 && <DefaultButton text="Excel export" onClick={this.handleExport.bind(this)} />}
                                {<Text variant="mediumPlus">{this.props.Names.length} Soluzioni selezionate</Text>}
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

    componentWillUnmount() {
        this.controller.abort();
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

    handleExport(_ev: any) {

        const fileName = "CompareSolutions" + new Date().toLocaleString().split(' ').join('_');
        const sheetProps = {
            Title: "Compare Solutions",
            Subject: "Solutions",
            CreatedDate: new Date()
        };
        const firstRow: { key: string, label: string }[] = this.state.columns.map(e => { return { key: e.key, label: e.name } });
        ListHelpers.exportList(firstRow, this.props.Names, this.state.rows, sheetProps, fileName);
    }

    async load() {
        this.setState({ isLoading: true });
        const colsOrder = this.firstsColNames.concat(this.props.Names.map((e, i) => {
            return {
                colName: e, order: i + 3, id: e
            }
        }));

        const cols: IColumn[] = colsOrder.map(a => {
            return {
                key: a.id,
                name: a.colName,
                minWidth: 200,
                data: {
                    isCompareFrom: a.order === 3,
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


        const data = 
            this.props.OnlySolutionComponent ?
                await this.connector.GetSolutionsDetails({
                    ConnectionString: this.props.connectionStrings.map(e => {
                        return {
                            Id: e.Id, Url: e.OrganizationUrl, Client: e.ClientId, Secret: e.Secret
                        }
                    })?.[0], Names: this.props.Names
                })
                : await this.connector.GetEntityDetails({
                    ConnectionString: this.props.connectionStrings.map(e => {
                        return {
                            Id: e.Id, Url: e.OrganizationUrl, Client: e.ClientId, Secret: e.Secret
                        }
                    })?.[0], Names: this.props.Names
                });
        
        if (data) {
            let allSolutions: ElementRow[] = [];
            data.forEach(e => {
                allSolutions = allSolutions.concat(e.SolutionDetails.map(a => {
                    return {
                        version: a.Version,
                        displayName: a.DisplayName,
                        modifiedOn: new Date(a.ModifiedOn),
                        logicalName: a.LogicalName,
                        solutionName: e.SolutionName,
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

    mapItems(allSolutions: ElementRow[], cols: IColumn[]) {
        const groupedBySolution = Helpers.groupBy(allSolutions, (e) => e.displayName?.toLowerCase());
        const items: ElementDetailInfoForNSolution[] = [];
        const defaultCompare = cols.find(e => e.data?.isCompareFrom);
        for (const uniqueName of groupedBySolution.keys()) {
            const elems = groupedBySolution.get(uniqueName);
            if (elems) {
                const item: ElementDetailInfoForNSolution = {
                    logicalName: elems[0].logicalName as any,
                    displayName: uniqueName as any,
                    referenceEntity: elems[0].referenceEntity as any
                }
                let versionVal: string;
                let id: string;
                if (defaultCompare) {
                    id = defaultCompare.key;
                    const compareElem = elems.find(e => e.solutionName === id);
                    if (compareElem) {
                        versionVal = compareElem.version;
                    }
                }
                elems.forEach(e => {
                    item[e.solutionName as any] = { solutionName: e.solutionName, version: e.version, modifiedOn: new Date(e.modifiedOn), status: this.getStatus(e, versionVal, id) };
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

    getStatus(elem: ElementRow, compareVal?: string, compareName?: string) {
        if (compareName && compareVal) {
            if (elem.solutionName === compareName) {
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
        if (this.firstsColNames.map(e => e.id).some(e => column.key.includes(e))) {
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
                        let contains: ElementRow | undefined;
                        switch (filterKey) {
                            case 'notcontains':
                                contains = uniqueName[1].find(e => e.solutionName === column.key);
                                if (contains) {
                                    groupedBySolution.delete(uniqueName[0]);
                                }
                                break;
                            case 'contains':
                                contains = uniqueName[1].find(e => e.solutionName === column.key);
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
        const groupedBySolutionName = Helpers.groupBy(newAllRows, (e) => e.solutionName);
        columns.forEach(e => {
            const foundGroup = groupedBySolutionName.has(e.key);
            if (foundGroup) {
                e.data.count = groupedBySolutionName.get(e.key)?.length;
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
                    newCol.isSortedDescending = false;
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