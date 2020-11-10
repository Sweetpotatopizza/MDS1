import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="ad">
          <img
            className="home__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShn2QaKV-3ar2OLDll5XSIAkNA8ph2Hf0dfQ&usqp=CAU"
          />
          <img
            className="home__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShn2QaKV-3ar2OLDll5XSIAkNA8ph2Hf0dfQ&usqp=CAU"
          />
          <img
            className="home__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShn2QaKV-3ar2OLDll5XSIAkNA8ph2Hf0dfQ&usqp=CAU"
          />
          <img
            className="home__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShn2QaKV-3ar2OLDll5XSIAkNA8ph2Hf0dfQ&usqp=CAU"
          />
          <img
            className="home__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShn2QaKV-3ar2OLDll5XSIAkNA8ph2Hf0dfQ&usqp=CAU"
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Nike Air Force"
            price={129}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReNKkhdZ5YInuMjkRLV4oBF5H_2vAfjMvWgLRSXSm0CZjLEd_rBYpBiN6XXrbiAvu9pKhM0qlm&usqp=CAc"
            rating={3}
          />
          <Product
            id="2"
            title="Puma Suede Classic"
            price={35}
            image="https://cdn.runrepeat.com/i/puma/25788/puma-suede-classic-sneakers-basses-mixte-adulte-noir-black-white-03-40-eu-6-5-uk-mixte-adulte-noir-black-white-03-8fbd-main.jpg"
            rating={5}
          />
          <Product
            id="3"
            title="Addias Germany"
            price={119}
            image="https://image.msscdn.net/images/goods_img/20170615/577636/577636_4_500.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
