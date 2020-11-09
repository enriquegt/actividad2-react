import React from "react";
import Icon from '../icon/icon';
import {
    SearchSolid
} from "@graywolfai/react-heroicons";
import './styles.css'

class searchBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        
        return (
            <div className="container-search">
                <div className="icoBuscar"> <Icon source={< SearchSolid />}/> </div>
                <form className="form-search">
                <input placeholder=  "Buscar en Tweeter" />
                    <div className="buscar">
                    </div>
                </form>

            </div>
        );
    }
}

export default searchBar;