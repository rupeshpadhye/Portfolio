import React from "react";
import { Box, Typography,Grid, Paper,List, ListItem, ListItemText,Zoom,Hidden} from '@material-ui/core';
import NavBarContainer from '../components/NavBarContainer';
import Scrum from '../assets/scrum.svg';
import Coding from '../assets/coding.svg';
import Deploy from '../assets/deploy.svg';
import SuperHero from '../assets/superhero.svg';

import MultiScreensCoding from '../assets/coding_multi_screens.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    marginTop: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    jusifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  primaryText: {
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
  },
  secondaryText: {
    color: theme.palette.text.secondary,
  },
  paperBox: {
    borderRadius: theme.spacing(1),
    //box-shadow: 0 0 8px 0 rgba(17,22,26,.16), 0 4px 8px 0 rgba(17,22,26,.08), 0 8px 16px 0 rgba(17,22,26,.08);
    margin: theme.spacing(2),
    transition: 'box-shadow .3s ease-in-out',
  },
  paperContent: {
    padding: '0.5em 1em 0 1em',
  },
  paperBoxBottom: {
    padding:theme.spacing(1),
    color: '#fff',
    backgroundImage: 'linear-gradient(300deg,rgb(108, 99, 255),#a951ed)'
  },
}));

const FactBox = ({ title , subtitle,footer,facts }) => {
  const classes = useStyles();
  return (
    <Box className={classes.paper} display="flex" alignItems="center" textAlign="center"   flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}>
    <Paper className={classes.paperBox}>
    <Typography variant="h4" className={classes.paperContent}>
      {title}  
    </Typography>
    <Typography variant="subtitle2" gutterBottom>
      {subtitle}   
    </Typography>
    <Box  className={classes.paperBoxBottom} >
      {footer}
    </Box>
    </Paper>   
    <List>
    { facts.map((fact,index) =>
                <ListItem key={index}>
                  <ListItemText primary={`- ${fact}`}/>
                </ListItem>
            )
    }        
   </List>
  </Box>
  )
}
const AboutItem = ({factBox,visualBox,direction}) => {
  const classes = useStyles();
  return (
    <Box 
    display="flex"  
    flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
    alignItems="center"
    >
       <Grid container spacing={3} direction={direction}  display="flex"  alignItems="center">
        <Hidden smDown>
        <Zoom in={true} mountOnEnter unmountOnExit>
            <Grid item md={6} xs={12}>
                {visualBox}
            </Grid>
          </Zoom>
        </Hidden>        
        <Zoom in={true} mountOnEnter unmountOnExit>
          <Grid item md={6} xs={12}>
            {factBox}
          </Grid>
        </Zoom>  
        </Grid>
    </Box>
  )
}

