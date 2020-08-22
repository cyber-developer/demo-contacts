import axios from "axios";

const CONTACTS_API_URL = process.env.REACT_APP_API_URL;
const AUTHORIZATION_HEADER_TOKEN = `Bearer ${process.env.REACT_APP_TOKEN}`;
const COMPANY_ID = 171;

export const makeContactsApiCall = async ({ countryId, query, page }) => {
  let params = {
    query: query ? query : "",
    countryId: countryId ? countryId : 0,
    page: page ? page : 1
  };

  return makeApiCall(CONTACTS_API_URL, params);
};

export const makeApiCall = async (url, params) => {
  let all_params = params ? { ...params } : {};

  return handleResponse(
    await axios.get(url, {
      params: {
        companyId: COMPANY_ID,
        ...all_params
      },
      headers: {
        Authorization: AUTHORIZATION_HEADER_TOKEN
      }
    })
  );
};

export const handleResponse = response => {
  // TODO: here handle if the internet goes offline and handle and show the 'network erorr' to user.

  if (response.status === 200) {
    return response.data;
  } else {
    console.log("API connection failed.", response.status, response);
  }
};
