// import { XrmConnectionString } from "../../Helper/Model";
// import { BaseApiConnector } from "./BaseApiConnector";

// export class ConnectionStringConnector {

//     public async GetAll(): Promise<XrmConnectionString[]> {
//         try {
//             const result = await BaseApiConnector.Retrieve<XrmConnectionString[]>("Connection", "GetAll");
//             if (result) {
//                 return result;
//             }
//         } catch (error) {
//             console.error(error);
//         }
//         return [];
//     }

//     public async Get(model: { id: string }): Promise<XrmConnectionString | undefined> {
//         try {
//             const result = await BaseApiConnector.Retrieve<XrmConnectionString>("Connection", "Get", model);
//             if (result) {
//                 return result;
//             }
//         } catch (error) {
//             console.error(error);
//         }
//         return undefined;
//     }

//     public async AddOrUpdate(model: XrmConnectionString): Promise<any> {
//         try {
//             const result = await BaseApiConnector.Post<any>("Connection", "AddUpdate", model);
//             if (result) {
//                 return result;
//             }
//         } catch (error) {
//             console.error(error);
//         }
//         return undefined;
//     }
// }