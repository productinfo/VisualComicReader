import {
  SET_DIRECTORY,
  SET_FILES,
  SET_PAGE,
} from './actionTypes';

export * from './actions';

const initialState = {
  files: [],
  directory: '',
  page: 0,
  filename: '',
};

function reader(state = initialState, action) {
  switch (action.type) {
    case SET_DIRECTORY: {
      const { directory, filename } = action;
      return Object.assign({}, state, { directory, filename });
    }
    case SET_FILES: {
      const { files } = action;
      return Object.assign({}, state, { files, page: 0 });
    }
    case SET_PAGE: {
      const { page } = action;
      return Object.assign({}, state, { page });
    }
    default:
      return state;
  }
}

export default reader;
