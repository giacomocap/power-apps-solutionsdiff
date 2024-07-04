/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/Collapser.tsx":
/*!**********************************!*\
  !*** ./Components/Collapser.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collapser": () => (/* binding */ Collapser)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Link/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const Collapser = (props) => {
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const handleClickOnLink = () => {
        setVisible(!visible);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.Link, { onClick: handleClickOnLink, underline: true }, props.label),
        visible && props.children));
};


/***/ }),

/***/ "./Components/CompareList/CompareList.classNames.ts":
/*!**********************************************************!*\
  !*** ./Components/CompareList/CompareList.classNames.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClassNames": () => (/* binding */ getClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "./node_modules/@fluentui/merge-styles/lib/mergeStyleSets.js");
/* harmony import */ var _fluentui_react_lib_Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react/lib/Styling */ "./node_modules/@fluentui/style-utilities/lib/index.js");


const theme = (0,_fluentui_react_lib_Styling__WEBPACK_IMPORTED_MODULE_0__.getTheme)();
const getClassNames = (props) => (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.mergeStyleSets)({
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


/***/ }),

/***/ "./Components/CompareList/CompareList.tsx":
/*!************************************************!*\
  !*** ./Components/CompareList/CompareList.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionCompare": () => (/* binding */ SolutionCompare)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ScrollablePane/ScrollablePane.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ScrollablePane/ScrollablePane.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Sticky/Sticky.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Sticky/Sticky.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/SearchBox/SearchBox.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/DefaultButton/DefaultButton.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Text/Text.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/DetailsList/ShimmeredDetailsList.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/utilities/lib/selection/Selection.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/common/DirectionalHint.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/DetailsList/DetailsRow.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helper/Helpers */ "./Helper/Helpers.ts");
/* harmony import */ var _Helper_ListHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Helper/ListHelpers */ "./Helper/ListHelpers.ts");
/* harmony import */ var _Helper_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Helper/Model */ "./Helper/Model.ts");
/* harmony import */ var _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DataConnector/DataConnector */ "./Components/DataConnector/DataConnector.ts");
/* harmony import */ var _CompareList_classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CompareList.classNames */ "./Components/CompareList/CompareList.classNames.ts");







const calloutProps = { gapSpace: 0 };
const hostStyles = { root: { display: 'inline-block' } };
const refreshButtonStyles = { root: { verticalAlign: 'middle' } };
class SolutionCompare extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    controller = new AbortController();
    signal = this.controller.signal;
    connector = new _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_4__.DataConnector(this.signal);
    classNames = (0,_CompareList_classNames__WEBPACK_IMPORTED_MODULE_5__.getClassNames)({ height: "75vh" });
    firstsColNames = [{ colName: "Tipo", order: 0, id: "logicalName" }, { colName: "Nome", order: 1, id: "displayName" }, { colName: "Entità", order: 1, id: "referenceEntity" }];
    constructor(prop) {
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.classNames.wrapper },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.ScrollablePane, { scrollbarVisibility: _fluentui_react__WEBPACK_IMPORTED_MODULE_7__.ScrollbarVisibility.auto },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Sticky, { stickyPosition: _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.StickyPositionType.Header },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Stack, { horizontal: true, horizontalAlign: "space-between", style: { alignItems: 'center', paddingLeft: '10px' } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Stack, { horizontal: true, horizontalAlign: "start", verticalAlign: "center", tokens: { childrenGap: 20 } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.SearchBox, { className: this.classNames.filter, placeholder: "Cerca", onChange: this.onFilterChange }),
                            !isLoading &&
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { content: "Ricarica", id: _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.GetUUID(), calloutProps: calloutProps, styles: hostStyles },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { styles: refreshButtonStyles, className: 'refresh', iconProps: { iconName: 'Refresh' }, onClick: this.onReloadClick.bind(this) })),
                            !isLoading && rows.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.DefaultButton, { text: "Excel export", onClick: this.handleExport.bind(this) }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.Text, { variant: "mediumPlus" },
                                this.props.Names.length,
                                " Soluzioni selezionate")))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_16__.ShimmeredDetailsList, { items: rows, columns: columns, setKey: "set", onRenderItemColumn: this.onRenderItemColumn, onRenderDetailsHeader: onRenderDetailsHeader, layoutMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_17__.DetailsListLayoutMode.fixedColumns, constrainMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_17__.ConstrainMode.unconstrained, enableShimmer: isLoading, selectionMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_18__.SelectionMode.none, onColumnHeaderClick: this.onColumnClick, columnReorderOptions: { frozenColumnCountFromStart: 2, onColumnDrop: this._handleColumnReorder.bind(this) } }),
                contextualMenuProps && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_19__.ContextualMenu, { ...contextualMenuProps }))));
    }
    componentWillUnmount() {
        this.controller.abort();
    }
    componentDidMount() {
        this.load();
    }
    componentDidUpdate(prevProps) {
        if (!_Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.objectsEqual(prevProps, this.props)) {
            this.reloadConnector();
            this.load();
        }
    }
    reloadConnector() {
        this.controller.abort();
        this.controller = new AbortController();
        this.signal = this.controller.signal;
        this.connector = new _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_4__.DataConnector(this.signal);
    }
    handleExport(_ev) {
        const fileName = "CompareSolutions" + new Date().toLocaleString().split(' ').join('_');
        const sheetProps = {
            Title: "Compare Solutions",
            Subject: "Solutions",
            CreatedDate: new Date()
        };
        const firstRow = this.state.columns.map(e => { return { key: e.key, label: e.name }; });
        _Helper_ListHelpers__WEBPACK_IMPORTED_MODULE_2__.ListHelpers.exportList(firstRow, this.props.Names, this.state.rows, sheetProps, fileName);
    }
    async load() {
        this.setState({ isLoading: true });
        const colsOrder = this.firstsColNames.concat(this.props.Names.map((e, i) => {
            return {
                colName: e, order: i + 3, id: e
            };
        }));
        const cols = colsOrder.map(a => {
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
            };
        });
        this.setState({ columns: cols });
        const data = await this.connector.GetSolutionsDetails({
            ConnectionString: this.props.connectionStrings.map(e => {
                return {
                    Id: e.Id, Url: e.OrganizationUrl, Client: e.ClientId, Secret: e.Secret
                };
            })?.[0], Names: this.props.Names
        });
        if (data) {
            let allSolutions = [];
            data.forEach(e => {
                allSolutions = allSolutions.concat(e.SolutionDetails.map(a => {
                    return {
                        version: a.Version,
                        displayName: a.DisplayName,
                        modifiedOn: new Date(a.ModifiedOn),
                        logicalName: a.LogicalName,
                        solutionName: e.SolutionName,
                        referenceEntity: a.EntityReference
                    };
                }));
            });
            const orderedByProps = this.mapItems(allSolutions, cols);
            this.setState({ rows: orderedByProps, allItems: orderedByProps, allRows: allSolutions });
        }
        this.setState({ isLoading: this.signal ? false : true });
    }
    _handleColumnReorder = (dragDropDetails) => {
        const draggedIndex = dragDropDetails.draggedIndex;
        const targetIndex = dragDropDetails.targetIndex;
        const draggedItems = this.state.columns[draggedIndex];
        const newColumns = [...this.state.columns];
        // insert before the dropped item
        newColumns.splice(draggedIndex, 1);
        newColumns.splice(targetIndex, 0, draggedItems);
        this.setState({ columns: newColumns });
    };
    mapItems(allSolutions, cols) {
        const groupedBySolution = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.groupBy(allSolutions, (e) => e.displayName?.toLowerCase());
        const items = [];
        const defaultCompare = cols.find(e => e.data?.isCompareFrom);
        for (const uniqueName of groupedBySolution.keys()) {
            const elems = groupedBySolution.get(uniqueName);
            if (elems) {
                const item = {
                    logicalName: elems[0].logicalName,
                    displayName: uniqueName,
                    referenceEntity: elems[0].referenceEntity
                };
                let versionVal;
                let id;
                if (defaultCompare) {
                    id = defaultCompare.key;
                    const compareElem = elems.find(e => e.solutionName === id);
                    if (compareElem) {
                        versionVal = compareElem.version;
                    }
                }
                elems.forEach(e => {
                    item[e.solutionName] = { solutionName: e.solutionName, version: e.version, modifiedOn: new Date(e.modifiedOn), status: this.getStatus(e, versionVal, id) };
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
    getStatus(elem, compareVal, compareName) {
        if (compareName && compareVal) {
            if (elem.solutionName === compareName) {
                return _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Default;
            }
            else
                return elem.version === compareVal ? _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Equal : (elem.version > compareVal ? _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Above : _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Under);
        }
        return _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Default;
    }
    onFilterChange = (_ev, text) => {
        const elems = this.state.allItems;
        _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.StringIsNotNullOrEmpty(text) ? this.setState({ rows: elems.filter((item) => this.hasText(item, text)) }) : this.setState({ rows: elems });
    };
    hasText = (item, text) => {
        const stringed = Object.keys(item).map(prop => item[prop] !== null && item[prop] !== undefined ? item[prop].toString().toLowerCase() : "").join('|');
        return stringed.indexOf(text.toLowerCase()) > -1;
    };
    onColumnClick = (ev, column) => {
        if (column && ev && !this.state.isLoading) {
            const prop = this.getContextualMenuProps(ev, column);
            this.setState({ contextualMenuProps: prop });
        }
    };
    getContextualMenuProps = (ev, column) => {
        const menuItems = [];
        if (this.firstsColNames.map(e => e.id).some(e => column.key.includes(e))) {
            menuItems.push({
                key: 'aToZ',
                name: "Sort A to Z",
                iconProps: { iconName: 'SortUp' },
                canCheck: true,
                checked: column.isSorted && !column.isSortedDescending,
                onClick: () => {
                    this.onSort(column, false);
                    this.onContextualMenuDismissed();
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
                    this.onContextualMenuDismissed();
                },
            });
        }
        else {
            menuItems.push({
                key: 'compare',
                name: "Compare From",
                iconProps: { iconName: 'Compare' },
                canCheck: true,
                checked: column.data?.isCompareFrom,
                disabled: column.data?.isCompareFrom,
                onClick: () => {
                    this.onToggleSelect(column.key, !column.data?.isCompareFrom);
                    this.onContextualMenuDismissed();
                },
            });
            menuItems.push({
                key: 'divider_1',
                itemType: _fluentui_react__WEBPACK_IMPORTED_MODULE_20__.ContextualMenuItemType.Divider,
            });
            menuItems.push({
                key: 'contains',
                name: "Contains Data",
                iconProps: { iconName: 'Filter' },
                canCheck: true,
                checked: column.data?.filters.contains,
                onClick: () => {
                    this.onFilterSelect(column, 'contains', !column.data?.filters.contains);
                    this.onContextualMenuDismissed();
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
                    this.onContextualMenuDismissed();
                },
            });
        }
        return {
            items: menuItems,
            target: ev.currentTarget,
            directionalHint: _fluentui_react__WEBPACK_IMPORTED_MODULE_21__.DirectionalHint.bottomLeftEdge,
            gapSpace: 10,
            isBeakVisible: false,
            onDismiss: this.onContextualMenuDismissed,
        };
    };
    onToggleSelect = (key, selected) => {
        const { columns, allRows } = this.state;
        columns.forEach(e => { e.data.isCompareFrom = false; });
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
    };
    onFilterSelect = (column, filterKey, isCheck) => {
        const { columns, allRows } = this.state;
        columns.filter(e => e.data?.filters).forEach(a => Object.keys(a.data.filters).forEach(e => a.data.filters[e] = false));
        const interestedCol = columns.find(e => e.key === column.key);
        let newAllRows = allRows;
        if (interestedCol) {
            Object.keys(interestedCol.data.filters).forEach(e => interestedCol.data.filters[e] = false);
            interestedCol.data.filters[filterKey] = isCheck;
            if (isCheck) {
                const groupedBySolution = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.groupBy(allRows, (e) => e.displayName?.toLowerCase());
                for (const uniqueName of groupedBySolution.entries()) {
                    if (uniqueName[1]) {
                        let contains;
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
        const groupedBySolutionName = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.groupBy(newAllRows, (e) => e.solutionName);
        columns.forEach(e => {
            const foundGroup = groupedBySolutionName.has(e.key);
            if (foundGroup) {
                e.data.count = groupedBySolutionName.get(e.key)?.length;
            }
        });
        this.setState({ columns: columns, allItems: data, rows: data });
    };
    onContextualMenuDismissed = () => {
        this.setState({ contextualMenuProps: undefined });
    };
    onSort = (column, isDescending) => {
        const { columns, rows } = this.state;
        const newColumns = columns.slice();
        const currColumn = newColumns.find(e => e.key === column.key);
        if (currColumn) {
            newColumns.forEach((newCol) => {
                if (newCol === currColumn) {
                    currColumn.isSortedDescending = isDescending;
                    currColumn.isSorted = true;
                }
                else {
                    newCol.isSorted = false;
                    newCol.isSortedDescending = false;
                }
            });
            // Sort the items.
            const newRows = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.copyAndSort(rows, column.key, isDescending);
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
    onRenderHeader = (props, defaultRender) => {
        if (props && defaultRender) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Stack, { horizontal: true, tokens: { childrenGap: 5 }, verticalAlign: "center" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.Text, { variant: "smallPlus" }, props.column.name ?? props.column.fieldName),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: { iconName: "ChevronDown" } }),
                props.column.data?.isCompareFrom && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.IconButton, { iconProps: { iconName: "Compare" } })));
        }
        return null;
    };
    onRenderItemColumn = (item, _index, column) => {
        let result = "---";
        if (column && column.name) {
            const el = item[column.name] ?? item[column.key];
            if (el && typeof (el) === "object") {
                let color = "";
                const status = el.status;
                if (status)
                    switch (Number(el.status)) {
                        case _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Equal.valueOf():
                            color = "green";
                            break;
                        case _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Under.valueOf():
                            color = "red";
                            break;
                        case _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Above.valueOf():
                            color = "gold";
                            break;
                        default:
                            break;
                    }
                const rend = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Stack, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Stack, { horizontal: true, horizontalAlign: "space-between" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.Text, { variant: "medium" }, "Versione:"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.Text, { variant: "medium", style: { color: color } }, el.version)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Stack, { horizontal: true, horizontalAlign: "space-between" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.Text, { variant: "medium" }, "Ultima modifica:"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.Text, { variant: "medium" }, el.modifiedOn?.toLocaleString() ?? ''))));
                return rend;
            }
            else if (el)
                result = el;
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.Text, { variant: "medium" }, result);
    };
    onRenderDetailsFooter = (props, _defaultRender) => {
        if (!props) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Sticky, { stickyPosition: _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.StickyPositionType.Footer, isScrollSynced: true },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.classNames.row },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_22__.DetailsRow, { columns: props.columns, item: {}, itemIndex: -1, selection: props.selection, selectionMode: (props.selection && props.selection.mode) || _fluentui_react__WEBPACK_IMPORTED_MODULE_18__.SelectionMode.none, rowWidth: props.rowWidth, onRenderItemColumn: this._renderDetailsFooterItemColumn }))));
    };
    _renderDetailsFooterItemColumn = (_item, _index, column) => {
        if (column) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, column.data.count)));
        }
        return undefined;
    };
}
const onRenderDetailsHeader = (props, defaultRender) => {
    if (!props) {
        return null;
    }
    const onRenderColumnHeaderTooltip = tooltipHostProps => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.TooltipHost, { ...tooltipHostProps }));
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Sticky, { stickyPosition: _fluentui_react__WEBPACK_IMPORTED_MODULE_9__.StickyPositionType.Header, isScrollSynced: true }, defaultRender({
        ...props,
        onRenderColumnHeaderTooltip,
    })));
};


