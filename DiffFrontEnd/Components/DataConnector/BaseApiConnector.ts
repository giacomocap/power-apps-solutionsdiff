// import axios from "axios";

function Serialize(parameters: { [s: string]: any; }) {
    const keys = Object.keys(parameters);
    const toRet = keys.map(k => {
        let val = "";
        if (Array.isArray(parameters[k]))
            // val = JSON.stringify(parameters[k]);
            val = '[' + parameters[k].map((e: any) => "'" + e + "'").join(',') + ']';
        else
            val = parameters[k];
        return k + '=' + val
    }).join('&');
    return toRet;
}

export class BaseApiConnector {
    protected apiUrl = "";
    constructor() {
        this.apiUrl = window.location.hostname;
    }

    static async Retrieve<T>(signal: AbortSignal, controller: string, method: string, parameters?: { [s: string]: any; }): Promise<T> {
        try {
            const query = parameters ? "?" + Serialize(parameters) : "";
            const url = encodeURI(`/api/${controller}/${method}${query}`);
            const resp = await fetch(url, { signal: signal });
            if (resp.ok)
                return await resp.json() as T;
            else
                throw await resp.text();
            //return (await axios.get<T>(url)).data;
        } catch (ex: any) {
            throw ex;
        }
    }

    static async Post<T>(signal: AbortSignal, controller: string, method: string, data: any): Promise<T> {
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
                return await resp.json() as T;
            else
                throw await resp.text();
            // return (await axios.post<T>(url, data)).data;
        } catch (ex: any) {
            throw ex;
        }
    }


    static async Upload<T>(signal: AbortSignal, controller: string, method: string, data: any, additionalUrl?: string): Promise<T> {
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
                return await resp.json() as T;
            else
                throw await resp.text();
            // return (await axios.post<T>(url, data, config)).data;
        } catch (ex: any) {
            throw ex;
        }
    }


    //static async DownloadGet(controller: string, method: string, parameters?: { [s: string]: any; }) {
    //    try {
    //        const query = parameters ? "?" + Serialize(parameters) : "";
    //        const url = encodeURI(`/${controller}/${method}${query}`);
    //        const response = await axios({
    //            url: url,
    //            method: 'GET',
    //            responseType: 'blob',
    //        });
    //        PromptDownload(response);

    //    } catch (ex) {
    //        const error =
    //            ex.response.status === 404
    //                ? "Resource not found"
    //                : "An unexpected error has occurred";
    //        console.error(error);
    //        throw ex;
    //    }
    //    return;
    //}

    //static async DownloadPost(controller: string, method: string, data: any) {
    //    try {
    //        const url = encodeURI(`/${controller}/${method}`);
    //        const response = await axios({
    //            url: url,
    //            method: 'POST',
    //            responseType: 'blob',
    //            data: data
    //        });
    //        PromptDownload(response);
    //    } catch (ex) {
    //        const error =
    //            ex.response.status === 404
    //                ? "Resource not found"
    //                : "An unexpected error has occurred";
    //        console.error(error);
    //        throw ex;
    //    }
    //    return;
    //}
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
