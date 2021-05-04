type ActionFetchingType ={
    type: string;
}
  
const initial = {
    isFetching : false
}

 function fetchReducer(state= initial, action:ActionFetchingType){
     
      if (action.type === 'FETCHINGON') {
          let copy = { ...state };
            copy.isFetching = true;
            return copy;
        }else if(action.type === 'FETCHINGOFF'){
            let copy = { ...state };
            copy.isFetching = false;
            return copy;
        }
      return state
  }

  export default fetchReducer;