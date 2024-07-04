import { LSHelper } from "../../Helper/LocalStorageHelper";
import { Guid, XrmConnectionString } from "../../Helper/Model";

const LSCONNECTIONS_KEY = 'connections';

export class ConnectionStringLSConnector {

    GetAll() {
        return LSHelper.getWithExpiry(LSCONNECTIONS_KEY) as XrmConnectionString[] | null;
    }

    AddOrUpdate(model: XrmConnectionString) {
        let exisitng = this.GetAll();
        if (!exisitng)
            exisitng = [];
        if (model.Id && model.Id !== Guid.Empty) {
            let had = exisitng.find(e => e.Id === model.Id);
            if (had) {
                Object.assign(had, model);
            } else {
                exisitng.push(model);
            }
        } else {
            model.Id = Guid.newGuid();
            exisitng.push(model);
        }
        LSHelper.setWithExpiry(LSCONNECTIONS_KEY, exisitng);
    }

    Remove(id: string) {
        let exisitng = this.GetAll();
        let newArr: XrmConnectionString[] = [];
        if (!exisitng)
            exisitng = [];
        if (id && id !== Guid.Empty) {
            newArr = exisitng.filter(e => e.Id !== id);
        } else {
            newArr = exisitng;
        }
        LSHelper.setWithExpiry(LSCONNECTIONS_KEY, newArr);
    }
}