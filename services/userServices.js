
import axios from "axios";

export const authenticate =  async ({username = '', pw = ''}) => {
  let resp = await axios.request({
    method: 'POST',
      url: '/authenticate',
      headers : {
        username,
        pw
      }
    })
  return resp.data;
}

export const updateFormService = async(obj) => {
  return await axios.request({
    method: 'POST',
      url: '/updateForm',
      headers : obj
    })
}

export const saveNewUser = async(obj) => {
  let resp = await axios.request({
    method: 'POST',
      url: '/saveForm',
      headers : obj
    })
  return resp.data;
}

export const getFormsService =  async () => {
  let resp = await axios.request({
    method: 'POST',
      url: '/forms',
      headers: {}
    })
  return resp.data;
}
