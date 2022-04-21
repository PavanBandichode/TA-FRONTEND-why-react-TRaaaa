function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container flex">
          <div className="flex-48 hero-content">
            <h1 className="hero-heading">
              We make beautiful websites for all people
            </h1>
            <div className="flex justify-start">
              <a className="btn btn-secondary" href="index.html">
                Start a project
              </a>
              <p className="enquiry">
                CALL US (+66) 010-020-0340 <br />
                for any enquiry
              </p>
            </div>
          </div>
          <figure className="flex-48">
            <iframe
              title="video"
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/AqcjdkPMPJA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
      </section>
    </>
  );
}

export default Hero;
