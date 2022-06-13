import React from "react";
import Helmet from "react-helmet";

const HelmetData = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
  );
};

export default HelmetData;
