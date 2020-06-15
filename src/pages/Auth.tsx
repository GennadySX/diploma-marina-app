import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../styles/Auth.sass';
import {withRouter} from "react-router";
import {Storage} from "../helpers/Storage";


class Auth extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLogin: true
        }

        Storage.get('is', (result: any) => result && result.value ? this.checkAuth(true ) : null)
    }


    componentDidMount (): void {
        //console.log('auth page opened', this.props)
        //this.props.isAuth({authPage: true})
    }




    checkAuth(e:any = null) {
        Storage.set('is', 'token_asDS12123kas2312j312k3d12h3a1k23l1j23s1d23123halksjdhalksjdhlasjdhlaskjdhalkjsd').then(() => {
            this.props.history.push('/course')
        })

    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <IonPage>
                <IonContent>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large" >Войти</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <ExploreContainer onClick={() => this.checkAuth()} name={'Войти'}/>
                </IonContent>
            </IonPage>
        );
    };
};

export default withRouter(Auth);
