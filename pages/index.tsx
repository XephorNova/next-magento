import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useGetAllCategoriesQuery } from "../graphql/__generated__/types_and_hooks";
import Layout from "../components";

export default function Home() {
  // const { data, loading, error } = useGetAllCategoriesQuery();
  // if (loading) {
  //   return <h1>Loading</h1>;
  // }
  // if (error) {
  //   return <h1>Error Occured</h1>;
  // }
  // console.log(data);
  return <h1>Hero Section</h1>;
}
