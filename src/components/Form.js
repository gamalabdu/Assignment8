import React,{useState} from 'react'


export default function Form () {

    let colorList = ["gray","white","red","orange","yellow",
    "green","blue","indigo","violet","pink"]

    const [color,setColor] = useState()

    function createCell () {
        return (
        <td className="uncolored" style={{backgroundColor:'black'}}>
        </td>
     )
    }


    return (
        
        <div>

        <h2>Color Squares</h2>
        <button onClick={createCell}>Add Row</button>
        <button>Add Column</button>
        <button>Delete Column</button>
        <button>Delete Row</button>
        <button>Fill All Squares</button>
        <button>Color Uncolored Squares</button>
        <button>Clear All Squares</button>
        <select className="dropdown" onChange={e => setColor(e.target.value.toString())}>
            {
                colorList.map(color =>
                    <option> {color} </option>
                )
            }
        </select>

        <table className="grid">
            
        </table>
    
        </div> 

    )

}