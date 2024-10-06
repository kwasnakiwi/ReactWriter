import arrow from './../assets/images/Arrow 8.png';
import book from './../assets/images/3 1.png';
import { Link } from 'react-router-dom';

function Book3() {
    return(
      <div className="center-container">
        <div className="web-top5">
          <Link to='/books'><img src={arrow}/></Link>
          <h1 className='book-title2'>Lubiewo (wyd. “Korporacja Ha!art”)</h1>
        </div>
        <div className='book-content'>
          <div className='book-img-box'>
            <img src={book}/>
            <div className='under-book'>
              <h3>Zamów teraz</h3>
              <ul className='under-book-list'>
                <li>Taniaksiążka.pl</li>
                <li>Empik.com</li>
                <li>Bonito.pl</li>
              </ul>
            </div>
          </div>
        <div className='book-content-text'>
          <p>
            <b>"Lubiewo" Michała Witkowskiego</b> to powieść przygodowo-obyczajowa, składająca się z dwóch części: Księga ulicy oraz Ciotowski bicz. Akcja rozgrywa się w mieszkaniu dwóch ciot, Patrycji i Lukrecji, oraz na gejowskiej plaży nudystów w Lubiewie, obejmując okres od lat pięćdziesiątych XX wieku do 2004 roku.
            <br/><br/>
            Główne bohaterki, Paula i Michaśka, snują wyrafinowane opowieści, inspirowane libertyńskimi lekturami, takimi jak Niebezpieczne związki. Witkowski łączy w powieści elementy Wielkiego Atlasu Ciot Polskich z gejowską wizją polskiej przemiany ustrojowej, zrywając z medialnym wizerunkiem mniejszości seksualnych.
            <br/><br/>
            Lubiewo zyskało ogromne uznanie i stało się jednym z najważniejszych dzieł polskiej literatury po 1989 roku, zdobywając wiele prestiżowych nominacji, w tym do NIKE 2006. W latach 2005-2006 ukazało się pięć wydań powieści oraz audiobook. Książka została przetłumaczona na wiele języków, zdobywając międzynarodowe uznanie.
          </p>
        </div>
      </div>
    </div>
    )
}

export default Book3