import { ConnectionStringRequest, ElementDetailsForSolution, SolutionDetailsForConnectionString, SolutionDetailsForConnectionStringRequest, SolutionsDetailsRequest, SolutionsForConnectionString } from "../../Helper/Model";
import { BaseApiConnector } from "./BaseApiConnector";

export class DataConnector {
    _signal: AbortSignal;
    constructor(signal: AbortSignal) {
        this._signal = signal
    }
    public async GetSolutionsForConnectionStrings(model: { ConnectionStrings: ConnectionStringRequest[] }): Promise<SolutionsForConnectionString[]> {
        try {
            const result = await BaseApiConnector.Post<SolutionsForConnectionString[]>(this._signal, "Data", "GetSolutionsForConnectionStrings", model);
            if (result) {
                return result;
            }
        } catch (error) {
            console.error(error);
        }
        return [];
    }

    public async GetSolutionDetailsForConnectionStrings(model: SolutionDetailsForConnectionStringRequest): Promise<SolutionDetailsForConnectionString[]> {
        try {
            const result = await BaseApiConnector.Post<SolutionDetailsForConnectionString[]>(this._signal, "Data", "GetSolutionsDetailsForConnections", model);
            if (result) {
                return result;
            }
        } catch (error) {
            console.error(error);
        }
        return [];
    }

    public async GetSolutionsDetails(model: SolutionsDetailsRequest): Promise<ElementDetailsForSolution[]> {
        try {
            const result = await BaseApiConnector.Post<ElementDetailsForSolution[]>(this._signal, "Data", "GetSolutionsDetails", model);
            if (result) {
                return result;
            }
        } catch (error) {
            console.error(error);
        }
        return [];
    }


}