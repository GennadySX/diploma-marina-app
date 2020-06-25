import React from 'react';
import {
    IonContent,
    IonPage,
    IonItem,
    IonInput,
    IonButton,
    IonLabel
} from '@ionic/react';
import {withRouter} from "react-router";
import axios from 'axios'


//helpers
import {Storage} from "../helpers/Storage";

//styles
import '../styles/Auth.sass'
import {xStyle} from "../styles/styles";
import {API} from "../util/API";


//Titles
const registerTitle = 'Зарегистроваться',
    loginTitle = 'Войти',
    register = 'Регистрация'

class Auth extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLogin: true,
            username: 'gennadysx',
            password: 'unlock',
            confirmPassword: '',
            email: '',
            first_name: '',
            last_name: '',

        }

    }

    componentDidMount(): void {
        this.middleWare()
    }

    middleWare() {
        Storage.get('token', (result: any) => result && result.value ? this.redirect() : null)
    }

    /*fakeAuth(e: any = null) {
        Storage.set('is', 'token_asDS12123kas2312j312k3d12h3a1k23l1j23s1d23123halksjdhalksjdhlasjdhlaskjdhalkjsd').then(() => {
            this.props.login(false)
            this.props.history.push('/course')
        })
    }*/

    redirect() {
        this.props.login(false)
        this.props.history.push('/course')
    }


    sendLogin() {
        axios.post(API.login, this.state).then(({data}) => {

            if (data.auth_token) {
                Storage.set('token', data.auth_token).then(() => this.getAccount(data.auth_token))
            }
        })
    }



    getAccount(token:any) {
        axios.get(API.account, {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }}).then(res => {
            this.setState({user: res.data}, () => {
                Storage.set('account', JSON.stringify(res.data)).then(() => {
                    this.props.login(false)
                    this.props.history.push('/course')
                })
            })
        })
    }



    sendRegister() {
        axios.post(API.register, this.state).then(({data}) => {
            if (data && data.username) {
                this.setState({isLogin: true})
            } else {alert('Запольните всех поля ')}
        })
    }




    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonPage>
                {this.state.isLogin ?
                    <IonContent className={'authPage login'}>
                        <IonItem lines="none" color={'none'} style={{paddingLeft: 0}}>
                            <IonLabel style={{fontWeight: 'bold', fontSize: 30}}>{loginTitle}</IonLabel>
                        </IonItem>

                        <IonItem lines="none" color={'dark'}>
                            <IonInput value={this.state.username} placeholder="Ваш логин"
                                      onIonChange={(e: any) => this.setState({username: e.detail.value})}
                                      clearInput></IonInput>
                        </IonItem>
                        <IonItem lines="none" color={'dark'}>
                            <IonInput
                                type={'password'}
                                value={this.state.password} placeholder="Пароль"
                                onIonChange={(e: any) => this.setState({password: e.detail.value})}
                                clearInput></IonInput>
                        </IonItem>
                        <IonButton
                            onClick={() => this.sendLogin()}
                            style={xStyle.btn} className={'login-btn'} color={'warning'} expand={'full'}>{loginTitle}</IonButton>
                    </IonContent>
                    :
                    <IonContent className={'authPage register'}>
                        <IonItem lines="none" color={'none'}>
                            <IonLabel
                                style={{fontWeight: 'bold', fontSize: 30}}>{register}</IonLabel>
                        </IonItem>
                        <IonItem lines="none" color={'dark'}>
                            <IonInput value={this.state.first_name} placeholder="Ваше имя"
                                      onIonChange={(e: any) => this.setState({first_name: e.detail.value})}
                                      clearInput></IonInput>
                        </IonItem>
                        <IonItem lines="none" color={'dark'}>
                            <IonInput
                                type={'text'}
                                value={this.state.last_name} placeholder="Ваша фамилия"
                                      onIonChange={(e: any) => this.setState({last_name: e.detail.value})}
                                      clearInput></IonInput>
                        </IonItem>
                        <IonItem lines="none" color={'dark'}>
                            <IonInput value={this.state.email} placeholder="Ваш E-mail почта"
                                      onIonChange={(e: any) => this.setState({email: e.detail.value})}
                                      clearInput></IonInput>
                        </IonItem>
                        <IonItem lines="none" color={'dark'}>
                            <IonInput value={this.state.username} placeholder="Ваш логин"
                                      onIonChange={(e: any) => this.setState({username: e.detail.value})}
                                      clearInput></IonInput>
                        </IonItem>
                        <IonItem lines="none" color={'dark'}>
                            <IonInput
                                type={'password'}
                                value={this.state.password} placeholder="Пароль"
                                onIonChange={(e: any) => this.setState({password: e.detail.value})}
                                clearInput></IonInput>
                        </IonItem>
                        <IonItem lines="none" color={'dark'}>
                            <IonInput
                                type={'password'}
                                value={this.state.confirmPassword} placeholder="Подтвердить пароль"
                                onIonChange={(e: any) => this.setState({confirmPassword: e.detail.value})}
                                clearInput></IonInput>
                        </IonItem>

                        <IonButton
                            onClick={() => this.sendRegister()}
                            style={xStyle.btn} className={'login-btn'} color={'warning'} expand={'full'}>{registerTitle}</IonButton>
                    </IonContent>
                }

                <IonItem style={xStyle.btn} color={'none'} lines="none" button
                         onClick={() => this.setState({isLogin: !this.state.isLogin})}>
                    <IonLabel >{this.state.isLogin ? registerTitle :  loginTitle}</IonLabel>
                </IonItem>
            </IonPage>
        );
    };
};

export default withRouter(Auth);
