import React from "react";
import { Box, Fab } from '@material-ui/core';
import ContactSVG from '../assets/contact.svg';
import EmailRounded from '@material-ui/icons/EmailRounded';
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
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

 const { socialLinks: {linkedin, twitter } } = data.allSeoJson.edges[0].node;      
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
    <Box mt={4}>
      <Fab aria-label="linkedIn" rel="noopener" className={classes.fab} href={linkedin} target="_blank" >
         <LinkedIn />
      </Fab>
      <Fab  aria-label="twitter" rel="noopener" className={classes.fab} href={twitter}  target="_blank" >
         <Twitter />
      </Fab>
      <Fab aria-label="email" rel="noopener" className={classes.fab}  href={`mailto:${email}?Subject=${subject}`}>
         <EmailRounded />
      </Fab>
    </Box>
    {/* <a href="https://icons8.com/icon/108784/javascript">JavaScript icon by Icons8</a> */}
    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 
               title="Flaticon">www.flaticon.com</a></div> */}
               {/* <a href="https://iconscout.com/icon/postgresql-11" target="_blank">Postgresql Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a> */}
 </Box>
 )
};

export default ContactInfo;
