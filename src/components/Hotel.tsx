import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { setHotels } from "./HotelSlice";
interface IHotel{
    name : string,
    cusinee : string,
    featured_image : string,
    id: string
}

export default function Hotels(){
const dispatch = useDispatch();
const data = useSelector((x: AppState) => x.hotelsSlice);
    useEffect(()=>{
        async function api(){
            const response = await fetch("/hotels.json")
            const json :{restaurant : IHotel}[] = await response.json();
           dispatch(setHotels(json.map(x => x.restaurant)));
        }
        api();
    },[]);
    return(<div>{data.length}</div>);
}