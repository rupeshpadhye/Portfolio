import React from "react";
import Box from '@material-ui/core/Box';

const Section = (props) => {
    const { value, index, component: ComponentName,data } = props;
    return (
        <Box
            m={{ xs: 4, sm: 8, md: 10 }}
        >
             <ComponentName  {...data}/>
        </Box>)
};

export default Section;
