import {IonPage,IonHeader,IonContent, useIonViewWillEnter, IonProgressBar, IonText} from '@ionic/react'
import NavBar from '../components/NavBar';
import MyCard from '../components/MyCard'
import React,{useState,useEffect} from 'react'
import RoutesTest from '../testing/RoutesTest';
import axios from 'axios'
import routes from '../testing/RoutesTest';
import {getRoutes} from '../api/routesApi';
import MountainRouteInterface from '../api/interfaces'

  
  


const Home: React.FC = ()=>{

    const [routesData, setRoutesData] = useState<Array<MountainRouteInterface>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorLoading, setErrorLoading] = useState<boolean>(false);
   const getRoutesData = ()=>{
       setLoading(true);
       setErrorLoading(false);
        axios.get("http://localhost:8080/mr")
            .then(res => res.data)
            .then(res => {
                console.log(res);
                setRoutesData(res)})
            .catch(err => setErrorLoading(true))
            .finally(() => {
                console.log("loading finished")
                setLoading(false)
            });       


   }

   useEffect(()=>{
       getRoutesData();
   },[])



   const onDeleteCard = (id:number) =>{
    setRoutesData(routesData.filter(item => item.id !== id));
   }
   //const temp = getRoutesData();
   //alert(temp);
   
    return(
        <IonPage>
            <IonHeader>
                <NavBar></NavBar>
            </IonHeader>
            <IonContent className="ion-padding">
                {loading===true ? <IonProgressBar type="indeterminate"></IonProgressBar>: null}
                {errorLoading===true ? <IonText>Can't load data</IonText> : null}
                {routesData.length === 0 && errorLoading === false? <IonText>Nothing to show. Try add an element</IonText> : null}
               {routesData.map(elem => <MyCard key= {elem.id} onDelete={onDeleteCard} id={elem.id} name={elem.name} photoURL={elem.photoURL} location={elem.location} description={elem.description} addedDate={elem.addedDate} likes={elem.likes}/>)}
              {/* {RoutesTest.map(elem => <MyCard id={elem.id} name={elem.name} photoURL={elem.photoURL} date={elem.date} description={elem.description}/>)} */}
            </IonContent>
        </IonPage>
    );
}






export default Home;