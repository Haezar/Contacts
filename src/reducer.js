function  contactReducer(state, action){
    switch(action.type){

        case "TOGGLE_LIST":
            const newState = {...state};
            newState.isContactPage = !state.isContactPage;
            return newState;

        case "MOVE_USER":
            const newUserList = state.users.map(item => {
                if(item.id === action.userId){
                    item.isContact = !item.isContact;
                    return item;
                }
                else {
                    return item;
                }
            }
            )
            const newState1 = {...state, users: newUserList};
            return newState1;

        default: 
            return state;
    }
}

export default contactReducer;