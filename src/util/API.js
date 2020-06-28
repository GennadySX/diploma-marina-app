/**
 * Created by GennadySX on @2020
 */



const origin = 'http://edubrains.gennadysx.com',
 api = 'http://edubrains.gennadysx.com/api';

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