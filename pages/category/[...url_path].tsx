import { Loading, Pagination, Grid, Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGetProductsForIdQuery } from "../../graphql/__generated__/types_and_hooks";
import ProductPage from "../../components/ProductsPage";
import Paginate from "../../components/Paginate";

function Category() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const ProductQueryResult = useGetProductsForIdQuery({
    variables: {
      searchId: router.query.id,
      currentPage: currentPage,
    },
  });

  console.log();
  // console.log(router.query.id);

  useEffect(() => {
    if (!ProductQueryResult.loading) {
      ProductQueryResult.refetch({
        searchId: router.query.id || "men",
        currentPage: currentPage,
      });
    }
  }, [currentPage]);
  // if (ProductQueryResult.loading) {
  //   return <Loading />;
  // }
  // if (ProductQueryResult.error) {
  //   return <h1>Error Occured</h1>;
  // }
  return (
    <>
      <Paginate
        page={currentPage}
        setPage={setCurrentPage}
        totalNumber={ProductQueryResult.data?.products?.total_count || 1}
      />
      <ProductPage {...ProductQueryResult} />
      {ProductQueryResult.loading ? (
        <Loading />
      ) : ProductQueryResult.error ? (
        <h1>Error Occurred While Fetching products</h1>
      ) : (
        <ProductPage {...ProductQueryResult} />
      )}
    </>
  );
}

export default Category;
