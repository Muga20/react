import { Link } from "react-router-dom";

const navbar = () => {
    return ( 
    <div className="App">
        <div className="navbar">
            <div className="nav-tomorrow">
            
                   <h1 className="txt-tomorrowland">Tomorrowland</h1>
              
                   
                <div className="link-one">
                 <ul className="ul-link">
                     <li> <Link to="/ ">Home</Link></li>
                     
                     <li> <Link  className="add-new" to="/Create">New Add </Link> </li>
                
                
                 </ul>
                </div> 
                 
                  
               
            </div>
        </div>
    </div>
     );
}
 
export default navbar;