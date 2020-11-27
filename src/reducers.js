import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home';
import { ListReducer } from './pages/list';
import { ContactReducer } from './pages/contact';

import { ModalReducer } from './components/modal';


export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ListReducer,
    ...ModalReducer,
    ...ContactReducer
});
