import React from "react";
import { Box,Zoom} from '@material-ui/core';
import ProjectCard from '../components/ProjectCard';
import NavBarContainer from '../components/NavBarContainer';
import { useStaticQuery, graphql } from 'gatsby';
const Projects = () => {
    const {
		projectsJson: {
			projects
		},
		github: {
			repositoryOwner: {
				repositories: { edges },
			},
		},
	} = useStaticQuery(graphql`
	query ProjectsQuery {
			projectsJson {
				projects {
				id
				name
				isArchived
				description
				usesCustomOpenGraphImage
				openGraphImageUrl
				homepageUrl
				repositoryTopics {
					edges {
					  node {
						topic {
						  name
						}
					  }
					}
				  }
				}
			}
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

	

 const allProjects = [...(edges|| []).filter(edge => !edge.node.isArchived).map((edge)=> edge.node),...projects];	
 console.log(allProjects);    
 return (
  <NavBarContainer  tabPos={3}>   
  <Zoom in={true}>
  <Box p={{ xs: 2, sm: 3, md: 4 }} 
 	id="projects" mt={3}  
   display="flex"     
	flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
    flexWrap="wrap">
     {
         allProjects.map(
			 (project ,index)=>
			  <ProjectCard key={`project-box-${index}`} project={project}/> 
			)

     }
  </Box>
  </Zoom>
 </NavBarContainer>
)}

export default Projects;
