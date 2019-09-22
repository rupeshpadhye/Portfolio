import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby";
//import Thumbnail from 'Static/thumbnail/thumbnail.png'

const SEO = () => {
    const Thumbnail ='';
    const graphqlResponse = useStaticQuery(graphql`
    query SEOQuery {
     allSeoJson {
            edges {
            node {
                url,
                description,
                social {
                    facebook
                    twitter
                },
                title,
                socialLinks {
                   twitter
                   github
                   linkedin
                },
                address {
                    city,
                    region,
                    country,
                    zipCode
                },
                contact {
                    email
                },
                legalName,
                foundingDate,
                logo,
            }
            }
      }     
    }`);
    const {
        url,
        description,
        social,
        title,
        socialLinks,
        address,
        contact,
        legalName,
        foundingDate,
        logo,
    } = graphqlResponse.allSeoJson.edges[0].node;
	const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.linkedin}",
			"${socialLinks.github}"
		]
  	}`

	return (
		<Helmet>
			<meta name="description" content={description} />
			<meta name="image" content={Thumbnail} />

			<meta property="og:url" content={`${url}`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={Thumbnail} />
			<meta property="fb:app_id" content={social.facebook} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content={socialLinks.twitter} />
			<meta name="twitter:site" content={social.twitter} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image:src" content={Thumbnail} />
			<script type="application/ld+json">{structuredDataOrganization}</script>
			<link rel="publisher" href={socialLinks.google} />
			<title>{title}</title>
			<html lang="en" dir="ltr" />
		</Helmet>
	)
};

export default SEO;