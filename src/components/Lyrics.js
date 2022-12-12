import {useState, useEffect} from 'react'


const Lyrics = (props) => {

  const [song, setsong] = useState({...props.music})
  const [lyric, setLyric] = useState()

  const handleChange = (event) => {
     
    setLyric(event.target.value)
     
    
}
    



    
    
    return( 
      <>
      <button name="lyrics" value={song.lyrics} onClick={handleChange}>Lyrics</button>
        
            {lyric === song.lyrics ? 
            <>
       
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      {song.lyrics}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

            
            </>
            : null }
            
      </>
      )
    }
    
    export default Lyrics
    

        

  