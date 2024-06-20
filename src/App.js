import Login from "./Login";
import Users from "./Users";

const App = ()=>{
    const baseurl = process.env.REACT_APP_BASE_URL;
    console.log({baseurl});
 return(
 <div>

<Login/>
<Users/>
 </div>
 
 )
}
export default App;







































































