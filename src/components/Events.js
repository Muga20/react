import {useState ,useEffect} from "react"
import Propevents from "./Propevents";
function Event() {

   const [event, setEvent] = useState(null);

   useEffect(()=> {
         fetch('http://localhost:8000/events')
         .then(res => {
             return res.json();
         })
         .then(data =>{
             setEvent(data)
         })
        } ,[]);
   
   return (
   <div className="App">
  { event && <Propevents event={event} />}
   </div>)}
export default Event;