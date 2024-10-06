import book1 from './assets/images/1 1.png';
import book2 from './assets/images/2 1.png';
import book3 from './assets/images/3 1.png';
import book4 from './assets/images/4 1.png';
import book5 from './assets/images/5 1 (1).png';
import book6 from './assets/images/6 1.png';
import { Link } from 'react-router-dom';

function Books() {
    return(
        <div className="center-container">
          <div className="books-title-box">
            <h1 className="books-title">Wszystkie moje opowieści w jednym miejscu:</h1>
          </div>
          <div className="books-box">
            <div className="book-box">
              <Link to='/book1'><img src={book1}/></Link>
              <h3 className='book-title'>Lubiewo</h3>
            </div>
            <div className="book-box">
              <Link to='/book2'><img src={book4}/></Link>
              <h3 className='book-title'>Drwal</h3>
            </div>
            <div className="book-box">
              <Link to='/book3'><img src={book3}/></Link>
              <h3 className='book-title'>Fototapeta</h3>
            </div>
            <div className="book-box">
            <Link to='/book4'><img src={book6}/></Link>
              <h3 className='book-title'>Wiara. Autobiografia</h3>
            </div>
            <div className="book-box">
            <Link to='/book5'><img src={book2}/></Link>
              <h3 className='book-title'>Barbara Radziwiłłówna z Jaworzna-Szczakowej</h3>
            </div>
            <div className="book-box">
            <Link to='/book6'><img src={book5}/></Link>
              <h3 className='book-title'>Wymazane</h3>
            </div>
          </div>
          <hr className='books-line'/>
          <div className='books-texts'>
            <p className='books-text hiddenOnMobile'>
              1. O rocznikach siedemdziesiątych<br/><br/>
              3. Siedem opowiadań o AIDS<br/><br/>
              5. Zbrodniasz i dziewczyna<br/><br/>
              7. Fynf und cfancyś
            </p>
            <p className='books-text hiddenOnMobile'>
              2. Zgorszeni wstają od stołów<br/><br/>
              4. Morderca do towarzystwa<br/><br/>
              6. Lubiewo bez cenzury<br/><br/>
              8. Margot
            </p>
            <p className='books-text showedOnMobile'>
              1. O rocznikach siedemdziesiątych<br/><br/>
              2. Zgorszeni wstają od stołów<br/><br/>
              3. Siedem opowiadań o AIDS<br/><br/>
              4. Morderca do towarzystwa<br/><br/>
              5. Zbrodniasz i dziewczyna<br/><br/>
              6. Lubiewo bez cenzury<br/><br/>
              7. Fynf und cfancyś<br/><br/>
              8. Margot
            </p>
          </div>
        </div>
    )
}
export default Books