
import {useState ,useEffect} from "react"
import Props from "./Props";
function Home() {

   const [name, setName] = useState([
     {title:"My Name is " , body:" Hope You Are Fine" ,name:"Brian" ,id:1} ,
     {title:"My Name is " , body:" Hope You Are Fine" ,name:" Alex" ,id:2} ,
     {title:"My Name is" , body:" Hope You Are Fine" ,name:" John" ,id:3}
   ]);

//    const [Jina ,setNikename] = useState ('Murimi');

   const handleDelete = (id) =>{
       const newName =name.filter(name => name.id !== id);
       setName(newName);
   }

    useEffect(()=> {
      console.log("use efects run ");
      console.log(name);
    } ,[]);


   return (
   <div className="App">
           <Props name={name} title={"Name List"} handleDelete={handleDelete} />
           {/* <button onClick={()=> setName('Mugambi')} >!ChangeName!</button> */}
          
   
   </div>)}
export default Home;