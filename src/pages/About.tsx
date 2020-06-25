import React from 'react';
import {IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar,
    IonButtons,
    IonBackButton
} from '@ionic/react';
import {courseList} from "../json/courseList";
import LCard from "../components/LCard";

class AboutPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        }



    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start" onClick={() => this.props.history.go('profile')}>
                            <IonBackButton/>
                        </IonButtons>
                        <IonTitle>О нас</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>

                    </p>
                </IonContent>
            </IonPage>
        )
    }

};

export default AboutPage;
