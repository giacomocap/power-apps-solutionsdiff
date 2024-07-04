import { StorageObj } from "./Model";

export class LSHelper {

    /**
    * @param ttl optional, millisecond before the value becomes invalid. Default: no invalidation
    */
    static setWithExpiry(key: string, value: any, ttl?: number) {
        const now = new Date()

        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item: StorageObj = {
            v: value,
        }
        if (ttl) {
            item['e'] = now.getTime() + ttl;
        }
        localStorage.setItem(key, JSON.stringify(item));
    }

    static getWithExpiry(key: string) {
        const itemStr = localStorage.getItem(key)

        // if the item doesn't exist, return null
        if (!itemStr) {
            return null
        }

        const item = JSON.parse(itemStr) as StorageObj;
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

    static Set(key: string, value: any) {
        localStorage.setItem(key, value);
    }

    static Get(key: string) {
        return localStorage.getItem(key);
    }

    static GetKeys() {
        const keys: string[] = [];
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
    static consoleInfo(fShowMaximumSize?: boolean) {
        if (fShowMaximumSize === void 0) { fShowMaximumSize = false; }
        var amount = 0;
        var size = 0;
        for (var i = 0; i < localStorage.length; ++i) {
            var key = localStorage.key(i)
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
    static hasItem(key: string) {
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
        localStorage.clear()
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
            var key = localStorage.key(i)
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
    static getItemUsedSpace(key: string) {
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
        let backup: { [key: string]: string } = {};
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
    static applyBackup(backup: { [key: string]: string }, fClear?: boolean, fOverwriteExisting?: boolean) {
        if (fClear === void 0) { fClear = true; }
        if (fOverwriteExisting === void 0) { fOverwriteExisting = true; }
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
    static findClosest<V>(counts: Array<V>, goal: number, elementGetter: (input: V) => number) {
        return counts.reduce((prev, curr) => Math.abs(elementGetter(curr) - goal) < Math.abs(elementGetter(prev) - goal) ? curr : prev);
    }

    /**
    * @description
    * Takes the number of elements to do the percentage,
    * and returns percentage that each element has.
    */
    static getPercentage(itemsNumber: number) {
        return ((100 / itemsNumber));
    }


    /**
    * @description
    * Takes an Array<V>, and a property getter function,
    * and returns the sum of all the elements of the array.
    */
    static getSum<V>(counts: Array<V>, elementGetter: (input: V) => number) {
        return counts.reduce((a, b) => a + elementGetter(b), 0)
    }
}