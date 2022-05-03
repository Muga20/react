
import Propevents from "./Propevents";
import Reuse from "./Reuse";
function Event() {

    const {data , isPending } =Reuse('http://localhost:8000/events');

    return(

     <div className="App">
      {isPending && <div className="loading">LOADING.........</div>}   
      {data && <Propevents event={data} />}
      </div>
    ); }
    
export default Event;

/* npx json-server --watch data/db.json --port 8000*/