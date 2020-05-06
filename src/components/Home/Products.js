import React from 'react';
import Product from './Product';
import Title from '../Globals/Title';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          image {
            fluid(maxHeight: 426) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          title
          price
        }
      }
    }
  }
`;

export default function Products() {
  const data = useStaticQuery(query);
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {data.products.edges.map(({ node: product }) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}
