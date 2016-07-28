import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-async-connect';
import {initialize} from 'redux-form';
import {Paper} from 'main/common/components';
import {ItemList} from 'main/home/components';
import ItemSearchForm, {ITEM_SEARCH_FORM} from 'main/home/components/ItemSearchForm/ItemSearchForm';
import {loadItemsAction, toggleItemsDetailDialog, viewMoreItemsAction, changeSearchParamAction} from 'main/home/actions';

@asyncConnect([{
  promise: ({store}) => {
    const {dispatch} = store;
    const promises = [
      dispatch(loadItemsAction())
    ];
    return Promise.all(promises);
  }
}])
@connect(
  ({home}) => ({
    items: home.items,
    settings: home.settings,
    query: home.query,
    isDetailDialogOpen: home.isDetailDialogOpen,
    selectedItem: home.selectedItem,
  }), {initialize, loadItemsAction, toggleItemsDetailDialog, viewMoreItemsAction, changeSearchParamAction})
export default class GridPage extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    settings: PropTypes.object.isRequired,
    initialize: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    isDetailDialogOpen: PropTypes.bool.isRequired,
    selectedItem: PropTypes.object.isRequired,
    toggleItemsDetailDialog: PropTypes.func.isRequired,
    loadItemsAction: PropTypes.func.isRequired,
    viewMoreItemsAction: PropTypes.func.isRequired,
    changeSearchParamAction: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.initialize(ITEM_SEARCH_FORM, {type: this.props.query.type});
  }

  componentDidMount() {
    window.setInterval(() => {
      this.loadItems();
    }, 5000);
  }

  onSearchSubmit({search}) {
    this.props.changeSearchParamAction(search);
    this.loadItems({search});
  }

  loadItems({search = '', size = 0} = {}) {
    this.props.loadItemsAction({size: size || this.props.query.size, type: search || this.props.query.type});
  }

  render() {
    const css = require('./GridPage.scss');
    const {items, settings, selectedItem, isDetailDialogOpen, query} = this.props;
    return (
      <Paper className={css.GridPage}>
        <Helmet title="All Items" />
        <ItemSearchForm
          onSubmit={::this.onSearchSubmit}
        />
        <br/>
        <ItemList
          items={items}
          settings={settings}
          query={query}
          isDetailDialogOpen={isDetailDialogOpen}
          selectedItem={selectedItem}
          toggleItemsDetailDialog={this.props.toggleItemsDetailDialog}
          loadItemsAction={::this.loadItems}
          viewMoreItemsAction={this.props.viewMoreItemsAction}/>
      </Paper>
    );
  }
}
