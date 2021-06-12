import './App.css';
import UserList from './UserList'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [listOfUSer, SetlistOfUser] = useState([])

  useEffect(()=> {
  axios.get("https://jsonplaceholder.typicode.com/users").then(res =>{SetlistOfUser(res.data)})
  })

  return (
    <div className="App">
      <UserList user_list={listOfUSer}/>
    </div>
  );
}

export default App;
