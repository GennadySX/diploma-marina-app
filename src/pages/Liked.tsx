import React from 'react';
import {IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {courseList} from "../json/courseList";
import Card from "../components/Card";
import {Storage} from "../helpers/Storage";
import axios from "axios";
import {API} from "../util/API";

class Liked extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            isSearch: false,
            token: null,
            courseList: null,
            account: null,
            fullList: null,
            likedList: null
        }

        Storage.get('token', (result: any) =>
            this.setState({token: JSON.parse(result.value)}, () => {
                this.initIt()
                this.likeIt()
            }))

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
    }





    likeIt() {
        axios.get(API.like, {
            headers: {
                'Authorization': `Token ${this.state.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => {
            this.setState({likedList: res.data})
        })
    }



    initIt() {
        axios.get(API.course, {
            headers: {
                'Authorization': `Token ${this.state.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }}).then(res => {
            this.setState({courseList: res.data, fullList: res.data }, () => {
                console.log('res', res)
            })
        })
    }


    openLesson(course:any) {
        this.props.history.push('lesson', {course: course})
    }



    isLiked(course_id:any) {
        return this.state.likedList.filter((liked:any) => liked.user_id === this.state.account.id && liked.course_id === course_id).length ?
            true : false
    }



    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Избранные</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        {this.state.courseList ?
                            this.state.courseList.map((course:any, index:number) =>
                                this.isLiked(course.id) ?
                                <Card
                                    token={this.state.token}
                                    currentUser={this.state.account}
                                    choiseCourse={() => this.openLesson(course)}
                                    key={index}
                                    image={course.avatar}
                                    id={course.id}
                                    title={course.name}
                                    course={course}
                                    isLiked={this.isLiked(course.id)}
                                    // subTitle={course.name}
                                    description={course.desc}
                                /> : null
                            ) : null
                        }
                    </IonList>
                </IonContent>
            </IonPage>
        )
    }
};

export default Liked;
