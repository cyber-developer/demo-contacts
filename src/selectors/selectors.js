import { createSelector } from "reselect";

export const queryFilterSelector = state => state.query;
export const countryIdFilterSelector = state => state.countryId;
export const pageFilterSelector = state => state.page;
export const onlyEvenFilterSelector = state => state.showOnlyEven;

export const contactsSelector = contactsArray => contactsArray;

export const EvenIDsContactsSelector = createSelector(contactsSelector, items =>
  items.filter(item => parseInt(item.id) % 2 === 0)
);
