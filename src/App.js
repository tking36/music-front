import {useState, useEffect} from 'react'
import axios from 'axios'


import Music from './components/Music'
import Rap from './components/Rap'
import Rock from './components/Rock'
import Edit from './components/Edit'
import Add from './components/Add'

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
       getMusic()
    })
  }
  
  const handleEdit = (data) => {
   axios.put('http://localhost:3000/music/' + data._id, data)
   .then((response) => {
      let newMusic = music.map((musics) => {
        return musics._id !== data._id? musics:data         
      })
      setMusic(newMusic)
      getMusic()
   })
  }
  
  const handleDelete = (deletedMusic) => {
    axios.delete('http://localhost:3000/music/' + deletedMusic._id)
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

const[showRockPlaylist,setShowRockPlaylist]=useState(false);

const[showRap,setShowRap]=useState(false);

const[showRapPlaylist,setShowRapPlaylist]=useState(false);

const revealCards = () => {
  setShowCards(true)
  setShowRock(false)
  setShowRap(false)
  setShowRockPlaylist(false)
  setShowRapPlaylist(false)
  
}

const revealRock = () => {
  setShowCards(false)
  setShowRock(true)
  setShowRap(false)
  setShowRockPlaylist(false)
  setShowRapPlaylist(false)
  
}

const revealRockPlaylist = () => {
  setShowCards(false)
  setShowRock(false)
  setShowRap(false)
  setShowRockPlaylist(true)
  setShowRapPlaylist(false)
}

const revealRap = () => {
  setShowCards(false)
  setShowRock(false)
  setShowRockPlaylist(false)
  setShowRapPlaylist(false)
  setShowRap(true)
}

const revealRapPlaylist = () => {
  setShowCards(false)
  setShowRock(false)
  setShowRockPlaylist(false)
  setShowRapPlaylist(true)
  setShowRap(false)
}




return(
  <div className='grid'>
    

    <nav className='nav'>
      <div className='nav-buttons-left'>
       
        
        <button  onClick={revealCards} className='btn btn-dark btn-lg all-songs' type='button'>All Songs</button>
      </div>
      <h1>Music</h1>
      <div className='nav-button'>
        <Add handleCreate={handleCreate}/>
        {/* <button onClick={revealEdit} className='btn btn-warning btn-lg edit-button'>Edit Song</button> */}
      </div>
    </nav>
    <div className='middle'>
        <div className='left-side-bar'>
          
            <div class="btn-group genre">
              <button  class="btn btn-dark btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Spotify Playlists
              </button>
              <div class="dropdown-menu">
                <button onClick={revealRockPlaylist} className='btn btn-secondary'>Rock</button>
                <button onClick={revealRapPlaylist} className='btn btn-secondary'>Rap</button>
              </div>
            </div>
            <div class="btn-group genre">
              <button  class="btn btn-dark btn-lg  dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Genre
              </button>
              <div class="dropdown-menu">
                <button onClick={revealRock} className='btn btn-secondary'>Rock</button>
                <button onClick={revealRap} className='btn btn-secondary'>Rap</button>
              </div>
            </div>
          <iframe src="https://open.spotify.com/embed/track/508eAloKwV2WF4Agk94rQB?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
          
          
            <div className="scroll main">
            {showRockPlaylist ? <iframe class="spotify-playlist" src="https://open.spotify.com/embed/playlist/5WrAebVBwK6F8K1BHhG1KE?utm_source=generator" width="100%" height="800" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> : null}

            {showRapPlaylist ? <iframe class="spotify-playlist"  src="https://open.spotify.com/embed/playlist/6IYrr80YrKOD8Bse6gWClJ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> : null}
              {music.map((music) => {
                return(
                  <div className=' card-container'>
                      {showCards ? <>
                       <Music music={music}/> 
                       <Edit music={music} handleEdit={handleEdit}/>
                          <button className="btn btn-danger" onClick={() => {handleDelete(music)}} value={music._id}>Delete a Song</button>
                       </>
                       : null}
                      
                      
                     
                      { showRock ? <> 
                      <Rock music={music}/> 
                      </>
                      :  null}

                      { showRap ? <> 
                      <Rap music={music}/> 
                      </>
                      :  null}
                      
                </div>
                
                )
                
              })}
            </div>


        <div className='marquee-container mt-3'>
        <marquee direction="down">
        {music.map((music) => {
          return (<img className='marquee-image mt-2' src={music.image}/>)
            })}
        </marquee>
        </div>

    </div>
   </div> 
   
   
)

}
export default App;


