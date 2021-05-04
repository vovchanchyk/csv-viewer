type ActionErrorType ={
    type: string;
}
  
const initial = {
    isError : false
}

 function errorReducer(state= initial, action:ActionErrorType){

      if (action.type === 'ERROR') {
          let copy = { ...state };
            copy.isError = true;
            return copy;
        }else if(action.type === 'SUCCESS'){
            let copy = { ...state };
            copy.isError = false;
            return copy;
        }
      return state
  }

  export default errorReducer;