/***/ }),

/***/ "./Components/ConnectionStringManager/ConnectionStringManager.classNames.ts":
/*!**********************************************************************************!*\
  !*** ./Components/ConnectionStringManager/ConnectionStringManager.classNames.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClassNames": () => (/* binding */ getClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "./node_modules/@fluentui/merge-styles/lib/mergeStyleSets.js");
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/style-utilities */ "./node_modules/@fluentui/style-utilities/lib/index.js");


const getClassNames = () => (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.mergeStyleSets)({
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
        fontWeight: _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.FontWeights.bold
    },
    control: {
        margin: '0 0 15px 0',
        maxWidth: '400px',
    },
});


/***/ }),

/***/ "./Components/ConnectionStringManager/ConnectionStringManager.tsx":
/*!************************************************************************!*\
  !*** ./Components/ConnectionStringManager/ConnectionStringManager.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectionStringManager)
/* harmony export */ });
/* unused harmony export ConnectionStringCard */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Dialog/Dialog.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Spinner/Spinner.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Spinner/Spinner.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Dialog/DialogFooter.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/PrimaryButton/PrimaryButton.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/DefaultButton/DefaultButton.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Dialog/DialogContent.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/TextField/TextField.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Text/Text.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Checkbox/Checkbox.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Helper_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helper/Model */ "./Helper/Model.ts");
/* harmony import */ var _ConnectionStringManager_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConnectionStringManager.classNames */ "./Components/ConnectionStringManager/ConnectionStringManager.classNames.ts");
/* harmony import */ var _DataConnector_ConnectionStringLSConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataConnector/ConnectionStringLSConnector */ "./Components/DataConnector/ConnectionStringLSConnector.ts");





const verticalGapStackTokens = {
    childrenGap: 20,
    padding: 10,
};
class ConnectionStringManager extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    lsConnector = new _DataConnector_ConnectionStringLSConnector__WEBPACK_IMPORTED_MODULE_3__.ConnectionStringLSConnector();
    constructor(prop) {
        super(prop);
        this.state = {
            AllConnections: [],
            isDialogOpen: false,
            isSaving: false
        };
    }
    render() {
        const { EditConnection, AllConnections, isDialogOpen, isSaving, dialogContentProps } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, { style: { width: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, { horizontal: true, style: { width: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton, { iconProps: { iconName: "Add" }, title: "Add", ariaLabel: "Add", onClick: () => this.AddNewConnectionClick() }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, { horizontal: true, verticalFill: true, wrap: true, horizontalAlign: "start", verticalAlign: "start", tokens: verticalGapStackTokens },
                    EditConnection && react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectionStringCard, { ...EditConnection }),
                    AllConnections.map(e => react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectionStringCard, { key: e.Id, ...e })))),
            this.props.children && react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(this.props.children, { connectionStrings: AllConnections.filter(e => e.isSelected) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.Dialog, { hidden: !isDialogOpen, onDismiss: this.clickedNo.bind(this), dialogContentProps: dialogContentProps, modalProps: { isBlocking: true } },
                isSaving && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_8__.SpinnerSize.medium }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.DialogFooter, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.PrimaryButton, { disabled: isSaving, onClick: dialogContentProps && dialogContentProps.clickedYes, text: "Si" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.DefaultButton, { disabled: isSaving, onClick: dialogContentProps && dialogContentProps.clickedNo, text: "No" })))));
    }
    async componentDidMount() {
        await this.getAllConnections();
    }
    async getAllConnections() {
        const connections = this.lsConnector.GetAll();
        // const connections = await this.connector.GetAll();
        if (connections)
            this.setState({
                AllConnections: connections.map(e => {
                    return { ...e, isEditMode: false, onEdit: this.onEdit.bind(this), onSave: this.onSave.bind(this), isSelected: false, onSelect: this.onSelect.bind(this), onDelete: this.onDelete.bind(this) };
                })
            });
    }
    clickedNo = () => {
        this.setState({ isDialogOpen: false, dialogContentProps: undefined });
    };
    AddNewConnectionClick() {
        const newAdd = { ClientId: "", Id: _Helper_Model__WEBPACK_IMPORTED_MODULE_1__.Guid.Empty, IpAddress: "", Name: "", OrganizationUrl: "", Save: true, Secret: "", isEditMode: true, onEdit: this.onEdit.bind(this), onSave: this.onSave.bind(this), isSelected: false, onSelect: this.onSelect.bind(this), onDelete: this.onDelete.bind(this) };
        this.setState({ EditConnection: newAdd });
    }
    onEdit(id, edit) {
        const conn = this.state.AllConnections;
        const found = conn.find(p => {
            if (p.Id !== id)
                return false;
            p.isEditMode = edit;
            return true;
        });
        if (found) {
            this.setState({ AllConnections: conn });
        }
        else {
            this.setState({ EditConnection: undefined });
        }
    }
    onSelect(id, selected) {
        const conn = this.state.AllConnections;
        if (this.props.SelectionMode === "single")
            conn.forEach(con => con.isSelected = false);
        const found = conn.find(p => {
            if (p.Id !== id)
                return false;
            p.isSelected = selected;
            return true;
        });
        if (found) {
            this.setState({ AllConnections: conn });
        }
        else {
            this.setState({ EditConnection: undefined });
        }
    }
    async onSave(toSave) {
        // const saved = await this.connector.AddOrUpdate(toSave);
        this.lsConnector.AddOrUpdate(toSave);
        await this.getAllConnections();
        this.setState({ EditConnection: undefined });
    }
    onDelete = (id) => {
        const conn = this.state.AllConnections;
        const found = conn.find(p => p.Id === id);
        if (found) {
            const dialogContentProps = {
                type: _fluentui_react__WEBPACK_IMPORTED_MODULE_12__.DialogType.normal,
                title: 'Elimina connessione',
                closeButtonAriaLabel: 'Chiudi',
                subText: `Vuoi eliminare la connessione ${found.Name} - ${found.OrganizationUrl}`,
                clickedYes: () => this.clickedDelete(id),
                clickedNo: this.clickedNo
            };
            this.setState({ isDialogOpen: true, dialogContentProps: dialogContentProps });
        }
    };
    clickedDelete = (id) => {
        this.lsConnector.Remove(id);
        this.getAllConnections();
        this.clickedNo();
    };
}
const textFieldStyles = { fieldGroup: { width: 200, maxWidth: 200 } };
const stackTokens = { childrenGap: 15 };
const ConnectionStringCard = (props) => {
    const style = (0,_ConnectionStringManager_classNames__WEBPACK_IMPORTED_MODULE_2__.getClassNames)();
    const [ClientIdFieldValue, setClientIdFieldValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.ClientId);
    const [SecretFieldValue, setSecretFieldValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Secret);
    const [NameFieldValue, setNameFieldValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Name);
    const [OrganizationUrlFieldValue, setOrganizationUrlFieldValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.OrganizationUrl);
    const onSave = () => {
        const toSave = { Id: props.Id, OrganizationUrl: OrganizationUrlFieldValue, Name: NameFieldValue, Secret: SecretFieldValue, ClientId: ClientIdFieldValue, IpAddress: props.IpAddress, Save: props.Save };
        props.onSave(toSave);
    };
    const title = `${props.Name} - ${props.OrganizationUrl}`;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: style.cardtoPick },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: style.container },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, { horizontal: true, horizontalAlign: "space-between", verticalAlign: "center" },
                props.isEditMode ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, { tokens: { ...stackTokens, padding: 5 } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, { horizontal: true, tokens: stackTokens },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.TextField, { label: "Nome", value: NameFieldValue, onChange: (_e, newValue) => setNameFieldValue(newValue || ''), styles: textFieldStyles, type: "Name" }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.TextField, { label: "Organization Url", value: OrganizationUrlFieldValue, onChange: (_e, newValue) => setOrganizationUrlFieldValue(newValue || ''), styles: textFieldStyles, type: "Organization" })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, { horizontal: true, tokens: stackTokens },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.TextField, { label: "Client Id", value: ClientIdFieldValue, onChange: (_e, newValue) => setClientIdFieldValue(newValue || ''), styles: textFieldStyles, type: "ClientId" }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.TextField, { label: "Secret", value: SecretFieldValue, onChange: (_e, newValue) => setSecretFieldValue(newValue || ''), styles: textFieldStyles, type: "Secret" })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, { horizontal: true, tokens: stackTokens },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.DefaultButton, { text: "Annulla", onClick: () => props.onEdit(props.Id, false), allowDisabledFocus: true }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.PrimaryButton, { text: "Salva", onClick: () => onSave(), allowDisabledFocus: true })))
                    :
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, { horizontal: true, horizontalAlign: "space-between", verticalAlign: "center" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.Text, { variant: "mediumPlus" }, title),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton, { iconProps: { iconName: "Edit" }, title: "Edit", onClick: () => props.onEdit(props.Id, true) }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton, { iconProps: { iconName: "Cancel", color: 'red' }, title: "Cancella", onClick: () => props.onDelete(props.Id) })),
                props.Id && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_15__.Checkbox, { checked: props.isSelected, onChange: () => props.onSelect(props.Id, !props.isSelected) })))));
};


