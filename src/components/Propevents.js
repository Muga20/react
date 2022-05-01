const Propevents = ({event}) => {
//  const name= props.name;
//  const title=props.title;
 const title ="Adds!"
    return ( 
        <div> 
   <div className="div-card">
     <h1 className="card-title-one">{title}</h1>
             {event.map((event)=>(
         <div className="card-id-one" key={event.id}>
              <h5 className="h3-one">{event.name}</h5>
              <p className="card-text">{event.note}</p>
              <p className="card-text">{event.date}</p>
              <ul className="card-list-one" >
              <li><button   class="card-button-one"   type="button  ">{event.button}</button></li>
              <li><button   class="card-button-one"   type="button">{event.info}</button></li>
              <li></li>
              </ul>
          </div>
        
        ))}
    </div>
    </div>
    );
}
 
export default Propevents ;

  