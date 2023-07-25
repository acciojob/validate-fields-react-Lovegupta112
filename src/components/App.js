import React,{useState} from "react";
import './../styles/App.css';

const info={name:'',password:''};
const App = () => {
   
  const[user,setUser]=useState(info);
  const[error,setError]=useState(false);
  function submit(e){
   e.preventDefault();
    if(user.name.length<=0){
     return setError(true);
    }
    else if(user.password.length<=0){
      return setError(true);
    }
    else if(user.password.length<=0 && user.name.length<=0){
      return setError(true);
    }
    else{
      setError(false);
      setUser(info);
      return ;
    }
  }
  return (
    <form onSubmit={submit}>
        {/* Do not remove the main div */}
       <section>
        <label htmlFor="name">Username</label>
       <input type="text" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} id="name"/>
       </section>
       <section>
        <label htmlFor="password">Password</label>
       <input type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} id="password"/>
       </section>
       
       {error &&
       <div id="errorMessage" style={{color:'red'}}>
       Both username and password are required.
       </div>}
       <button type="submit">Login</button>
    </form>
  )
}

export default App