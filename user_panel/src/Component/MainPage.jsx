import React from 'react';

export default function MainPage() {
  return (
    <div>
      <header>
        <div className="col-lg-3">
          <div className="top-option">
            <div className="to-search search-switch">
              <i className="fa fa-search"></i>
            </div>
            <div className="to-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-youtube-play"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="canvas-open">
          <i className="fa fa-bars"></i>
        </div>
      </header>

      <section className="hero-section">
        <div className="hs-slider owl-carousel">
          {[1, 2].map((num, i) => (
            <div key={i} className="hs-item set-bg" style={{ backgroundImage: `url(img/hero/hero-${num}.jpg)` }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-6">
                    <div className="hi-text">
                      <span>Shape your body</span>
                      <h1>Be <strong>strong</strong> training hard</h1>
                      <a href="#" className="primary-btn">Get info</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="choseus-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Why choose us?</span>
                <h2>PUSH YOUR LIMITS FORWARD</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                icon: 'flaticon-034-stationary-bike',
                title: 'Modern equipment',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              },
              {
                icon: 'flaticon-033-juice',
                title: 'Healthy nutrition plan',
                desc: 'Quis ipsum suspendisse ultrices gravida.'
              },
              {
                icon: 'flaticon-002-dumbell',
                title: 'Professional training plan',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              },
              {
                icon: 'flaticon-014-heart-beat',
                title: 'Unique to your needs',
                desc: 'Quis ipsum suspendisse ultrices gravida.'
              },
            ].map((item, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="cs-item">
                  <span className={item.icon}></span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="classes-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our Classes</span>
                <h2>WHAT WE CAN OFFER</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[1, 2, 3, 4, 5].map((num, i) => (
              <div key={i} className={`col-lg-${i > 2 ? 6 : 4} col-md-6`}>
                <div className="class-item">
                  <div className="ci-pic">
                    <img src={`img/classes/class-${num}.jpg`} alt="" />
                  </div>
                  <div className="ci-text">
                    <span>{i % 2 === 0 ? 'STRENGTH' : 'Cardio'}</span>
                    <h5>{['Weightlifting', 'Indoor cycling', 'Kettlebell power', 'Indoor cycling', 'Boxing'][i]}</h5>
                    <a href="#"><i className="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="banner-section set-bg" style={{ backgroundImage: 'url(img/banner-bg.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bs-text">
                <h2>Register now to get more deals</h2>
                <div className="bt-tips">Where health, beauty and fitness meet.</div>
                <a href="#" className="primary-btn btn-normal">Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our Plan</span>
                <h2>Choose your pricing plan</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {[
              { title: 'Class drop-in', price: 39 },
              { title: '12 Month unlimited', price: 99 },
              { title: '6 Month unlimited', price: 59 },
            ].map((plan, index) => (
              <div className="col-lg-4 col-md-8" key={index}>
                <div className="ps-item">
                  <h3>{plan.title}</h3>
                  <div className="pi-price">
                    <h2>$ {plan.price}.0</h2>
                    <span>SINGLE CLASS</span>
                  </div>
                  <ul>
                    <li>Free riding</li>
                    <li>Unlimited equipment</li>
                    <li>Personal trainer</li>
                    <li>Weight losing classes</li>
                    <li>Month to month</li>
                    <li>No time restriction</li>
                  </ul>
                  <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                  <a href="#" className="thumb-icon"><i className="fa fa-picture-o"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gallery-section">
        <div className="gallery">
          <div className="grid-sizer"></div>
          {[1, 2].map((num, i) => (
            <div key={i} className={`gs-item ${i === 0 ? 'grid-wide' : ''} set-bg`} style={{ backgroundImage: `url(img/gallery/gallery-${num}.jpg)` }}>
              <a href={`img/gallery/gallery-${num}.jpg`} className="thumb-icon image-popup">
                <i className="fa fa-picture-o"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
