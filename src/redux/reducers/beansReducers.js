import {
  FETCH_BEANS,
  FETCH_CATALOG_LIST,
  FETCH_DISTRIBUTOR_LIST,
  DISTRIBUTOR_REGISTER,
  UPDATE_DISTRIBUTOR,
  UPLOAD_DOCUMENT,
} from "../actionsType/beansType";

const initialState = {
  beansDetail: [],
  catalogList: [],
  distributor: [],
  updateDistributor: {},
};

const beansReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEANS:
      return {
        ...state,
        beansDetail: action.payload,
      };
    case FETCH_CATALOG_LIST:
      return {
        ...state,
        catalogList: action.payload,
      };
    case FETCH_DISTRIBUTOR_LIST:
      return {
        ...state,
        distributor: action.payload,
      };
    case DISTRIBUTOR_REGISTER:
      return {
        registerData: action.payload,
      };
    case UPDATE_DISTRIBUTOR:
      return {
        ...state,
        updateDistributor: action.payload,
      };
    case UPLOAD_DOCUMENT:
      return {
        registerDatauUpload: action.payload,
      };
    default:
      return state;
  }
};

export default beansReducer;
