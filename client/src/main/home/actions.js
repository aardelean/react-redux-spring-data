import * as actionTypes from './actionTypes';
import {settings} from 'main/home/pages/GridPage/gridConfig';

export function loadItemsAction({search = '', size = 10, page = 0} = {}) {
  const url = `${settings.baseApiUrl}?size=${size}&page=${page}`;
  return {
    types: [
      actionTypes.LOAD_ITEMS,
      actionTypes.LOAD_ITEMS_SUCCESS,
      actionTypes.LOAD_ITEMS_FAIL
    ],
    promise: client => client.get(url).then(response => {
      const items = response._embedded.contacts.map(item => {
        return {
          ...item,
          contentJson: item
        };
      });

      return {
        items,
        query: {
          search,
          size,
          page
        }
      };
    })
  };
}

export function toggleItemsDetailDialog(isOpen, selectedItem = {}) {
  return {
    type: actionTypes.TOGGLE_ITEM_DETAIL_DIALOG,
    result: {
      isOpen,
      selectedItem: {
        ...selectedItem,
        prettyContent: printJson(selectedItem.contentJson)
      }
    }
  };
}

export function viewMoreItemsAction(pageSize) {
  return {
    type: actionTypes.INCREASE_PAGE_SIZE,
    result: {
      pageSize
    }
  };
}

export function changeSearchParamAction(search) {
  return {
    type: actionTypes.CHANGE_SEARCH_PARAM,
    result: {
      search
    }
  };
}

export function tryParseJson(json) {
  try {
    return JSON.parse(json);
  } catch (ex) {
    return null;
  }
}

function printJson(json) {
  return JSON.stringify(json, null, 2);
}
