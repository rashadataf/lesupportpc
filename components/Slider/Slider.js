import React, { Component } from "react";
import classes from "./Slider.module.css";

class MobileSlider extends Component {
  componentDidMount() {
    var slides = document.querySelectorAll(`.${classes.MobileSlide}`);
    let first = slides.item(0);
    let last = slides.item(slides.length - 1);
    first.parentNode.insertBefore(last, first);
    if (this.props.autoPlay) {
      setInterval(MobileSlider.mobileNext, 3500);
    }
  }

  static mobileNext = () => {
    let slides = document.getElementsByClassName(classes.MobileSlide);
    var activeSlide = document.getElementsByClassName(classes.active)[0];
    let last = slides.item(slides.length - 1);
    let first = slides.item(0);
    last.parentNode.insertBefore(first, last.nextSibling);
    activeSlide.classList.remove(classes.active);
    activeSlide.nextElementSibling.classList.add(classes.active);
  };

  static mobilePrev = () => {
    let slides = document.getElementsByClassName(classes.MobileSlide);
    var activeSlide = document.getElementsByClassName(classes.active)[0];
    let last = slides.item(slides.length - 1);
    let first = slides.item(0);
    first.parentElement.insertBefore(last, first);
    activeSlide.classList.remove(classes.active);
    activeSlide.previousElementSibling.classList.add(classes.active);
  };

  render() {
    return (
      <div className={classes.MobileSlider}>
        <div className={`${classes.MobileSlide} ${classes.active}`}>
          <div>
            <p>
              Great people, great service. I have been surprised at the level of
              care all of your staff put into my account. Thank you for being
              there for me.
            </p>
            <h3>William Franklin</h3>
            <button>East Lansing, MI</button>
          </div>
        </div>
        <div className={classes.MobileSlide}>
          <div>
            <p>
              What a great organization you are!!! That just has to be the
              fastest support reply I have ever experienced. I am a happy
              customer. Thank you so much.
            </p>
            <h3>Michelle Geller</h3>
            <button>Dallas, TX</button>
          </div>
        </div>
        <div className={classes.MobileSlide}>
          <div>
            <p>
              Great people, great service. I have been surprised at the level of
              care all of your staff put into my account. Thank you for being
              there for me.
            </p>
            <h3>William Franklin</h3>
            <button>East Lansing, MI</button>
          </div>
        </div>
        <div className={classes.MobileSlide}>
          <div>
            <p>
              What a great organization you are!!! That just has to be the
              fastest support reply I have ever experienced. I am a happy
              customer. Thank you so much.
            </p>
            <h3>Michelle Geller</h3>
            <button>Dallas, TX</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileSlider;
