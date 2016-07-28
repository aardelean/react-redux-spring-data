import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {AppContainer} from 'main/common/components';
import {NotFoundPage} from 'main/common/pages';
import {GridPage} from 'main/home/pages';

export function getRoutes() {
  return (
    <Route path="/" component={AppContainer}>
      <IndexRoute component={NotFoundPage} />

      <Route path="/view" component={GridPage} />
      <Route path="*" component={NotFoundPage} status={404} />
    </Route>
  );
}
