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


//styles
import '../styles/components/card.sass'

class Card extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}

        //console.log('props is', this.props)
    }


    render() {
        return (
            <>
                <IonCard className={'card-cs'}
                >
                    {this.props.image ?
                            <IonImg className={'card-image'} src={this.props.image}></IonImg>
                        : null
                    }
                    <IonCardContent className={'card-cs-content'}>
                        <IonCardHeader className={'card-cs-header'}>
                            <IonCardSubtitle className={'card-subtitle'}>{this.props.subTitle}</IonCardSubtitle>
                            <IonCardTitle className={'card-title'}>{this.props.title}</IonCardTitle>
                        </IonCardHeader>
                        <p>{this.props.description}</p>
                        <IonButtons slot="end" className={'card-icon-content'}>
                            <IonButton>
                                <IonIcon icon={heart} slot="icon-only" style={{color: "red"}}></IonIcon>
                            </IonButton>
                            <IonButton>
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
