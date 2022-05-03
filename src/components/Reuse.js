import {useState ,useEffect} from "react"
function Reuse (url){

    const [data, setEvent] = useState(null);
    const [ isPending , setIsPending] =useState (true);
 
    useEffect(()=> {
         setTimeout (()=>{
             fetch('http://localhost:8000/events')
             .then(res => {
                 return res.json();
             })
             .then(data =>{
                 setEvent(data)
                 setIsPending(false);
             })
         },1500);
         } ,[url]);
    return { data,isPending}
}

export default Reuse;