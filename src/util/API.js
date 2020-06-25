/**
 * Created by GennadySX on @2020
 */



const origin = 'http://localhost:8000',
 api = 'http://localhost:8000/api'

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