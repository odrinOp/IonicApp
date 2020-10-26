import axios from 'axios'

interface MountainCardProp {
    id: number,
    name: string,
    photoURL: string,
    date: string,
    description: string
  }
  

const api = axios.create({
    baseURL:"localhost:8080",
    headers:{
        'Content-type': 'application/json'
    }
})



api.interceptors.response.use((response) => {
    if(response.status === 200)
        return response.data;
});


export function getRoutes() : Promise<Array<MountainCardProp>> {
    return api.get('/routes');
}