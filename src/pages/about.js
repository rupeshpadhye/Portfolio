import React from "react";
import About from '../components/About';
import { useStaticQuery, graphql } from "gatsby";
export default () => {

  const graphqlResponse = useStaticQuery(graphql`
  query AboutQuery {
    allAboutJson {
      edges {
        node {
          summary
        }
      }
    }
  }`);
  
  const summary = graphqlResponse.allAboutJson.edges[0].node.summary;
  return (
    <About summary={summary}/>
  )
};

