import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonButtons,
    IonButton,
    IonSearchbar,
    IonIcon
} from '@ionic/react';

import {
    closeCircleOutline,
    search,
    searchCircle,
} from "ionicons/icons";
import Card from "../components/Card";
import {courseList} from "../json/courseList";

class CoursePage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isSearch: false
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar className={'title'}>
                        {this.state.isSearch ?
                            <div style={{display: 'flex'}}>
                            <IonSearchbar value={""} onIonChange={e => {}} placeholder={'Поиск...'}></IonSearchbar>
                                <IonButtons slot="primary">
                                <IonButton
                                    onClick={() => this.setState({isSearch: false})}
                                    color={'none'}>
                                    <IonIcon size={'lg'} color={'danger'} slot="icon-only" ios={closeCircleOutline} md={closeCircleOutline}/>
                                </IonButton>
                                </IonButtons>
                            </div>
                            :
                            <>
                                <IonTitle>Курсы </IonTitle>
                                <IonButtons slot="primary">
                                    <IonButton onClick={() => this.setState({isSearch: true})}>
                                        <IonIcon size={'lg'} slot="icon-only" ios={searchCircle} md={search}/>
                                    </IonButton>
                                </IonButtons>
                            </>
                        }


                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        {courseList.map((course, index) =>
                            <Card
                                key={index}
                                image={course.image}
                                title={course.title}
                                subTitle={course.subTitle}
                                description={course.description}
                            />
                        )}
                    </IonList>
                </IonContent>
            </IonPage>
        );
    }
};

export default CoursePage;
