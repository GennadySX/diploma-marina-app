import React from 'react';
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonItem,
    IonAlert,

} from '@ionic/react';
import {withRouter} from "react-router";


import {
    exitOutline, heart,
    pin,
    searchCircle, share
} from "ionicons/icons";

//styles
import '../styles/Profile.sass'

import {Plugins} from '@capacitor/core';
import * as WebVPPlugin from 'capacitor-video-player';
import {Storage} from "../helpers/Storage";


//modules
const {CapacitorVideoPlayer} = Plugins;


//assets
const img = require('../assets/js.png')


class Profile extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            account: null,
            requestIn: false
        }


        Storage.get('account', (val:any) => {
            if (val && val.value) {
                this.setState({
                    account: JSON.parse(val.value)
                }, () =>{
                    this.setState({
                        account: JSON.parse(this.state.account)
                    })
                })
            }})


        console.log('props list', this.props)

    }



    async playIt() {
        const url = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        await CapacitorVideoPlayer.initPlayer({mode: "fullscreen", url: url});
    }

    logout() {
        Promise.all([Storage.clear()]).then(() => this.props.history.push('/auth'))

    }

    shareIt() {
        // Check if sharing via email is supported

    }

    setShowAlert3(s:boolean) {
        this.setState({alert: s})
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonPage className={'profile-page'}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Профиль</IonTitle>
                        <IonButtons slot="primary">
                            <IonButton
                            onClick={() => this.logout()}
                            >
                                <IonIcon size={'lg'} color={'danger'} slot="icon-only" ios={searchCircle}
                                         md={exitOutline}/>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent  className={'profile-content'} >
                    <img
                        onClick={() => console.log('clicked image')}
                        className={'profile-image'} src={img}
                        style={{ marginBottom: 55}}
                    />
                    {this.state.account && this.state.account.first_name ?
                        <IonCard style={{paddingTop: 50, paddingBottom: 25}}>
                            <IonItem>
                                <h3 style={{textAlign: 'center', width: '100%'}}>{this.state.account.first_name} {this.state.account.last_name}</h3>
                            </IonItem>
                            <IonItem>
                                <p style={{textAlign: 'center', width: '100%'}}>Обучающийся</p>
                            </IonItem>
                        </IonCard> : null
                    }

                    <IonContent style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                        <IonCard style={{paddingTop: 15, paddingBottom: 15}}>
                            <IonItem button
                                     onClick={() => this.setShowAlert3(true)}
                            >
                                <h5 style={{textAlign: 'center', width: '100%'}}>{!this.state.requestIn ? 'Создать урок' : 'Вам доступно админ панел'}</h5>
                            </IonItem>

                            <IonAlert
                                isOpen={this.state.alert}
                                onDidDismiss={() => this.setShowAlert3(false)}
                                cssClass='my-custom-class'
                                header={'Запрос отправки'}
                                message={'Вы уверены то что оптравляете запрос админу для того чтобы стать преподавателем. '}
                                buttons={['Отменить', 'Отправить' ]}
                            />
                            <IonItem button
                                     onClick={() => this.shareIt()}
                            >
                                <h5 style={{textAlign: 'center', width: '100%'}}>Рассказать друзьям</h5>
                            </IonItem>
                            <IonItem button
                                     onClick={() => this.props.history.push('privacy')}
                            >
                                <h5 style={{textAlign: 'center', width: '100%'}}>Права конфиденциальности</h5>
                            </IonItem>
                            <IonItem button
                            onClick={() => this.props.history.push('about')}
                            >
                                <h5 style={{textAlign: 'center', width: '100%'}}>О нас</h5>
                            </IonItem>
                        </IonCard>
                    </IonContent>

                </IonContent>
            </IonPage>
        );
    }
};

export default withRouter(Profile);
