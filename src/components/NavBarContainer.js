import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab,Container,List,ListItem,ListItemText,Typography,Button,Box } from '@material-ui/core';
import { navigate } from '@reach/router';
import { useStaticQuery, graphql } from "gatsby";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import SEO from './SEO';
import ContactInfo from './ContactInfo';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolBarColor:{
    backgroundColor: 'white',
    justifyContent: 'center',
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
  mobileFullDrawer:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  }
  ,
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
  },
  topLeftButton: {
    position: 'absolute',
    top: 0,
    left: 0,
  }
}));

const onTabChange = (e , tab) => {
  navigate(tab.to);
}

const ResumeDownloadButton = ({resumeUrl,color='primary'}) => (
<Box display='flex' alignItems='center' position="absolute" right={4} mr={2} >
  <Button color={color} target="_blank" href={resumeUrl}>Download Resume</Button>
</Box>);

const NavBar = (props) => {
  const classes = useStyles();
  const { tabs,tabPos,resumeUrl } = props;
  const theme = useTheme();
  const isBelowMediumScreen = useMediaQuery(theme.breakpoints.between('xs','md'));
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
  const [drawerInfo, setDrawerInfo] = React.useState({ isOpen: false });
  return (
    <AppBar 
      position="fixed" 
      color={isBelowMediumScreen ? 'primary' :'default' }
      elevation={0} 
      className={isBelowMediumScreen ? classes.mobileAppBar: classes.toolBarColor}>
    { isBelowMediumScreen ? ( 
      <React.Fragment>
      <Drawer
       classes={{
        paper: isMobile ? classes.mobileFullDrawer : classes.drawerPaper ,
        }}
        open={drawerInfo.isOpen} 
        onClose={()=>setDrawerInfo({ isOpen: false })}>
        {isMobile ?  <IconButton 
          edge="end"
          color= "primary"
          onClick={()=>setDrawerInfo({ isOpen: false })} 
          className={classes.topLeftButton} 
          aria-label="close">
            <CloseIcon />
      </IconButton> : null}  
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
      </Drawer>   
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
    { isMobile ? null :<ResumeDownloadButton resumeUrl={resumeUrl} color= {isBelowMediumScreen ? 'inherit': 'primary' }/> } 
  </AppBar>
  );
}

export default ({children,tabPos,resumeUrl}) => {
  
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
    <NavBar tabs ={graphqlResponse.allMenuJson.edges[0].node.menuLinks} tabPos = {tabPos} resumeUrl ={resumeUrl}/>
    <Container className={classes.containerPos}>
      {children}
    </Container>
    <ContactInfo></ContactInfo>
    </React.Fragment>
  )
};