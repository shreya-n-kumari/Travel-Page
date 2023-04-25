import React from "react";
import baloon from "../assets/baloon3.jpg";
import "./Midpage.css";

export const Midpage = () => {
  return (
    <div className="bottom-page">
      <div className="container  mt-5">
        <div className="col-lg-12 mx-auto">
          <div className="row">
            <div className="col-lg-6 d-flex flex-row justify-content-evenly mt-5">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={baloon} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={baloon} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={baloon} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 ms-5 mt-5">
              <h1>
                EXPLORE <br /> THIS ISLAND
              </h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ex
                a corporis, deserunt provident voluptatem mollitia repellat
                aperiam minus quibusdam? Velit quibusdam iure eveniet earum
                itaque eaque reiciendis assumenda consequuntur?
              </p>
              <button className="btn" type="button">
                Explore more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
