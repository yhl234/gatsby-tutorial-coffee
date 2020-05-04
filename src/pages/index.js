import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link, graphql } from 'gatsby';
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/info';
import Menu from '../components/Home/Menu';
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Regular Joe's" styleClass="default-background" />
    <Info />
    <Menu items={data.menu} />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          price
          title
          description {
            description
          }
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
