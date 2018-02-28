import React, { Component } from 'react';
import Search from './TaskSearchControl';
import Sort from './TaskSortControl';
class TaskControl extends Component {
    var 
  render() {
    return (
        <div className="row mt-15">
        {/* -- search -- */}
            <Search />
        {/* -- Sort  -- */}
            <Sort />
        </div>
    );
  }
} 

export default TaskControl;
