import React from "react";
import { Box, Typography,Chip } from '@material-ui/core';

const ChipBox = ({chips= [] , title , size='medium'}) => {
    return(
      <Box p={1}>
      {title && <Typography variant="h5" gutterBottom> {title} </Typography>}
      <Box display="flex" flexWrap="wrap">
       { chips.map((chip,index) => 
       <Chip 
          key={`chip-${index}`}
          variant="outlined" 
          color="primary" 
          label={chip}
          size={size}
          style={{'margin': '0.5em'}}
          /> )
       }
     </Box>
     </Box>
  )};
 
export default ChipBox;  