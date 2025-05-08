import { Item, List } from "./TodoList.styled"

export const TodoList = ({todos, onToggleCompleted, onDeleteTodo}) => {
    return (
        <List>
            {todos.map(({id, text, completed}) => (
                <Item key={id}>
                    <input checked={completed} type="checkbox" onChange={() => onToggleCompleted(id)}/>
                    <p>{text}</p>
                    <button type="button" onClick={() => onDeleteTodo(id)}>Delete</button>
                </Item>
            ))}
        </List>
    )
}