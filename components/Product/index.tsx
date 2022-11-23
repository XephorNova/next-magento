import { Card, Text, Col, Row, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import {
  PriceRange,
  ProductInterface,
  useAddProductToCartMutation,
} from "../../graphql/__generated__/types_and_hooks";

const Product: React.FC<ProductInterface> = ({
  name,
  image,
  price_range,
  sku,
  id,
}) => {
  const {} = useAddProductToCartMutation({
    variables: {
      cartItems: [
        {
          parent_sku: sku || "asd",
          quantity: 1,
        },
      ],
    },
  });
  return (
    <Card isPressable isHoverable css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#bafeAA">
            {sku}
          </Text>
          {/* <Text h3 color="black">
            {name}
          </Text> */}
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          autoResize
          showSkeleton
          src={image?.url || "https://loremflickr.com/640/360"}
          width="100%"
          height="100%"
          objectFit="cover"
          alt={image?.label || "Image Label Not defined"}
        />
      </Card.Body>
      <Card.Footer
        isBlurred={true}
        css={{
          background: "border-box",
          position: "absolute",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              {name}
            </Text>
            <Text color="#000" size={12}>
              {price_range.minimum_price.regular_price.currency}
            </Text>
            <Text color="#000" size={12}>
              {price_range.minimum_price.regular_price.value}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Link href={`/product?id=${id}`}>
                <Button flat auto rounded color="secondary">
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Add To Cart
                  </Text>
                </Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Product;

// export default Product;
