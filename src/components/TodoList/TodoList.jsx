export const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map(({id, text, completed}) => (
                <li key={id}>
                    <input type="checkbox" />
                    <p>{text}</p>
                    <button></button>
                </li>
            ))}
        </ul>
    )
}