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
import React from "react";
import { Helpers } from "../../Helper/Helpers";
import { XrmConnectionString } from "../../Helper/Model";
import { DataConnector } from "../DataConnector/DataConnector";
import { IRenderFunction } from "@fluentui/react/lib/Utilities";
import { IDetailsColumnProps, IDetailsColumnRenderTooltipProps } from "@fluentui/react/lib/components/DetailsList/DetailsColumn.types";
import { SolutionCompare } from "../CompareList/CompareList";
import { getClassNames } from "./SolutionPicker.classNames";
import { ViewSelection } from '../ViewSelection'
import { Panel } from "@fluentui/react/lib/components/Panel/Panel";
import { PanelType } from "@fluentui/react/lib/components/Panel/Panel.types";


export interface SolutionListProp {
    connectionStrings: XrmConnectionString[];
    SolutionComponent: boolean;
}
interface Row { key: string; version: string, solutionName: string, modifiedOn: Date }

interface SolutionListState {
    rows: Row[];
    isLoading: boolean;
    columns: IColumn[];
    allItems: Row[];
    selected?: string[];
    selectedToPass?: string[];
    contextualMenuProps?: IContextualMenuProps;
    numberOfRows?: number;
    isOpen: boolean;
}

const calloutProps = { gapSpace: 0 };
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };
const refreshButtonStyles = { root: { verticalAlign: 'middle' } };


export class SolutionPicker extends React.Component<SolutionListProp, SolutionListState> {
    controller = new AbortController()
    signal = this.controller.signal
    connector = new DataConnector(this.signal);
    classNames = getClassNames({ height: "85vh" });
    _selection: Selection;

    constructor(prop: SolutionListProp) {
        super(prop);
        this.state = {
            rows: [],
            isLoading: false,
            columns: [],
            allItems: [],
            isOpen: false
        };

        this._selection = new Selection({ onSelectionChanged: () => this.getSelectionDetail() });
    }

    render() {
        const { rows, isLoading, columns, contextualMenuProps, numberOfRows, isOpen, selectedToPass, selected } = this.state;
        return (
            <Stack tokens={{ childrenGap: 20 }}>
                {this.props.connectionStrings.length < 1 ? <Text variant="mediumPlus">Seleziona una organizzazione</Text> : <DefaultButton text="Soluzioni" onClick={this.onPanelOpen.bind(this)} />}
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
                                        {numberOfRows ? <Text variant="mediumPlus">{numberOfRows} Soluzioni trovate, seleziona una o più soluzioni</Text> : this.props.connectionStrings.length > 0 ? <Text variant="mediumPlus">0 Soluzioni trovate</Text> : <Text variant="mediumPlus">Seleziona una organizzazione</Text>}
                                        {selected && <Text variant="mediumPlus">{selected.length} Soluzioni selezionate</Text>}
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
                                    selectionMode={SelectionMode.multiple}
                                    selection={this._selection}
                                    // onColumnHeaderClick={this.onColumRenderClick.bind(this)}
                                    // columnReorderOptions={{ frozenColumnCountFromStart: 1, onColumnDrop: this._handleColumnReorder.bind(this) }}
                                    selectionPreservedOnEmptyClick={true}
                                />
                            </ViewSelection>
                            {contextualMenuProps && <ContextualMenu {...contextualMenuProps} />}
                        </ScrollablePane>
                    </div>
                </Panel>
                {selectedToPass && selectedToPass.length > 0 && <SolutionCompare {...{ Names: selectedToPass, OnlySolutionComponent: this.props.SolutionComponent, ...this.props }} />}
            </Stack >
        );
    }

    componentDidMount() {
        // this.load();
    }

    componentWillUnmount() {
        this.controller.abort();
    }

    componentDidUpdate(prevProps: SolutionListProp) {
        if (!Helpers.arraysEqual(prevProps.connectionStrings, this.props.connectionStrings)) {
            this.setState({ selectedToPass: [], selected: [] });
            this.reloadConnector();
            this.load();
        }
    }

    dismissPanel() {
        this.setState({ isOpen: false, selectedToPass: this.state.selected });
    }

    onPanelOpen(_ev: any) {
        this.setState({ isOpen: true });
    }

    reloadConnector() {
        this.controller.abort();
        this.controller = new AbortController()
        this.signal = this.controller.signal
        this.connector = new DataConnector(this.signal);
    }

    async load() {
        this.setState({ isLoading: true });
        this._selection.setAllSelected(false);

        const others = [{ colName: "Soluzioni", order: 0, id: "solutionName" }, { colName: "Versione", order: 1, id: "version" }, { colName: "Ultima modifica", order: 2, id: "modifiedOn" }];

        const cols: IColumn[] = others.map(a => {
            return {
                key: a.id,
                name: a.colName,
                minWidth: 210,
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
                        modifiedOn: new Date(a.ModifiedOn),
                        key: a.UniqueName
                    }
                }))
            });
            const count = allSolutions.length;
            this.setState({ rows: allSolutions, allItems: allSolutions, numberOfRows: count });
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

    onRenderHeader: IRenderFunction<IDetailsColumnProps> = (props, defaultRender) => {
        if (props && defaultRender) {
            return (
                <Stack horizontal tokens={{ childrenGap: 5 }} verticalAlign="center">
                    <Text variant="medium">{props.column.name ?? props.column.fieldName}</Text>
                    <IconButton iconProps={{ iconName: "ChevronDown" }}></IconButton>
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

        return {
            items: menuItems,
            target: ev.currentTarget as HTMLElement,
            directionalHint: DirectionalHint.bottomLeftEdge,
            gapSpace: 10,
            isBeakVisible: false,
            onDismiss: this.onContextualMenuDismissed,
        };
    }



    onContextualMenuDismissed = () => {
        this.setState({ contextualMenuProps: undefined })
    }

    getSelectionDetail = () => {
        const selected = this._selection.getSelection() as Row[];
        this.setState({ selected: selected?.map(e => e.solutionName) });
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

    // getStatus(elem: {
    //     version: string;
    //     solutionName: string;
    //     connectionUrl: string;
    //     connectionId: string;
    // }, compareVal?: string, compareId?: string) {
    //     if (compareId && compareVal) {
    //         if (elem.connectionId === compareId) {
    //             return VersionStatus.Default
    //         } else {
    //             const compare = Helpers.compareVer(elem.version, compareVal);
    //             return compare === 0 ? VersionStatus.Equal : (compare === 1 ? VersionStatus.Above : VersionStatus.Under);
    //         }
    //     }
    //     return VersionStatus.Default;
    // }

    onRenderItemColumn = (item: Row, _index?: number, column?: IColumn): JSX.Element | string | number => {
        let result = "---";
        let color = "";
        if (column && column.name) {
            const el = (item as any)[column.name] ?? (item as any)[column.key];
            if (el) {
                result = el;
                if (Helpers.isDate(el))
                    result = el.toLocaleString();
            }
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