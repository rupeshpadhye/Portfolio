import React from "react";
import { Box, Typography} from '@material-ui/core';
import NavBarContainer from '../components/NavBarContainer';
import Scrum from '../assets/scrum.svg';
import Coding from '../assets/coding.svg';
import Deploy from '../assets/deploy.svg';

const About = ({summary}) => {
  return (
    <NavBarContainer tabPos={1}>
    <Box id="about">
        <Box  display="flex"  justifyContent="space-around" alignItems="center" >
            <Box textAlign="center">
                <Scrum/>
                <Typography variant="body1"> Plan</Typography>
            </Box>
            <Box textAlign="center">
              <Coding/>
              <Typography variant="body1" > Code</Typography>
            </Box>
            <Box textAlign="center">
              <Deploy/>
              <Typography variant="body1" > Deploy</Typography>
            </Box>
        </Box>
        <Box>
          <Typography variant="h5" component="h2" >
          Summary
          </Typography>
          <ul>
            {
                summary.map((s,index)=>  
                    <li key={`'summary-${index}'`}> 
                        <Typography variant="body1" > {s} 
                        </Typography> 
                    </li>
                )
            }
          </ul>
        </Box> 
    </Box>
    </NavBarContainer>
  )
}

export default About;
