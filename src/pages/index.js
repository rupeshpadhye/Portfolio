import React from "react";
import NavBarContainer from './../components/NavBarContainer';
import Landing from '../components/Landing';
import { useStaticQuery, graphql } from "gatsby";
import CssBaseline from '@material-ui/core/CssBaseline';

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
    <React.Fragment>
    <CssBaseline />
      <NavBarContainer tabPos={0}>
      <Landing 
        title={data.site.siteMetadata.landingPageTitle} 
        subTitle={data.site.siteMetadata.landingPageSubTitle} />
    </NavBarContainer>
    </React.Fragment> 
    ) 
}

export default Index;