import React from "react";
import NavBarContainer from './../components/NavBarContainer';
import Landing from '../components/Landing';
import { useStaticQuery, graphql } from "gatsby";
import CssBaseline from '@material-ui/core/CssBaseline';

const Index = () => {

  const graphqlResponse = useStaticQuery(graphql`
    query AboutIndexQuery {
      allAboutJson {
        edges {
          node {
            resumeUrl
            landingPageTitle
            landingPageSubTitle
          }
        }
      }
  }`);      
     
  const { resumeUrl,landingPageTitle,landingPageSubTitle } = graphqlResponse.allAboutJson.edges[0].node;
  return (
    <React.Fragment>
    <CssBaseline />
      <NavBarContainer tabPos={0} resumeUrl={resumeUrl}>
      <Landing 
        title={landingPageTitle} 
        subTitle={landingPageSubTitle} />
    </NavBarContainer>
    </React.Fragment> 
    ) 
}

export default Index;