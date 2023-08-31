import {
  CAREER_REQUEST,
  CAREER_SUCCESS,
  CAREER_ERROR,
  CAREER_BYID_REQUEST,
  CAREER_BYID_SUCCESS,
  CAREER_BYID_ERROR,
  DELETE_SUCCESS,
  CAREER_LIKE_REQUEST,
  CAREER_LIKE_SUCCESS,
} from "../../constant/Types";
import { CareerState } from "./Modules/career";

const initialState: CareerState = {
  loader: false,
  likeLoader: false,
  career: [],
  careerById: {},
  totaPage: 1,
  metaData: {},
};

const careerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CAREER_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case CAREER_SUCCESS: {
      return Object.assign({}, state, {
        career: [...action.payload?.data],
        // career: [...state?.career, ...action.payload?.data],
        totalPage: action.payload.meta?.lastPage,
        metaData: action.payload.meta,
        loader: false,
      });
    }

    case CAREER_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }
    case CAREER_BYID_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case CAREER_BYID_SUCCESS: {
      return Object.assign({}, state, {
        careerById: action.payload,
        loader: false,
      });
    }
    case CAREER_LIKE_REQUEST: {
      return Object.assign({}, state, {
        likeLoader: true,
      });
    }

    case CAREER_LIKE_SUCCESS: {
      return Object.assign({}, state, {
        likeLoader: false,
      });
    }
    case DELETE_SUCCESS: {
      const temp = state?.career?.filter(
        (item: any) => item?.id !== action.payload
      );
      return Object.assign({}, state, {
        careerById: temp,
        loader: false,
      });
    }

    case CAREER_BYID_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }
    default:
      return state;
  }
};

export default careerReducer;
