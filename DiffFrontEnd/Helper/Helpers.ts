import { Guid } from "./Model";

export class Helpers {
    public static StringIsNotNullOrEmpty(param?: string | Guid) {
        return param !== undefined && param !== null && param !== '';
    }
    public static GetUUID = (): string => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    public static isNumeric(str: any) {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(+str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }
    public static isDate(date: any): date is Date {
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
    public static groupBy<K, V>(list: Array<V>, keyGetter: (input: V) => K): Map<K, Array<V>> {
        const map = new Map<K, Array<V>>();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }

    static copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean) {
        const key = columnKey as keyof T;
        return items.slice(0).sort((a: T, b: T) => {
            let toSortA: any;
            let toSortB: any;
            if (Helpers.isDate(a[key])) {
                toSortA = (a[key] as any).getTime();
                toSortB = (b[key] as any).getTime();
            } else {
                toSortA = a[key];
                toSortB = b[key];
            }
            return ((isSortedDescending ? toSortA < toSortB : toSortA > toSortB) ? 1 : -1)
        });
    }


    static objectsEqual = (o1: any, o2: any): boolean =>
        typeof o1 === 'object' && Object.keys(o1).length > 0
            ? Object.keys(o1).length === Object.keys(o2).length
            && Object.keys(o1).every(p => Helpers.objectsEqual(o1[p], o2[p]))
            : o1 === o2;

    static arraysEqual = (a1: any[], a2: any[]) =>
        a1.length === a2.length && a1.every((o, idx) => Helpers.objectsEqual(o, a2[idx]));

    static compareVer(a: any, b: any) {
        function prep(t: any) {
            return ("" + t)
                //treat non-numerical characters as lower version
                //replacing them with a negative number based on charcode of first character
                .replace(/[^0-9\.]+/g, function (c) { return "." + ((c = c.replace(/[\W_]+/, "")) ? c.toLowerCase().charCodeAt(0) - 65536 : "") + "." })
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

    static trimCurlyBraces(str: string) {
        return str.replace(/^\{|\}$/g, "");
    }
    static JSDateToExcelDate(date: Date) {
        let temp: any;
        temp = new Date(date);
            var days = Math.round((temp.setHours(0, 0, 0, 0) - <any>new Date(1899, 11, 30)) / 8.64e7);
            let ret: any = (days).toFixed(10);
            if (!isNaN(ret)) {
                return ret;
            }
        
        return '';
    }
}