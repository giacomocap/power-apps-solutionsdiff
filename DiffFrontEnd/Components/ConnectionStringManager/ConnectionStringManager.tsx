import React from "react";
import { Guid, XrmConnectionString, XrmConnectionStringExp } from "../../Helper/Model";
import { getClassNames } from "./ConnectionStringManager.classNames";
import { ConnectionStringLSConnector } from "../DataConnector/ConnectionStringLSConnector";
import { IStackTokens } from "@fluentui/react/lib/components/Stack/Stack.types";
import { Stack } from "@fluentui/react/lib/components/Stack/Stack";
import { IconButton } from "@fluentui/react/lib/components/Button/IconButton/IconButton";
import { Dialog } from "@fluentui/react/lib/components/Dialog/Dialog";
import { Spinner } from "@fluentui/react/lib/components/Spinner/Spinner";
import { SpinnerSize } from "@fluentui/react/lib/components/Spinner/Spinner.types";
import { DialogFooter } from "@fluentui/react/lib/components/Dialog/DialogFooter";
import { PrimaryButton } from "@fluentui/react/lib/components/Button/PrimaryButton/PrimaryButton";
import { DefaultButton } from "@fluentui/react/lib/components/Button/DefaultButton/DefaultButton";
import { DialogType } from "@fluentui/react/lib/components/Dialog/DialogContent.types";
import { ITextFieldStyles } from "@fluentui/react/lib/components/TextField/TextField.types";
import { TextField } from "@fluentui/react/lib/components/TextField/TextField";
import { Checkbox } from "@fluentui/react/lib/components/Checkbox/Checkbox";
import { Text } from "@fluentui/react/lib/components/Text/Text";

interface SolutionViewerState {
    AllConnections: XrmConnectionStringExp[];
    EditConnection?: XrmConnectionStringExp;
    isDialogOpen: boolean;
    dialogContentProps?: any;
    isSaving: boolean;
}



const verticalGapStackTokens: IStackTokens = {
    childrenGap: 20,
    padding: 10,
};

export interface ConnectionStringManagerProp { SelectionMode: "single" | "multiple" }

export default class ConnectionStringManager extends React.Component<ConnectionStringManagerProp, SolutionViewerState> {
    lsConnector = new ConnectionStringLSConnector();

    constructor(prop: ConnectionStringManagerProp | Readonly<ConnectionStringManagerProp>) {
        super(prop);
        this.state = {
            AllConnections: [],
            isDialogOpen: false,
            isSaving: false
        }
    }
    render() {
        const { EditConnection, AllConnections, isDialogOpen, isSaving, dialogContentProps } = this.state;
        return (
            <Stack style={{ width: '100%' }}>
                <Stack horizontal style={{ width: '100%' }}>
                    <IconButton iconProps={{ iconName: "Add" }} title="Add" ariaLabel="Add" onClick={() => this.AddNewConnectionClick()} />
                    <Stack
                        horizontal
                        verticalFill
                        wrap
                        horizontalAlign={"start"}
                        verticalAlign={"start"}
                        tokens={verticalGapStackTokens}>
                        {EditConnection && <ConnectionStringCard {...EditConnection} />}
                        {AllConnections.map(e => <ConnectionStringCard key={e.Id} {...e} />)}
                    </Stack>
                </Stack>
                {this.props.children && React.cloneElement(this.props.children as any, { connectionStrings: AllConnections.filter(e => e.isSelected) })}
                <Dialog
                    hidden={!isDialogOpen}
                    onDismiss={this.clickedNo.bind(this)}
                    dialogContentProps={dialogContentProps}
                    modalProps={{ isBlocking: true }}
                >
                    {isSaving && <Spinner size={SpinnerSize.medium} />}
                    <DialogFooter>
                        <PrimaryButton disabled={isSaving} onClick={dialogContentProps && dialogContentProps.clickedYes} text="Si" />
                        <DefaultButton disabled={isSaving} onClick={dialogContentProps && dialogContentProps.clickedNo} text="No" />
                    </DialogFooter>
                </Dialog>
                {/* <SolutionList {...{ connectionStrings: AllConnections.filter(e => e.isSelected) }} /> */}
            </Stack>
        );
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
                    return { ...e, isEditMode: false, onEdit: this.onEdit.bind(this), onSave: this.onSave.bind(this), isSelected: false, onSelect: this.onSelect.bind(this), onDelete: this.onDelete.bind(this) }
                })
            });
    }

    clickedNo = () => {
        this.setState({ isDialogOpen: false, dialogContentProps: undefined });
    }

    AddNewConnectionClick() {
        const newAdd: XrmConnectionStringExp = { ClientId: "", Id: Guid.Empty, IpAddress: "", Name: "", OrganizationUrl: "", Save: true, Secret: "", isEditMode: true, onEdit: this.onEdit.bind(this), onSave: this.onSave.bind(this), isSelected: false, onSelect: this.onSelect.bind(this), onDelete: this.onDelete.bind(this) };
        this.setState({ EditConnection: newAdd });
    }

    onEdit(id: string, edit: boolean) {
        const conn = this.state.AllConnections;
        const found = conn.find(p => {
            if (p.Id !== id) return false;
            p.isEditMode = edit;
            return true;
        });
        if (found) {
            this.setState({ AllConnections: conn });
        } else {
            this.setState({ EditConnection: undefined });
        }
    }

    onSelect(id: string, selected: boolean) {
        const conn = this.state.AllConnections;
        if (this.props.SelectionMode === "single")
            conn.forEach(con => con.isSelected = false);
        const found = conn.find(p => {
            if (p.Id !== id) return false;
            p.isSelected = selected;
            return true;
        });
        if (found) {
            this.setState({ AllConnections: conn });
        } else {
            this.setState({ EditConnection: undefined });
        }
    }


    async onSave(toSave: XrmConnectionString) {
        // const saved = await this.connector.AddOrUpdate(toSave);
        this.lsConnector.AddOrUpdate(toSave);
        await this.getAllConnections();
        this.setState({ EditConnection: undefined });
    }

    onDelete = (id: string) => {
        const conn = this.state.AllConnections;
        const found = conn.find(p => p.Id === id);
        if (found) {
            const dialogContentProps = {
                type: DialogType.normal,
                title: 'Elimina connessione',
                closeButtonAriaLabel: 'Chiudi',
                subText: `Vuoi eliminare la connessione ${found.Name} - ${found.OrganizationUrl}`,
                clickedYes: () => this.clickedDelete(id),
                clickedNo: this.clickedNo
            };
            this.setState({ isDialogOpen: true, dialogContentProps: dialogContentProps });
        }
    }

    clickedDelete = (id: string) => {
        this.lsConnector.Remove(id);
        this.getAllConnections();
        this.clickedNo();
    }

}



