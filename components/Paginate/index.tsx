import { Container, Grid, Pagination } from "@nextui-org/react";
import { useState, ComponentProps, FC, memo } from "react";

interface paginationProps {
  page: number;
  setPage: Function;
  totalNumber: number;
}

const Paginate: FC<paginationProps> = memo(({ page, setPage, totalNumber }) => {
  return (
    <Container
      fluid
      responsive
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid
        xs={12}
        css={{
          marginTop: "20px",
        }}
        justify="center"
        alignItems="flex-end"
      >
        <Pagination
          page={page}
          shadow
          color={"primary"}
          onChange={(e) => setPage(e)}
          total={totalNumber}
        />
      </Grid>
    </Container>
  );
});

export default Paginate;
