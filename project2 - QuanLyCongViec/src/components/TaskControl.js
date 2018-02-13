import React, { Component } from 'react';
import Search from './TaskSearchControl';
import Sort from './TaskSortControl';
class TaskControl extends Component {
    var 
  render() {
    return (
        <div className="row mt-15">
        {/* -- search -- */}
            <Search onSearch={this.props.onSearch} />
        {/* -- Sort  -- */}
            <Sort  onSort={this.props.onSort}
                    sortBy={this.props.sortBy}
                    sortValue = {this.props.sortValue}
            />
        </div>
    );
  }
}

export default TaskControl;
