import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CodingPerson from '../assets/coding_person.svg';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const Landing = ({ title , subTitle}) => {
  const theme = useTheme();
  const isBelowMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    return ( 
    <Box 
    id="landing"
    display="flex" 
    flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
    position="relative"
    minHeight="100vh"
    >
       <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Box position={{ xs: '', sm: '', md: 'absolute' }} my ={10} left={0}>
        <Typography variant="h3" component="h1" gutterBottom >
          {title}
        </Typography>
        <Fade in={true}>
        <Typography variant={isBelowMediumScreen ? 'subtitle2': 'h6'} gutterBottom className="typewriter-sub-header">
            {subTitle}
        </Typography>
        </Fade>
        </Box>
        </Slide>
       <Box width="100%">
            <CodingPerson/>
       </Box>
   </Box>
   
   );
};

export default Landing;
