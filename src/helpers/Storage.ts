/**
 * Created by GennadySX on @2020
 */

import {Plugins} from '@capacitor/core';


const set = async (key: string, val: any, callback: any = null): Promise<void> => {
    await Plugins.Storage.set({key: key, value: JSON.stringify(val)}).then(() => callback)
}

const get = async (key: string, callback: any = () => {}): Promise<void> => {
    let result: any = null;
    Promise.all([
        result = await Plugins.Storage.get({key: key})
    ]).then(() => {
        //console.log('promise data ', result)
        callback(result)
    })

}


const getx = async (key: string) => {
    return new Promise(async (resolve, reject) => {
        resolve(await Plugins.Storage.get({key: key}))
    }).then((res:any) =>  (res && res.value) ? res.value : null)

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
    getx,
    remove,
    keys,
    clear
}