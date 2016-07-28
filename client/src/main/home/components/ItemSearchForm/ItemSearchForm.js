import React, { Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import { FormTextField, RaisedButton } from 'main/common/components';
export const ITEM_SEARCH_FORM = 'ITEM_SEARCH_FORM';

@reduxForm({
  form: ITEM_SEARCH_FORM,
  fields: ['search'],
})
export default class SearchForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      fields: {search},
      handleSubmit,
      } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <FormTextField field={search}
             type="text"
             labelText="Type"
            />

            <RaisedButton
              label="Search"
              type="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}
