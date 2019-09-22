import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab,Container,List,ListItem,ListItemText,Typography } from '@material-ui/core';
import { navigate } from '@reach/router';
import { useStaticQuery, graphql } from "gatsby";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import SEO from './SEO';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolBarColor:{
    backgroundColor: 'white',
  },
  mobileAppBar: {
    // bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: theme.spacing(1),
    alignItems:'center',
  },
  containerPos: {
    position:'relative',
    top: theme.spacing(6),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawerPaper: {
    padding:theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration:'none',
  },
  //TODO use theme
  activeLink: {
    borderBottom: `2px solid #f50057`,
    width: theme.spacing(16),
  }
}));

const onTabChange = (e , tab) => {
  navigate(tab.to);
}

const NavBar = (props) => {
  const classes = useStyles();
  const { tabs,tabPos } = props;
  const theme = useTheme();
  const isBelowMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerInfo, setDrawerInfo] = React.useState({ isOpen: false });
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <AppBar 
      position="fixed" 
      color={isBelowMediumScreen ? 'primary' :'default' }
      elevation={0} 
      className={isBelowMediumScreen ? classes.mobileAppBar: classes.toolBarColor}>
    { isBelowMediumScreen ? ( 
      <React.Fragment>
      <SwipeableDrawer
       classes={{
        paper: classes.drawerPaper,
        }}
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS} 
        open={drawerInfo.isOpen} 
        onOpen={()=>setDrawerInfo({ isOpen: true })}
        onClose={()=>setDrawerInfo({ isOpen: false })}>
        <List aria-label="menu">
      {
       tabs.map(tab => <ListItem key={`tab-${tab.to}`}>
            <Link 
              to={tab.to} 
              className={classes.link}
              activeClassName={classes.activeLink}
              >  
                <ListItemText primary={tab.title} />
              </Link>
       </ListItem>)
       }
       </List>
      </SwipeableDrawer>   
      <IconButton 
          edge="start"
          onClick={()=>setDrawerInfo({ isOpen: true })} 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu">
            <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
          <Location>
          {({ location }) => {
            const pageLocation  = tabs.find(tab => tab.to ===location.pathname);
            return <span>{pageLocation ? pageLocation.title: ''}</span>
          }}
        </Location>
      </Typography>
      </React.Fragment>
      ):
      <Tabs 
     value={tabPos}
     aria-label="tabs"  
     variant='scrollable'
     onChange={(e,newValue)=> onTabChange(e,tabs[newValue])}
     scrollButtons='auto'
     >
     {
       tabs.map(tab =>   <Tab tabIndex= '0' label={tab.title} key={`tab-${tab.to}`} />)
     }
    </Tabs>
    }
  </AppBar>
  );
}

export default ({children,tabPos}) => {
  
  const classes = useStyles(); 
  const graphqlResponse = useStaticQuery(graphql`
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
  }`);
  return (
    <React.Fragment>
    <SEO></SEO>
    <NavBar tabs ={graphqlResponse.allMenuJson.edges[0].node.menuLinks} tabPos = {tabPos}/>
    <Container className={classes.containerPos}>
      {children}
    </Container>
    </React.Fragment>
  )
};