const About = ({summary}) => {
  const classes = useStyles();
  return (
    <NavBarContainer tabPos={1}>
      <AboutItem 
        direction="row"
        visualBox ={<MultiScreensCoding/>}
        factBox= {
          <FactBox 
          title="7+" 
          subtitle="years" 
          footer="Tech Experience"
          facts={[
                 "Building user friendly software apps.",
                 "Working across the Technology stack.",
                 "Zeal and vigour to solve complex business problems."
                 ]}
         /> 
        } 
        />
      <AboutItem 
        direction="row-reverse"
        visualBox ={
          <React.Fragment>
             <Box  display="flex" justifyContent="space-evenly">
                  <img src='./logos/js.png' width="64" height="64"/>
                  <img src='./logos/html5.png' width="64" height="64"/>
                  <img src='./logos/css3.png' width="64" height="64"/> 
            </Box>
            <Box  display="flex" justifyContent="space-evenly">
                 <img src='./logos/react.png' width="64" height="64"/> 
                 <img src='./logos/polymer.png' width="64" height="64"/>
                  <img src='./logos/vue.png' width="64" height="64"/>
            </Box> 
            <Box  display="flex" justifyContent="space-evenly">
                  <img src='./logos/redux.png' width="64" height="64"/>
                  <img src='./logos/graphql.png' width="64" height="64"/>
                  <img src='./logos/sass.png' width="64" height="64"/>
            </Box>
          </React.Fragment> 
        }
        factBox= {
          <FactBox 
          title="5+" 
          subtitle="Web app's" 
          footer="Frontend Built"
          facts={["Hands on experience in trending JavaScript ecosystem.",
                  "React, Polymer, Vue.js, AngularJs.",
                 "Experience of building Single Page and Progressive web apps.",
                 "Enthusiastic in TypeScript, GraphQL, React Native."
                ]}
         /> 
        } 
        />
       <AboutItem 
        direction="row"
        visualBox ={
          <React.Fragment>
             <Box  display="flex" justifyContent="space-evenly">
                  <img src='./logos/java.png' width="64" height="64"/>
                  <img src='./logos/node.png' width="64" height="64"/>
                </Box>
                <Box  display="flex" justifyContent="space-evenly">
                  <img src='./logos/spring.png' width="64" height="64"/>
                  <img src='./logos/sailjs.png' width="64" height="64"/>
                  <img src='./logos/express.png' width="64" height="64"/>

                </Box> 
                <Box  display="flex" justifyContent="space-evenly">
                  <img src='./logos/mysql.png' width="100" height="64"/>
                  <img src='./logos/postgresql.png' width="64" height="64"/>
                  <img src='./logos/mongodb.png' width="64" height="64"/>
                  <img src='./logos/redis.png' width="64" height="64"/>
                  <img src='./logos/rabbitmq.png' width="64" height="64"/>

              </Box>     
          </React.Fragment> 
        }
        factBox= {
          <FactBox 
          title="7+" 
          subtitle="years" 
          footer="Backend Experience"
          facts={["Expert in Server side programming (Java,NodeJS).",
          "Built robust Restful Web services.",
          "Designed and developed Spring boot based Micro services.",
          "Strong experience in SQL and NOSQL databases.",
          ]}
         /> 
        } 
        />
      <AboutItem 
        direction="row-reverse"
        visualBox ={
          <React.Fragment>
            <Box  display="flex" justifyContent="space-evenly">
                  <img src='./logos/mocha.png' width="64" height="64"/>
                  <img src='./logos/chai.png' width="64" height="64"/>
                  <img src='./logos/sinon.png' width="64" height="64"/>
                  <img src='./logos/jest.png' width="64" height="64"/>
            </Box>      
          </React.Fragment> 
        }
        factBox= {
          <FactBox 
          title="80%" 
          subtitle="code" 
          footer="Coverage"
          facts={["Well versed with BDD and TDD testing methodologies.",
          "Unit tested React components with Jest and Enzyme.",
          "End to end testing with Mocha, Chai, Sinon, Selenium, Istanbul.",
          "Unit tested Java API's Junit, Mockito,DBunit.",
          ]}
         /> 
        } 
        />
      <AboutItem 
        direction="row"
        visualBox ={
          <React.Fragment>
            <Box  display="flex" justifyContent="space-evenly">
                  <img src='./logos/android.png' width="64" height="64"/>
                  <img src='./logos/firebase.png' width="64" height="64"/>
                  <img src='./logos/java.png' width="64" height="64"/>
            </Box>      
          </React.Fragment> 
        }
        factBox= {
          <FactBox 
          title="10K+" 
          subtitle="Android App" 
          footer="Downloads"
          facts={[
          "Built Native android app for EdTech Startup from scratch having 4+ rating.",
          "Well versed with Clean Architecture , dagger2, firebase.",
          "Completed Udacity Android Nano degree program."]}
         /> 
        } 
        />
     <AboutItem 
        direction="row-reverse"
        visualBox ={
          <Box height="300px" textAlign="center">
            <Scrum/>
          </Box>
        }
        factBox= {
          <FactBox 
             title="5+" 
             subtitle="years" 
             footer="Agile Practitioner"
             facts={["Rigorously following scrum rituals."]}
        />
        }
       /> 
      <AboutItem 
              direction="row"
              visualBox ={
                <Box width="50%" ml={16}>
                  <SuperHero/>
                </Box>  
              }
              factBox= {
                <FactBox 
                title="2+" 
                subtitle="years" 
                footer="Tech lead"
                facts={["Mentored, paired and reviewed work of agile team."]}
              />
              }
            /> 
    </NavBarContainer>
  )
}

export default About;
