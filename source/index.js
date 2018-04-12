import React from 'react';
import style from './style.css';

class EsportsWidget extends React.Component {
  render() {
    const {team1Img, team2Img, title, coeff1, coeff2} = this.props;
    
    return (
      <div className="widget-wrapper">
         <h2>{title}</h2>

        <div className="hexagon-row">
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <div className="hexagon-inner">
                <img className="team-image" src={team1Img} alt=""/>
              </div>
            </div>
          </div>
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <div className="hexagon-inner">
                <img className="team-image" src={team2Img} alt=""/>     
              </div>     
            </div>
          </div>
        </div>

        <div className="hexagon-row">
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <div className="hexagon-inner">
                <span>{coeff1}</span>
              </div>
            </div>
          </div>
          <span className="vs">
            vs
          </span>
          <div className="hexagon-wrapper">
            <div className="hexagon">
              <div className="hexagon-inner">
                <span>{coeff2}</span>
              </div>     
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default EsportsWidget;