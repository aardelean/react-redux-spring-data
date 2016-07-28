import React, {Component, PropTypes} from 'react';
import jsel from 'jsel';
import {Dialog, FlatButton, CodeEditor, RaisedButton} from 'main/common/components';

export default class ItemList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    settings: PropTypes.object.isRequired,
    query: PropTypes.object.isRequired,
    isDetailDialogOpen: PropTypes.bool.isRequired,
    selectedItem: PropTypes.object.isRequired,
    viewMoreItemsAction: PropTypes.func.isRequired,
    loadItemsAction: PropTypes.func.isRequired,
    toggleItemsDetailDialog: PropTypes.func
  };
  static defaultProps = {

  }

  onRowClick(item) {
    return () => {
      const {toggleItemsDetailDialog} = this.props;
      toggleItemsDetailDialog(true, item);
    };
  }

  onViewMoreItemsClick() {
    const {query, viewMoreItemsAction, loadItemsAction} = this.props;
    const newSize = query.size * 2;
    viewMoreItemsAction(newSize);
    loadItemsAction({size: newSize});
  }

  renderItemRow(item, index) {
    const css = require('./ItemList.scss');
    const {fields} = this.props.settings;
    const dom = jsel(item);
    const resultList = fields.map(field => {
      const transform = field.transform || (value => value);
      return (
        <span className={css.label}>
        {transform(dom.select(`@${field.path}`))}
      </span>
      );
    });
    return (
      <div key={index} className={css.ItemRow} onTouchTap={::this.onRowClick(item)}>
        {resultList}
      </div>
    );
  }

  render() {
    const css = require('./ItemList.scss');
    const {items, isDetailDialogOpen, toggleItemsDetailDialog, selectedItem} = this.props;
    const {fields} = this.props.settings;
    const headerList = fields.map(field => {
      return (
        <span className={css.label}>
        {field.header}
      </span>
      );
    });
    return (
      <div className={css.ItemList}>
        <div>
          <div className={css.ItemHeader}>
            {headerList}
          </div>
          {items.map((item, index) => ::this.renderItemRow(item, index))}
        </div>
        <RaisedButton
          label="Load More"
          secondary
          fullWidth
          onTouchTap={::this.onViewMoreItemsClick}
        />

         <Dialog
          title="Item Detail"
          actions={[<FlatButton
            label="Close"
            secondary
            onTouchTap={() => toggleItemsDetailDialog(false)}
          />]}
          modal
          open={isDetailDialogOpen}>
            <CodeEditor
              readOnly
              theme=""
              height={500}
              mode={{
                name: 'javascript',
                json: true
              }}
              value={selectedItem.prettyContent} />
        </Dialog>
      </div>
    );
  }
}
