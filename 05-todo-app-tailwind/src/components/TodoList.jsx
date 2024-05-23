import {TodoItem} from './TodoItem';

export const TodoList = () => {
    return (
        <div className='mt-8 rounded-t-md bg-white [&>article]:p-4'>
            <TodoItem />

            <TodoItem />

            <TodoItem />

            <TodoItem />
        </div>
    )
}
