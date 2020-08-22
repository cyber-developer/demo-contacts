import AvailableActions from "../available-actions";

export const reset = () => {
  return {
    type: AvailableActions.RESET
  };
};

export const setCountryID = countryId => {
  return {
    type: AvailableActions.SET_COUNTRY_ID,
    countryId
  };
};

export const setPage = page => {
  return {
    type: AvailableActions.SET_PAGE,
    page
  };
};

export const showOnlyEvenIDs = showOnlyEven => {
  return {
    type: AvailableActions.SET_SHOW_EVEN_IDS,
    showOnlyEven
  };
};

export const setQueryText = text => {
  return {
    type: AvailableActions.SET_QUERY_TEXT,
    query: text
  };
};
