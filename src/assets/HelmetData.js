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
      <meta property="og:title" content="Gabriel Alguacil" />
      <meta
        property="og:description"
        content="Software engineer passionate about front end development and new tech."
      />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/tftparty-bde27.appspot.com/o/images%2Ftftparty-vertical-wb.png?alt=media&token=9da5a2e7-f94a-4aab-80a5-9c8c2335a2f7"
      />
      <meta property="og:url" content="tftparty.com" />
      <meta property="og:site_name" content="Tftparty" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
      <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
    </Helmet>
  );
};

export default HelmetData;
