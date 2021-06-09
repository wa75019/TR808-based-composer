import { store } from '../store'

export const MESURES8 = "MESURES8"
export const MESURES4 = "MESURES4"
export const MESURES2 = "MESURES2"

export const mesures8 = () => {
    store.dispatch({type : MESURES8})
}
export const mesures4 = () => {
    store.dispatch({type : MESURES4})
}
export const mesures2 = () => {
    store.dispatch({type : MESURES2})
}