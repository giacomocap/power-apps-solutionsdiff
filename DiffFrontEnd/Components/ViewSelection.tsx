
import { IRefObject, ISelection } from "@fluentui/react/lib/Utilities";
import * as React from "react";

export interface IViewSelection { }

export interface IViewSelectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    componentRef?: IRefObject<IViewSelection>;

    /**
     * The selection object to interact with when updating selection changes.
     */
    selection: ISelection;

    items: any[];
}

export interface IViewSelectionState { }

export class ViewSelection extends React.Component<
    IViewSelectionProps,
    IViewSelectionState
> {
    private items: any[];
    private selectedIndices: any[];
    constructor(props: IViewSelectionProps) {
        super(props);
        this.state = {};
        this.selectedIndices = [];
        this.items = this.props.items;
    }

    public render() {
        const { children } = this.props;
        return <>{children}</>;
    }

    public componentWillUpdate(
    ) {
        this.saveSelection();
    }

    public componentDidUpdate(
    ) {
        this.restoreSelection();
    }

    private toListIndex(index: number) {
        const viewItems = this.props.selection.getItems();
        const viewItem = viewItems[index];
        return this.items.findIndex(listItem => listItem === viewItem);
      }
    
      private toViewIndex(index: number) {
        const listItem = this.items[index];
        const viewIndex = this.props.selection
          .getItems()
          .findIndex(viewItem => viewItem === listItem);
        return viewIndex;
      }
    
      private saveSelection(): void {
        const newIndices = this.props.selection
          .getSelectedIndices()
          .map(index => this.toListIndex(index))
          .filter(index => this.selectedIndices.indexOf(index) === -1);
    
        const unselectedIndices = this.props.selection
          .getItems()
          .map((_item, index) => index)
          .filter(index => this.props.selection.isIndexSelected(index) === false)
          .map(index => this.toListIndex(index));
    
        this.selectedIndices = this.selectedIndices.filter(
          index => unselectedIndices.indexOf(index) === -1
        );
        this.selectedIndices = [...this.selectedIndices, ...newIndices];
      }
    
      private restoreSelection(): void {
        const indices = this.selectedIndices
          .map(index => this.toViewIndex(index as any))
          .filter(index => index !== -1);
        for (const index of indices) {
          this.props.selection.setIndexSelected(index, true, false);
        }
      }
}
