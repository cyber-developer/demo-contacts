import AvailableActions from "../available-actions";

const initialState = {
  countryId: 0,
  query: "",
  page: 1,
  showOnlyEven: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AvailableActions.RESET:
      return {
        ...initialState
      };
    case AvailableActions.SET_COUNTRY_ID:
      return {
        ...state,
        countryId: action.countryId
      };
    case AvailableActions.SET_PAGE:
      return {
        ...state,
        page: action.page
      };
    case AvailableActions.SET_SHOW_EVEN_IDS:
      return {
        ...state,
        showOnlyEven: action.showOnlyEven
      };
    case AvailableActions.SET_QUERY_TEXT:
      return {
        ...state,
        query: action.query
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
