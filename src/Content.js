// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import typescript from "./assets/images/Skills/typescript.png";
import c from "./assets/images/Skills/c.png";
import c_plus_plus from "./assets/images/Skills/c_plus_plus.png";
import python from "./assets/images/Skills/python.png";
import nodejs from "./assets/images/Skills/node.png";
import aws from "./assets/images/Skills/aws.png";
import docker from "./assets/images/Skills/docker.png";
import kubernetes from "./assets/images/Skills/kubernetes.png";
import git from "./assets/images/Skills/git.png";
import javascript from "./assets/images/Skills/javascript.png";
import jenkins from "./assets/images/Skills/jenkins.png";
import gitlab from "./assets/images/Skills/gitlab.png";
import bitbucket from "./assets/images/Skills/bitbucket.png";
import ansible from "./assets/images/Skills/ansible.png";
import terraform from "./assets/images/Skills/terraform.png";
import azure from "./assets/images/Skills/azure.png";
import gcp from "./assets/images/Skills/gcp.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import postgresql from "./assets/images/Skills/postgresql.png";
import redis from "./assets/images/Skills/redis.png";
import kafka from "./assets/images/Skills/kafka.png";
import linux from "./assets/images/Skills/linux.png";
import bash from "./assets/images/Skills/bash.png";
import arduino from "./assets/images/Skills/arduino.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

// import project1 from "./assets/images/projects/img1.png";
// import project2 from "./assets/images/projects/img2.png";
// import project3 from "./assets/images/projects/img3.png";
// import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Crafting Code & Building Dreams",
    firstName: "PAVANKUMAR",
    LastName: "TIDKE",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in Web and Apps development",
      },
      {
        count: "15+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Worked on react since 2021",
        logo: reactjs,
      },
      {
        name: "Typescript",
        para: "Intermediate level of experience in typescript",
        logo: typescript,
      },
      {
        name: "Javascript",
        para: "Expert level of experience in javascript",
        logo: javascript,
      },
      {
        name: "AWS",
        para: "I've worked on AWS for 3 years",
        logo: aws,
      },
      {
        name: "Docker",
        para: "Intermediate level of experience in docker",
        logo: docker,
      },
      {
        name: "Kubernetes",
        para: "Intermediate level of experience in kubernetes",
        logo: kubernetes,
      },
      {
        name: "Git",
        para: "Intermediate level of experience in git",
        logo: git,
      },
      {   
        name: "C",
        para: "Intermediate level of experience in C/C++",
        logo: c_plus_plus,
      },
      {   
        name: "C++",
        para: "Intermediate level of experience in C/C++",
        logo: c,
      },
      {
        name: "Jenkins",
        para: "Experienced in CI/CD pipeline automation",
        logo: jenkins,
      },
      {
        name: "Ansible",
        para: "Intermediate level of experience in ansible",
        logo: ansible,
      },
      {
        name: "GitLab CI",
        para: "Proficient in GitLab CI/CD workflows",
        logo: gitlab,
      },
      {
        name: "Bitbucket",
        para: "Intermediate level of experience in bitbucket",
        logo: bitbucket,
      },
      {
        name: "Azure DevOps",
        para: "Experience with Azure Pipelines and DevOps practices",
        logo: azure,
      },
      {
        name: "Terraform",
        para: "Infrastructure as Code using Terraform",
        logo: terraform,
      },
      {
        name: "Google Cloud",
        para: "Cloud infrastructure and services on GCP",
        logo: gcp,
      },
      {
        name: "MongoDB",
        para: "NoSQL database design and management",
        logo: mongodb,
      },
      {
        name: "PostgreSQL",
        para: "Relational database management and optimization",
        logo: postgresql,
      },
      {
        name: "Redis",
        para: "In-memory data structure store and caching",
        logo: redis,
      },
      {
        name: "Apache Kafka",
        para: "Distributed streaming platform expertise",
        logo: kafka,
      },
      {
        name: "Linux Administration",
        para: "System administration and shell scripting",
        logo: linux,
      },
      {
        name: "Arduino",
        para: "Intermediate level of experience in arduino",
        logo: arduino,
      },
      {
        name: "Bash Scripting",
        para: "Advanced shell scripting and automation",
        logo: bash,
      },
      {
        name: "Figma",
        para: "Intermediate level of experience in figma",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      // {
      //   name: "Python",
      //   para: "Lorem ipsum text  dummy",
      //   logo: python,
      // },
      // {
      //   name: "System Security",
      //   para: "Linux security hardening and best practices",
      //   logo: security,
      // },
      // {
      //   name: "Network Administration",
      //   para: "Linux networking and troubleshooting",
      //   logo: network,
      // },
      // {
      //   name: "Apache Spark",
      //   para: "Big data processing and analytics",
      //   logo: spark,
      // },
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    // image: person_project,
    project_content: [
      {
        title: "Gym Website",
        // image: project1,
      },
      {
        title: "Social Media web",
        // image: project2,
      },
      {
        title: "Creative Website",
        // image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
