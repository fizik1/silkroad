import React from 'react';
import Image from 'react-image-webp';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },

};

function DemoSimple() {
  return (
    <SwipeableViews enableMouseEvents>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <div className='slide'>
          <div className='image'><Image webp={require('../img/swiper1.webp')}/></div>
          <p className='text1'>Referente al Fam Trip, ante todo daros las gracias por todas vuestras atenciones y amabilidades. Comentaros, que a Eugenio y a mí nos encantó el país, sus gentes, su amabilidad, simpatía y el trato tan agradable, los alojamientos me gustaron, creo que se puede ofertar Uzbekistan sin ningún lugar a dudas, eso sin hablar de la riqueza monumental de la disponéis, era como un cuento.</p>
          <div className='line'></div>
          <p className='text2'>Naturtrek, Puy Echavarri</p>
          <p className='text3'>Noviembre 2019</p>
        </div>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        <div className='slide'>
          <div className='image'><Image webp={require('../img/swiper2.webp')}/></div>
          <p className='text1'>De entrada agradecer el esfuerzo y la atención prestada por tu parte y todo el equipo de Silk Road Destination. Que ha hecho que hayamos disfrutado el viaje.</p>
          <div className='line'></div>
          <p className='text2'>Silvia Viajes Independents</p>
          <p className='text3'>Noviembre 2019</p>
        </div>
        </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        <div className='slide'>
          <div className='image'><Image webp={require('../img/swiper3.webp')}/></div>
          <p className='text1'>En general yo estoy muy contento con el viaje. Una vez más, muchas gracias por todo y espero verte algún día por Barcelona! Un abrazo!</p>
          <div className='line'></div>
          <p className='text2'>Pablo Lopez PANGEA</p>
          <p className='text3'>Noviembre 2019</p>
        </div>
      </div>
    </SwipeableViews>
  );
}

export default DemoSimple;
