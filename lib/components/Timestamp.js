import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.Component {
  timeDisplay = timestamp => timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


  shouldComponentUpdate(nextProps) {
    return (
      this.timeDisplay(this.props.timestamp) !==
      this.timeDisplay(nextProps.timestamp)
    );
  }
  componentWillUpdate() {
    console.log('Update Timestamp');
  }
  render() {
    return (
      <div>{this.timeDisplay(this.props.timestamp)}</div>
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(Timestamp);
