import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonText, IonThumbnail, IonToolbar } from '@ionic/react';
import { TargetElement } from '@testing-library/user-event';
import { bookmark, bookmarkOutline, bookmarkSharp, bookOutline, closeCircleOutline, createOutline, heartOutline, heartSharp, pin, save, trashBinOutline, trashBinSharp, walk, warning, wifi, wine } from 'ionicons/icons';
import React, { useState } from 'react'
import MountainRouteInterface from '../api/interfaces'

//const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus recusandae deserunt suscipit corporis dolorum accusantium id quo odio earum vero eligendi adipisci, quam animi! Ut, harum! Adipisci, eum sed."




const MyCard: React.FC<MountainRouteInterface> = (prop : MountainRouteInterface) =>{
  const [showMore, setShowMore] = useState(false);  
  const [liked, setLiked] = useState(false);
  const [saved,setSaved] = useState(false);
  const [nrLikes,setNrLikes] = useState(prop.likes);
  
  const showMoreAction  = (e:React.MouseEvent<HTMLIonButtonElement>) =>{
      e.preventDefault();
      //alert(showMore)
      setShowMore(!showMore);
  }

  const pressLikeBtn = (e:React.MouseEvent<HTMLIonButtonElement>)=>{
    e.preventDefault();
    if(liked)
      setNrLikes(nrLikes-1)
    else
      setNrLikes(nrLikes+1)
    setLiked(!liked);
  }

  const pressSaveBtn = (e: React.MouseEvent<HTMLIonButtonElement>)=>{
    e.preventDefault();
    setSaved(!saved);
  }



  const RenderDescription : React.FC= ()=>{
      
    if(prop.description.length < 300)
    return(
          <IonText>{prop.description}</IonText>
      );

    if(!showMore)
    return(
   
      
        <IonCardContent>
          <IonText >{prop.description.substring(0,300) + "..."}</IonText>
        </IonCardContent>
    
    );


    return(
    <IonCardContent>
      <IonText >{prop.description}</IonText>
    </IonCardContent>);
  }

  return(
      <IonCard key={prop.id} style={{"margin": "auto", "marginBottom": "50px","width": "95%", "padding": "10px"}}>
        <IonItem style={{"margin" : "auto", "width": "100%", "padding": "2px"}}>
            <IonImg src={prop.photoURL} style={{"width": "100%"}}></IonImg>
        </IonItem>
        
      <IonCardHeader style={{"borderBottom" : "1px solid black", "padding": 0, "margin": 10}}>
        <IonText>
          <h1>{prop.name}</h1>
          <h5>{prop.addedDate}</h5>
        </IonText>
        <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={() => prop.onDelete(prop.id)}>
            <IonIcon icon={closeCircleOutline} size="large"></IonIcon>
          </IonButton>
          <IonButton>
            <IonIcon icon={createOutline} size="large"></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      
      </IonCardHeader>

    <IonToolbar>
      <IonButtons slot="start">
        {prop.description.length >= 300 ? <IonButton color="primary" fill="solid" onClick={(e) => showMoreAction(e)}>{showMore ? "Hide" : "Show More"}</IonButton> : null}
      </IonButtons>
      <IonButtons slot="end">       
      <IonBadge color="danger">{nrLikes}</IonBadge>
        <IonButton style={{"padding" :0}}color="danger" onClick={(e) => pressLikeBtn(e)}>
          <IonIcon  icon={liked ? heartSharp: heartOutline}/>
          <IonText>Like</IonText>
        </IonButton>
        
        <IonButton color="primary" onClick={(e) => pressSaveBtn(e)}>
          <IonIcon   icon={saved ? bookmarkSharp: bookmarkOutline}/>
          <IonText >save</IonText>
        </IonButton>
        
      </IonButtons>
      </IonToolbar>
      <RenderDescription></RenderDescription>

      
    </IonCard>
    );
}


export default MyCard;