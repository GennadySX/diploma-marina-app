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
    IonLabel,
    IonCardContent, IonAvatar,

} from '@ionic/react';
import {
    exitOutline, heart,
    pin,
    searchCircle, share
} from "ionicons/icons";

//styles
import '../styles/Profile.sass'

import {Plugins} from '@capacitor/core';
import * as WebVPPlugin from 'capacitor-video-player';


//modules
const {CapacitorVideoPlayer} = Plugins;


//assets
const img = require('../assets/js.png')


class Profile extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }


    async playIt() {
        const url = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        await CapacitorVideoPlayer.initPlayer({mode: "fullscreen", url: url});
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonPage className={'profile-page'}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Профиль</IonTitle>
                        <IonButtons slot="primary">
                            <IonButton onClick={() => this.playIt()}>
                                <IonIcon size={'lg'} color={'danger'} slot="icon-only" ios={searchCircle}
                                         md={exitOutline}/>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent  className={'profile-content'} scrollY={false}>
                    <img
                        onClick={() => console.log('clicked image')}
                        className={'profile-image'} src={img}/>
                    <IonCard style={{paddingTop: 50, paddingBottom: 25}}>
                        <IonItem>
                            <h3 style={{textAlign: 'center', width: '100%'}}>John Doe</h3>
                        </IonItem>
                        <IonItem>
                            <p style={{textAlign: 'center', width: '100%'}}>Student</p>
                        </IonItem>
                    </IonCard>

                    <IonContent style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                        <IonCard style={{paddingTop: 15, paddingBottom: 15}}>
                            <IonItem button>
                                <h5 style={{textAlign: 'center', width: '100%'}}>Стать партнером</h5>
                            </IonItem>
                            <IonItem button>
                                <h5 style={{textAlign: 'center', width: '100%'}}>Рассказать друзей</h5>
                            </IonItem>
                            <IonItem button>
                                <h5 style={{textAlign: 'center', width: '100%'}}>Права конфиденциальности</h5>
                            </IonItem>
                            <IonItem button>
                                <h5 style={{textAlign: 'center', width: '100%'}}>О нас</h5>
                            </IonItem>
                            <IonItem button>
                                <h5 style={{textAlign: 'center', width: '100%'}}>Github</h5>
                            </IonItem>


                        </IonCard>
                    </IonContent>

                </IonContent>
            </IonPage>
        );
    }
};

export default Profile;
