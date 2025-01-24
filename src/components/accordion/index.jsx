
import { useRef, useState } from 'react';
import img1 from '../../assets/assets/images/icon-minus.svg';
import img2 from '../../assets/assets/images/icon-plus.svg';
import data from '../data/data.json'

export default function Accordion() {

  const [selected, setSelected] = useState(0)
  
   function hundleAccordion(index) {
     selected === index ? setSelected(null) : setSelected(index)
   }

    return (
        <section id='accordion-container'>
           {
            data.map((dataItem, index)=> {
              return (
                 <div key={index} className='accordion'>
                    <div className='row'><h2  className={selected === index ? 'purple active': 'purple'}>{dataItem.title}</h2>  <button onClick={() => hundleAccordion(index)}>{selected === index ? <img src={img1} alt=''/> : <img src={img2} alt=''/>}</button> </div>
                    <div className={selected === index ? 'accordion-content active': 'accordion-content'}>
                     <p className='content-txt'>{dataItem.body}</p>
                    </div>
                 </div>
              )
            })
           }
        </section>
    )
}