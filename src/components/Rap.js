import React, {useState, useEffect} from 'react'


const Rap = (props) => {

    const [genre, setGenre] = useState(props.music.genre) 
    

    

    return( 

      <React.Fragment>
      {genre === "Rap" ? 
        <div className="card mb-1 mt-3" style={{width: "15rem"}}>
        <img  src={props.music.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Song Name: <br/> {props.music.name}</h5>
              <p className="card-text">Artist: {props.music.artist}</p>
              <p className="card-text">Album: {props.music.album}</p>
              <p className="card-text">Genre: {props.music.genre}</p>
              <p className="card-text">Year: {props.music.year}</p>
              <iframe src={props.music.player} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              { props.music.favorite === true ? 
              <p className="card-text">Favorite: True</p>
              :  <p className="card-text">Favorite: False</p>
              } 
            </div>
        </div>
      : null} 
      </React.Fragment>
      
  
      
  )
}
   
   export default Rap