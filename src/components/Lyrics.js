import {useState, useEffect} from 'react'


const Lyrics = (props) => {

    const [lyrics, setLyrics] = useState(props.music.lyrics) 
    
    
    return( 

      <p>
        {lyrics}
      </p>
      
  
      
  )
   }

   export default Lyrics