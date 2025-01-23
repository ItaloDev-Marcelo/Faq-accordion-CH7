import Accordion from '../accordion';
import startIcon from './icon/icon-star.svg';

export default function Card() {
    return (
        <div id="card-container">
          <div id="card--title">
             <img src={startIcon} alt='' />
             <h1>FAQs</h1>
          </div>
          <div id="card--content">
             <Accordion/>
          </div>
        </div>
    )
}