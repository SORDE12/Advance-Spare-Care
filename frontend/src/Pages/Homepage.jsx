import React from "react";
import "./homepage.css";
import discountimg from "../Assets/home-brakes-hero.webp";
import { Grid, GridItem } from "@chakra-ui/react";
import car from "../Assets/car 2.png";
import store from "../Assets/-1_orig (3).jpeg";
import img1 from "../Assets/img1.webp";
import img2 from "../Assets/img2.webp";
import img3 from "../Assets/img3.webp";
import img4 from "../Assets/img4.webp";
import longbanner from "../Assets/long banner.png";
import recyle from "../Assets/recyle.png";


const Homepage = () => {

  return (
    <>
      {/* 1st container */}
      <div className="that-discount-image-container">
        <div className="discount-div">
          <h1>Save 15% Instantly</h1>
          <h3>
            When you buy any set of Carquest Break pads and 2 Carquest Break
            Rotors.
          </h3>
          <br />
          <button className="discount-button">Shop Now.</button>
        </div>
        <div className="img-div-of-discount-banner">
          <img alt="" src={discountimg} />
        </div>
      </div>
      {/* 2nd container */}
      <div className="after-banner-container-small-divs">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={2}
        >
          <GridItem className="griditems-of-small-banners">
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ width: "9%" }}>
                <img alt="" src={car} />
              </div>
              <div>
                <p style={{ fontWeight: "bold", fontSize: "24px" }}>
                  Mobil 1 Oil Change Bundles
                </p>
              </div>
            </div>
            <div>
              <p>
                Full Syn starting at $39.00 + FREE drain pan & funnel*. Add
                primium filter for $3 or more.
              </p>
            </div>
          </GridItem>

          <GridItem className="griditems-of-small-banners">
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ width: "9%" }}>
                <img alt="" src={car} />
              </div>
              <div>
                <p style={{ fontWeight: "bold", fontSize: "24px" }}>
                  Win Free Gas For year.
                </p>
              </div>
            </div>
            <div>
              <p>
                Enter for your chance to win february 2- march 31,2023. *See
                Details.
              </p>
            </div>
          </GridItem>

          <GridItem className="griditems-of-small-banners">
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ width: "9%" }}>
                <img alt="" src={car} />
              </div>
              <div>
                <p style={{ fontWeight: "bold", fontSize: "24px" }}>
                  Save 8$ Instantly.
                </p>
              </div>
            </div>
            <div>
              <p>
                On two rain x-lattitude water repllency enhance performance
                wiper blades.
              </p>
            </div>
          </GridItem>
        </Grid>
      </div>
      {/* 3rd container */}
      <div className="yellow-backgraud-div">
        <div className="car-div-in-yellow-bac-div">
          <img alt="" src={car} />
        </div>

        <div className="car-dics">
          <p style={{ fontWeight: "bold" }}>
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              It all starts here
            </span>
            <br />
            Add your vehicle to see exact fit parts.
          </p>
        </div>

        <div className="input-fields-in-homepage">
          <input
            className="first-input-field"
            placeholder="Enter Year/Make/Model/Engine"
          />
        </div>

        <div className="input-fields-in-homepage">
          <input
            className="second-input-filed"
            placeholder="Enter License Plate"
          />
        </div>

        <div className="input-fields-in-homepage">
          <input className="third-input-filed" placeholder="Enter VIN" />
        </div>

        <div style={{ padding: "1em" }}>
          <p style={{ textDecoration: "underline" }}>Sign in to your account</p>
        </div>
      </div>
      {/* 4th container */}
      <div className="box-six">
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(6, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap={5}
        >
          <GridItem>
            <div className="six-box-divs">
              <div className="six-box-img-">
                <img alt="" src={store} />
              </div>
              <p className="first-p-tag"> Free In Store Services</p>
              <p style={{ fontSize: "15px" }}>
                Personalized care including battery testing and installation,
                oil recycling, wiper installation and more!
              </p>
            </div>
          </GridItem>

          <GridItem>
            <div className="six-box-divs">
              <div className="six-box-img-">
                <img alt="" src={store} />
              </div>
              <p className="first-p-tag">Advance Same Day</p>
              <p style={{ fontSize: "15px" }}>
                Free in store or curbside pickup. Plus delivery available in
                select markets.
              </p>
            </div>
          </GridItem>

          <GridItem>
            <div className="six-box-divs">
              <div className="six-box-img-">
                <img alt="" src={store} />
              </div>
              <p className="first-p-tag">Speed Perks</p>
              <p style={{ fontSize: "15px" }}>
                Get points for every purchase. Redeem points for rewards.
              </p>
            </div>
          </GridItem>

          <GridItem>
            <div className="six-box-divs">
              <div className="six-box-img-">
                <img alt="" src={store} />
              </div>
              <p className="first-p-tag">Hiring Now: In Store & Corporate</p>
              <p style={{ fontSize: "15px" }}>
                Be seen, heard & valued. Careers start & thrive here. Apply now.
              </p>
            </div>
          </GridItem>

          <GridItem>
            <div className="six-box-divs">
              <div className="six-box-img-">
                <img alt="" src={store} />
              </div>
              <p className="first-p-tag">Rebates and Sweepstakes</p>
              <p style={{ fontSize: "15px" }}>
                Find out about rebate and sweepstake offers, submit your rebate
                online and more!
              </p>
            </div>
          </GridItem>

          <GridItem>
            <div className="six-box-divs">
              <div className="six-box-img-">
                <img alt="" src={store} />
              </div>
              <p className="first-p-tag">Need a Certified Technician?</p>
              <p style={{ fontSize: "15px" }}>
                We have approved professionals to repair any problem you have.{" "}
              </p>
            </div>
          </GridItem>
        </Grid>
      </div>
      {/* 5th container */}
      <br /> <br />
      <div className="fifth-container-of-homepage">
        <div style={{ textAlign: "left", marginTop: "10px" }}>
          <p style={{ fontWeight: "bolder", fontSize: "30px" }}>
            UNDER THE{" "}
            <span style={{ fontWeight: "lighter", color: "gray" }}>
              {" "}
              HOOD SAVINGS
            </span>
          </p>
        </div>

        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />

        <br />
        <div>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            <GridItem>
              <div className="under-the-hood-saving">
                <img alt="" src={img1} />
                <div>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    FRAM Oil Change Bundles
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Starting at $25.99. Add a FAM Drive Air or Cabin Air Filter:
                    $8.
                  </p>
                </div>
              </div>
            </GridItem>

            <GridItem>
              <div className="under-the-hood-saving">
                <img alt="" src={img2} />
                <div>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Hot Deal: 2 For $11
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Increase your miles per gallon with Lucas Fuel Treatment.
                  </p>
                </div>
              </div>
            </GridItem>

            <GridItem>
              <div className="under-the-hood-saving">
                <img alt="" src={img3} />
                <div>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {" "}
                    2 For $12
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Spring Cleaning. Mix & Match,finshing tool
                  </p>
                </div>
              </div>
            </GridItem>

            <GridItem>
              <div className="under-the-hood-saving">
                <img alt="" src={img4} />
                <div>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    ACDelco: $32 Gift Card
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    By mail when you buy 8 ACDelco Professional Iridium Spark
                    Plugs.
                  </p>
                </div>
              </div>
            </GridItem>
          </Grid>
        </div>
      </div>
      <br />
      <div className="longbanner">
        <img alt="" src={longbanner} />
      </div>
      <div className="after-banner-container-small-divs">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          gap={2}
        >
          <GridItem className="griditems-of-small-banners">
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ width: "9%" }}>
                <img alt="" src={car} />
              </div>
              <div>
                <p style={{ fontWeight: "bold", fontSize: "24px" }}>
                  Find the perfect battery.
                </p>
              </div>
            </div>
            <div>
              <p>
                Our NEW DieHard Battery Recommender Tool gives a personalized
                recommendation.
              </p>
            </div>
          </GridItem>

          <GridItem className="griditems-of-small-banners">
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ width: "9%" }}>
                <img alt="" src={car} />
              </div>
              <div>
                <p style={{ fontWeight: "bold", fontSize: "24px" }}>
                  Save At The Pump
                </p>
              </div>
            </div>
            <div>
              <p>
                Speed Perks Members can now save on gas at participating Shell
                stations.
              </p>
            </div>
          </GridItem>
        </Grid>
      </div>
      <div className="Advance-Oil-Battery-Recycling">
        <div>
          <img style={{ width: "2em" }} src={recyle} alt="Advance Oil Battery Recycling"/>
          <p>Advance Oil Battery Recycling</p>
          <p className="Advance-Oil-Battery-Recycling-buttons">Find My Store</p>
        </div>
      </div>
      <br />
      <div className="last-grid-of-homepage">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={7}
        >
          <GridItem>
            <div>
              <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                TOP REPLACEMENT PARTS
              </p>
              <p>Brake Pads & Shoes Show All</p>
              <p>Brake Rotors</p>
              <p>Alternators</p>
              <p>Water Pumps</p>
              <p style={{ textDecoration: "underline", color: "blue" }}>
                Show All
              </p>
            </div>
          </GridItem>
          <GridItem>
            <div>
              <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                TOP REPLACEMENT PARTS
              </p>
              <p>Brake Pads & Shoes Show All</p>
              <p>Brake Rotors</p>
              <p>Alternators</p>
              <p>Water Pumps</p>
              <p style={{ textDecoration: "underline", color: "blue" }}>
                Show All
              </p>
            </div>
          </GridItem>
          <GridItem>
            <div>
              <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                TOP REPLACEMENT PARTS
              </p>
              <p>Brake Pads & Shoes Show All</p>
              <p>Brake Rotors</p>
              <p>Alternators</p>
              <p>Water Pumps</p>
              <p style={{ textDecoration: "underline", color: "blue" }}>
                Show All
              </p>
            </div>
          </GridItem>
          <GridItem>
            <div>
              <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                TOP REPLACEMENT PARTS
              </p>
              <p>Brake Pads & Shoes Show All</p>
              <p>Brake Rotors</p>
              <p>Alternators</p>
              <p>Water Pumps</p>
              <p style={{ textDecoration: "underline", color: "blue" }}>
                Show All
              </p>
            </div>
          </GridItem>
        </Grid>
      </div>
    </>
  );
};

export default Homepage;