/***/ }),

/***/ "./Components/DataConnector/BaseApiConnector.ts":
/*!******************************************************!*\
  !*** ./Components/DataConnector/BaseApiConnector.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseApiConnector": () => (/* binding */ BaseApiConnector)
/* harmony export */ });
// import axios from "axios";
function Serialize(parameters) {
    const keys = Object.keys(parameters);
    const toRet = keys.map(k => {
        let val = "";
        if (Array.isArray(parameters[k]))
            // val = JSON.stringify(parameters[k]);
            val = '[' + parameters[k].map((e) => "'" + e + "'").join(',') + ']';
        else
            val = parameters[k];
        return k + '=' + val;
    }).join('&');
    return toRet;
}
class BaseApiConnector {
    apiUrl = "";
    constructor() {
        this.apiUrl = window.location.hostname;
    }
    static async Retrieve(signal, controller, method, parameters) {
        try {
            const query = parameters ? "?" + Serialize(parameters) : "";
            const url = encodeURI(`/api/${controller}/${method}${query}`);
            const resp = await fetch(url, { signal: signal });
            if (resp.ok)
                return await resp.json();
            else
                throw resp.statusText;
            //return (await axios.get<T>(url)).data;
        }
        catch (ex) {
            throw ex;
        }
    }
    static async Post(_signal, controller, method, data) {
        try {
            const url = encodeURI(`/api/${controller}/${method}`);
            const resp = await fetch(url, {
                signal: signal,
                method: "POST",
                mode: 'cors',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data ? JSON.stringify(data) : undefined
            });
            if (resp.ok)
                return await resp.json();
            else
                throw resp.statusText;
            // return (await axios.post<T>(url, data)).data;
        }
        catch (ex) {
            throw ex;
        }
    }
    static async Upload(_signal, controller, method, data, additionalUrl) {
        try {
            const url = encodeURI(`/api/${controller}/${method}${additionalUrl}`);
            const resp = await fetch(url, {
                signal: signal,
                method: "POST",
                mode: 'cors',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: data ? JSON.stringify(data) : undefined
            });
            if (resp.ok)
                return await resp.json();
            else
                throw resp.statusText;
            // const config = {
            //     headers: {
            //         'content-type': 'multipart/form-data',
            //     },
            // };
            // return (await axios.post<T>(url, data, config)).data;
        }
        catch (ex) {
            throw ex;
        }
    }
}
//const PromptDownload = (response: AxiosResponse) => {
//    const fileNameHeader = "content-disposition";
//    const suggestedFileName = response.headers[fileNameHeader];
//    const effectiveFileName = suggestedFileName ? headerToFileName(suggestedFileName) : "nofilename";
//    console.log("Received header [" + fileNameHeader + "]: " + suggestedFileName
//        + ", effective fileName: " + effectiveFileName);
//    const urlObj = window.URL.createObjectURL(new Blob([response.data]));
//    const link = document.createElement('a');
//    link.href = urlObj;
//    link.setAttribute('download', effectiveFileName);
//    document.body.appendChild(link);
//    link.click();
//}
//const headerToFileName = (header: string) => {
//    if (Helpers.StringIsNotNullOrEmpty(header)) {
//        header = header.replace(/"/gi, '');
//        const match = "filename=";
//        const temp = header.substr(header.indexOf(match) + match.length);
//        return temp
//    }
//    return header;
//}


/***/ }),

/***/ "./Components/DataConnector/ConnectionStringLSConnector.ts":
/*!*****************************************************************!*\
  !*** ./Components/DataConnector/ConnectionStringLSConnector.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionStringLSConnector": () => (/* binding */ ConnectionStringLSConnector)
/* harmony export */ });
/* harmony import */ var _Helper_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Helper/Helpers */ "./Helper/Helpers.ts");
/* harmony import */ var _Helper_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helper/LocalStorageHelper */ "./Helper/LocalStorageHelper.ts");
/* harmony import */ var _Helper_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Helper/Model */ "./Helper/Model.ts");



const LSCONNECTIONS_KEY = 'connections';
class ConnectionStringLSConnector {
    GetAll() {
        return _Helper_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_1__.LSHelper.getWithExpiry(LSCONNECTIONS_KEY);
    }
    AddOrUpdate(model) {
        let exisitng = this.GetAll();
        if (!exisitng)
            exisitng = [];
        if (model.Id && model.Id !== _Helper_Model__WEBPACK_IMPORTED_MODULE_2__.Guid.Empty) {
            let had = exisitng.find(e => e.Id === model.Id);
            if (had) {
                Object.assign(had, model);
            }
            else {
                exisitng.push(model);
            }
        }
        else {
            model.Id = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.trimCurlyBraces(_Helper_Model__WEBPACK_IMPORTED_MODULE_2__.Guid.newGuid());
            exisitng.push(model);
        }
        _Helper_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_1__.LSHelper.setWithExpiry(LSCONNECTIONS_KEY, exisitng);
    }
    Remove(id) {
        let exisitng = this.GetAll();
        let newArr = [];
        if (!exisitng)
            exisitng = [];
        if (id && id !== _Helper_Model__WEBPACK_IMPORTED_MODULE_2__.Guid.Empty) {
            newArr = exisitng.filter(e => e.Id !== id);
        }
        else {
            newArr = exisitng;
        }
        _Helper_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_1__.LSHelper.setWithExpiry(LSCONNECTIONS_KEY, newArr);
    }
}


/***/ }),

/***/ "./Components/DataConnector/DataConnector.ts":
/*!***************************************************!*\
  !*** ./Components/DataConnector/DataConnector.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataConnector": () => (/* binding */ DataConnector)
/* harmony export */ });
/* harmony import */ var _BaseApiConnector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseApiConnector */ "./Components/DataConnector/BaseApiConnector.ts");

class DataConnector {
    _signal;
    constructor(signal) {
        this._signal = signal;
    }
    async GetSolutionsForConnectionStrings(model) {
        try {
            const result = await _BaseApiConnector__WEBPACK_IMPORTED_MODULE_0__.BaseApiConnector.Post(this._signal, "Data", "GetSolutionsForConnectionStrings", model);
            if (result) {
                return result;
            }
        }
        catch (error) {
            console.error(error);
        }
        return [];
    }
    async GetSolutionDetailsForConnectionStrings(model) {
        try {
            const result = await _BaseApiConnector__WEBPACK_IMPORTED_MODULE_0__.BaseApiConnector.Post(this._signal, "Data", "GetSolutionsDetailsForConnections", model);
            if (result) {
                return result;
            }
        }
        catch (error) {
            console.error(error);
        }
        return [];
    }
    async GetSolutionsDetails(model) {
        try {
            const result = await _BaseApiConnector__WEBPACK_IMPORTED_MODULE_0__.BaseApiConnector.Post(this._signal, "Data", "GetSolutionsDetails", model);
            if (result) {
                return result;
            }
        }
        catch (error) {
            console.error(error);
        }
        return [];
    }
}


/***/ }),

/***/ "./Components/LoadingAnimation.tsx":
/*!*****************************************!*\
  !*** ./Components/LoadingAnimation.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Waiter)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Overlay/Overlay.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Spinner/Spinner.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Spinner/Spinner.types.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Waiter() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__.Overlay, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, { verticalFill: true, verticalAlign: "center", horizontalAlign: "center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.Spinner, { size: _fluentui_react__WEBPACK_IMPORTED_MODULE_4__.SpinnerSize.large }))));
}
;


/***/ }),

/***/ "./Components/SolutionDetail/SolutionDetail.classNames.ts":
/*!****************************************************************!*\
  !*** ./Components/SolutionDetail/SolutionDetail.classNames.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClassNames": () => (/* binding */ getClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "./node_modules/@fluentui/merge-styles/lib/mergeStyleSets.js");
/* harmony import */ var _fluentui_react_lib_Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react/lib/Styling */ "./node_modules/@fluentui/style-utilities/lib/index.js");


const theme = (0,_fluentui_react_lib_Styling__WEBPACK_IMPORTED_MODULE_0__.getTheme)();
const getClassNames = (props) => (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.mergeStyleSets)({
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


/***/ }),

/***/ "./Components/SolutionDetail/SolutionDetail.tsx":
/*!******************************************************!*\
  !*** ./Components/SolutionDetail/SolutionDetail.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionDetail": () => (/* binding */ SolutionDetail)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ScrollablePane/ScrollablePane.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ScrollablePane/ScrollablePane.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Sticky/Sticky.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Sticky/Sticky.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/SearchBox/SearchBox.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Text/Text.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/DetailsList/ShimmeredDetailsList.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/utilities/lib/selection/Selection.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/common/DirectionalHint.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/DetailsList/DetailsRow.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helper/Helpers */ "./Helper/Helpers.ts");
/* harmony import */ var _Helper_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Helper/Model */ "./Helper/Model.ts");
/* harmony import */ var _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataConnector/DataConnector */ "./Components/DataConnector/DataConnector.ts");
/* harmony import */ var _SolutionDetail_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SolutionDetail.classNames */ "./Components/SolutionDetail/SolutionDetail.classNames.ts");






