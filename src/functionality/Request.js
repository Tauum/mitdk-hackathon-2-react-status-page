import Axios from "./Axios";

export const StrapiGetRequest = async () => {
  var drifts_status = '';

    await Axios.get("http://localhost:1337/drifts-status")
    .then((res) => {
      drifts_status = res.data.service;
      return drifts_status;
    })
    .catch((err) => console.log(err));

    return drifts_status; 
}
