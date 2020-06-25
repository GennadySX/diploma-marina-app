/*
 * ests
 * @gennadysx, 2020
 */

// globals
import {API} from '../util/API';
import {Storage} from './Storage';

const get = (controller:any) => request(controller, 'get');
const post = (controller:any, data:any) => request(controller, 'post', data);
const put = (controller:any, data:any) => request(controller, 'update', data);
const del = (controller:any, data:any) => request(controller, 'delete', data);


const request = (controller:any, method:any, data = null, dataForm = new FormData()) => {
    return new Promise((resolve, reject) => {
        const url = `${API.api}${controller}`;
        const options = {
            method: method,
            headers: new Headers({
                'Authentication':  "Bearer "+Storage.get('token')
            }),
            body: (data) ? dataForm : null,
        };

        //console.log('send options ', options);
        fetch(url, options)
            .then(res => {
                //console.log(res)
                return res.json();
            })
            .then(res => {
                //console.log(res)
                if (res.code !== 0) {
                    resolve(res);
                } else {
                    reject(res);
                }
            })
            .catch(error => {
                console.log(error);
                reject(error);
            });
    });
};


export {
    get,
    post,
    put,
}