const calloutProps = { gapSpace: 0 };
const hostStyles = { root: { display: 'inline-block' } };
const refreshButtonStyles = { root: { verticalAlign: 'middle' } };
class SolutionDetail extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    controller = new AbortController();
    signal = this.controller.signal;
    connector = new _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_3__.DataConnector(this.signal);
    classNames = (0,_SolutionDetail_classNames__WEBPACK_IMPORTED_MODULE_4__.getClassNames)({ height: "75vh" });
    constructor(prop) {
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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.classNames.wrapper },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.ScrollablePane, { scrollbarVisibility: _fluentui_react__WEBPACK_IMPORTED_MODULE_6__.ScrollbarVisibility.auto },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.Sticky, { stickyPosition: _fluentui_react__WEBPACK_IMPORTED_MODULE_8__.StickyPositionType.Header },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { horizontal: true, horizontalAlign: "space-between", style: { alignItems: 'center', paddingLeft: '10px' } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { horizontal: true, horizontalAlign: "start", verticalAlign: "center", tokens: { childrenGap: 20 } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.SearchBox, { className: this.classNames.filter, placeholder: "Cerca", onChange: this.onFilterChange }),
                            !isLoading &&
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.TooltipHost, { content: "Ricarica", id: _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.GetUUID(), calloutProps: calloutProps, styles: hostStyles },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.IconButton, { styles: refreshButtonStyles, className: 'refresh', iconProps: { iconName: 'Refresh' }, onClick: this.onReloadClick.bind(this) })),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "mediumPlus" },
                                "Soluzione selezionata: ",
                                this.props.Name)))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.ShimmeredDetailsList, { items: rows, columns: columns, setKey: "set", onRenderItemColumn: this.onRenderItemColumn, onRenderDetailsHeader: onRenderDetailsHeader, layoutMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_15__.DetailsListLayoutMode.fixedColumns, constrainMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_15__.ConstrainMode.unconstrained, enableShimmer: isLoading, selectionMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_16__.SelectionMode.none, onColumnHeaderClick: this.onColumnClick, columnReorderOptions: { frozenColumnCountFromStart: 2, onColumnDrop: this._handleColumnReorder.bind(this) } }),
                contextualMenuProps && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_17__.ContextualMenu, { ...contextualMenuProps }))));
    }
    componentDidMount() {
        this.load();
    }
    componentDidUpdate(prevProps) {
        if (!_Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.objectsEqual(prevProps, this.props)) {
            this.reloadConnector();
            this.load();
        }
    }
    reloadConnector() {
        this.controller.abort();
        this.controller = new AbortController();
        this.signal = this.controller.signal;
        this.connector = new _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_3__.DataConnector(this.signal);
    }
    componentWillUnmount() {
        this.controller.abort();
    }
    async load() {
        this.setState({ isLoading: true });
        const others = [{ colName: "Tipo", order: 0, id: "logicalName" }, { colName: "Nome", order: 1, id: "displayName" }];
        const colsOrder = others.concat(this.props.connectionStrings.map((e, i) => {
            return {
                colName: `${e.OrganizationUrl.replace(".com", "")}.com`, order: i + 2, id: _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.trimCurlyBraces(e.Id).toLowerCase()
            };
        }));
        const cols = colsOrder.map(a => {
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
            };
        });
        this.setState({ columns: cols });
        const data = await this.connector.GetSolutionDetailsForConnectionStrings({
            ConnectionStrings: this.props.connectionStrings.map(e => {
                return {
                    Id: e.Id, Url: e.OrganizationUrl, Client: e.ClientId, Secret: e.Secret
                };
            }), Name: this.props.Name
        });
        if (data) {
            let allSolutions = [];
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
                    };
                }));
            });
            const orderedByProps = this.mapItems(allSolutions, cols);
            this.setState({ rows: orderedByProps, allItems: orderedByProps, allRows: allSolutions });
        }
        this.setState({ isLoading: this.signal ? false : true });
    }
    _handleColumnReorder = (dragDropDetails) => {
        const draggedIndex = dragDropDetails.draggedIndex;
        const targetIndex = dragDropDetails.targetIndex;
        const draggedItems = this.state.columns[draggedIndex];
        const newColumns = [...this.state.columns];
        // insert before the dropped item
        newColumns.splice(draggedIndex, 1);
        newColumns.splice(targetIndex, 0, draggedItems);
        this.setState({ columns: newColumns });
    };
    mapItems(allSolutions, cols) {
        const groupedBySolution = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.groupBy(allSolutions, (e) => e.displayName?.toLowerCase());
        const items = [];
        const defaultCompare = cols.find(e => e.data?.isCompareFrom);
        for (const uniqueName of groupedBySolution.keys()) {
            const elems = groupedBySolution.get(uniqueName);
            if (elems) {
                const item = {
                    logicalName: elems[0].logicalName,
                    displayName: uniqueName,
                    referenceEntity: elems[0].referenceEntity
                };
                let versionVal;
                let id;
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
    getStatus(elem, compareVal, compareId) {
        if (compareId && compareVal) {
            if (elem.connectionId === compareId) {
                return _Helper_Model__WEBPACK_IMPORTED_MODULE_2__.VersionStatus.Default;
            }
            else
                return elem.version === compareVal ? _Helper_Model__WEBPACK_IMPORTED_MODULE_2__.VersionStatus.Equal : (elem.version > compareVal ? _Helper_Model__WEBPACK_IMPORTED_MODULE_2__.VersionStatus.Above : _Helper_Model__WEBPACK_IMPORTED_MODULE_2__.VersionStatus.Under);
        }
        return _Helper_Model__WEBPACK_IMPORTED_MODULE_2__.VersionStatus.Default;
    }
    onFilterChange = (_ev, text) => {
        const elems = this.state.allItems;
        _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.StringIsNotNullOrEmpty(text) ? this.setState({ rows: elems.filter((item) => this.hasText(item, text)) }) : this.setState({ rows: elems });
    };
    hasText = (item, text) => {
        const stringed = Object.keys(item).map(prop => item[prop] !== null && item[prop] !== undefined ? item[prop].toString().toLowerCase() : "").join('|');
        return stringed.indexOf(text.toLowerCase()) > -1;
    };
    onColumnClick = (ev, column) => {
        if (column && ev && !this.state.isLoading) {
            const prop = this.getContextualMenuProps(ev, column);
            this.setState({ contextualMenuProps: prop });
        }
    };
    getContextualMenuProps = (ev, column) => {
        const menuItems = [];
        if (!column.name.toLowerCase().includes("com")) {
            menuItems.push({
                key: 'aToZ',
                name: "Sort A to Z",
                iconProps: { iconName: 'SortUp' },
                canCheck: true,
                checked: column.isSorted && !column.isSortedDescending,
                onClick: () => {
                    this.onSort(column, false);
                    this.onContextualMenuDismissed();
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
                    this.onContextualMenuDismissed();
                },
            });
        }
        else {
            menuItems.push({
                key: 'compare',
                name: "Compare From",
                iconProps: { iconName: 'Compare' },
                canCheck: true,
                checked: column.data?.isCompareFrom,
                disabled: column.data?.isCompareFrom,
                onClick: () => {
                    this.onToggleSelect(column.key, !column.data?.isCompareFrom);
                    this.onContextualMenuDismissed();
                },
            });
            menuItems.push({
                key: 'divider_1',
                itemType: _fluentui_react__WEBPACK_IMPORTED_MODULE_18__.ContextualMenuItemType.Divider,
            });
            menuItems.push({
                key: 'contains',
                name: "Contains Data",
                iconProps: { iconName: 'Filter' },
                canCheck: true,
                checked: column.data?.filters.contains,
                onClick: () => {
                    this.onFilterSelect(column, 'contains', !column.data?.filters.contains);
                    this.onContextualMenuDismissed();
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
                    this.onContextualMenuDismissed();
                },
            });
        }
        return {
            items: menuItems,
            target: ev.currentTarget,
            directionalHint: _fluentui_react__WEBPACK_IMPORTED_MODULE_19__.DirectionalHint.bottomLeftEdge,
            gapSpace: 10,
            isBeakVisible: false,
            onDismiss: this.onContextualMenuDismissed,
        };
    };
    onToggleSelect = (key, selected) => {
        const { columns, allRows } = this.state;
        columns.forEach(e => { e.data.isCompareFrom = false; });
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
    };
    onFilterSelect = (column, filterKey, isCheck) => {
        const { columns, allRows } = this.state;
        columns.filter(e => e.data?.filters).forEach(a => Object.keys(a.data.filters).forEach(e => a.data.filters[e] = false));
        const interestedCol = columns.find(e => e.key === column.key);
        let newAllRows = allRows;
        if (interestedCol) {
            Object.keys(interestedCol.data.filters).forEach(e => interestedCol.data.filters[e] = false);
            interestedCol.data.filters[filterKey] = isCheck;
            if (isCheck) {
                const groupedBySolution = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.groupBy(allRows, (e) => e.displayName?.toLowerCase());
                for (const uniqueName of groupedBySolution.entries()) {
                    if (uniqueName[1]) {
                        let contains;
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
        const groupedByConnection = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.groupBy(newAllRows, (e) => e.connectionId);
        columns.forEach(e => {
            const foundGroup = groupedByConnection.has(e.key);
            if (foundGroup) {
                e.data.count = groupedByConnection.get(e.key)?.length;
            }
        });
        this.setState({ columns: columns, allItems: data, rows: data });
    };
    onContextualMenuDismissed = () => {
        this.setState({ contextualMenuProps: undefined });
    };
    onSort = (column, isDescending) => {
        const { columns, rows } = this.state;
        const newColumns = columns.slice();
        const currColumn = newColumns.find(e => e.key === column.key);
        if (currColumn) {
            newColumns.forEach((newCol) => {
                if (newCol === currColumn) {
                    currColumn.isSortedDescending = isDescending;
                    currColumn.isSorted = true;
                }
                else {
                    newCol.isSorted = false;
                    newCol.isSortedDescending = true;
                }
            });
            // Sort the items.
            const newRows = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.copyAndSort(rows, column.key, isDescending);
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
    onRenderHeader = (props, defaultRender) => {
        if (props && defaultRender) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { horizontal: true, tokens: { childrenGap: 5 }, verticalAlign: "center" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "smallPlus" }, props.column.name ?? props.column.fieldName),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.IconButton, { iconProps: { iconName: "ChevronDown" } }),
                props.column.data?.isCompareFrom && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.IconButton, { iconProps: { iconName: "Compare" } })));
        }
        return null;
    };
    onRenderItemColumn = (item, _index, column) => {
        let result = "---";
        if (column && column.name) {
            const el = item[column.name] ?? item[column.key];
            if (el && typeof (el) === "object") {
                let color = "";
                const status = el.status;
                if (status)
                    switch (Number(el.status)) {
                        case _Helper_Model__WEBPACK_IMPORTED_MODULE_2__.VersionStatus.Equal.valueOf():
                            color = "green";
                            break;
                        case _Helper_Model__WEBPACK_IMPORTED_MODULE_2__.VersionStatus.Under.valueOf():
                            color = "red";
                            break;
                        case _Helper_Model__WEBPACK_IMPORTED_MODULE_2__.VersionStatus.Above.valueOf():
                            color = "gold";
                            break;
                        default:
                            break;
                    }
                const rend = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { horizontal: true, horizontalAlign: "space-between" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "medium" }, "Versione:"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "medium", style: { color: color } }, el.version)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { horizontal: true, horizontalAlign: "space-between" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "medium" }, "Ultima modifica:"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "medium" }, el.modifiedOn?.toLocaleString() ?? ''))));
                return rend;
            }
            else if (el)
                result = el;
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "medium" }, result);
    };
    onRenderDetailsFooter = (props, _defaultRender) => {
        if (!props) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.Sticky, { stickyPosition: _fluentui_react__WEBPACK_IMPORTED_MODULE_8__.StickyPositionType.Footer, isScrollSynced: true },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.classNames.row },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_20__.DetailsRow, { columns: props.columns, item: {}, itemIndex: -1, selection: props.selection, selectionMode: (props.selection && props.selection.mode) || _fluentui_react__WEBPACK_IMPORTED_MODULE_16__.SelectionMode.none, rowWidth: props.rowWidth, onRenderItemColumn: this._renderDetailsFooterItemColumn }))));
    };
    _renderDetailsFooterItemColumn = (_item, _index, column) => {
        if (column) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, column.data.count)));
        }
        return undefined;
    };
}
const onRenderDetailsHeader = (props, defaultRender) => {
    if (!props) {
        return null;
    }
    const onRenderColumnHeaderTooltip = tooltipHostProps => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.TooltipHost, { ...tooltipHostProps }));
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.Sticky, { stickyPosition: _fluentui_react__WEBPACK_IMPORTED_MODULE_8__.StickyPositionType.Header, isScrollSynced: true }, defaultRender({
        ...props,
        onRenderColumnHeaderTooltip,
    })));
};


/***/ }),

/***/ "./Components/SolutionList/SolutionList.classNames.ts":
/*!************************************************************!*\
  !*** ./Components/SolutionList/SolutionList.classNames.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClassNames": () => (/* binding */ getClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "./node_modules/@fluentui/merge-styles/lib/mergeStyleSets.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/style-utilities/lib/index.js");


