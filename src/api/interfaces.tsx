export default interface MountainRouteInterface{
    id: number,
    name: string,
    photoURL: string,
    location: string,
    addedDate: string,
    likes: number,
    description: string,
    onDelete: (id:number) => void
}