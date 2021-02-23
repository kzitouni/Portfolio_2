import React,{useEffect,useState} from "react"
import { Container, ImageTag, Image, ProjectBody, ProjectItemContainer, ProjectsContainer, ProjectTitle, Subtitle, Title, Wrapper, LinksContainer, LinkImage, ProjectDetails } from "./Styles"
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi"

export default function Projects(props){
 
    return( 
    <Wrapper id="Projects">
      <Container>
        <Subtitle>MY PROJECTS</Subtitle>
        <Title>Projects I've Worked On</Title>
  <ProjectsContainer>
    <ProjectItemContainer>
      <ImageTag href="https://apps.shopify.com/elevate-ab-testing" target="_blank">
        <Image src="/Shopify_Project.png" loading="lazy" alt="" />
      </ImageTag>
      <ProjectTitle>Shopify App</ProjectTitle>
      <ProjectBody>Built an application listed on the Shopify app store from design to development. Utilizes the Shopify API to handle making functions for merchants based on the apps key functionality..</ProjectBody>
      <ProjectDetails>React - Next.js - Javascript - HTML/CSS - Shopify Liquid - AWS</ProjectDetails>
      <LinksContainer>
      {/* <LinkImage>
      <AiFillGithub />
      
      </LinkImage> */}
      <LinkImage href="https://apps.shopify.com/elevate-ab-testing" target="_blank" >
      <FiExternalLink />
      </LinkImage>
      </LinksContainer>
    </ProjectItemContainer>
    <ProjectItemContainer>
      <ImageTag href="https://bit.ly/shopspace10" target="_blank" >
        <Image src="/Shopspace_Project.png" loading="lazy" alt="" />
      </ImageTag>
      <ProjectTitle>Shopspace Website</ProjectTitle>
      <ProjectBody>Built a modern responsive landing page called Shopspace using React and Next.js.</ProjectBody>
      <ProjectDetails>React - Next.js - Javascript - HTML/CSS</ProjectDetails>
      <LinksContainer>
      <LinkImage href="https://github.com/kzitouni/Shopspace" target="_blank">
      <AiFillGithub />
      
      </LinkImage>
      <LinkImage href="https://bit.ly/shopspace10" target="_blank" >
      <FiExternalLink />
      </LinkImage>
      </LinksContainer>
    </ProjectItemContainer>
    <ProjectItemContainer>
      <ImageTag href="https://github.com/kzitouni/Outclass" target="_blank">
        <Image src="/Outclass_Project.png" loading="lazy" alt="" />
      </ImageTag>
      <ProjectTitle>OutClass</ProjectTitle>
      <ProjectBody>A production ready React Native app that integrated with Stripe where users could buy and sell closed college classes. AWS was utilized for user authentication, No SQL Database, and web scraping.</ProjectBody>
      <ProjectDetails>React Native - Javascript - Puppateer - AWS</ProjectDetails>
      <LinksContainer>
      <LinkImage href="https://github.com/kzitouni/Outclass" target="_blank">
      <AiFillGithub />
      
      </LinkImage>
      {/* <LinkImage>
      <FiExternalLink />
      </LinkImage> */}
      </LinksContainer>
    </ProjectItemContainer>
  </ProjectsContainer>
  </Container>
    </Wrapper>
    
    )
}