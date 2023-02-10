import Button from "./Button";

                //defingerer props her, tar i mot removetodos her for å fjerne. Og tar den propsen sendes videre, videre til de ulike komponentene - til der vi trenger den. 
export default function ToDo({title, content, id, removeToDos}) {
    return(
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
            <Button id={id} removeToDos={removeToDos}/>
        </article>
    )
}