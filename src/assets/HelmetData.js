import React from "react";
import Helmet from "react-helmet";

const HelmetData = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AlguacilGabriel" />
      <meta name="twitter:creator" content="@AlguacilGabriel" />
      <meta name="twitter:title" content="Gabriel Alguacil" />
      <meta
        name="twitter:description"
        content="Software engineer passionate about front end development and new tech."
      />
      <meta
        name="twitter:image"
        content="https://firebasestorage.googleapis.com/v0/b/tftparty-bde27.appspot.com/o/images%2Ftftparty-vertical-wb.png?alt=media&token=9da5a2e7-f94a-4aab-80a5-9c8c2335a2f7"
      />
    </Helmet>
  );
};

export default HelmetData;
