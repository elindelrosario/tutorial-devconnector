import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  NO_REPOS
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        error: null
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
        error: null
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
        error: null
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
        error: null
      };
    case NO_REPOS:
      return {
        ...state,
        repos: [],
        loading: false,
        error: null
      };
    default:
      return state;
  }
}
