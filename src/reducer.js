const initialState = {
    isContactPage: true,
    users: [
      {
        id: 1,
        isContact: true,
        firstName: 'First1',
        lastName: "Last1",
        status: 'ready',
        country: "Belarus",
        years: 20,
        job: 'designer',
        hobby:"photog",
        nativeLanguage: 'Russian',
        studiedLanguages: ['Russian', 'English'],
        intro: 'photography'
      },
      {
        id: 2,
        isContact: true,
        firstName: 'First2',
        lastName: "Last2",
        status: 'busy',
        country: "Belarus",
        years: 20,
        job: 'designer',
        hobby:"photog",
        nativeLanguage: 'Russian',
        studiedLanguages: ['Russian', 'English'],
        intro: 'photography'
      },
      {
        id: 3,
        isContact: false,
        firstName: 'First3',
        lastName: "Last3",
        status: 'ready',
        country: "Belarus",
        years: 20,
        job: 'designer',
        hobby:"photog",
        nativeLanguage: 'Russian',
        studiedLanguages: ['Russian', 'English'],
        intro: 'photography'
      },
      {
        id: 4,
        isContact: false,
        firstName: 'First4',
        lastName: "Last4",
        status: 'ready',
        country: "Belarus",
        years: 20,
        job: 'designer',
        hobby:"photog",
        nativeLanguage: 'Russian',
        studiedLanguages: ['Russian', 'English'],
        intro: 'photography'
      },
  
    ]
  }
function  contactReducer(state=initialState, action){
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