import selfie from "../images/selfie2.jpg";

function Information() {
    return (
      <div className="container">
        <header className="header-img">
          <img src={selfie} className="img" />
        </header>
        <main className="container-text">
          <h1 className="name-text">Ovie Oddiri</h1>
          <h3 className="job-text">Frontend Developer</h3>
          <a href="" className="site-link">
            ovieoddiri.com
          </a>

          <button className="link-btn email">
            <i class="fa-solid fa-envelope"></i> Email
          </button>
          <button className="link-btn linkedIn">
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </button>

          <section className="about">
            <h1>About</h1>

            <p className="text">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </section>

          <section className="interests">
            <h1>Interests</h1>
            <p className="text">
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </section>
          <footer className="footer">
            <i class="fa-brands fa-square-twitter footer-icon"></i>
            <i class="fa-brands fa-square-facebook footer-icon"></i>
            <i class="fa-brands fa-instagram footer-icon"></i>
            <i class="fa-brands fa-square-github footer-icon"></i>
          </footer>
        </main>
      </div>
    );
}

export default Information