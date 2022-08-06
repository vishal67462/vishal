import "./App.css";
import data from './db.json'
import UserDetails from "./components/UserDetails";
// import data from db.json

function App(props) {
  
 //console.log(Data)
 //console.log(data)
 var x=data.map((e)=>(

<UserDetails 
Name={e.first_name}
lname={e.last_name}
address={e.address}
karma={e.karma}
followers={e.followers}
post={e.post}

/>

 ))
 console.log(x)
  

  return (
    <div className="App" data-testid = 'app'>
      <button  data-testid = 'sort-asc-btn'>sort by asc</button>
      <button  data-testid = 'sort-desc-btn'>Sort by Desc</button>
      {x}
      
      
      
      {/*  map through thxe users data and pass props to the Userdetails component */}
    </div>
  );
}

export default App;
