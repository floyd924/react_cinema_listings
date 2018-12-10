import React, {Component} from 'react';

class Film extends Component {
  render(){
    return(
      <div className="film">
        <h3><a href={this.props.url}>{this.props.name}</a></h3>
      </div>
    )
  }
}

export default Film;