const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 200, maxWidth: 200 } };
const stackTokens = { childrenGap: 15 };
export const ConnectionStringCard: React.FC<XrmConnectionStringExp> = (props) => {
    const style = getClassNames();
    const [ClientIdFieldValue, setClientIdFieldValue] = React.useState(props.ClientId);
    const [SecretFieldValue, setSecretFieldValue] = React.useState(props.Secret);
    const [NameFieldValue, setNameFieldValue] = React.useState(props.Name);
    const [OrganizationUrlFieldValue, setOrganizationUrlFieldValue] = React.useState(props.OrganizationUrl);

    const onSave = () => {
        const toSave: XrmConnectionString = { Id: props.Id, OrganizationUrl: OrganizationUrlFieldValue, Name: NameFieldValue, Secret: SecretFieldValue, ClientId: ClientIdFieldValue, IpAddress: props.IpAddress, Save: props.Save };
        props.onSave(toSave);
    }

    const title = `${props.Name} - ${props.OrganizationUrl}`;
    return (
        <div className={style.cardtoPick} /*onClick={() => props.onClickActive(props)}*/>
            <div className={style.container}>
                <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
                    {props.isEditMode ?
                        <Stack tokens={{ ...stackTokens, padding: 5 }}>
                            <Stack horizontal tokens={stackTokens}>
                                <TextField
                                    label="Nome"
                                    value={NameFieldValue}
                                    onChange={(_e, newValue) => setNameFieldValue(newValue || '')}
                                    styles={textFieldStyles}
                                    type="Name"
                                />
                                <TextField
                                    label="Organization Url"
                                    value={OrganizationUrlFieldValue}
                                    onChange={(_e, newValue) => setOrganizationUrlFieldValue(newValue || '')}
                                    styles={textFieldStyles}
                                    type="Organization"
                                />
                            </Stack>
                            <Stack horizontal tokens={stackTokens}>
                                <TextField
                                    label="Client Id"
                                    value={ClientIdFieldValue}
                                    onChange={(_e, newValue) => setClientIdFieldValue(newValue || '')}
                                    styles={textFieldStyles}
                                    type="ClientId"
                                />
                                <TextField
                                    label="Secret"
                                    value={SecretFieldValue}
                                    onChange={(_e, newValue) => setSecretFieldValue(newValue || '')}
                                    styles={textFieldStyles}
                                    type="Secret"
                                />
                            </Stack>
                            <Stack horizontal tokens={stackTokens}>
                                <DefaultButton text="Annulla" onClick={() => props.onEdit(props.Id, false)} allowDisabledFocus />
                                <PrimaryButton text="Salva" onClick={() => onSave()} allowDisabledFocus />
                            </Stack>
                        </Stack>
                        :
                        <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
                            <Text variant="mediumPlus" >{title}</Text>
                            <IconButton iconProps={{ iconName: "Edit" }} title="Edit" onClick={() => props.onEdit(props.Id, true)} />
                            <IconButton iconProps={{ iconName: "Cancel", color: 'red' }} title="Cancella" onClick={() => props.onDelete(props.Id)} />
                        </Stack>}
                    {props.Id && <Checkbox checked={props.isSelected} onChange={() => props.onSelect(props.Id, !props.isSelected)} />}
                </Stack>
            </div>
        </ div>
    )
}
