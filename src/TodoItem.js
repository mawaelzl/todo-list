export const TodoItem = ({todoItem, handleDone}) =>
    <div style={{display: "flex", gap: "16px"}}>
        <span style={{width: 150}}>{todoItem}</span>
        <button onClick={handleDone}>Erledigt</button>
    </div>