const theme = (0,_fluentui_react__WEBPACK_IMPORTED_MODULE_0__.getTheme)();
const getClassNames = (props) => (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.mergeStyleSets)({
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


/***/ }),

/***/ "./Components/SolutionList/SolutionList.tsx":
/*!**************************************************!*\
  !*** ./Components/SolutionList/SolutionList.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionList": () => (/* binding */ SolutionList)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/utilities/lib/selection/Selection.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Text/Text.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/DefaultButton/DefaultButton.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Panel/Panel.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Panel/Panel.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ScrollablePane/ScrollablePane.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ScrollablePane/ScrollablePane.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Sticky/Sticky.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Sticky/Sticky.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/SearchBox/SearchBox.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/DetailsList/ShimmeredDetailsList.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/utilities/lib/selection/Selection.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/common/DirectionalHint.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helper/Helpers */ "./Helper/Helpers.ts");
/* harmony import */ var _Helper_ListHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Helper/ListHelpers */ "./Helper/ListHelpers.ts");
/* harmony import */ var _Helper_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Helper/Model */ "./Helper/Model.ts");
/* harmony import */ var _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DataConnector/DataConnector */ "./Components/DataConnector/DataConnector.ts");
/* harmony import */ var _SolutionDetail_SolutionDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SolutionDetail/SolutionDetail */ "./Components/SolutionDetail/SolutionDetail.tsx");
/* harmony import */ var _ViewSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ViewSelection */ "./Components/ViewSelection.tsx");
/* harmony import */ var _SolutionList_classNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SolutionList.classNames */ "./Components/SolutionList/SolutionList.classNames.ts");









const calloutProps = { gapSpace: 0 };
const hostStyles = { root: { display: 'inline-block' } };
const refreshButtonStyles = { root: { verticalAlign: 'middle' } };
class SolutionList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    controller = new AbortController();
    signal = this.controller.signal;
    connector = new _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_4__.DataConnector(this.signal);
    classNames = (0,_SolutionList_classNames__WEBPACK_IMPORTED_MODULE_7__.getClassNames)({ height: "85vh" });
    _selection;
    firstsColNames = [{ colName: "Soluzioni", order: 0, id: "solutionName" }];
    constructor(prop) {
        super(prop);
        this.state = {
            rows: [],
            isLoading: false,
            columns: [],
            allItems: [],
            allRows: [],
            isOpen: false
        };
        this._selection = new _fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Selection({ onSelectionChanged: () => this.getSelectionDetail() });
    }
    render() {
        const { rows, isLoading, columns, contextualMenuProps, isOpen, selectedToPass, numberOfRows } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { tokens: { childrenGap: 20 } },
            this.props.connectionStrings.length < 1 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "mediumPlus" }, "Seleziona una o pi\u00F9 organizzazioni") : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.DefaultButton, { text: "Soluzioni", onClick: this.onPanelOpen.bind(this) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.Panel, { headerText: "Filtri", isOpen: isOpen, onDismiss: this.dismissPanel.bind(this), closeButtonAriaLabel: "Close", type: _fluentui_react__WEBPACK_IMPORTED_MODULE_13__.PanelType.large, isHiddenOnDismiss: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.classNames.wrapper },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.ScrollablePane, { scrollbarVisibility: _fluentui_react__WEBPACK_IMPORTED_MODULE_15__.ScrollbarVisibility.auto },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_16__.Sticky, { stickyPosition: _fluentui_react__WEBPACK_IMPORTED_MODULE_17__.StickyPositionType.Header },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { horizontal: true, horizontalAlign: "space-between", style: { alignItems: 'center', paddingLeft: '10px' } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { horizontal: true, horizontalAlign: "start", verticalAlign: "center", tokens: { childrenGap: 20 } },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_18__.SearchBox, { className: this.classNames.filter, placeholder: "Cerca", onChange: this.onFilterChange }),
                                    !isLoading &&
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_19__.TooltipHost, { content: "Ricarica", id: _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.GetUUID(), calloutProps: calloutProps, styles: hostStyles },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_20__.IconButton, { styles: refreshButtonStyles, className: 'refresh', iconProps: { iconName: 'Refresh' }, onClick: this.onReloadClick.bind(this) })),
                                    !isLoading && rows.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_11__.DefaultButton, { text: "Excel export", onClick: this.handleExport.bind(this) }),
                                    numberOfRows ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "mediumPlus" },
                                        numberOfRows,
                                        " Soluzioni  ",
                                        this.state.selected ? ' ' + this.state.selected + ' selezionata' : ', seleziona una soluzione') : this.props.connectionStrings.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "mediumPlus" }, "0 Soluzioni trovate") : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "mediumPlus" }, "Seleziona una o pi\u00F9 organizzazioni")))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewSelection__WEBPACK_IMPORTED_MODULE_6__.ViewSelection, { selection: this._selection, items: rows },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_21__.ShimmeredDetailsList, { items: rows, columns: columns, setKey: "set", onRenderItemColumn: this.onRenderItemColumn, onRenderDetailsHeader: onRenderDetailsHeader, layoutMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_22__.DetailsListLayoutMode.fixedColumns, constrainMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_22__.ConstrainMode.unconstrained, enableShimmer: isLoading, selectionMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_23__.SelectionMode.single, selection: this._selection, 
                                // onColumnHeaderClick={this.onColumRenderClick.bind(this)}
                                columnReorderOptions: { frozenColumnCountFromStart: 1, onColumnDrop: this._handleColumnReorder.bind(this) }, selectionPreservedOnEmptyClick: true })),
                        contextualMenuProps && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_24__.ContextualMenu, { ...contextualMenuProps })))),
            selectedToPass && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SolutionDetail_SolutionDetail__WEBPACK_IMPORTED_MODULE_5__.SolutionDetail, { ...{ Name: selectedToPass, ...this.props } })));
    }
    componentDidMount() {
        // this.load();
    }
    componentDidUpdate(prevProps) {
        if (!_Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.arraysEqual(prevProps.connectionStrings, this.props.connectionStrings)) {
            this.setState({ selectedToPass: undefined, selected: undefined });
            this.reloadConnector();
            this.load();
        }
    }
    reloadConnector() {
        this.controller.abort();
        this.controller = new AbortController();
        this.signal = this.controller.signal;
        this.connector = new _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_4__.DataConnector(this.signal);
    }
    componentWillUnmount() {
        this.controller.abort();
    }
    onPanelOpen(_ev) {
        this.setState({ isOpen: true });
    }
    dismissPanel() {
        this.setState({ isOpen: false, selectedToPass: this.state.selected });
    }
    handleExport(_ev) {
        const fileName = "CompareEnvironments" + new Date().toLocaleString().split(' ').join('_');
        const sheetProps = {
            Title: "Compare Environments",
            Subject: "Solutions",
            CreatedDate: new Date()
        };
        const firstRow = this.firstsColNames.map(e => { return { key: e.id, label: e.colName }; });
        const transform = (el) => {
            let toPut = '---';
            if (el && typeof (el) === "object") {
                toPut = el.version;
            }
            return toPut;
        };
        _Helper_ListHelpers__WEBPACK_IMPORTED_MODULE_2__.ListHelpers.exportList(firstRow, this.props.connectionStrings.map(e => e.OrganizationUrl), this.state.rows, sheetProps, fileName, transform);
    }
    async load() {
        this.setState({ isLoading: true });
        this._selection.setAllSelected(false);
        const colsOrder = this.firstsColNames.concat(this.props.connectionStrings.map((e, i) => {
            return {
                colName: `${e.OrganizationUrl.replace(".com", "")}.com`,
                order: i + 1,
                id: _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.trimCurlyBraces(e.Id).toLowerCase()
            };
        }));
        const cols = colsOrder.map(a => {
            return {
                key: a.id,
                name: a.colName,
                minWidth: 210,
                data: { isCompareFrom: a.order === 1 },
                onRenderHeader: this.onRenderHeader,
                onColumnClick: this.onColumnClick,
                isResizable: true,
            };
        });
        this.setState({ columns: cols });
        const data = await this.connector.GetSolutionsForConnectionStrings({
            ConnectionStrings: this.props.connectionStrings.map(e => {
                return {
                    Id: e.Id, Url: e.OrganizationUrl, Client: e.ClientId, Secret: e.Secret
                };
            })
        });
        if (data) {
            let allSolutions = [];
            data.forEach(e => {
                allSolutions = allSolutions.concat(e.solutions.map(a => {
                    return {
                        version: a.Version,
                        solutionName: a.UniqueName,
                        connectionUrl: e.url,
                        connectionId: e.connectionStringId,
                        modifiedOn: a.ModifiedOn
                    };
                }));
            });
            const orderedByProps = this.mapItems(allSolutions, cols);
            const count = orderedByProps.length;
            this.setState({ rows: orderedByProps, allItems: orderedByProps, allRows: allSolutions, numberOfRows: count });
        }
        this.setState({ isLoading: this.signal ? false : true });
    }
    _handleColumnReorder = (dragDropDetails) => {
        const draggedIndex = dragDropDetails.draggedIndex;
        const targetIndex = dragDropDetails.targetIndex;
        const draggedItems = this.state.columns[draggedIndex];
        const newColumns = [...this.state.columns];
        // insert before the dropped item
        newColumns.splice(draggedIndex, 1);
        newColumns.splice(targetIndex, 0, draggedItems);
        this.setState({ columns: newColumns });
    };
    mapItems(allSolutions, cols) {
        const groupedBySolution = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.groupBy(allSolutions, (e) => e.solutionName.toLowerCase());
        const items = [];
        const defaultCompare = cols.find(e => e.data?.isCompareFrom);
        for (const uniqueName of groupedBySolution.keys()) {
            const elems = groupedBySolution.get(uniqueName);
            if (elems) {
                const item = {
                    solutionName: uniqueName,
                    key: uniqueName
                };
                let versionVal;
                let id;
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
    onRenderHeader = (props, defaultRender) => {
        if (props && defaultRender) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { horizontal: true, tokens: { childrenGap: 5 }, verticalAlign: "center" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "medium" }, props.column.name ?? props.column.fieldName),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_20__.IconButton, { iconProps: { iconName: "ChevronDown" } }),
                props.column.data?.isCompareFrom && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_20__.IconButton, { iconProps: { iconName: "Compare" } })));
        }
        return null;
    };
    onColumnClick = (ev, column) => {
        if (column && ev) {
            const prop = this.getContextualMenuProps(ev, column);
            this.setState({ contextualMenuProps: prop });
        }
    };
    getContextualMenuProps = (ev, column) => {
        const menuItems = [];
        if (!column.name.toLowerCase().includes("com")) {
            menuItems.push({
                key: 'aToZ',
                name: "Sort A to Z",
                iconProps: { iconName: 'SortUp' },
                canCheck: true,
                checked: column.isSorted && !column.isSortedDescending,
                onClick: () => {
                    this.onSort(column, false);
                    this.onContextualMenuDismissed();
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
                    this.onContextualMenuDismissed();
                },
            });
        }
        else {
            menuItems.push({
                key: 'compare',
                name: "Compare From",
                iconProps: { iconName: 'Compare' },
                canCheck: true,
                checked: column.data?.isCompareFrom,
                disabled: column.data?.isCompareFrom,
                onClick: () => {
                    this.onToggleSelect(column.key, !column.data?.isCompareFrom);
                    this.onContextualMenuDismissed();
                },
            });
        }
        return {
            items: menuItems,
            target: ev.currentTarget,
            directionalHint: _fluentui_react__WEBPACK_IMPORTED_MODULE_25__.DirectionalHint.bottomLeftEdge,
            gapSpace: 10,
            isBeakVisible: false,
            onDismiss: this.onContextualMenuDismissed,
        };
    };
    onToggleSelect = (key, selected) => {
        const { columns, allRows } = this.state;
        columns.forEach(e => { e.data = { isCompareFrom: false }; });
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
    };
    onContextualMenuDismissed = () => {
        this.setState({ contextualMenuProps: undefined });
    };
    getSelectionDetail = () => {
        const selected = this._selection.getSelection();
        this.setState({ selected: selected[0]?.solutionName });
    };
    onFilterChange = (_ev, text) => {
        const elems = this.state.allItems;
        _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.StringIsNotNullOrEmpty(text) ? this.setState({ rows: elems.filter((item) => this.hasText(item, text)) }) : this.setState({ rows: elems });
    };
    hasText = (item, text) => {
        const stringed = Object.keys(item).map(prop => item[prop] !== null && item[prop] !== undefined ? item[prop].toString().toLowerCase() : "").join('|');
        return stringed.indexOf(text.toLowerCase()) > -1;
    };
    onSort = (column, isDescending) => {
        const { columns, rows } = this.state;
        const newColumns = columns.slice();
        const currColumn = newColumns.find(e => e.key === column.key);
        if (currColumn) {
            newColumns.forEach((newCol) => {
                if (newCol === currColumn) {
                    currColumn.isSortedDescending = isDescending;
                    currColumn.isSorted = true;
                }
                else {
                    newCol.isSorted = false;
                    newCol.isSortedDescending = true;
                }
            });
            // Sort the items.
            const newRows = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.copyAndSort(rows, column.key, isDescending);
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
    getStatus(elem, compareVal, compareId) {
        if (compareId && compareVal) {
            if (elem.connectionId === compareId) {
                return _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Default;
            }
            else {
                const compare = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.compareVer(elem.version, compareVal);
                return compare === 0 ? _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Equal : (compare === 1 ? _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Above : _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Under);
            }
        }
        return _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Default;
    }
    onRenderItemColumn = (item, _index, column) => {
        let result = "---";
        let color = "";
        if (column && column.name) {
            const el = item[column.name] ?? item[column.key];
            if (el && typeof (el) === "object") {
                result = el.version;
                const status = el.status;
                if (status)
                    switch (Number(el.status)) {
                        case _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Equal.valueOf():
                            color = "green";
                            break;
                        case _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Under.valueOf():
                            color = "red";
                            break;
                        case _Helper_Model__WEBPACK_IMPORTED_MODULE_3__.VersionStatus.Above.valueOf():
                            color = "gold";
                            break;
                        default:
                            break;
                    }
                const rend = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { horizontal: true, horizontalAlign: "space-between" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "medium" }, "Versione:"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "medium", style: { color: color } }, el.version)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, { horizontal: true, horizontalAlign: "space-between" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "medium" }, "Ultima modifica:"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "medium" }, el.modifiedOn?.toLocaleString() ?? ''))));
                return rend;
            }
            else if (el)
                result = el;
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Text, { variant: "medium", style: { color: color } }, result);
    };
}
const onRenderDetailsHeader = (props, defaultRender) => {
    if (!props) {
        return null;
    }
    const onRenderColumnHeaderTooltip = tooltipHostProps => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_19__.TooltipHost, { ...tooltipHostProps }));
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_16__.Sticky, { stickyPosition: _fluentui_react__WEBPACK_IMPORTED_MODULE_17__.StickyPositionType.Header, isScrollSynced: true }, defaultRender({
        ...props,
        onRenderColumnHeaderTooltip,
    })));
};


