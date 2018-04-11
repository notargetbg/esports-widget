import React from 'react';

class EsportsWidget extends React.Component {
  render() {
    console.log(this.props);
    
    return (
      <div>
        <h2>Esports odds widget! Boom!</h2>
        <img src={this.props.team1Img} alt=""/>

        vs

        <img src={this.props.team2Img} alt=""/>
      </div>
    );
  }
}
export default EsportsWidget;