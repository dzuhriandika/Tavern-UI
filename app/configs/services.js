import { post, put, get, remove } from './networking';

// end point
export const endpoint = {
  login: async params => post(`api/users/v1/login/admin`, params),
  listMenu: async () => get(`api/menu/v1/count`),
  getMenu: async () => get(`api/menu/v1`),
  getCategory: async params => get(`api/menu/v1?category=${params}`),
  postMenu: async params => post(`api/menu/v1`, params),
  accept_topup: async params => post(`api/topup/v1/accept?topup_id=${params}`),
  cancel_topup: async params => remove(`api/topup/v1/reject?topup_id=${params}`),
  topup: async params => get(`api/topup/v1`, params),
  addVoucher: async params => post(`api/voucher/v1`, params),
  forgotPass: async params => post(`api/users/v1/resetPassword`, params),
  voucher: async () => get(`api/voucher/v1`),
  // eslint-disable-next-line no-undef
  updateVoucher: async (voucherId, params) => put(`api/voucher/v1/${voucherId} `, params),
  editProfil: async (params, body) => put(`api/users/v1/admin/${params}`, body),
  getProfile: async () => get(`api/users/v1`),
  deleteMenu: async params => remove(`api/menu/v1/${params}`),
  getId: async params => get(`api/menu/v1/${params}`),
  editMenu: async (params, payload) => put(`api/menu/v1/${params}`, payload)
};

export default { endpoint };
