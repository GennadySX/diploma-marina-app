import React from 'react';
import './ExploreContainer.css';


class ExploreContainer extends React.Component<any, any>{
   constructor(props: any) {
       super(props);
       this.state = {}

       console.log('props is', this.props)
   }




    render(){
        return (
            <div className="container" >
                <strong onClick={() => this.props.onClick() }>{this.props.name}</strong>
                <p>Нажмите чтобы пройти в стр курсов</p>
            </div>
        );
    }
};

export default ExploreContainer;
