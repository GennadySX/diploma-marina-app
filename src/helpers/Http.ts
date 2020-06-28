/*
 * edubrains
 * @gennadysx, 2020
 */

// globals
import {Storage} from './Storage';

const get = (controller:any) => request(controller, 'GET');
const post = (controller:any, data:any) => request(controller, 'POST', data);
const put = (controller:any, data:any) => request(controller, 'UPDATE', data);
const del = (controller:any, data:any) => request(controller, 'DELETE', data);

const request = async (controller:any, method:string, data:any|object=null, token:string = '') => {
    await Storage.getx('token').then(res => res ? token = JSON.parse(res) : null)

    return new Promise( (resolve, reject) => {
        const options = {
            method: method,
            headers:  new Headers(token ? {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Token ${token}`,
            } : {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                }),
            body: data?  JSON.stringify(data) : null
        }
            fetch(`${controller}`, options).then((res: any) =>  res.json())
                .then((res: any) =>  {
                    resolve(res)
                })
                .catch((error: any) => reject(error));
        })
};

const Http = {
    get,
    post,
    put,
    del
}


export {
   Http
}
