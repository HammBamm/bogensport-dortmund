import React from 'react';
import MissingPage from './404.component';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(error) {
      return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <MissingPage />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;