
export default function HeroSection() {
  
  return (
    <section className="hero-container">
      <div id="heroSection" className="hero--section content-container">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="unlock-text" data-aos="fade-right">Unlock Strategic Marketing with marketer Rasel</p>
            <h2 className="" data-aos="zoom-in" data-aos-duration="2000">Hi, I'm Rasel Hossain</h2>
            <h4 data-aos="zoom-in" data-aos-duration="2000">A Digital Marketing Strategist . Welcome to the hub of digital innovation!</h4>
            <p data-aos="zoom-in" data-aos-duration="2000">Ready to take your brand to new heights?  From engaging Facebook and Instagram ad campaigns that captivate your audience to optimizing YouTube channels for maximum visibility, and implementing data-driven Google marketing solutions - I'm here to elevate your brand's digital presence.</p>
          </div>
          <a className="btn btn-primary mt-5" href="#contact-section" data-aos="fade-right">Get In Touch</a>
        </div>
        <div className="hero--section--img" data-aos="zoom-in">
          <div className="hero-img-container">
            <img src="./img/profile-pic.png" alt="Hero Section" />
            <div className="hero-element-1" data-aos="fade-right" data-aos-duration="4500">
              <p className="hero-element-title">3</p><p className="hero-element-text">Years + experience</p>
            </div>
            <div className="hero-element-2">
              <img src="./img/social-media.png" alt="" />
            </div>
            <div className="hero-element-3" data-aos="fade-left" data-aos-duration="4500">
              <p className="hero-element-title">100+</p><p className="hero-element-text"><span>Projects </span> <span>Completed</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
