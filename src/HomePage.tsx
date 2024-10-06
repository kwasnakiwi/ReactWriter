import witkowski from './assets/images/Witkowski.png';
import yt from './assets/images/ytIcon.png';
import fb from './assets/images/fbIcon.png';
import ig from './assets/images/igIcon.png';
import nike from './assets/images/[removal.ai]_82c381e8-b867-448f-93f1-57a6261c2ea3-aaa-1 1 (1).png';
import napis from './assets/images/Napiss 1 (1).png';
import book1 from './assets/images/1 1.png';
import book2 from './assets/images/4 1.png';
import book3 from './assets/images/3 1.png';
import zdjecie from './assets/images/Rectangle3.png';
import { Link } from 'react-router-dom';
function HomePage() {
    return(
        <section className="center-container">

    <div className="web-top-container">
      <div className="web-top">
        <div className="text-btns-icons">
          <div className="main-text">
            <h1 className="title-name">Michał Witkowski</h1>
            <p className="under-title-name">
              Polski pisarz urodzony w 1975 roku. Mieszka w Warszawie. Zajmuje się głównie powieścią artystyczną, niegatunkową oraz kryminałami.
            </p>
          </div>
          <div className="buttons">
            <Link to='/about_me' className="btn1">O mnie</Link>
            <Link to='/books' className="btn1">Książki</Link>
          </div>
          <div className="app-icons">
            <a href="https://www.youtube.com/@MichaWitkowskiSHOW"><img src={yt}/></a>
            <a href="https://www.facebook.com/witkowski.michal"><img src={fb}/></a>
            <a href="https://www.instagram.com/michalwitkowskiofficial/"><img src={ig}/></a>
          </div>
        </div>
        <div className="main-img-box">
         <img className="main-img" src={witkowski}/>
        </div>
      </div>
      <div className="text-under-top">
          <img className="witkowski-text-img" src={napis}/>
          <ul><li className="nike-text">Finalista:<img src={nike}/></li></ul>
      </div>
    </div>
      <div className="jego-historia-zyciowa">
        <h2 className="jego-historia-zyciowa-title">Od Marzeń do Nike: Moja Osobista Podróż</h2>
        <div className="jego-historia-zyciowa-paragraphs">
          <p className="history-text">
            Pisarski laureat Paszportu Polityki, Nagrody Literackiej Gdynia i Vivelo Book Awards, wielokrotnie nominowany do Nike, finalista Nagrody Miasta Łodzi im. Tuwima oraz Nagrody Wielkiego Kalibru. Laureat targów książki Vivelo Book Awards 2023. Tłumaczony na ponad 40 języków (ostatnio "Fyn fund cfancyś" ukazała się w USA i Indiach, a "Wymazane" w Chinach). Prawa do ekranizacji "Lubiewa" kupiła Akson Studio, a "Tanga" Canal+.
          </p>
          <p className="history-text">
            Michał Witkowski
            Autor następujących powieści i zbiorów opowiadań: Copyright (2001)
            Lubiewo (2005) Finalista NIKE
            Fototapeta (2006) nominacja do NIKE
            Barbara Radziwiłłówna z Jaworzna – Szczakowej  (2007) nominacja do NIKE
            Margot (2009)
            Drwal (2011) nominacja do NIKE
            Zbrodniarz i dziewczyna (2014)
            Fynf und cfancyś (2015)
            Wymazane (2017) nominacja do NIKE
            Tango (2022)
            Autobiografia tom 1 Wiara (2023) NIKE finalista
          </p>
        </div>
        <div className="text-arrow">
          <h3 className="text-over">Poznaj moją historię</h3>
          <hr className="arrow1"/>
          <hr className="arrow2"/>
          <hr className="arrow3"/>
        </div>
      </div>
      <div className="book-container">
        <img src={book1}  className="book book1"  alt="Okładka 1"/>
        <img src={book2} className="book book2"  alt="Okładka 2"/>
        <img src={book3} className="book book3"  alt="Okładka 3"/>
        <div className="text-container">
          <p className="sub-title">Tytuł Książki</p>
          <p className="right-side">Lorem ipsum dolor sit amet consectetur. Mollis est feugiat habitasse id imperdiet suspendisse ipsum dolor. Enim nisl faucibus sagittis sed egestas et ultricies in orci. Facilisi eu tellus tortor nisl dictum diam pellentesque arcu magna. Aliquam amet ullamcorper ullamcorper nisl consectetur lectus tortor faucibus. Enim nunc purus posuere amet dolor ut adipiscing. Vel varius cursus congue rhoncus arcu quis iaculis aliquam. Non consectetur quisque suspendisse erat tincidunt felis egestas rhoncus at. Ut amet donec vitae aliquam.</p>
        </div>
      </div>
      <div className="book-container2">
        <div className="book-bar">
            <img src={book1} className="book-thumbnail" alt="Book 1"/>
            <img src={book2} className="book-thumbnail" alt="Book 2"/>
        </div>
        <div className="main-book">
            <img src={book3} className="book-image" alt="Main Book"/>
            <div className="text-container2">
              <p className="sub-title2">Tytuł Książki</p>
              <p className="right-side2">Lorem ipsum dolor sit amet consectetur. Mollis est feugiat habitasse id imperdiet suspendisse ipsum dolor. Enim nisl faucibus sagittis sed egestas et ultricies in orci. Facilisi eu tellus tortor nisl dictum diam pellentesque arcu magna. Aliquam amet ullamcorper ullamcorper nisl consectetur lectus tortor faucibus. Enim nunc purus posuere amet dolor ut adipiscing. Vel varius cursus congue rhoncus arcu quis iaculis aliquam. Non consectetur quisque suspendisse erat tincidunt felis egestas rhoncus at. Ut amet donec vitae aliquam.</p>
            </div>
          </div>
       
    </div>
      <div className="wywiady">
        <h2 className="wywiady-title">Za Kulisy Literatury: Wywiady i Refleksje</h2>
        <div className="wywiady-imgs">
          <div className="img-n-arrow-text">
            <img src={zdjecie}/>
            <h3 className="text-under">Lorem ipsum</h3>
          </div>
          <div className="img-n-arrow-text">
            <img src={zdjecie}/>
            <h3 className="text-under">Lorem ipsum</h3>
          </div>
          <div className="img-n-arrow-text">
            <img src={zdjecie}/>
            <h3 className="text-under">Lorem ipsum</h3>
          </div>
          <div className="img-n-arrow-text">
            <img src={zdjecie}/>
            <h3 className="text-under">Lorem ipsum</h3>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h2>FAQ: Rozwiewanie Tajemnic</h2>
        <div className="faq">
          <button className="accordion accordion1">
            1.Lorem ipsum dolor sit amet consectetur.
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices magnis morbi sagittis neque varius ut. Adipiscing tortor sit ridiculus porttitor vitae fermentum.
            </p>
          </div>
          <hr className="line"/>
        </div>
        <div className="faq">
          <button className="accordion">
            2.Lorem ipsum dolor sit amet consectetur.
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices magnis morbi sagittis neque varius ut. Adipiscing tortor sit ridiculus porttitor vitae fermentum.
            </p>
          </div>
          <hr className="line"/>
        </div>
        <div className="faq">
          <button className="accordion">
            3.Lorem ipsum dolor sit amet consectetur.
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices magnis morbi sagittis neque varius ut. Adipiscing tortor sit ridiculus porttitor vitae fermentum.
            </p>
          </div>
          <hr className="line"/>
        </div>
        <div className="faq">
          <button className="accordion">
            4.Lorem ipsum dolor sit amet consectetur.
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="pannel">
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices magnis morbi sagittis neque varius ut. Adipiscing tortor sit ridiculus porttitor vitae fermentum.
            </p>
          </div>
          <hr className="line"/>
        </div>
        <div className="faq">
          <button className="accordion">
            5.Lorem ipsum dolor sit amet consectetur.
            <i className="fa-solid fa-chevron-down arrow"></i>
          </button>
          <div className="pannel">
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices magnis morbi sagittis neque varius ut. Adipiscing tortor sit ridiculus porttitor vitae fermentum.
            </p>
          </div>
          <hr className="line"/>
        </div>
      </div>

    </section>
    )
}
const acc = document.getElementsByClassName("accordion") as HTMLCollectionOf<HTMLElement>;
let i: number;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(this: HTMLElement) {
        const pannel = this.nextElementSibling as HTMLElement;
        const line = pannel.nextElementSibling as HTMLElement;
        const icon = this.querySelector('.fa-chevron-down') as HTMLElement;

        if (pannel.classList.contains("active")) {
            pannel.style.maxHeight = "0";
            pannel.style.paddingTop = "0";
            line.classList.remove("active");
            icon.style.transform = "rotate(0deg)";
            setTimeout(() => {
                pannel.classList.remove("active");
                pannel.style.display = "none";
            }, 500);
        } else {
            pannel.style.display = "block";
            pannel.style.maxHeight = "0";
            setTimeout(() => {
                pannel.classList.add("active");
                line.classList.add("active");
                pannel.style.maxHeight = pannel.scrollHeight + "px";
                pannel.style.paddingTop = "10px";
                icon.style.transform = "rotate(180deg)";
            }, 10);
        }
    });
}




export default HomePage