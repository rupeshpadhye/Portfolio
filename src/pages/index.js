import React from "react";
import NavBarContainer from './../components/NavBarContainer';
import Landing from '../components/Landing';
import { useStaticQuery, graphql } from "gatsby";

const Index = () => {

  const data = useStaticQuery(graphql`
  query HeadingQuery {
          site {
            siteMetadata {
              landingPageTitle
              landingPageSubTitle
            }
          }
        }`);
  return (
    <NavBarContainer tabPos={0}>
      <Landing 
        title={data.site.siteMetadata.landingPageTitle} 
        subTitle={data.site.siteMetadata.landingPageSubTitle} />
    </NavBarContainer>
  );
}

export default Index;