const TOGGLE_LIST = 'TOGGLE_LIST'
const MOVE_USER = 'MOVE_USER'

export  const  togglePage = () => {
    return {
        type: TOGGLE_LIST,
        value: ""

    }
}

export const moveUser = (userId) =>{
    return {
        type: MOVE_USER,
        userId

    }
}
