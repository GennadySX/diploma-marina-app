import React from 'react';
import {IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar,
    IonButtons,
    IonBackButton
} from '@ionic/react';
import {courseList} from "../json/courseList";
import LCard from "../components/LCard";
import {withRouter} from "react-router";



class Lessons extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
        console.log('props is', this.props)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start" onClick={() => this.props.history.go('course')}>
                            <IonBackButton/>
                        </IonButtons>
                        <IonTitle>Уроки</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {this.props.location.state && this.props.location.state.course ?
                    <IonList>
                        {this.props.location.state.course.lessons.map((lesson:any, index:number) =>
                            <LCard
                                video={lesson.video}
                                key={index}
                                image={lesson.avatar}
                                title={lesson.name}
                                subTitle={this.props.location.state.course.name}
                                description={lesson.desc}
                            />
                        )}
                    </IonList> : null }
                </IonContent>
            </IonPage>
        )
    }

};

export default withRouter(Lessons);
