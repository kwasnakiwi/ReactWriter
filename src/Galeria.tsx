import witkowski1 from './assets/images/Rectangle 7.png';
import witkowski2 from './assets/images/Rectangle 8.png';
import witkowski3 from './assets/images/Rectangle 9.png';
import witkowski4 from './assets/images/Rectangle 13.png';
import witkowski5 from './assets/images/Rectangle 14.png';
import witkowski6 from './assets/images/Rectangle 15.png';
import witkowski7 from './assets/images/Rectangle 18.png';
import witkowski8 from './assets/images/Rectangle 19.png';
import witkowski9 from './assets/images/Rectangle 20.png';
import witkowski10 from './assets/images/Rectangle 23.png';
import witkowski11 from './assets/images/Rectangle 24.png';
import witkowski12 from './assets/images/Rectangle 25.png';
import witkowski13 from './assets/images/Rectangle 27.png';
// import witkowski14 from './assets/images/Rectangle 27 (1).png';
// import witkowski15 from './assets/images/0870ed5d35f01c557c3d700826c12411.jpeg';
// import witkowski16 from './assets/images/131888a0dd265dd69dc7ba3def7d084e.jpeg';
// import witkowski17 from './assets/images/3e9a6f7ef8ecf03a7026436bba4758fb.jpeg';
// import witkowski18 from './assets/images/4b218c6979f33a6ba373455b04844b95.jpeg';
// import witkowski19 from './assets/images/7735270d6cef564247e0b614f44bcfd7.jpeg';
import witkowski20 from './assets/images/c6a2340b5881e6b9f61d9ca647f5dc1c.jpeg';
import witkowski21 from './assets/images/e874402c03fc987de58a4a8e08f967f6.jpeg';
// import witkowski22 from './assets/images/49ac193ee9b68c49a8f72738ebafe1e2.jpeg';
import arrow1 from './assets/images/Arrow 7.png';
import arrow2 from './assets/images/Arrow 8.png';
import Carousel from './Carousel';

function Galeria() {
	return(<>
		<div className="center-container">
      <h1 className='witkowski-img-title'>Z życia na czerwonym dywanie</h1>
			<div className='witkowski-imgs-box'>
        <div className="images-wrapper">
          <div className="witkowski-imgs">
            <img src={witkowski1}/>
            <img className='hom' src={witkowski2}/>
            <img className='hom' src={witkowski3}/>
          </div>
          <div className='witkowski-imgs'>
            <img src={witkowski13}/>
            <img src={witkowski21}/>
            <img src={witkowski20}/>
          </div>
        </div>
				<div className="arrows">
					<img src={arrow2} id='backBtn'/>
					<img src={arrow1} id='nextBtn'/>
				</div>
			</div>
			<hr className='witkowski-line'/>
      <h1 className='witkowski-img-title'>Chwile w centrum uwagi</h1>
			<div className='witkowski-imgs-box'>
        <div className='images-wrapper'>
          <div className="witkowski-imgs">
            <img src={witkowski4}/>
            <img className='hom' src={witkowski5}/>
            <img className='hom' src={witkowski6}/>
          </div>
          <div className='witkowski-imgs'>
              <img src={witkowski13}/>
              <img src={witkowski21}/>
              <img src={witkowski20}/>
          </div>
        </div>
				<div className="arrows">
        <img src={arrow2} id='backBtn'/>
        <img src={arrow1} id='nextBtn'/>
				</div>
			</div>
			<hr className='witkowski-line'/>
			<div className='witkowski-imgs-box'>
				<h1 className='witkowski-img-title'>W obiektywie sztuki</h1>
				<div className="witkowski-imgs">
					<img src={witkowski7}/>
					<img className='hom' src={witkowski8}/>
					<img className='hom' src={witkowski9}/>
				</div>
				<div className="arrows">
					<img src={arrow2}/>
					<img src={arrow1}/>
				</div>
			</div>
			<hr className='witkowski-line'/>
			<div className='witkowski-imgs-box'>
				<h1 className='witkowski-img-title'>Blisko czytelników</h1>
				<div className="witkowski-imgs">
					<img src={witkowski10}/>
					<img className='hom' src={witkowski11}/>
					<img className='hom' src={witkowski12}/>
				</div>
				<div className="arrows">
					<img src={arrow2}/>
					<img src={arrow1}/>
				</div>
			</div>
			<div className="images-wrapper">
          <div className="witkowski-imgs">
            <img src={witkowski1}/>
            <img className='hom' src={witkowski2}/>
            <img className='hom' src={witkowski3}/>
          </div>
          <div className='witkowski-imgs'>
            <img src={witkowski13}/>
            <img src={witkowski21}/>
            <img src={witkowski20}/>
          </div>
        </div>
		</div>
		<Carousel />
		</>
	)
}

export default Galeria