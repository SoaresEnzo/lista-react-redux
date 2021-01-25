import { combineReducers } from 'redux';

const initialState = {
    itens: []
}

function reducerItens(state = initialState, action) {
    if (action.type === "ADICIONAR") {
        return { itens: [...state.itens, { ...action.value }] };
    } else {
        return state;
    }
}

function reducerTitulo(state = {titulo: "Aqui aparecerá o título da lista"}, action){
    if (action.type === "ALTERAR") {
        return { titulo: action.value };
    } else {
        return state;
    }
}

const reducers = combineReducers({reducerItens, reducerTitulo});

export default reducers;