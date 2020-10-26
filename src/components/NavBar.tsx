
import {IonAvatar, IonButton, IonButtons, IonIcon, IonItem, IonTitle,IonToolbar} from '@ionic/react' 
import { IonReactRouter } from '@ionic/react-router';
import {personCircleSharp,menu,notifications, addCircleOutline} from 'ionicons/icons';
import React from 'react';




const NavBar: React.FC = ()=>{
    return (
        <IonToolbar color="primary">
            <IonButtons slot="start">
                <IonButton routerLink="/404">
                    <IonIcon slot="icon-only" icon={menu}>
                    </IonIcon>

                </IonButton>
                
            </IonButtons>
            <IonTitle>Hiking Assistant</IonTitle>
            <IonButtons slot="end">
                {/* <IonButton onClick={() => alert('Notifications')}>
                    <IonIcon slot="icon-only" icon={notifications}>
                    </IonIcon>
                </IonButton> */}
               <IonButton routerLink="/add">
                   <IonIcon slot="icon-only" icon={addCircleOutline}></IonIcon>
               </IonButton>
            </IonButtons>
            
        
        </IonToolbar>

    )
}

export default NavBar;