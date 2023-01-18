import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';

function AppUI () {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

    return (
        <React.Fragment>
          <TodoCounter/>
          <TodoSearch/>
  
          
            <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && 
            <div>
            <TodosLoading/>
            </div>
            }
            {(!loading && !searchedTodos.length) && <h3>¡Crea tu primer tarea!</h3>}

              {searchedTodos.map(todo => ( 
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onDelete = {() => deleteTodo(todo.text)}
                  onComplete = {() => completeTodo(todo.text)} 
                />
              ))}
            </TodoList>
          
         {!!openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
         )}


          
          <CreateTodoButton
          setOpenModal = {setOpenModal}
          />
        </React.Fragment>
      );
}

export {AppUI};