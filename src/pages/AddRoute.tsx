import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonList, IonPage, IonRouterOutlet, IonText, IonTextarea, IonToolbar } from "@ionic/react"

import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'


const AddRoute : React.FC =()=>{
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    

    const sendForm = () =>{
        axios.post("http://localhost:8080",{
            headers: {
                "Content-Type" : "application/json",
                "crossorigin": true
            },
            data:{
                name: name,
                photoURL: photoURL,
                description: description,
                addedDate: date,
            }
        }).then(res => {
            //TODO: GO TO HOME PAGE

        }).catch(err => {
            //TODO: Show error
        })
    }
    return(
        <IonPage>
            <IonHeader>
                <NavBar></NavBar>
            </IonHeader>
            <IonContent>
            <IonItem style={{"margin" : "auto", "width": "90%", "padding": 10}}>
            <IonList style={{"margin" : "auto", "width" : "90%", "padding" : 10}}>
                <IonItemDivider>
                <IonText >Name of route</IonText>
                </IonItemDivider>
                <IonItem style={{"width": "100%", "spacing": 20}}>
                    
                    <IonInput value={name} clearInput={true}></IonInput>
                </IonItem>
                
                <IonItemDivider>Photo URL</IonItemDivider>
                <IonItem>
                    <IonInput value={photoURL} clearInput={true} type="url"/>
                </IonItem>

                <IonItemDivider >Added Date</IonItemDivider>
                <IonItem>
                    <IonInput value={date} clearInput={true} type="date"/>
                </IonItem>
                
                <IonItemDivider>Description</IonItemDivider>
                <IonItem>
                    <IonTextarea value={description}/>
                </IonItem>

                
                <IonButton onClick={(e) => {e.preventDefault(); sendForm()}}>Save</IonButton>
                
            </IonList>
            </IonItem>
        
            
        </IonContent>
       </IonPage>
    );
}


export default AddRoute;