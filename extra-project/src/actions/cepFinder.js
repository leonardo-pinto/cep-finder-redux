import { fetchViaCEP, fetchApiCEP } from '../services/cepAPIs';

export const REQUEST_VIACEP = 'REQUEST_VIACEP';
export const REQUEST_VIACEP_SUCCESS = 'REQUEST_VIACEP_SUCCESS';
export const REQUEST_VIACEP_ERROR = 'REQUEST_VIACEP_ERROR';
export const REQUEST_APICEP = 'REQUEST_APICEP';
export const REQUEST_APICEP_SUCCESS = 'REQUEST_APICEP_SUCCESS';
export const REQUEST_APICEP_ERROR = 'REQUEST_APICEP_ERROR';
export const CLOSE_MODAL = 'CLOSE_MODAL';

const requestViaCEP = () => ({
  type: REQUEST_VIACEP,
});

const requestViaCEPSuccess = (payload) => ({
  type: REQUEST_VIACEP_SUCCESS,
  payload,
});

const requestAPICEP = () => ({
  type: REQUEST_APICEP,
});

const requestAPICEPSuccess = (payload) => ({
  type: REQUEST_APICEP_SUCCESS,
  payload,
});

const requestAPICEPError = (payload) => ({
  type: REQUEST_APICEP_ERROR,
  payload,
});

export const fetchCEP = (cep) => {
  return async (dispatch) => {
    dispatch(requestViaCEP())
    const data = await fetchViaCEP(cep)
    if (!data.erro) {
      return dispatch(requestViaCEPSuccess(data))
    }
    dispatch(requestAPICEP())
    const retryData = await fetchApiCEP(cep)
    if (retryData.uf) {
      return dispatch(requestAPICEPSuccess(retryData))
    }
    return dispatch(requestAPICEPError(retryData))
  }
}

export const closeModal = () => ({
  type: CLOSE_MODAL,
})
  


