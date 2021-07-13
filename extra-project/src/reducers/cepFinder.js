import {
  REQUEST_VIACEP,
  REQUEST_VIACEP_SUCCESS,
  REQUEST_VIACEP_ERROR,
  REQUEST_APICEP,
  REQUEST_APICEP_SUCCESS,
  REQUEST_APICEP_ERROR,
  CLOSE_MODAL,
} from '../actions/cepFinder';

const INITIAL_STATE = {
  data: {},
  isLoading: false,
  error: '',
  modalVisible: false,
}

const cepFinder = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_VIACEP:
      return {
        ...state,
        isLoading: true,
        modalVisible: false,
      }
    case REQUEST_VIACEP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        modalVisible: true,
      }
    case REQUEST_VIACEP_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        modalVisible: true,
      }
      case REQUEST_APICEP:
        return {
          ...state,
          isLoading: true,
          modalVisible: false,
        }
      case REQUEST_APICEP_SUCCESS:
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          modalVisible: true,
        }
      case REQUEST_APICEP_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
          modalVisible: true,
        }
    case CLOSE_MODAL:
      return {
        ...state,
        modalVisible: false,
      }
    default:
      return state

  }
}

export default cepFinder;