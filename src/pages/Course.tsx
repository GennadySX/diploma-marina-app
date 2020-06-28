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
import {API} from "../util/API";
import axios from 'axios'
import {Storage} from "../helpers/Storage";
import {withRouter} from "react-router";

class CoursePage extends React.Component<any, any> {
    constructor(props: any) {
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


    searchList(search:any) {
        if (search) {
            this.setState({courseList: this.state.fullList.filter((course:any) => course.name.toLowerCase().indexOf(search) > 0)})
        } else  {
            this.setState({courseList: this.state.fullList })
        }
    }


    isLiked(course_id:any) {
        return this.state.likedList.filter((liked:any) => liked.user_id === this.state.account.id && liked.course_id === course_id).length ?
            true : false
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar className={'title'}>
                        {this.state.isSearch ?
                            <div style={{display: 'flex'}}>
                            <IonSearchbar onIonChange={e => this.searchList(e.detail.value)} placeholder={'Поиск...'}></IonSearchbar>
                                <IonButtons slot="primary">
                                <IonButton
                                    onClick={() => this.setState({isSearch: false}, () => {
                                        this.searchList('')
                                        })}
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
                        {this.state.courseList ?
                            this.state.courseList.map((course:any, index:number) =>
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
                            />
                        ) : null
                        }
                    </IonList>
                </IonContent>
            </IonPage>
        );
    }
};

export default withRouter(CoursePage);
