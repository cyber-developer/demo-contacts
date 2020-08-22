import { makeContactsApiCall } from "./api-helpers";

export const getContacts = async ({ countryId, page, query }) => {
  const res = await makeContactsApiCall({
    countryId: countryId,
    query: query,
    page: page
  });
  return parseContactsResponse(res);
};

export const getAllContacts = async () => {
  const res = await makeContactsApiCall({});
  return parseContactsResponse(res);
};

export const getContactsByCountryId = async countryId => {
  const res = await makeContactsApiCall({
    countryId: countryId
  });

  return parseContactsResponse(res);
};

const parseContactsResponse = data => {
  let ids = data.contacts_ids;
  let matched_separated = Object.entries(data.contacts)
    .filter(([k, v]) => {
      return ids.includes(parseInt(k));
    })
    .map(([k, v]) => v);

  return matched_separated;
};
