import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            
          Welcome to our cutting-edge platform, designed exclusively for Gen Z. Our app offers a curated selection of trendy, minimalist apparel that speaks to the unique tastes and preferences of today's youth. We prioritize a seamless, engaging shopping experience with intuitive navigation and interactive features. With a focus on quality, innovation, and the latest fashion trends, our platform provides an unparalleled shopping journey tailored to the Gen Z lifestyle. Discover unique styles and stay ahead of the fashion curve with our dynamic, user-friendly app. Join us in redefining platform for the next generation.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
