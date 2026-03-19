import { Suspense } from "react";
import Articles from "./ui/articles";

const getArticles = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`,
  );
  const articles = await response.json();
  return articles;
};

const page = () => {
  return <div></div>;
};

export default page;
