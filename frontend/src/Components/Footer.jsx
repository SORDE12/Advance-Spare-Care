import React from "react";
import "./footer.css";
import { Grid, GridItem, Image, Text, Flex } from "@chakra-ui/react";
import facebook from "../Assets/clipart2399764.png";
import twitter from "../Assets/pngfind.com-logo-twitter-png-transparente-4542609.png";
import insta from "../Assets/pngfind.com-instagram-png-white-2773517.png";
import youtube from "../Assets/pngfind.com-joey-graceffa-png-6745261.png";
import printrist from "../Assets/pngfind.com-pinterest-png-465295.png";
import order from "../Assets/-1_orig.jpeg";
import help from "../Assets/-1_orig (1).jpeg";
import location from "../Assets/-1_orig (2).jpeg";
import store from "../Assets/-1_orig (3).jpeg";
import mobile from "../Assets/-1_orig (4).jpeg";
const Footer = () => {
  return (
    <>
      <div className="black-box-container">
        <div style={{ margin: "auto", width: "80%" }}>
          <Grid
            className="gird-of-black-box"
            justifyItems={"center"}
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(5, 1fr)",
              xl: "repeat(5, 1fr)",
            }}
          >
            <GridItem>
              <div className="black-box-container-logo-">
                <img src={order} />
              </div>
            </GridItem>
            <GridItem>
              <div className="black-box-container-logo-">
                <img src={help} />
              </div>
            </GridItem>
            <GridItem>
              <div className="black-box-container-logo-">
                <img src={location} />
              </div>
            </GridItem>
            <GridItem>
              <div className="black-box-container-logo-">
                <img src={store} />
              </div>
            </GridItem>
            <GridItem>
              <div className="black-box-container-logo-">
                <img src={mobile} />
              </div>
            </GridItem>
          </Grid>
        </div>

        <div
          className="name-of-logos-in-sub-black-box"
          style={{ width: "80%", margin: "auto" }}
        >
          <Grid
            className="gird-of-black-box"
            justifyItems={"center"}
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(5, 1fr)",
              xl: "repeat(5, 1fr)",
            }}
          >
            <GridItem>
              <div style={{ marginTop: "6px" }}>Order Lookup</div>
            </GridItem>
            <GridItem>
              <div style={{ marginTop: "6px" }}>Help Desk</div>
            </GridItem>{" "}
            <GridItem>
              <div style={{ marginTop: "6px" }}>Store Locator</div>
            </GridItem>{" "}
            <GridItem>
              <div style={{ marginTop: "6px" }}>In Store Services</div>
            </GridItem>{" "}
            <GridItem>
              <div style={{ marginTop: "6px" }}>Mobile App</div>
            </GridItem>
          </Grid>
        </div>
      </div>

      <div className="footer-main-container">
        <br />
        <br />
        <br />
        <br />
        <div className="footer-sub-container">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={70}
          >
            <GridItem className="grid-items-in-footer">
              <div>
                <Text className="top-name-of-sub-contents-in-footer">
                  CUSTOMER SUPPORT
                </Text>
                <br />

                <Text> Accessibility Statement</Text>
                <Text>Contact Us</Text>
                <Text>Forgot Password</Text>
                <Text>Help Desk</Text>
                <Text>In Store Pickup</Text>
                <Text>In Store Services</Text>
                <Text>Order Tracking</Text>
                <Text>Recall Information</Text>
                <Text>Return Policy</Text>
                <Text>Same Day Delivery</Text>
                <Text>UBER Driver Rewards</Text>
              </div>
            </GridItem>

            <GridItem className="grid-items-in-footer">
              <div>
                <Text className="top-name-of-sub-contents-in-footer">
                  {" "}
                  ABOUT US
                </Text>
                <br />
                <Text> Affiliate Program</Text>
                <Text>Career Opportunities</Text>
                <Text>Corporate Information</Text>
                <Text>Gift Cards</Text>
                <Text> Investor Relations</Text>
                <Text>2020 Annual Report</Text>
                <Text>Annual Meeting Materials</Text>
                <Text> Safety Data Sheets (SDS) </Text>
                <Text> Press </Text>
                <Text>Store Locator</Text>
              </div>
            </GridItem>

            <GridItem className="grid-items-in-footer">
              <div>
                <Text className="top-name-of-sub-contents-in-footer">
                  {" "}
                  PROFESSIONAL SHOPS
                </Text>
                <br />

                <Text> MyAdvance</Text>
                <Text>Online Parts Ordering</Text>
                <Text>TechNet Professional</Text>
                <Text>Technical Training</Text>
                <Text>Interactive Vehicle Animations</Text>
                <Text>Parts & Products</Text>
                <Text>Promotions & Rewards</Text>
                <Text>Shop Solutions</Text>
                <Text>Find My Mechanic</Text>
              </div>
            </GridItem>
            <GridItem className="grid-items-in-footer">
              <div>
                <div>
                  <Text className="top-name-of-sub-contents-in-footer">
                    FOLLOW US
                  </Text>
                </div>
                <br />

                <div className="social-media-logos-div">
                  <img src={facebook} />
                  <Text>Facebook</Text>
                </div>

                <div className="social-media-logos-div">
                  <img src={twitter} />
                  <Text>Twitter</Text>
                </div>

                <div className="social-media-logos-div">
                  <img src={insta} />
                  <Text>Instagram</Text>
                </div>

                <div className="social-media-logos-div">
                  <img src={printrist} />
                  <Text>Pinterest</Text>
                </div>

                <div className="social-media-logos-div">
                  <img src={youtube} />
                  <Text>YouTube</Text>
                </div>
              </div>
            </GridItem>
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <hr style={{ width: "96%", margin: "auto" }} />
        <br />
        <br />
        <div>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(6, 1fr)",
            }}
            gap={1}
          >
            <GridItem>© 2023 Advance Spare Care</GridItem>
            <GridItem>Privacy Policy</GridItem>
            <GridItem>Terms Of Use</GridItem>
            <GridItem>Site Map</GridItem>
            <GridItem>Do Not Sell or Share My Personal Information</GridItem>
            <GridItem>ADVANCING A WORLD IN MOTION®</GridItem>
          </Grid>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Footer;
