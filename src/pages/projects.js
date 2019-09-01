import React from "react";
import { Box,Zoom} from '@material-ui/core';
import ProjectCard from '../components/ProjectCard';
import NavBarContainer from '../components/NavBarContainer';
import { useStaticQuery, graphql } from 'gatsby';
const Projects = () => {
    const {
		github: {
			repositoryOwner: {
				repositories: { edges },
			},
		},
	} = useStaticQuery(graphql`
		{
			github {
				repositoryOwner(login: "rupeshpadhye") {
					repositories(
						first: 30
						orderBy: { field: STARGAZERS, direction: DESC }
					) {
						edges {
							node {
								id
								name
								url
								isArchived
								description
								stargazers {
									totalCount
								}
								usesCustomOpenGraphImage
								openGraphImageUrl
								homepageUrl
								forkCount
								repositoryTopics(first: 10) {
									edges {
									  node {
										topic {
										  name
										}
									  }
									}
								  }
								createdAt
							}
						}
					}
				}
			}
		}
    `)    
 return (
  <NavBarContainer  tabPos={3}>   
  <Zoom in={true}>
  <Box p={{ xs: 2, sm: 3, md: 4 }} 
 	id="projects" mt={3}  
   display="flex"     
	flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
    flexWrap="wrap">
     {
         (edges || []).filter(edge => !edge.node.isArchived).map(
			 (edge ,index)=>
			  <ProjectCard key={`project-box-${index}`} project={edge.node}/> 
			)

     }
  </Box>
  </Zoom>
 </NavBarContainer>
)}

export default Projects;
