import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab,Container,Box } from '@material-ui/core';
import { navigate } from '@reach/router';
import { StaticQuery, graphql } from "gatsby";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  toolBarColor:{
    backgroundColor: 'white',
  },
  containerPos: {
    position:'relative',
    top: '3em',
  }
});

const onTabChange = (e , tab) => {
  navigate(tab.to);
}

const NavBar = (props) => {
  const classes = useStyles();
  const { tabs,tabPos } = props;
  return (
    <AppBar 
      position="fixed" 
      color='default' 
      elevation={0} 
      className={classes.toolBarColor}>
    <Tabs 
     value={tabPos}
     aria-label="tabs"  
     variant='scrollable'
     onChange={(e,newValue)=> onTabChange(e,tabs[newValue])}
     scrollButtons='auto'
     >
     {
       tabs.map(tab =>   <Tab label={tab.title} key={`tab-${tab.to}`} />)
     }
    </Tabs>
  </AppBar>
  );
}

export default ({children,tabPos}) => {
  const classes = useStyles(); 
  return (
        <StaticQuery
      query={graphql`
        query MenuItemQuery {
          allMenuJson {
            edges {
              node {
                menuLinks {
                  title
                  to
               }
              }
            }
          }     
        }
      `}
      //data.site.siteMetadata.menuLinks
      render={data => (
        <Box display="flex" flexDirection="column">
        <NavBar tabs ={data.allMenuJson.edges[0].node.menuLinks} tabPos = {tabPos}/>
        <main>
          <Container className={classes.containerPos}>
          {children}
          </Container>
        </main>
        </Box>
      )}
    />
  )
};