/***/ }),

/***/ "./Components/SolutionPicker/SolutionPicker.classNames.ts":
/*!****************************************************************!*\
  !*** ./Components/SolutionPicker/SolutionPicker.classNames.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClassNames": () => (/* binding */ getClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "./node_modules/@fluentui/merge-styles/lib/mergeStyleSets.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/style-utilities/lib/index.js");


const theme = (0,_fluentui_react__WEBPACK_IMPORTED_MODULE_0__.getTheme)();
const getClassNames = (props) => (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.mergeStyleSets)({
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


/***/ }),

/***/ "./Components/SolutionPicker/SolutionPicker.tsx":
/*!******************************************************!*\
  !*** ./Components/SolutionPicker/SolutionPicker.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionPicker": () => (/* binding */ SolutionPicker)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/utilities/lib/selection/Selection.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Text/Text.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/DefaultButton/DefaultButton.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Panel/Panel.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Panel/Panel.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ScrollablePane/ScrollablePane.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ScrollablePane/ScrollablePane.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Sticky/Sticky.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Sticky/Sticky.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/SearchBox/SearchBox.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Tooltip/TooltipHost.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/DetailsList/ShimmeredDetailsList.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/DetailsList/DetailsList.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/utilities/lib/selection/Selection.types.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/ContextualMenu/ContextualMenu.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/common/DirectionalHint.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helper/Helpers */ "./Helper/Helpers.ts");
/* harmony import */ var _CompareList_CompareList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CompareList/CompareList */ "./Components/CompareList/CompareList.tsx");
/* harmony import */ var _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataConnector/DataConnector */ "./Components/DataConnector/DataConnector.ts");
/* harmony import */ var _ViewSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ViewSelection */ "./Components/ViewSelection.tsx");
/* harmony import */ var _SolutionPicker_classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SolutionPicker.classNames */ "./Components/SolutionPicker/SolutionPicker.classNames.ts");







const calloutProps = { gapSpace: 0 };
const hostStyles = { root: { display: 'inline-block' } };
const refreshButtonStyles = { root: { verticalAlign: 'middle' } };
class SolutionPicker extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    controller = new AbortController();
    signal = this.controller.signal;
    connector = new _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_3__.DataConnector(this.signal);
    classNames = (0,_SolutionPicker_classNames__WEBPACK_IMPORTED_MODULE_5__.getClassNames)({ height: "85vh" });
    _selection;
    constructor(prop) {
        super(prop);
        this.state = {
            rows: [],
            isLoading: false,
            columns: [],
            allItems: [],
            isOpen: false
        };
        this._selection = new _fluentui_react__WEBPACK_IMPORTED_MODULE_6__.Selection({ onSelectionChanged: () => this.getSelectionDetail() });
    }
    render() {
        const { rows, isLoading, columns, contextualMenuProps, numberOfRows, isOpen, selectedToPass, selected } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, { tokens: { childrenGap: 20 } },
            this.props.connectionStrings.length < 1 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Text, { variant: "mediumPlus" }, "Seleziona una organizzazione") : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.DefaultButton, { text: "Soluzioni", onClick: this.onPanelOpen.bind(this) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Panel, { headerText: "Filtri", isOpen: isOpen, onDismiss: this.dismissPanel.bind(this), closeButtonAriaLabel: "Close", type: _fluentui_react__WEBPACK_IMPORTED_MODULE_11__.PanelType.large, isHiddenOnDismiss: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.classNames.wrapper },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.ScrollablePane, { scrollbarVisibility: _fluentui_react__WEBPACK_IMPORTED_MODULE_13__.ScrollbarVisibility.auto },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.Sticky, { stickyPosition: _fluentui_react__WEBPACK_IMPORTED_MODULE_15__.StickyPositionType.Header },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, { horizontal: true, horizontalAlign: "space-between", style: { alignItems: 'center', paddingLeft: '10px' } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, { horizontal: true, horizontalAlign: "start", verticalAlign: "center", tokens: { childrenGap: 20 } },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_16__.SearchBox, { className: this.classNames.filter, placeholder: "Cerca", onChange: this.onFilterChange }),
                                    !isLoading &&
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_17__.TooltipHost, { content: "Ricarica", id: _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.GetUUID(), calloutProps: calloutProps, styles: hostStyles },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_18__.IconButton, { styles: refreshButtonStyles, className: 'refresh', iconProps: { iconName: 'Refresh' }, onClick: this.onReloadClick.bind(this) })),
                                    numberOfRows ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Text, { variant: "mediumPlus" },
                                        numberOfRows,
                                        " Soluzioni trovate, seleziona una o pi\u00F9 soluzioni") : this.props.connectionStrings.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Text, { variant: "mediumPlus" }, "0 Soluzioni trovate") : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Text, { variant: "mediumPlus" }, "Seleziona una organizzazione"),
                                    selected && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Text, { variant: "mediumPlus" },
                                        selected.length,
                                        " Soluzioni selezionate")))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ViewSelection__WEBPACK_IMPORTED_MODULE_4__.ViewSelection, { selection: this._selection, items: rows },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_19__.ShimmeredDetailsList, { items: rows, columns: columns, setKey: "set", onRenderItemColumn: this.onRenderItemColumn, onRenderDetailsHeader: onRenderDetailsHeader, layoutMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_20__.DetailsListLayoutMode.fixedColumns, constrainMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_20__.ConstrainMode.unconstrained, enableShimmer: isLoading, selectionMode: _fluentui_react__WEBPACK_IMPORTED_MODULE_21__.SelectionMode.multiple, selection: this._selection, 
                                // onColumnHeaderClick={this.onColumRenderClick.bind(this)}
                                // columnReorderOptions={{ frozenColumnCountFromStart: 1, onColumnDrop: this._handleColumnReorder.bind(this) }}
                                selectionPreservedOnEmptyClick: true })),
                        contextualMenuProps && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_22__.ContextualMenu, { ...contextualMenuProps })))),
            selectedToPass && selectedToPass.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CompareList_CompareList__WEBPACK_IMPORTED_MODULE_2__.SolutionCompare, { ...{ Names: selectedToPass, ...this.props } })));
    }
    componentDidMount() {
        // this.load();
    }
    componentWillUnmount() {
        this.controller.abort();
    }
    componentDidUpdate(prevProps) {
        if (!_Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.arraysEqual(prevProps.connectionStrings, this.props.connectionStrings)) {
            this.setState({ selectedToPass: [], selected: [] });
            this.reloadConnector();
            this.load();
        }
    }
    dismissPanel() {
        this.setState({ isOpen: false, selectedToPass: this.state.selected });
    }
    onPanelOpen(_ev) {
        this.setState({ isOpen: true });
    }
    reloadConnector() {
        this.controller.abort();
        this.controller = new AbortController();
        this.signal = this.controller.signal;
        this.connector = new _DataConnector_DataConnector__WEBPACK_IMPORTED_MODULE_3__.DataConnector(this.signal);
    }
    async load() {
        this.setState({ isLoading: true });
        this._selection.setAllSelected(false);
        const others = [{ colName: "Soluzioni", order: 0, id: "solutionName" }, { colName: "Versione", order: 1, id: "version" }, { colName: "Ultima modifica", order: 2, id: "modifiedOn" }];
        const cols = others.map(a => {
            return {
                key: a.id,
                name: a.colName,
                minWidth: 210,
                onRenderHeader: this.onRenderHeader,
                onColumnClick: this.onColumnClick,
                isResizable: true,
            };
        });
        this.setState({ columns: cols });
        const data = await this.connector.GetSolutionsForConnectionStrings({
            ConnectionStrings: this.props.connectionStrings.map(e => {
                return {
                    Id: e.Id, Url: e.OrganizationUrl, Client: e.ClientId, Secret: e.Secret
                };
            })
        });
        if (data) {
            let allSolutions = [];
            data.forEach(e => {
                allSolutions = allSolutions.concat(e.solutions.map(a => {
                    return {
                        version: a.Version,
                        solutionName: a.UniqueName,
                        modifiedOn: new Date(a.ModifiedOn),
                        key: a.UniqueName
                    };
                }));
            });
            const count = allSolutions.length;
            this.setState({ rows: allSolutions, allItems: allSolutions, numberOfRows: count });
        }
        this.setState({ isLoading: this.signal ? false : true });
    }
    _handleColumnReorder = (dragDropDetails) => {
        const draggedIndex = dragDropDetails.draggedIndex;
        const targetIndex = dragDropDetails.targetIndex;
        const draggedItems = this.state.columns[draggedIndex];
        const newColumns = [...this.state.columns];
        // insert before the dropped item
        newColumns.splice(draggedIndex, 1);
        newColumns.splice(targetIndex, 0, draggedItems);
        this.setState({ columns: newColumns });
    };
    onRenderHeader = (props, defaultRender) => {
        if (props && defaultRender) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, { horizontal: true, tokens: { childrenGap: 5 }, verticalAlign: "center" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Text, { variant: "medium" }, props.column.name ?? props.column.fieldName),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_18__.IconButton, { iconProps: { iconName: "ChevronDown" } })));
        }
        return null;
    };
    onColumnClick = (ev, column) => {
        if (column && ev) {
            const prop = this.getContextualMenuProps(ev, column);
            this.setState({ contextualMenuProps: prop });
        }
    };
    getContextualMenuProps = (ev, column) => {
        const menuItems = [];
        menuItems.push({
            key: 'aToZ',
            name: "Sort A to Z",
            iconProps: { iconName: 'SortUp' },
            canCheck: true,
            checked: column.isSorted && !column.isSortedDescending,
            onClick: () => {
                this.onSort(column, false);
                this.onContextualMenuDismissed();
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
                this.onContextualMenuDismissed();
            },
        });
        return {
            items: menuItems,
            target: ev.currentTarget,
            directionalHint: _fluentui_react__WEBPACK_IMPORTED_MODULE_23__.DirectionalHint.bottomLeftEdge,
            gapSpace: 10,
            isBeakVisible: false,
            onDismiss: this.onContextualMenuDismissed,
        };
    };
    onContextualMenuDismissed = () => {
        this.setState({ contextualMenuProps: undefined });
    };
    getSelectionDetail = () => {
        const selected = this._selection.getSelection();
        this.setState({ selected: selected?.map(e => e.solutionName) });
    };
    onFilterChange = (_ev, text) => {
        const elems = this.state.allItems;
        _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.StringIsNotNullOrEmpty(text) ? this.setState({ rows: elems.filter((item) => this.hasText(item, text)) }) : this.setState({ rows: elems });
    };
    hasText = (item, text) => {
        const stringed = Object.keys(item).map(prop => item[prop] !== null && item[prop] !== undefined ? item[prop].toString().toLowerCase() : "").join('|');
        return stringed.indexOf(text.toLowerCase()) > -1;
    };
    onSort = (column, isDescending) => {
        const { columns, rows } = this.state;
        const newColumns = columns.slice();
        const currColumn = newColumns.find(e => e.key === column.key);
        if (currColumn) {
            newColumns.forEach((newCol) => {
                if (newCol === currColumn) {
                    currColumn.isSortedDescending = isDescending;
                    currColumn.isSorted = true;
                }
                else {
                    newCol.isSorted = false;
                    newCol.isSortedDescending = true;
                }
            });
            // Sort the items.
            const newRows = _Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.copyAndSort(rows, column.key, isDescending);
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
    onRenderItemColumn = (item, _index, column) => {
        let result = "---";
        let color = "";
        if (column && column.name) {
            const el = item[column.name] ?? item[column.key];
            if (el) {
                result = el;
                if (_Helper_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.isDate(el))
                    result = el.toLocaleString();
            }
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Text, { variant: "medium", style: { color: color } }, result);
    };
}
const onRenderDetailsHeader = (props, defaultRender) => {
    if (!props) {
        return null;
    }
    const onRenderColumnHeaderTooltip = tooltipHostProps => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_17__.TooltipHost, { ...tooltipHostProps }));
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_14__.Sticky, { stickyPosition: _fluentui_react__WEBPACK_IMPORTED_MODULE_15__.StickyPositionType.Header, isScrollSynced: true }, defaultRender({
        ...props,
        onRenderColumnHeaderTooltip,
    })));
};


