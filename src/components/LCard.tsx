import React from 'react';
import './ExploreContainer.css';
import {
    IonButton, IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonImg,
    IonThumbnail,
} from "@ionic/react";
import {heart, search, searchCircle, share} from "ionicons/icons";

import axios from 'axios'

//styles
import '../styles/components/card.sass'
import {API} from "../util/API";



import {Plugins} from '@capacitor/core';
import * as WebVPPlugin from 'capacitor-video-player';
import {Storage} from "../helpers/Storage";

const {CapacitorVideoPlayer} = Plugins;

class LCard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            liked: false
        }

        console.log('props is', this.props)
    }



    likeIt() {
        axios.post(API.like, {
            course_id: this.props.id,
            user_id: 1
        }).then(res => {
            console.log('liked is', res)
        })
    }


    async playIt(url:any) {
        console.log('video is', url)
        await CapacitorVideoPlayer.initPlayer({mode: "fullscreen", url: url});
    }


    render() {
        return (
            <>
                <IonCard
                    className={'card-cs'}>
                    {this.props.image ?
                            <IonImg
                                onClick={() => this.playIt(this.props.video)}
                                className={'card-image'} src={this.props.image}></IonImg>
                        : null
                    }
                    <IonCardContent
                        className={'card-cs-content'}>
                        <IonCardHeader
                            onClick={() => this.props.choiseCourse()}
                            className={'card-cs-header'}>
                            <IonCardSubtitle className={'card-subtitle'}>{this.props.subTitle}</IonCardSubtitle>
                            <IonCardTitle className={'card-title'}>{this.props.title}</IonCardTitle>
                        </IonCardHeader>
                        <p>{this.props.description}</p>
                        <IonButtons slot="end" className={'card-icon-content'}>

                        </IonButtons>
                    </IonCardContent>
                </IonCard>
            </>
        );
    }
};

export default LCard;
