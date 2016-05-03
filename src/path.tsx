import * as React from 'react';
import { Input } from 'react-bootstrap';

export default class Path extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return <Input type='text' value={this.props.children} readOnly />;
  }
}


