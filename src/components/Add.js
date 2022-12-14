import {useState} from 'react'

const Add = (props) => {
   const [song, setSong] = useState({name: '', image:'', artist:'', album:'', genre: '', year: 0, favorite: false, player:'', lyrics:''})
   

   const handleChange = (event) => {
    setSong({...song, [event.target.name]: event.target.value})
    
   }

   const handleSubmit = (event) => {
    console.log(song);
      event.preventDefault()
      props.handleCreate(song)
   }


   const [checked,setChecked] = useState(true)
   const [checkMark,setCheckMark] = useState(false)

   const checkBox = () => {
        setChecked(!checked)
        setCheckMark(!checkMark)
   }
   

   return(
     <div>
        <button type="button" class="btn btn-dark btn-lg" data-toggle="modal" data-target="#exampleModal">
          Add Song
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
                      <div class="modal-body">
                      <div className="add-form shadow-none p-3 mb-5 bg-light rounded  m-auto">

                            <form onSubmit={handleSubmit}>

                                <div className="mb-1">
                                  <label htmlFor='name' className="form-label">Name: </label>
                                  <input type="text" name='name' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  <div id="emailHelp" className="form-text">Type in the name of the song</div>
                                </div>

                                <div className="mb-1">
                                  <label htmlFor='image' className="form-label">Image:</label>
                                  <input type="text" name='image' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  <div id="emailHelp" className="form-text">Type in image URL</div>
                                </div>

                                <div className="mb-1">
                                  <label htmlFor='artist' className="form-label">Artist:</label>
                                  <input type="text" name='artist' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  <div id="emailHelp" className="form-text">Type in the artist name</div>
                                </div>

                                <div className="mb-1">
                                  <label htmlFor='album' className="form-label">Album</label>
                                  <input type="text" name='album' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  <div id="emailHelp" className="form-text">Type in the album</div>
                                </div>

                                <div className="mb-1">
                                  <label htmlFor='genre' className="form-label">Genre: </label>
                                  <input type="text" name='genre' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  <div id="emailHelp" class="form-text">Type in the genre of the song</div>
                                </div>

                                <div className="mb-1">
                                  <label htmlFor='year' className="form-label">Year: </label>
                                  <input type="text" name='year' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  <div id="emailHelp" class="form-text">Type in the year of song</div>
                                </div>

                                <div className="mb-1">
                                  <label htmlFor='favorite' className="form-label">Favorite: </label>
                                  <input type='checkbox' onClick={checkBox} value={checked ? true : false}name='favorite' onChange={handleChange}   aria-describedby="emailHelp"/>
                                  <div id="emailHelp" class="form-text">Check to Favorite</div>
                                </div>

                                <div className="mb-1">
                                  <label htmlFor='player' className="form-label">Player: </label>
                                  <input type="text" name='player' onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  <div id="emailHelp" class="form-text">Type in the player url from spotify</div>
                                </div>



                                <input type="submit"/>

                            </form> 

                            </div>
                      </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>

        </div>
     </div>

   )
}

export default Add