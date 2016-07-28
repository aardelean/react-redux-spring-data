import * as actionTypes from './actionTypes';
import {settings} from 'main/home/pages/GridPage/gridConfig';

const initialState = {
  items: [],
  settings: settings,
  query: {type: {}, size: settings.size, page: 0},
  isDetailDialogOpen: false,
  selectedItem: {}
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.result.items,
        query: action.result.query
      };

    case actionTypes.INCREASE_PAGE_SIZE:
      return {
        ...state,
        query: {
          ...state.query,
          size: action.result.pageSize
        }
      };

    case actionTypes.CHANGE_SEARCH_PARAM:
      return {
        ...state,
        query: {
          ...state.query,
          type: action.result.type
        }
      };

    case actionTypes.TOGGLE_ITEM_DETAIL_DIALOG:
      return {
        ...state,
        isDetailDialogOpen: action.result.isOpen,
        selectedItem: action.result.selectedItem
      };

    default:
      return state;
  }
}
