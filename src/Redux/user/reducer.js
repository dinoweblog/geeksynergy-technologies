import { LOGIN_LOADING, LOGIN_SUCCESS } from "./action";

const initState = {
  loading: false,
  user: null,
};

const userReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };

    case LOGIN_SUCCESS:
      return {
        ...store,
        loading: false,
        user: payload ? { ...payload } : null,
      };

    default:
      return store;
  }
};

export { userReducer };