/***/ }),

/***/ "./Components/ViewSelection.tsx":
/*!**************************************!*\
  !*** ./Components/ViewSelection.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSelection": () => (/* binding */ ViewSelection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

class ViewSelection extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    items;
    selectedIndices;
    constructor(props) {
        super(props);
        this.state = {};
        this.selectedIndices = [];
        this.items = this.props.items;
    }
    render() {
        const { children } = this.props;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
    }
    componentWillUpdate() {
        this.saveSelection();
    }
    componentDidUpdate() {
        this.restoreSelection();
    }
    toListIndex(index) {
        const viewItems = this.props.selection.getItems();
        const viewItem = viewItems[index];
        return this.items.findIndex(listItem => listItem === viewItem);
    }
    toViewIndex(index) {
        const listItem = this.items[index];
        const viewIndex = this.props.selection
            .getItems()
            .findIndex(viewItem => viewItem === listItem);
        return viewIndex;
    }
    saveSelection() {
        const newIndices = this.props.selection
            .getSelectedIndices()
            .map(index => this.toListIndex(index))
            .filter(index => this.selectedIndices.indexOf(index) === -1);
        const unselectedIndices = this.props.selection
            .getItems()
            .map((_item, index) => index)
            .filter(index => this.props.selection.isIndexSelected(index) === false)
            .map(index => this.toListIndex(index));
        this.selectedIndices = this.selectedIndices.filter(index => unselectedIndices.indexOf(index) === -1);
        this.selectedIndices = [...this.selectedIndices, ...newIndices];
    }
    restoreSelection() {
        const indices = this.selectedIndices
            .map(index => this.toViewIndex(index))
            .filter(index => index !== -1);
        for (const index of indices) {
            this.props.selection.setIndexSelected(index, true, false);
        }
    }
}


/***/ }),

/***/ "./Helper/Helpers.ts":
/*!***************************!*\
  !*** ./Helper/Helpers.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helpers": () => (/* binding */ Helpers)
/* harmony export */ });
class Helpers {
    static StringIsNotNullOrEmpty(param) {
        return param !== undefined && param !== null && param !== '';
    }
    static GetUUID = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };
    static isNumeric(str) {
        if (typeof str != "string")
            return false; // we only process strings!  
        return !isNaN(+str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
    }
    static isDate(date) {
        return date instanceof Date && JSON.stringify(date) !== 'null' && !isNaN(date.valueOf());
    }
    /**
   * @description
   * Takes an Array<V>, and a grouping function,
   * and returns a Map of the array grouped by the grouping function.
   *
   * @param list An array of type V.
   * @param keyGetter A Function that takes the the Array type V as an input, and returns a value of type K.
   *                  K is generally intended to be a property key of V.
   *
   * @returns Map of the array grouped by the grouping function.
   */
    static groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            }
            else {
                collection.push(item);
            }
        });
        return map;
    }
    static copyAndSort(items, columnKey, isSortedDescending) {
        const key = columnKey;
        return items.slice(0).sort((a, b) => {
            let toSortA;
            let toSortB;
            if (Helpers.isDate(a[key])) {
                toSortA = a[key].getTime();
                toSortB = b[key].getTime();
            }
            else {
                toSortA = a[key];
                toSortB = b[key];
            }
            return ((isSortedDescending ? toSortA < toSortB : toSortA > toSortB) ? 1 : -1);
        });
    }
    static objectsEqual = (o1, o2) => typeof o1 === 'object' && Object.keys(o1).length > 0
        ? Object.keys(o1).length === Object.keys(o2).length
            && Object.keys(o1).every(p => Helpers.objectsEqual(o1[p], o2[p]))
        : o1 === o2;
    static arraysEqual = (a1, a2) => a1.length === a2.length && a1.every((o, idx) => Helpers.objectsEqual(o, a2[idx]));
    static compareVer(a, b) {
        function prep(t) {
            return ("" + t)
                //treat non-numerical characters as lower version
                //replacing them with a negative number based on charcode of first character
                .replace(/[^0-9\.]+/g, function (c) { return "." + ((c = c.replace(/[\W_]+/, "")) ? c.toLowerCase().charCodeAt(0) - 65536 : "") + "."; })
                //remove trailing "." and "0" if followed by non-numerical characters (1.0.0b);
                .replace(/(?:\.0+)*(\.-[0-9]+)(\.[0-9]+)?\.*$/g, "$1$2")
                .split('.');
        }
        a = prep(a);
        b = prep(b);
        for (var i = 0; i < Math.max(a.length, b.length); i++) {
            //convert to integer the most efficient way
            a[i] = ~~a[i];
            b[i] = ~~b[i];
            if (a[i] > b[i])
                return 1;
            else if (a[i] < b[i])
                return -1;
        }
        return 0;
    }
    static trimCurlyBraces(str) {
        return str.replace(/^\{|\}$/g, "");
    }
}


/***/ }),

/***/ "./Helper/ListHelpers.ts":
/*!*******************************!*\
  !*** ./Helper/ListHelpers.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListHelpers": () => (/* binding */ ListHelpers)
/* harmony export */ });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);

class ListHelpers {
    static prepareDataForExport(firstRowStatic, colNames, items, transformElement) {
        const firstFinished = firstRowStatic.map(e => e.label).concat(colNames);
        const metadata = firstRowStatic.map(e => e.key);
        const data = [firstFinished];
        const rowsData = items.map(e => {
            const roRet = [];
            Object.keys(e).filter(a => metadata.some(meta => meta === a)).forEach(a => {
                const el = e[a];
                let toRet = '---';
                if (el) {
                    toRet = el;
                }
                roRet.push(toRet);
            });
            colNames.forEach(name => {
                const el = e[name];
                if (transformElement) {
                    roRet.push(transformElement(el));
                }
                else {
                    let toPut = '---';
                    if (el && typeof (el) === "object") {
                        toPut = true;
                    }
                    roRet.push(toPut);
                }
            });
            return roRet;
        });
        const completeData = data.concat(rowsData);
        return completeData;
    }
    static exportList(firstRowStatic, colNames, items, props, fileName, transformElement) {
        const completeData = ListHelpers.prepareDataForExport(firstRowStatic, colNames, items, transformElement);
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_0___default().utils.aoa_to_sheet(completeData);
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_0___default().utils.book_new();
        const fullProps = { ...props, Author: "AlabDiffTool" };
        wb.Props = fullProps;
        xlsx__WEBPACK_IMPORTED_MODULE_0___default().utils.book_append_sheet(wb, ws);
        /* generate XLSX file and send to client */
        xlsx__WEBPACK_IMPORTED_MODULE_0___default().writeFile(wb, fileName + ".xlsx");
    }
}


/***/ }),

/***/ "./Helper/LocalStorageHelper.ts":
/*!**************************************!*\
  !*** ./Helper/LocalStorageHelper.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LSHelper": () => (/* binding */ LSHelper)
