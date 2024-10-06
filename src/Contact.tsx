import contactimg from './assets/images/Rectangle 30.png';

function Contact() {
    return(
      <div className="center-container">
        <div className="web-top3">
          <div className="web-top3">
            <div className="web-top3-text">
              <h1 className="contact-title">Michał Witkowski</h1>
              <p className="under-title3">
                <b>Masz pytania?</b> Napisz do mnie – odpowiem najszybciej, jak mogę!
              </p>
              <div className="conlist">
                <ul className="contact-list">
                  <li>Example@xyz.com</li>
                </ul>
              </div>
            </div>
            <img src={contactimg}/>
          </div>
        </div>
      </div>
    )
}

export default Contact