import { ADD_TODO, DELETE_TODO, GET_TODOS, LIKE_TODO } from './actions';

const initialState = {
    todos: [],
    error: ''
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const todos = state.todos;
            if (!action.error) {
                todos.push({ id: action.id, name: action.name, liked: false });
            }
            return Object.assign({},  state, {
                error: action.error,
                todos
            });
        case LIKE_TODO:
            const idx = state.todos.findIndex(todo => todo.id === action.todo.id);
            state.todos[idx].liked = action.liked;
            return Object.assign({}, state, { todos: state.todos });
        case DELETE_TODO:
            const filteredTodos = state.todos.filter(todo => todo.id !== action.todo.id);
            return Object.assign({}, state, { todos: filteredTodos });
        case GET_TODOS:
            return Object.assign({}, state, {
                todos: action.todos
            });
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;
