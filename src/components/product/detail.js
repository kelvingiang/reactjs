import React, { Component } from 'react';
import Data from './data.json';



class Detail extends Component {

    format_curency = (price) => {
        return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }


    render() {
        var idp = this.props.match.params.id;
        return (
            <div>
                {Data.map((val, key) => {
                    if (val.id === idp) {
                        return <div key={key}><h2> name : {val.name}</h2><h3> price : {this.format_curency(val.price)}</h3> </div>
                    }
                    return "";
                })
                }

            </div>
        );
    }
}

export default Detail;