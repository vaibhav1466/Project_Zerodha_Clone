import Hero from "./Hero";
import Leftsection from "./Leftsection";
import React from "react";
import Rightsection from "./Rightsection";
import Univers from "./Univers";

function Productpage() {
  return (
    <>
     <Hero />
     <Leftsection
        imageURL="asset/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
     
      <Rightsection
        imageURL="/asset/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <Leftsection        imageURL="/asset/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Rightsection
        imageURL="/asset/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <Leftsection
        imageURL="/asset/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Univers />
    </>
  );
}
export default Productpage;
