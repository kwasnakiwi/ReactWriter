import omnieimg from './assets/images/Bez 1.png';

function OMnie() {
  return (
    <div className="center-container">
      <div className="web-top2">
        <div className="web-top2-text">
          <h1 className="web-top2-title">Kim właściwie jestem?</h1>
          <p className="web-top2-paragraph">
            Jestem osobą homoseksualną, choć nie utożsamiam się z określeniem „gej”, które moim zdaniem zbyt często zamyka tożsamość w komercyjnych stereotypach. Od początku lat 90. zmagam się z depresją. Mieszkam w Warszawie i jestem osobą niewierzącą.<br/><br/>

            W latach 2014–2015 prowadziłem blog modowy Fashion Pathology, wcielając się w postać Miss Gizzi. Stylizacje i obecność na salonach były częścią artystycznego happeningu, który później wykorzystałem jako materiał do powieści o showbiznesie.<br/><br/>

            W latach 2018–2019 grałem rolę pisarza w serialu Barwy szczęścia.
          </p>
        </div>
        <img src={omnieimg}/>
      </div>
      <div className='lists-box'>
        <h2 className='lists-title'>Moje osiągnięcia</h2>
        <div className='lists'>
          <div className='list-content'>
            <h3 className='list-title'>Nominacje do Nagrody Literackiej „Nike”</h3>
            <ul className='web-list'>
              <li>Lubiewo (2006, finał nagrody)</li>
              <li>Fototapeta (2007)</li>
              <li>Drwal (2012)</li>
              <li>Wymazane (2018)</li>
              <li>Wiara. Autobiografia (2024, <b>finał nagrody</b>)</li>
            </ul>
          </div>
          <div className='list-content'>
            <h3 className='list-title'>Nominacje do Nagrody Paszportu „Polityki”</h3>
            <ul className='web-list'>
              <li>Lubiewo (2005)</li>
              <li>Fototapeta (2006)</li>
              <li><b>Laureat Paszportu</b> „Polityki”: Barbara Radziwiłłówna z Jaworzna-Szczakowej (2007)</li>
            </ul>
          </div>
          <div className='list-content'>
            <h3 className='list-title'>Finał Literackiej Nagrody Europy Środkowej „Angelus”</h3>
            <ul className='web-list'>
              <li>Drwal (2012)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='web-bottom2'>
        <h2 className='lists-title'>Od dziećiństwa do literatury</h2>
        <p className='web-bottom2-paragraph'>
        Pochodzę z rodziny inteligenckiej – mój ojciec był profesorem psychologii na Uniwersytecie Wrocławskim, a matka, również psycholog, poświęciła się domowi po urodzeniu dzieci. Urodziłem się jako wcześniak, a dorastałem na wrocławskim Biskupinie z dwoma młodszymi braćmi, Adamem i Andrzejem.<br/><br/>

        Już w dzieciństwie interesowałem się teatrem – uczęszczałem na zajęcia teatralne, brałem udział w konkursach recytatorskich i przeglądach piosenki. W wieku 14 lat postanowiłem uciec z domu i spędziłem czas za granicą, pracując m.in. w teatrze objazdowym w Genewie oraz doradzając wizerunkowo nieletnim gejowskim prostytutkom w Zurychu. Po powrocie do Polski w 1993 roku, kontynuowałem edukację we Wrocławiu, próbując swoich sił literacko. W 1994 opublikowałem pierwszy wiersz, a trzy lata później ukazała się moja debiutancka książka Zgorszeni wstają od stołów.<br/><br/>

        Po maturze studiowałem filologię polską na Uniwersytecie Wrocławskim, a po zdobyciu tytułu magistra rozpocząłem doktorat z krytyki feministycznej. Pracowałem również ze studentami dziennikarstwa, jednak zrezygnowałem z kariery naukowej, aby w pełni poświęcić się pisarstwu.
        </p>
      </div>
    </div>
  );
}

export default OMnie;
