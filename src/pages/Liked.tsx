import React from 'react';
import {IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {courseList} from "../json/courseList";
import Card from "../components/Card";

const Liked: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Избранные</IonTitle>
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
};

export default Liked;
