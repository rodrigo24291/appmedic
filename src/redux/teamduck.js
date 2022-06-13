const dataInicial = {
    name: '',
    surname: '',
    description: '',
    comic: []

}

const REGISTRAR_USUARIO_EXITO = 'REGISTRAR_USUARIO_EXITO';
const BORRAR_COMIC_EXITO = 'BORRAR_COMIC_EXITO';
const AGREGAR_COMIC_EXITO = 'AGREGAR_COMIC_EXITO';


export default function Teamreducer(state = dataInicial, action) {
    switch (action.type) {
        case REGISTRAR_USUARIO_EXITO:
            return { ...state, ...action.payload }
        
        case AGREGAR_COMIC_EXITO:
                return { ...state, ...action.payload }    
        case BORRAR_COMIC_EXITO:
            return { ...state, comic:action.payload }
        default:
            return state
    }
}


export const registerUser = (data) => async (dispatch, getState) => {
    const { users } = getState().user

    try {
        dispatch({
            type: REGISTRAR_USUARIO_EXITO,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }

}

export const agregarComic = (data) => async (dispatch, getState) => {

    const { comic } = getState().user
     const agregar = comic.push(data);  
    try {
        dispatch({
            type: AGREGAR_COMIC_EXITO,
            payload: agregar
        })
    } catch (error) {
        console.log(error)
    }
}

export const borrarComic = (id) => async (dispatch, getState) => {

    const { comic } = getState().user
     const comics = comic.filter(data => data !== id);  
     console.log(comic)
    try {
        dispatch({
            type: BORRAR_COMIC_EXITO,
            payload: comics
        })
    } catch (error) {
        console.log(error)
    }
}