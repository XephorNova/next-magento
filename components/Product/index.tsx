import { Card, Text, Col, Row, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { ProductInterface } from "../../graphql/__generated__/types_and_hooks";

const Product: React.FC<ProductInterface> = ({
  image,
  sku,
  id,
  name,
  price_range,
}) => {
  return (
    <Card isPressable isHoverable css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#bafeAA">
            New
          </Text>
          <Text h3 color="black">
            {name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          showSkeleton
          src={image?.url || "https://loremflickr.com/640/360"}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
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
              {price_range.maximum_price?.final_price.currency}
            </Text>
            <Text color="#000" size={12}>
              {price_range.maximum_price?.final_price.value}
            </Text>
            <Text color="#000" size={12}>
              {sku}
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
