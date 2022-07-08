// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodosList, onDeleted} = props
  const {title, id} = initialTodosList

  const onButton = () => {
    onDeleted(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
