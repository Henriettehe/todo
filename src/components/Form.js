//Her sender vi inn alle komponentene, i krøllparantesene til form. preventDefault - gjør at nettleseren slipper å refreshe. 
export default function Form({handleClick, todo, addToDo}) {
    const handleSubmit = (event) =>{
        event.preventDefault()
    }
    
    //Skriver inn value = og sender med propsene {todo.addToDo}
    //Sender også inn endringene, ved å skrive onChange={addToDo}
    //Skriver på button, type="submit" så knappen veit at her skal det legges til. Og kaller på onClick={handleclick}
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="to-do">To do</label>
            <input 
            name="title"
            id="to-do"
            type="text"
            value={todo.addToDo}
            onChange={addToDo}
            />

            <label htmlFor="content">Content</label>
            <textarea
            name="content"
            id="content"
            type="text"
            value={todo.addToDo}
            onChange={addToDo} />
    
            <button className="todo-btn" type="submit" onClick={handleClick}>Add to do</button>
    
        </form>
    )
}

//Viktig, ha en onSubmit - som gjør at det kun refreshes komponentet. 