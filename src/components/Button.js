//Sender propen "removeToDos" slik at den henter og utfører dette. 
export default function Button({id, removeToDos}) {
    return (
        <button className="todo-btn" onClick={() => removeToDos(id)}>Ferdig</button>
    )
}