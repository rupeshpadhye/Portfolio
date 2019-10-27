import React from "react";
import { Box , Button, Fab } from '@material-ui/core';
import ContactSVG from '../assets/contact.svg';
import EmailRounded from '@material-ui/icons/EmailRounded';
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';

const useStyles = makeStyles(theme => ({
   fab: {
     margin: theme.spacing(1),
     background: 'white',
   },
   extendedIcon: {
     marginRight: theme.spacing(1),
   },
 }));

const ContactInfo = () => {
   const classes = useStyles();
   const data = useStaticQuery(graphql`
  query ContactQuery {
          site {
            siteMetadata {
               contactEmail
               contactEmailSubject
            }
          }
          allSeoJson {
            edges {
               node {
                  socialLinks {
                     twitter
                     github
                     linkedin
                  },
                  contact {
                     email
                  }
               }
            }
         }
        }`);

 const { socialLinks: { github,linkedin, twitter } } = data.allSeoJson.edges[0].node;      
 const email = data.site.siteMetadata.contactEmail;
 const subject = data.site.siteMetadata.contactEmailSubject;       
 return (

    <Box 
        id="contact"
        position="relative"
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        minHeight="60vh"
        flexDirection="column"
        >
     <Box style={{opacity:0.2 , width:'100%'}} position="absolute">
        <ContactSVG/>
     </Box>
     {/* <Box>
     <Button 
         variant="contained" 
         color="primary" 
         target="_top" 
         href={`mailto:${email}?Subject=${subject}`}>
         Say Hello!
         <Box ml={1} mt={0.5}> <EmailRounded/> </Box>
     </Button>
    </Box> */}
    <Box mt={4}>
    {/* <Fab color="secondary" aria-label="github" className={classes.fab}>
        <Github />
    </Fab> */}
      <Fab aria-label="linkedIn" className={classes.fab} href={linkedin} target="_blank" >
         <LinkedIn />
      </Fab>
      <Fab  aria-label="twitter" className={classes.fab} href={twitter}  target="_blank" >
         <Twitter />
      </Fab>
      <Fab aria-label="email" className={classes.fab}  href={`mailto:${email}?Subject=${subject}`}>
         <EmailRounded />
      </Fab>
    </Box>
 </Box>
 )
};

export default ContactInfo;
