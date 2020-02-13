import React from 'react';
import { renderRoutes } from 'react-router-config';

export default class Root extends React.Component {

  render() {
    return (
      <>{renderRoutes(this.props.route.routes)}</>
    );
  }
}
