import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCel, setCel } from '../reducers/slices/celebritySlices';
const Celebrities_List = ({ celebrities }) => {
    const dispatch = useDispatch();
    const {celebrities_List} = useSelector(state => state.cel)
    function handleAdd(celid){
        const celebrity = celebrities.find(c => c.birthday === celid);
        if(celebrities_List.find(c => c.birthday === celid)){
            dispatch(removeCel(celid));
        }else{
            dispatch(setCel(celebrity));
        }
        console.log(celebrity);
    }


    return (
        <div>
            <h4><strong> Listado de Artistas</strong></h4>
            <div>
                {celebrities.map(c => (                    
                        <div key={c.birthday}>
                            <ul type='a'>
                            <li> <strong>Nombre: </strong> {c.name}</li>
                            <li> <strong>Edad: </strong> {c.age}</li> 
                            <li> <strong>Profesion: </strong>{c.occupation}</li>
                            <li> <strong>Cumpleaños: </strong> {c.birthday}</li>
                                                       
                            <button type="button" className="btn btn-orange" onClick={()=> handleAdd(c.birthday)}> Agregar a Celebridades Favoritos</button>
                            </ul>
                            <p></p>

                        </div>
                    
                
                ))}
            </div>
        </div>
    )
}

export default Celebrities_List