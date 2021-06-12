import React, { Component } from 'react';

interface AsyncComponentState {
  component?: any;
}

const AsyncComponent = (importComponent: any) => {
  return class extends Component<Object, AsyncComponentState> {
    constructor(props: any) {
      super(props);
      this.state = {
        component: null,
      };
    }

    componentDidMount() {
      importComponent().then((cmp: any) => {
        this.setState({
          component: cmp.default,
        });
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default AsyncComponent;
