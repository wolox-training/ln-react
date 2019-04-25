/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Spinner from 'react-spinkit';

function withLoading(WrappedComponent) {
  return class extends Component {
    render() {
      const { isLoading, error } = this.props;
      if (isLoading) {
        return <Spinner name="wandering-cubes" />;
      }
      if (error && error !== '') {
        return (<p>Hubo un error al cargar los datos.<br />Motivo: {error}</p>);
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withLoading;
