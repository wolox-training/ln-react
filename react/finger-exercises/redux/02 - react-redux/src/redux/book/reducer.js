import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return {
        ...state,
        books: action.payload,
        originalData: action.payload
      };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.concat(action.payload) // [...state, action.payload]
      };
    case actions.ADD_ITEM: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.map(obj => {
          if (obj.id === action.payload) {
            obj.quantity += 1;
          }
          return obj;
        })
      };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.filter(item => item.id !== action.payload)
      };
    case actions.SEARCH_ITEM: // TODO to implement the logic
      return {
        ...state,
        books: state.originalData.filter(item =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    default:
      return state;
  }
}

export default reducer;
