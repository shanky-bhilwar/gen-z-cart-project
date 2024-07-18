import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/realpolicy.png"   
            alt="Our policy"
            style={{ width: "95%"}}
          />
        </div>
        <div className="col-md-4"><br></br>
          <p></p>
          <p>.Data Collection and Usage: "We collect necessary personal information to process orders and improve services.</p>
          <p>.Third-Party Sharing: "We only share data with trusted partners under strict confidentiality.</p>
          <p>Cookies and Tracking Technologies: "We use cookies to enhance and personalize your shopping experience.</p>
          <p>.Consent: "By using our site, you consent to our privacy policy.</p>
          <p></p>
          <p></p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
