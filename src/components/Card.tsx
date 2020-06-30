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
import {Storage} from "../helpers/Storage";
import {SocialSharing} from "@ionic-native/social-sharing";

class Card extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            liked:  this.props.isLiked ? this.props.isLiked : false,
            account: null
        }
        //console.log('liked is', this.props)
    }



    componentDidMount(): void {

    }


    likeIt() {
        if (this.state.liked) {
            axios.post(API.like, {
                course_id: this.props.course.id,
                user_id: this.props.currentUser.id
            }, {
                headers: {
                    'Authorization': `Token ${this.props.token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => {
                console.log('liked is', res)
            })
        } else {
            axios.delete(API.like, {
                data: {
                    course_id: this.props.course.id,
                    user_id: this.props.currentUser.id
                },
                headers: {
                    'Authorization': `Token ${this.props.token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => {
                console.log('liked is', res)
            })
        }
    }

    shareIt(title:any) {
        SocialSharing.share('https://edubrains.gennadysx.com/course'+title).then(() => {
            // Success!
        }).catch(() => {
            // Error!
        });

    }


    render() {
        return (
            <>
                <IonCard
                    className={'card-cs'}>
                    {this.props.image ?
                            <IonImg
                                onClick={() => this.props.choiseCourse()}
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
                            <IonButton onClick={() => this.setState({liked: !this.state.liked}, () => this.likeIt())}>
                                {
                                    this.state.liked ?
                                        <IonIcon icon={heart} slot="icon-only" style={{color:  "red" }}></IonIcon>
                                        : <IonIcon icon={heart} slot="icon-only" ></IonIcon>
                                }
                                    </IonButton>
                                    <IonButton
                                    onClick={() => this.shareIt(this.props.title)}
                                    >
                                    <IonIcon icon={share} slot="icon-only"></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonCardContent>
                </IonCard>
            </>
        );
    }
};

export default Card;
