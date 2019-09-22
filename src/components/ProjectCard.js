import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader,IconButton,CardContent,Icon,Typography,CardMedia,Box } 
from '@material-ui/core';

import ChipBox from './ChipBox';
const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(1),
  },
  right: {
    float: 'right',
  },
  cover: {
    width:'100%',
    height:'300px',
    objectFit: 'contain',
  },
  content: {
    display:'flex',
    flexDirection:'column',
    alignItems: 'center'
  },
  description: {
    height: '3em',
  }
}));

export default function ProjectCard({project}) {
  const classes = useStyles();
 // console.log('project',project);
  const topics = (project.repositoryTopics.edges || [])
                    .map(edge => edge.node.topic.name);
  return (
    <Box 
     width={{ xs: '100%', sm: '100%', md: '45%' }}>
    <Card className={classes.card} p={1}>
      <CardHeader
        action={
          <React.Fragment>
           { project.url ? (<IconButton href={project.url} target="_blank" className={classes.button} aria-label="code">
              <Icon>code</Icon></IconButton>) : null}
           { project.homepageUrl ? <IconButton href={project.homepageUrl} target="_blank" className={classes.button} aria-label="visit site">
              <Icon>launch</Icon>
            </IconButton> : null }
          </React.Fragment>
        }
        title={ project.name}
      />
      <CardContent  className={classes.content}>
        <CardMedia
          component="img"
          className={classes.cover}
          src= {project.openGraphImageUrl}
          title={`${project.name} screen shots`}
        /> 
        <Box pt={1} mb={2}>
        <Typography color="textSecondary" pt={1} className={classes.description}>
        { project.description}
        </Typography>
        </Box>
        <ChipBox chips={topics} title="" size='small' />
       
      </CardContent>
    </Card>
    </Box>
  );
}