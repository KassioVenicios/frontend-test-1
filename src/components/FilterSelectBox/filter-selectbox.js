import React from 'react';
import { RestaurantsContext } from '../../utils/restaurants-context';
import './filter-selectbox.style.css';

class FilterSelectBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      closed: true,
    };
    this.state.dropDownStyle = {
      height: props.datasource.length * 48,
      overflowY: props.datasource.length > 8 ? 'scroll' : undefined,
      bottom: props.datasource.length > 8 ? 8 * 48 * (-1) : props.datasource.length * 48 * (-1),
      maxHeight: props.datasource.length > 8 ? 8 * 48 : undefined,
    };
  }

  closeOpen() {
    this.setState({
      ...this.state,
      closed: ! this.state.closed,
    });
  }

  setSearchObj(option) {
    let searchObj = {};
    const prop = this.props.placeholder.toLowerCase();
    searchObj[prop] = option.value;
    return searchObj;
  }

  render() {
    const { width, placeholder, datasource } = this.props;
    return (
      <div className='filter select-box' style={{width}}>
        <label
          className='placeholder'
          onClick={() => this.closeOpen()}>
            {placeholder}
        </label>
        {
          !this.state.closed ?
          <div className='dropdown' style={this.state.dropDownStyle}>
            <RestaurantsContext.Consumer>
            { consume => (
              datasource.map(option => (
                <div
                  key={option.value}
                  value={option.value}
                  className='dropdown-item'
                  onClick={() => consume.getRestaurants(this.setSearchObj(option))}>
                    <input type='checkbox'></input>
                    {option.text}
                </div>
              ))
            )}
            </RestaurantsContext.Consumer>
          </div> : null
        }
      </div>
    );
  }
}

export default FilterSelectBox;