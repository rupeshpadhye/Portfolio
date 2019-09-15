import React from "react";
import { Box , Button } from '@material-ui/core';
import ContactSVG from '../assets/contact.svg';
import EmailRounded from '@material-ui/icons/EmailRounded';
import NavBarContainer from '../components/NavBarContainer';
import { useStaticQuery, graphql } from "gatsby";
const Contact = () => {
   const data = useStaticQuery(graphql`
  query ContactQuery {
          site {
            siteMetadata {
               contactEmail
               contactEmailSubject
            }
          }
        }`);
 const email = data.site.siteMetadata.contactEmail;
 const subject = data.site.siteMetadata.contactEmailSubject;       
 return (
   <NavBarContainer tabPos={4}>
    <Box 
        id="contact"
        position="relative"
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        minHeight="60vh"
        >
     <Box style={{opacity:0.2 , width:'100%'}} position="absolute">
        <ContactSVG/>
     </Box>
     <Box>
     <Button 
         variant="contained" 
         color="primary" 
         target="_top" 
         href={`mailto:${email}?Subject=${subject}`}>
         Say Hello!
         <Box ml={1} mt={0.5}> <EmailRounded/> </Box>
     </Button>
    </Box>
 </Box>
 </NavBarContainer>
 )
};

export default Contact;
