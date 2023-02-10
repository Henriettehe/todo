import ToDo from "./ToDo";

//Tar i mot propen, for å remove todos. 
export default function Todos({todoStart, removeToDos}) {
    return(
        <main className="main-content">
            {todoStart.map((todo) => (
                <ToDo key={todo.id} title={todo.title} content={todo.content} id={todo.id} removeToDos={removeToDos} />
            ))}
        </main>
    )
}