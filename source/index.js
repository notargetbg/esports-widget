import React from 'react';
import style from './style.css';

class EsportsWidget extends React.Component {
  render() {
    const {team1Img, team2Img, title, coeff1, coeff2} = this.props;
    
    return (
      <div className="widget-wrapper">
        <div class="widget-header">
          <p>GESC: Indonesia Dota2</p>
          <img class="game-logo" src="https://seeklogo.com/images/D/dota-2-logo-A8CAC9B4C9-seeklogo.com.png" />
        </div> 

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

        <div id="trapezoid">
          <h4>Match Winner</h4>
        </div>       
        
      </div>
    );
  }
}
export default EsportsWidget;