/* harmony export */ });
class LSHelper {
    /**
    * @param ttl optional, millisecond before the value becomes invalid. Default: no invalidation
    */
    static setWithExpiry(key, value, ttl) {
        const now = new Date();
        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item = {
            v: value,
        };
        if (ttl) {
            item['e'] = now.getTime() + ttl;
        }
        localStorage.setItem(key, JSON.stringify(item));
    }
    static getWithExpiry(key) {
        const itemStr = localStorage.getItem(key);
        // if the item doesn't exist, return null
        if (!itemStr) {
            return null;
        }
        const item = JSON.parse(itemStr);
        if (item.e) {
            const now = new Date();
            // compare the expiry time of the item with the current time
            if (now.getTime() > item.e) {
                // If the item is expired, delete the item from storage
                // and return null
                localStorage.removeItem(key);
                return null;
            }
        }
        return item.v;
    }
    static Set(key, value) {
        localStorage.setItem(key, value);
    }
    static Get(key) {
        return localStorage.getItem(key);
    }
    static GetKeys() {
        const keys = [];
        for (let i = 0; i < localStorage.length; ++i) {
            const key = localStorage.key(i);
            if (key)
                keys.push(key);
        }
        return keys;
    }
    /**
    * This functions dumps all keys and values of the local Storage to the console,
    * as well as the current size and number of items
    * @param fShowMaximumSize optional, flag show maximum size of localStorage. Default: false
    */
    static consoleInfo(fShowMaximumSize) {
        if (fShowMaximumSize === void 0) {
            fShowMaximumSize = false;
        }
        var amount = 0;
        var size = 0;
        for (var i = 0; i < localStorage.length; ++i) {
            var key = localStorage.key(i);
            if (key) {
                var value = localStorage.getItem(key);
                console.log(amount, key, value);
                if (value) {
                    size += key.length + value.length;
                    amount++;
                }
            }
        }
        console.log("Total entries:", amount);
        console.log("Total size:", size);
        if (fShowMaximumSize === true) {
            var maxSize = LSHelper.getMaximumSize();
            console.log("Total size:", maxSize);
        }
    }
    /**
    * Empties the list associated with the object of all key/value pairs, if there are any.
    */
    static clear() {
        localStorage.clear();
    }
    /**
    * Check if localStorage has an Item / exists with the give key
    * @param key the key of the Item
    */
    static hasItem(key) {
        return localStorage.getItem(key) !== null;
    }
    /**
    * This will return the left space in localStorage without affecting it's content
    * Might be slow !!!
    */
    static getRemainingSpace() {
        var itemBackup = localStorage.getItem("");
        var increase = true;
        var data = "1";
        var totalData = "";
        var trytotalData = "";
        while (true) {
            try {
                trytotalData = totalData + data;
                localStorage.setItem("", trytotalData);
                totalData = trytotalData;
                if (increase)
                    data += data;
            }
            catch (e) {
                if (data.length < 2) {
                    break;
                }
                increase = false;
                data = data.substr(data.length / 2);
            }
        }
        if (itemBackup === null)
            localStorage.removeItem("");
        else
            localStorage.setItem("", itemBackup);
        return totalData.length;
    }
    /**
    * Flag set true if the Browser supports localStorage, without affecting it
    */
    static isSupported = () => {
        try {
            var itemBackup = localStorage.getItem("");
            if (itemBackup) {
                localStorage.removeItem("");
                localStorage.setItem("", itemBackup);
                if (itemBackup === null)
                    localStorage.removeItem("");
                else
                    localStorage.setItem("", itemBackup);
            }
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
 * This function returns the maximum size of localStorage without affecting it's content
 */
    static getMaximumSize() {
        var backup = LSHelper.getBackup();
        localStorage.clear();
        var max = LSHelper.getRemainingSpace();
        LSHelper.applyBackup(backup);
        return max;
    }
    /**
     * This will return the currently used size of localStorage
     */
    static getUsedSize() {
        var sum = 0;
        for (var i = 0; i < localStorage.length; ++i) {
            var key = localStorage.key(i);
            if (key) {
                var value = localStorage.getItem(key);
                if (value) {
                    sum += key.length + value.length;
                }
            }
        }
        return sum;
    }
    /**
     * This will return the currently used size of a given Item,returns NaN if key is not found
     * @param key
     */
    static getItemUsedSpace(key) {
        var value = localStorage.getItem(key);
        if (value === null) {
            return NaN;
        }
        else {
            return key.length + value.length;
        }
    }
    /**
     * This will return a localStorage-backup (Associative-Array key->value)
     */
    static getBackup() {
        let backup = {};
        for (var i = 0; i < localStorage.length; ++i) {
            var key = localStorage.key(i);
            if (key) {
                var value = localStorage.getItem(key);
                if (value) {
                    backup[key] = value;
                }
            }
        }
        return backup;
    }
    /**
     * This will apply a localStorage-Backup (Associative-Array key->value)
     * @param backup            associative-array
     * @param fClear             optional flag to clear all existing storage first.Default:true
     * @param fOverwriteExisting optional flag to replace existing keys. Default: true
     */
    static applyBackup(backup, fClear, fOverwriteExisting) {
        if (fClear === void 0) {
            fClear = true;
        }
        if (fOverwriteExisting === void 0) {
            fOverwriteExisting = true;
        }
        if (fClear == true) {
            localStorage.clear();
        }
        for (var key in backup) {
            if (fOverwriteExisting === false && backup[key] !== undefined) {
                continue;
            }
            var value = backup[key];
            localStorage.setItem(key, value);
        }
    }
    /**
    * @description
    * Takes an Array<V>, and a property getter function,
    * and returns the closest value V.
    */
    static findClosest(counts, goal, elementGetter) {
        return counts.reduce((prev, curr) => Math.abs(elementGetter(curr) - goal) < Math.abs(elementGetter(prev) - goal) ? curr : prev);
    }
    /**
    * @description
    * Takes the number of elements to do the percentage,
    * and returns percentage that each element has.
    */
    static getPercentage(itemsNumber) {
        return ((100 / itemsNumber));
    }
    /**
    * @description
    * Takes an Array<V>, and a property getter function,
    * and returns the sum of all the elements of the array.
    */
    static getSum(counts, elementGetter) {
        return counts.reduce((a, b) => a + elementGetter(b), 0);
    }
}


/***/ }),

/***/ "./Helper/Model.ts":
/*!*************************!*\
  !*** ./Helper/Model.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionStatus": () => (/* binding */ VersionStatus),
/* harmony export */   "Guid": () => (/* binding */ Guid)
/* harmony export */ });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers */ "./Helper/Helpers.ts");

var VersionStatus;
(function (VersionStatus) {
    VersionStatus[VersionStatus["Above"] = 1] = "Above";
    VersionStatus[VersionStatus["Equal"] = 2] = "Equal";
    VersionStatus[VersionStatus["Under"] = 3] = "Under";
    VersionStatus[VersionStatus["Default"] = 0] = "Default";
})(VersionStatus || (VersionStatus = {}));
class Guid extends String {
    constructor(x = '') {
        super(x);
    }
    static Empty = '00000000-0000-0000-0000-000000000000';
    static Equals(first, second) {
        return Guid.format(first) === Guid.format(second);
    }
    static format(value) {
        if (value === '')
            return value;
        return '{' + _Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.trimCurlyBraces(value).toLowerCase() + '}';
    }
    static newGuid() {
        var newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return Guid.format(newGuid);
    }
    ;
    static IsNullOrEmpty(value) {
        return !_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.StringIsNotNullOrEmpty(value) || value === Guid.Empty;
    }
}


/***/ }),

/***/ "./Pages/Home/Home.tsx":
/*!*****************************!*\
  !*** ./Pages/Home/Home.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Text/Text.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const Home = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, { tokens: { childrenGap: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, { horizontal: true, horizontalAlign: "center", tokens: { padding: 40 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.Text, { variant: "xxLarge" }, "Super Mega XRM TDS Dataverse Tool")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, { horizontal: true, horizontalAlign: "center", tokens: { padding: 40 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.Text, { variant: "medium" }, "Solution comparison between organization, object publisher, solution exporter and much more! (Maybe)"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./Pages/MultiConnection/MultiConnection.tsx":
/*!***************************************************!*\
  !*** ./Pages/MultiConnection/MultiConnection.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Components_ConnectionStringManager_ConnectionStringManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/ConnectionStringManager/ConnectionStringManager */ "./Components/ConnectionStringManager/ConnectionStringManager.tsx");
/* harmony import */ var _Components_SolutionList_SolutionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/SolutionList/SolutionList */ "./Components/SolutionList/SolutionList.tsx");



const MultiConnectionPage = () => {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_ConnectionStringManager_ConnectionStringManager__WEBPACK_IMPORTED_MODULE_1__["default"], { ...{ SelectionMode: "multiple" } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_SolutionList_SolutionList__WEBPACK_IMPORTED_MODULE_2__.SolutionList, { connectionStrings: [] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiConnectionPage);


/***/ }),

/***/ "./Pages/SingleConnection/SingleConnectionViewer.tsx":
/*!***********************************************************!*\
  !*** ./Pages/SingleConnection/SingleConnectionViewer.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Components_ConnectionStringManager_ConnectionStringManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/ConnectionStringManager/ConnectionStringManager */ "./Components/ConnectionStringManager/ConnectionStringManager.tsx");
/* harmony import */ var _Components_SolutionPicker_SolutionPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/SolutionPicker/SolutionPicker */ "./Components/SolutionPicker/SolutionPicker.tsx");



const SingleConnectionPage = () => {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_ConnectionStringManager_ConnectionStringManager__WEBPACK_IMPORTED_MODULE_1__["default"], { ...{ SelectionMode: "single" } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_SolutionPicker_SolutionPicker__WEBPACK_IMPORTED_MODULE_2__.SolutionPicker, { connectionStrings: [] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleConnectionPage);


/***/ }),

/***/ "./app.tsx":
/*!*****************!*\
  !*** ./app.tsx ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export modalStyles */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/font-icons-mdl2/lib/index.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/style-utilities/lib/index.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Nav/Nav.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Modal/Modal.js");
/* harmony import */ var _Components_Collapser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Collapser */ "./Components/Collapser.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_LoadingAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/LoadingAnimation */ "./Components/LoadingAnimation.tsx");
/* harmony import */ var _Pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/Home/Home */ "./Pages/Home/Home.tsx");
/* harmony import */ var _Pages_MultiConnection_MultiConnection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/MultiConnection/MultiConnection */ "./Pages/MultiConnection/MultiConnection.tsx");
/* harmony import */ var _Pages_SingleConnection_SingleConnectionViewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/SingleConnection/SingleConnectionViewer */ "./Pages/SingleConnection/SingleConnectionViewer.tsx");









(0,_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.initializeIcons)();
const theme = (0,_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.getTheme)();
const modalStyles = (0,_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.mergeStyleSets)({
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
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_8__.FontWeights.semibold,
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
const navLinkGroups = [
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
                name: 'Multi connections',
                url: '/multi',
            },
            {
                key: 'Single',
                name: 'Single connection',
                url: '/single',
            },
            // {
            //     key: 'xlsx',
            //     name: 'Sheet Js',
            //     url: '/xlsx',
            // },
        ],
    }
];
const navStyles = { root: { width: 300 } };
const NavApp = () => {
    let history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
    const onCLick = (ev, item) => {
        if (ev && item) {
            ev.preventDefault();
            history.push(item.url);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_10__.Nav, { styles: navStyles, groups: navLinkGroups, onLinkClick: onCLick }));
};
class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
        super(props);
        this.state = {
            InError: false
        };
    }
    render() {
        if (!this.state.InError) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_LoadingAnimation__WEBPACK_IMPORTED_MODULE_3__["default"], null) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.BrowserRouter, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, { horizontal: true, style: { width: '100%' } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavApp, null),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, { exact: true, path: "/", component: () => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__["default"], null) }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, { path: "/multi", component: () => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages_MultiConnection_MultiConnection__WEBPACK_IMPORTED_MODULE_5__["default"], null) }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, { path: "/single", component: () => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages_SingleConnection_SingleConnectionViewer__WEBPACK_IMPORTED_MODULE_6__["default"], null) }))))));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_13__.Modal, { isOpen: this.state.InError, isBlocking: true, containerClassName: modalStyles.container },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: modalStyles.header },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Errore")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: modalStyles.body },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Collapser__WEBPACK_IMPORTED_MODULE_2__.Collapser, { label: "dettagli errore", children: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.state.Error?.message),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.state.ErrorInfo?.componentStack)) })))));
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            InError: true,
            Error: error,
            ErrorInfo: errorInfo
        });
    }
}
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('root'));


/***/ }),

/***/ "?e708":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?58fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?20df":
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdiff_front_end"] = self["webpackChunkdiff_front_end"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["reactvendor","xlsxvendor","vendors-node_modules_fluentui_font-icons-mdl2_lib_index_js-node_modules_fluentui_react_lib_co-acd040"], () => (__webpack_require__("./app.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.93008a1bec1b82d28951.js.map