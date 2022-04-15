import React from "react";
import CountUp from 'react-countup';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="container-fluid">
        <section className="history section">
          <div className="row">
            <div className="col-6 colLeft">
              <div className="colTitle">
                <h1>Locally Farmed Organic Vegetable Delivery</h1>
                <p>
                  20 years of growing organic vegetables and delivering
                  vegetable boxes from our 12-acre farm in Sussex.
                </p>
                <button className="btn">Get in touch</button>
              </div>
            </div>
            <div className="col-6 colRight  "></div>
          </div>
        </section>
      </div>
      {/* Services */}
      <section className="services container ">
        <div className="heading__brown">
          <p>Services</p>
          <h2>What We Do</h2>
          <div className="line" />
        </div>
        <div className="services__content ">
          <div className="row">
            <div className="col-4">
              <img className="img-fluid" src="https://res.cloudinary.com/trungquandev-com/image/upload/v1649952094/EC/about1_vtgpny.jpg" alt="sv1" />
              <p>
                We produce organic vegetable boxes that are affordable,
                seasonal, and as fresh and local as possible.
              </p>
            </div>
            <div className="col-4">
              <img className="img-fluid" src="https://res.cloudinary.com/trungquandev-com/image/upload/v1649952095/EC/about2_rn2ug7.jpg" alt="sv2" />
              <p>
                We have different sizes of boxes available for various
                appetites, from individuals to families.
              </p>
            </div>
            <div className="col-4">
              <img className="img-fluid" src="https://res.cloudinary.com/trungquandev-com/image/upload/v1649952094/EC/about3_cn1hm7.jpg" alt="sv3" />
              <p>
                We are flexible with the items in your boxes. You can change
                items in your order for something you would like.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Number */}
      <section className="number section ">
        <div className="number__content">
          <div className="number__text">
            <div className="heading__white">
              <p>Meet us better</p>
              <h2>Our Organic Farm in Numbers</h2>
              <div className="line_w" />
            </div>
            <div className="number__item">
              <span className="counter">
                <CountUp end={370} start={0} duration={15} delay={5}/>
              </span>
              <p>households per month</p>
            </div>
            <div className="number__item">
              <span className="counter">
              <CountUp end={23} start={0} duration={15} delay={5}/>
              </span>
              <p>experts working</p>
            </div>
            <div className="number__item">
              <span className="counter">
              <CountUp end={5} start={0} duration={15} delay={5}/>
              </span>
              <p>awards won</p>
            </div>
            <div className="number__item">
              <span className="counter">
              <CountUp end={100} start={0} duration={15} delay={5}/>
              </span>
              <p>satisfied customers</p>
            </div>
          </div>
        </div>
      </section>
      {/* Intro */}
      <section className="intro section container  ">
        <div className="intro__top">
          <div className="row">
            <div className="col-5">
              <img className="img-fluid " src="https://res.cloudinary.com/trungquandev-com/image/upload/v1649952094/EC/intro_deykvm.jpg" alt="" />
            </div>
            <div className="col-7">
              <div className="intro__content">
                <h2>Why You’ll Love Us</h2>
                <p>
                  There is never been a better time to eat organic. Organic
                  means working with nature. We’re coming into a fantastic time
                  for European food.
                </p>
                <ul>
                  <li>Delicious</li>
                  <li>Ethical</li>
                  <li>Sustainable</li>
                  <li>Seasonal</li>
                  <li>Free delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="intro__bottom p-5 text-center">
          <div className="row">
            <div className="col-4">
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>“Excellent Service”</p>
              <p>
                Their service is brilliant! I really hope some of them are now
                using your service.
              </p>
              <p>Fiona</p>
            </div>
            <div className="col-4">
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <p>“Love the flexibility”</p>
              <p>
                We are very happy with the box and we value that we can have the
                standard box.
              </p>
              <p>Joseph</p>
            </div>
            <div className="col-4">
              <div className="star">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star gray" />
              </div>
              <p>“Fantastic quality”</p>
              <p className>
                I’m really appreciating the quality and presentation.
              </p>
              <p>Michelle</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
