/**
 * Created by GennadySX on @2020
 */

import {Plugins} from '@capacitor/core';


const set = async (key: string, val: any, callback: any = null): Promise<void> => {
    await Plugins.Storage.set({key: key, value: JSON.stringify(val)}).then(() => callback)
}

const get = async (key: string, callback: any = null): Promise<void> => {
    const result: any = await Plugins.Storage.get({key: key});
    callback(result)
}

const remove = async (key: string): Promise<void> => {
    await Plugins.Storage.remove({key: 'name'});
};

const keys = async (callback: any): Promise<void> => {
    const {keys} = await Plugins.Storage.keys();
    callback(keys)
}

const clear = async (): Promise<void> => {
    await Plugins.Storage.clear()
}


export const Storage = {
    set,
    get,
    remove,
    keys,
    clear
}