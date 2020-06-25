/**
 * Created by GennadySX on @2020
 */



const origin = 'http://89.251.145.123:3001',
 api = 'http://89.251.145.123:3001/api';

export const API = {
    origin: origin,
    api: api,
    login: origin+'/auth/token/login/',
    register: api+'/register/',
    account: api+'/account/',
    course: api+'/course/',


    like: api+'/liked/',
    profile: api+'/profile',

}