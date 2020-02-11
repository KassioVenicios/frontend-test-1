import React from 'react';
import './filter-open-now.style.css';

class FilterOpenNow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  check() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div className='filter open-now' onClick={() => this.check()}>
        <span className='circle-bordered'>
          <span className={this.state.checked ? 'circle checked' : ''}></span>
        </span>
        <span className='label'>Open Now</span>
      </div>
    );
  }
}

export default FilterOpenNow;