import React from 'react';
import {IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar,
    IonButtons,
    IonBackButton
} from '@ionic/react';
import {courseList} from "../json/courseList";
import LCard from "../components/LCard";

class PrivacyPage extends React.Component<any, any> {
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
                        <IonTitle>Права конфиденциальности</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p style={{padding: 15}}>
                        Благодарим Вас за то, что присоединились к нашей онлайн-платформе. Мы в Edubrains уважаем конфиденциальность клиентов и хотим, чтобы Вы понимали, как мы будем собирать, использовать и передавать данные о Вас. Эта Политика конфиденциальности описывает нашу практику сбора данных и Ваши права на доступ, исправление или ограничение использования нами Ваших персональных данных.
                        Используя Услуги, Вы соглашаетесь с условиями настоящей Политики конфиденциальности. Вы не должны использовать Услуги, если Вы не согласны с настоящей Политикой конфиденциальности или любым другим соглашением, которое регламентирует использование Услуг.

                        1. Какие данные мы собираем

                        Мы осуществляем сбор определенных данных, полученных непосредственно от Вас, например данных, которые Вы сообщаете нам, данных о Вашем участии в курсах. Мы также собираем некоторые данные, например какими нашими Услугами Вы взаимодействуете или какие Услуги Вы используете.
                    </p>
                </IonContent>
            </IonPage>
        )
    }

};

export default PrivacyPage;
