import { useState } from "react";

const Edit = (props) => {
    const [song, setsong] = useState({...props.music})
    const [checked, setChecked] = useState(true)
    const [checkMark,setCheckMark] = useState(false)

   

    const handleChange = (event) => {
        setsong({...song, [event.target.name]: event.target.value})
        
    }
    
    const handleSubmit = (event) => {
        console.log(song);
        event.preventDefault()
        props.handleEdit(song)
    }

    

   const checkBox = () => {
        setChecked(!checked)
        setCheckMark(!checkMark)
        
   }

    return (
        <>
        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
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
                               
                                <form className="bg-light edit-form" onSubmit={handleSubmit}>
                                    <label className='form-label gray' htmlFor='image'>Image:</label>
                                    <input  className='form-control' type='text' name='image' onChange={handleChange} value={song.image}/>
                                    
                                
                                    <label className='form-label gray'htmlFor="name">Name:</label>
                                    <input className='form-control' type='text' name="name" onChange={handleChange} value={song.name}/>
                                    
                                
                                    <label className='form-label gray' htmlFor="artist">Artist:</label>
                                    <input className='form-control' type='text' name="artist" onChange={handleChange} value={song.artist}/>
                                    
                                
                                    <label className='form-label gray' htmlFor='genre'>genre:</label>
                                    <input className='form-control' type='text' name='genre' onChange={handleChange} value={song.genre}/>
                                    
                                    
                                    <label className='form-label gray'htmlFor="album">album:</label>
                                    <input className='form-control' type='text' name="album" onChange={handleChange} value={song.album}/>
                                    

                                    <label className='form-label gray'htmlFor="year">Year:</label>
                                    <input className='form-control' type='text' name="year" onChange={handleChange} value={song.year}/>
                                    
                                    
                                    <label className='form-label gray'htmlFor="favorite">Favorite:</label>
                                    <input className='' type='checkbox'onClick={checkBox}  value={checked ? true : false} name='favorite' onChange={handleChange} checked={checked ? false : true}/>
                                

                                    <label className='form-label gray'htmlFor="player">player:</label>
                                    <input className='form-control' type='text' name="player" onChange={handleChange} value={song.player}/>
                                    
                                    <br/>
                                    <input className="btn btn-dark" type='submit'/>
                                    <br/>
                                    <br/>
                            
                                </form>
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Edit