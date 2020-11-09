import React from 'react';
import Trends from '../trends/trends'
import SearchBar from '../search/searchBar'

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <SearchBar  />
            < Trends />
        </div>
    )
}

export default SidebarCol;