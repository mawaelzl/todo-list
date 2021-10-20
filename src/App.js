import {useCallback, useMemo, useState} from "react";
import {TodoItem} from "./TodoItem";

const App = () => {
    const [todoInputValue, setTodoInputValue] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    const handleAdd = useCallback(() => {
        setTodoItems(prevTodoItems => [...prevTodoItems, todoInputValue]);
        setTodoInputValue("");
    }, [todoInputValue]);

    const handleDone = useCallback((indexToRemove) => {
        setTodoItems(prevTodoItems =>
            prevTodoItems.filter(
                (_el, index) => index !== indexToRemove
            )
        );
    }, []);

    const preventAdd = useMemo(() =>
        todoInputValue === "" || todoItems.includes(todoInputValue)
        , [todoInputValue, todoItems]);

    return (
        <div>
            <h1>TODO Liste</h1>
            <div style={{display: "flex", gap: "16px"}}>
                <input style={{width: "150px", boxSizing: "border-box"}} type="text" value={todoInputValue}
                       onChange={event => setTodoInputValue(event.target.value)}/>
                <button onClick={handleAdd} disabled={preventAdd}>Element hinzufügen</button>
            </div>
            <hr/>
            <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                {todoItems.map((todoItem, index) =>
                    <TodoItem todoItem={todoItem} handleDone={() => handleDone(index)} key={todoItem}/>
                )}
            </div>
        </div>
    );
}

export default App;
