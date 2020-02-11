import React from 'react';
import { FilterContext } from '../../utils/filter-context';
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

  setSearchObj(filterConsume, option) {
    const prop = this.props.placeholder.toLowerCase();
    filterConsume[prop] = option.value;
    return filterConsume;
  }

  render() {
    const { width, placeholder, datasource } = this.props;
    return (
      <div style={{width}}
        className='filter select-box'
        onMouseEnter={() => this.closeOpen()}
        onMouseLeave={() => this.closeOpen()}>
        <label className='placeholder'>
          {placeholder}
        </label>
        {
          !this.state.closed ?
          <div className='dropdown' style={this.state.dropDownStyle}>
            {datasource.map(option => (
              <FilterContext.Consumer>
                { filterCtx => (
                  <div
                    key={option.value}
                    value={option.value}
                    className='dropdown-item'
                    onClick={() => {
                      filterCtx.changeFilters(
                        this.setSearchObj(filterCtx.filters, option)
                      );
                    }}>
                      <input type='checkbox'></input>
                      {option.text}
                  </div>
                )}
              </FilterContext.Consumer>
            ))}
          </div> : null
        }
      </div>
    );
  }
}

export default FilterSelectBox;