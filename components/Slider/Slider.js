import React, { Component } from "react";
import { withRouter } from "next/router";

import en from "../../locales/en";
import fr from "../../locales/fr";
import classes from "./Slider.module.css";

class MobileSlider extends Component {
  state = {
    handler: null,
  };
  componentDidMount() {
    var slides = document.querySelectorAll(`.${classes.MobileSlide}`);
    let first = slides.item(0);
    let last = slides.item(slides.length - 1);
    first.parentNode.insertBefore(last, first);
    if (this.props.autoPlay) {
      let handler = setInterval(MobileSlider.mobileNext, 3500);
      this.setState({ handler: handler });
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.handler);
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
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide1.content
                : fr.happyCustomers.slide1.content}
            </p>
            <h3>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide1.by
                : fr.happyCustomers.slide1.by}
            </h3>
            <button>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide1.button
                : fr.happyCustomers.slide1.button}
            </button>
          </div>
        </div>
        <div className={classes.MobileSlide}>
          <div>
            <p>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide2.content
                : fr.happyCustomers.slide2.content}
            </p>
            <h3>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide2.by
                : fr.happyCustomers.slide2.by}
            </h3>
            <button>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide2.button
                : fr.happyCustomers.slide2.button}
            </button>
          </div>
        </div>
        <div className={classes.MobileSlide}>
          <div>
            <p>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide1.content
                : fr.happyCustomers.slide1.content}
            </p>
            <h3>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide1.by
                : fr.happyCustomers.slide1.by}
            </h3>
            <button>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide1.button
                : fr.happyCustomers.slide1.button}
            </button>
          </div>
        </div>
        <div className={classes.MobileSlide}>
          <div>
            <p>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide2.content
                : fr.happyCustomers.slide2.content}
            </p>
            <h3>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide2.by
                : fr.happyCustomers.slide2.by}
            </h3>
            <button>
              {this.props.router.locale === "en"
                ? en.happyCustomers.slide2.button
                : fr.happyCustomers.slide2.button}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MobileSlider);
