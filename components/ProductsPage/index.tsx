import React from "react";
import { GetProductsForIdQueryResult } from "../../graphql/__generated__/types_and_hooks";
import styled from "styled-components";
import Product from "../Product";

const StyledGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(1, minmax(150px, 1fr));
  gap: 20px;
  @media (min-width: 768px) {
    gap: 20px;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
`;

export default function ProductPage({ data }: GetProductsForIdQueryResult) {
  return (
    <>
      <StyledGrid>
        {data?.products?.items?.map((d) => {
          return (
            <Product
              key={d?.id}
              sku={d?.sku}
              image={d?.image}
              id={d?.id}
              name={d?.name}
              price_range={d?.price_range}
            />
          );
        })}
      </StyledGrid>
    </>
  );
}
