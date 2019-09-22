import React from "react";
import { Box, Typography, Button, Drawer,Divider } from '@material-ui/core';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Icon from '@material-ui/core/Icon';
import ChipBox from '../components/ChipBox';
import NavBarContainer from '../components/NavBarContainer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import 'react-vertical-timeline-component/style.min.css';
import { useStaticQuery, graphql } from "gatsby";
import useMediaQuery from '@material-ui/core/useMediaQuery';

//const drawerWidth = 400;


const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: '25vw',
      flexShrink: 0,
      paddingTop: theme.spacing(1),

    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      flexShrink: 0,
      paddingTop: theme.spacing(1),

    },
  },
  goBackBtn: {
    [theme.breakpoints.up('md')]: {
      display:'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  }
}));


const RoleDescription = ({roles}) => {
  return (
    <React.Fragment>
    <Typography variant="h5" gutterBottom>Role</Typography>
    <ul>
      { 
        roles.map((role,index) => 
        <li key={`role-${index}`}>
          <Typography>{role}</Typography>
        </li>) 
      }
    </ul>
    </React.Fragment>
  )
};

const InfoDrawer = (props) => {
  const { hideDrawer,open, info, info :{ moreInfo} = { } } = props;
  const theme = useTheme();
  const classes = useStyles();
  //TODO close button
  const drawerWidth = useMediaQuery(theme.breakpoints.up('md')) ? '25vw' : '95vw';
 
  return ( 
    info ?  <Drawer anchor='right' open={open} onClose={hideDrawer} classes={{
      paper: classes.drawer,
      }}>   
    <Box width={drawerWidth}>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Typography variant="h4" gutterBottom>{info.JobTitle}</Typography>
        <Typography variant="h5" gutterBottom>{info.companyName}</Typography>
      </Box>
      <Divider variant="middle" />
      <Box mt={3} p={1}>
       { moreInfo.roles && <RoleDescription roles = {moreInfo.roles}/> }
      </Box>
    
       { moreInfo.technologies && <ChipBox chips={moreInfo.technologies} title="Technologies" /> }
    </Box>
    <Box component="div" width='100%' className={classes.goBackBtn} >
      <Button onClick={hideDrawer} fullWidth color="secondary" size="large" >Back</Button>
    </Box> 
  </Drawer> : null)
}

const CareerSummary = () => {
  const graphqlResponse = useStaticQuery(graphql`
    query CareerSummaryQuery {
        allCareerSummaryJson {
          edges {
            node {
              info {
                companyName
                date
                JobTitle
                shortDescription
                icon
                iconStyle {
                  background
                  color
                }
                moreInfo {
                  roles
                  technologies
                }
              }
            }
          }
        }     
    }`);
  //console.log(graphqlResponse);
  const careerInfo = graphqlResponse.allCareerSummaryJson.edges[0].node.info;
  const [drawerInfo, setDrawerInfo] = 
        React.useState({ isOpen: false , careerStepData: undefined});
  function showDrawer(event, newValue) {
    setDrawerInfo({ isOpen: true , careerStepData: newValue});
  }
  function hideDrawer(event, newValue) {
    setDrawerInfo({ isOpen: false , careerStepData: undefined});

  }
  return (
    <NavBarContainer tabPos={2}>
    <Box id="career-summary">
      <InfoDrawer open={drawerInfo.isOpen} hideDrawer={hideDrawer} info={drawerInfo.careerStepData}/>
      <VerticalTimeline>
        {
          careerInfo.map((careerStep, index) => {
            const { iconStyle ,
              date,icon,companyName,JobTitle,shortDescription,moreInfo} = careerStep;
            return (
              <VerticalTimelineElement
                date={date}
                iconStyle={iconStyle}
                icon={<Icon>{icon}</Icon>}
                key={`career-card-${index}`}
              >
                <Typography variant="h5" component="h4" gutterBottom>
                  { JobTitle}
        </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                 {companyName}
        </Typography>
                <p>
                 {shortDescription}
                </p>
                <div>
                  { moreInfo ? <Button size="small" color="primary" onClick={(e)=>showDrawer(e,careerStep)}>View More Info</Button> : null}
                </div>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </Box>
    </NavBarContainer>
  )
}

export default CareerSummary;

