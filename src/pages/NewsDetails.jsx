import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const newsData = useLoaderData();
  const { id } = useParams();
  console.log(id, newsData);
  useEffect(() => {
    const news = newsData.find((singleNews) => singleNews.id === id);
    setNews(news);
  }, [newsData, id]);
  console.log(news);
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-5">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
