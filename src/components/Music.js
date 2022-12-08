
const Music = (props) => {
    return( 
      
    <div className="card" style={{width: "18rem"}}>
      <img  src={props.music.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Song Name: {props.music.name}</h5>
            <p className="card-text">Artist: {props.music.artist}</p>
            <p className="card-text">Album: {props.music.album}</p>
            <p className="card-text">Genre: {props.music.genre}</p>
            <p className="card-text">Year: {props.music.year}</p>
            { props.music.favorite === true ? 
            <p className="card-text">Favorite: True</p>
            :  <p className="card-text">Favorite: False</p>
            } 
            <p className="card-text">Spotify Player: {props.music.player}</p>
          </div>
    </div>
  )
   }
   
   export default Music