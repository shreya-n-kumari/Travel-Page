import React from "react";
import baloon from "../assets/baloon3.jpg";
import "./Frontpage.css";

export const Frontpage = () => {
  return (
    <div className="container mt-5 mb-0">
      <div className="col-lg-12 mx-auto">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              WELCOME <br /> TO SRI LANKA
            </h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ex a
              corporis, deserunt provident voluptatem mollitia repellat aperiam
              minus quibusdam? Velit quibusdam iure eveniet earum itaque eaque
              reiciendis assumenda consequuntur?
            </p>
            <button className="btn" type="button">
              Explore
            </button>
          </div>

          <div className="col-lg-6 col-sm-12 ps-5 mt-5">
            <div className="front-card d-flex flex-row justify-content-evenly">
              <div class="card shadow ms-3">
                <img src={baloon} alt="..." />
                <div className="card-body">
                  <h1 class="card-text">MIRISSA</h1>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div class="card shadow ms-3">
                <img src={baloon} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 class="card-text">SIGIRIYA</h1>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div class="card shadow ms-3">
                <img src={baloon} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 class="card-text">COLOMBO</h1>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>

                {/* <div class="card shadow ms-3">
                  <img src={baloon} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h1 class="card-text">COLOMBO</h1>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};
