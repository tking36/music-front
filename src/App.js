import {useState, useEffect} from 'react'
import axios from 'axios'

import './App.css';

const App = () => {

  const [music,setMusic] = useState([])

  const getMusic = () =>{
    axios.get('http://localhost:3000/music')
    .then((response) =>setMusic(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }
  const handleCreate = (data) => {
    axios.post('http://localhost:3000/music', data)
    .then((response) => {
       console.log(response)
       setMusic([...music, response.data])
    })
  }
  
  
  const handleEdit = (data) => {
   axios.put('http://localhost:3000/music/' + data._id, data)
   .then((response) => {
      let newMusic = music.map((music) => {
        return music._id !== data._id? music:data         
      })
      setMusic(newMusic)
   })
  }
  
  const handleDelete = (deletedMusic) => {
    axios.delete('http://localhost:3000/music/' + deletedMusic._id)
    .then((response) => {
     let newMusic = music.filter((music) => {
        return music._id !== deletedMusic._id
     })
    })
}


}
export default App;
