import {
  FETCH_BEANS,
  FETCH_CATALOG_LIST,
  FETCH_DISTRIBUTOR_LIST,
  DISTRIBUTOR_REGISTER,
  UPDATE_DISTRIBUTOR,
  UPLOAD_DOCUMENT,
} from "../actionsType/beansType";
import axios from "../../APIs/server";
import Swal from "sweetalert2";

const fetchBeansDetail = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: "/bean",
    });
    dispatch({
      type: FETCH_BEANS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchCatalogList = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: "/catalogs",
    });
    dispatch({
      type: FETCH_CATALOG_LIST,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchDistributorList = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: "/distributors",
    });
    dispatch({
      type: FETCH_DISTRIBUTOR_LIST,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setDistributorActions =
  (values, event, history) => async (dispatch) => {
    event.preventDefault();
    try {
      let insert = {
        distributor_Name: values.distributor_Name,
        city: values.city,
        state: values.state,
        country: values.country,
        phone: values.phone,
        email: values.email,
      };

      const register = await axios({
        method: "post",
        url: "/distributor",
        data: insert,
      });
      dispatch({
        type: DISTRIBUTOR_REGISTER,
        payload: register.data,
      });

      Swal.fire(
        "Good job!",
        "You distributor is saved! find in distributor menu",
        "success"
      );
    } catch (error) {
      console.log(error);
    }
  };

export const setUpdateDistributorAction =
  (values, id, history) => async (dispatch) => {
    try {
      let updates = {
        distributor_Name: values.distributor_Name,
        city: values.city,
        state: values.state,
        country: values.country,
        phone: values.phone,
        email: values.email,
      };
      const update = await axios({
        method: "put",
        url: "/distributor/" + id,
        data: updates,
      });
      dispatch({
        type: UPDATE_DISTRIBUTOR,
        payload: update.data,
      });
      history.push("/distributor");
    } catch (error) {
      console.log(error);
    }
  };

export const setUploadActions =
  (values, event, history) => async (dispatch) => {
    event.preventDefault();

    try {
      let insert = {
        title: values.title,
        document_file: values.document_file,
        author: values.author,
      };

      const upload = await axios({
        method: "post",
        url: "/document",
        data: insert,
      });
      dispatch({
        type: UPLOAD_DOCUMENT,
        payload: upload.data,
      });

      Swal.fire("Done!", "You document is uploaded!", "success");
    } catch (error) {
      console.log(error);
    }
  };

const beansAction = {
  fetchBeansDetail,
  fetchCatalogList,
  fetchDistributorList,
};

export default beansAction;
