import React, { useState, useEffect } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  countryIdFilterSelector,
  queryFilterSelector,
  pageFilterSelector,
  onlyEvenFilterSelector,
  EvenIDsContactsSelector
} from "./selectors/selectors";

// styles
import "./styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// components
import ModalA from "./components/ModalA";
import ModalB from "./components/ModalB";
import { setCountryID, setPage } from "./redux-store/actions/actions";
import { getContacts } from "./handlers/api";

// functions
function App() {
  const state = useSelector(_ => _.filtersReducer);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, [state.countryId, state.showOnlyEven, state.query]);

  useEffect(() => {
    fetchContacts(true);
  }, [state.page]);

  const registerScroll = () => {
    let modelWrapper = document.querySelector(".modal-wrapper");
    modelWrapper.addEventListener("scroll", onScroll);
    return () => modelWrapper.removeEventListener("scroll", onScroll);
  };

  const onScroll = e => {
    let elm = e.target;
    if (elm.scrollHeight - elm.scrollTop === elm.clientHeight)
      dispatch(setPage(++state.page));
  };

  const fetchContacts = async (newPage = false) => {
    if (!newPage) {
      setIsLoading(true);
      setContacts([]);
    }

    let res = await getContacts({
      countryId: countryIdFilterSelector(state),
      query: queryFilterSelector(state),
      page: pageFilterSelector(state)
    });

    let _contacts = res;
    if (onlyEvenFilterSelector(state) === true) {
      _contacts = EvenIDsContactsSelector(_contacts);
    }

    setIsLoading(false);
    setContacts(!newPage ? _contacts : [...contacts, ..._contacts]);
  };

  const btnClickContacts = id => {
    dispatch(setCountryID(id));
  };

  return (
    <div className="main-app">
      <BrowserRouter>
        <div className="links-container">
          <Link
            to="/contacts"
            onClick={() => {
              btnClickContacts(0);
            }}
            className="btn btn-a"
          >
            Button A
          </Link>
          <Link
            to="/contacts/226"
            onClick={() => {
              btnClickContacts(226);
            }}
            className="btn btn-b"
          >
            Button B
          </Link>
        </div>
        <div className="tabs">
          <Switch>
            <Route exact path="/contacts">
              <ModalA
                isLoading={isLoading}
                contacts={contacts}
                bodyTitle={"All Contacts"}
                registerScroll={registerScroll}
              />
            </Route>
            <Route path="/contacts/:countryid">
              <ModalB
                isLoading={isLoading}
                contacts={contacts}
                bodyTitle={"U.S. Contacts"}
                registerScroll={registerScroll}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

//NOTE: it can still be optimized in many ways but i believe if have done
// enough to give you idea of my coding style
