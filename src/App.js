import {useState, useEffect} from 'react'
import axios from 'axios'

import Favorite from './components/Favorite'
import Music from './components/Music'
import Rap from './components/Rap'
import Rock from './components/Rock'
import Edit from './components/Edit'
import Add from './components/Add'

import Marquee from "react-fast-marquee";

const App = () => {

  const [music,setMusic] = useState([])
  

  const getMusic = () =>{
    axios.get('https://my-music-library123.herokuapp.com/music')
    .then((response) =>setMusic(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }


  const handleCreate = (data) => {
    axios.post('https://my-music-library123.herokuapp.com/music', data)
    .then((response) => {
       console.log(response)
       setMusic([...music, response.data]) 
       getMusic()
    })
  }
  
  const handleEdit = (data) => {
   axios.put('https://my-music-library123.herokuapp.com/music/' + data._id, data)
   .then((response) => {
      let newMusic = music.map((musics) => {
        return musics._id !== data._id? musics:data         
      })
      setMusic(newMusic)
      getMusic()
   })
  }
  
  const handleDelete = (deletedMusic) => {
    axios.delete('https://my-music-library123.herokuapp.com/music/' + deletedMusic._id)
    .then((response) => {
     let newMusic = music.filter((music) => {
        return music._id !== deletedMusic._id
     })
     setMusic(newMusic)
    })
}



useEffect(() => {
  getMusic()
  
}, [])

const[showCards,setShowCards]=useState(true);

const[showRock,setShowRock]=useState(false);

const[showFav,setShowFav]=useState(false);

const[showRap,setShowRap]=useState(false);





const revealCards = () => {
  setShowCards(true)
  setShowRock(false)
  setShowRap(false)
  setShowFav(false)
}

const revealRock = () => {
  setShowCards(false)
  setShowRock(true)
  setShowRap(false)
  setShowFav(false)
}

const revealRap = () => {
  setShowCards(false)
  setShowRock(false)
  setShowFav(false)
  setShowRap(true)
}

const revealFav = () => {
  setShowCards(false)
  setShowRock(false)
  setShowFav(true)
  setShowRap(false)
}





return(
  <div className='grid'>
    

    <nav className='nav mb-3'>
      <div className='nav-buttons-left'>
       
        
        <button  onClick={revealCards} className='btn btn-dark btn-lg all-songs' type='button'>All Songs</button>
      </div>
      <h1>Music</h1>
      <div className='nav-button'>
        <Add handleCreate={handleCreate}/>
        {/* <button onClick={revealEdit} className='btn btn-warning btn-lg edit-button'>Edit Song</button> */}
      </div>
      <Marquee direction="up">
        {music.map((music) => {
          return (<img className='marquee-image mt-2' src={music.image}/>)
            })}
        </Marquee>
    </nav>
    <div className='middle'>
        <div className='left-side-bar'>
          
            
            <div class="btn-group genre left-side-buttons">
            <button onClick={revealFav} className='btn btn-secondary'>Favorites</button>
              <button  class="btn btn-dark btn-lg  dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Genre
              </button>
              <div class="dropdown-menu">
                <button onClick={revealRock} className='btn btn-secondary'>Rock</button>
                <button onClick={revealRap} className='btn btn-secondary'>Rap</button>
              </div>
            </div>
            
             <div>
             
             <iframe className='playlist' src="https://open.spotify.com/embed/playlist/5WrAebVBwK6F8K1BHhG1KE?utm_source=generator" width="100%" height="690" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

             {/* <iframe className='playlist' src="https://open.spotify.com/embed/playlist/6IYrr80YrKOD8Bse6gWClJ?utm_source=generator" width="100%" height="" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
              </div>
        </div>
             
          
          
            <div className="scroll main">
            

            
              {music.map((music) => {
                return(
                  <div className=' card-container'>
                      {showCards ? <>
                       <Music music={music}/> 
                       
                       <Edit music={music} handleEdit={handleEdit}/>
                          <button className="btn btn-danger mb-1 delete-btn" onClick={() => {handleDelete(music)}} value={music._id}>Delete a Song</button>
                          
                       </>
                       : null}
                      
                      
                     
                      { showRock ?  
                      <Rock music={music}/> :  null}

                      { showRap ? 
                      <Rap music={music}/>:  null}

                      { showFav ? <Favorite music={music}/> :  null}
                      
                </div>
                
                )
                
              })}
            </div>


       

    </div>
    
   </div> 
   
   
)

}
export default App;