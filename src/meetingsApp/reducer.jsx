export const types = {
  SET_MODAL_MODE: "SET_MODAL_MODE",
  CREATE_MEETING_REQUEST: "CREATE_MEETING_REQUEST",
  CREATE_MEETING_SUCCESS: "CREATE_MEETING_SUCCESS",
  CREATE_MEETING_FAILURE: "CREATE_MEETING_FAILURE",
  GET_ALL_MEETINGS_REQUEST: "GET_ALL_MEETINGS_REQUEST",
  GET_ALL_MEETINGS_SUCCESS: "GET_ALL_MEETINGS_SUCCESS",
  GET_ALL_MEETINGS_FAILURE: "GET_ALL_MEETINGS_FAILURE",
};

const initialState = {
  isLoading: false,
  modalMode: null,
  list: [],
};

export default function meetings(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_MODAL_MODE: {
      return {
        ...state,
        modalMode: action.modalMode,
      };
    }
    case types.CREATE_MEETING_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.CREATE_MEETING_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.CREATE_MEETING_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.GET_ALL_MEETINGS_REQUEST:
      return {
        ...state,
      };
    case types.GET_ALL_MEETINGS_SUCCESS:
      return {
        ...state,
      };
    case types.GET_ALL_MEETINGS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export const actions = {
  setModalMode: (modalMode) => ({ type: types.SET_MODAL_MODE, modalMode }),
  getAllMeetingsRequest: () => ({ type: types.GET_ALL_MEETINGS_REQUEST }),
};

export const selectors = {
  getModalMode: ({ meetings }) => meetings.modalMode,
  getMeetings: ({ meetings }) => meetings.list,
};
