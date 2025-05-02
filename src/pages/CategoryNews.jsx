import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredData = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredData);
    } else {
      const filteredData = data.filter(
        (news) => news.category_id === parseInt(id)
      );
      setCategoryNews(filteredData);
    }

    // console.log(filteredData);
  }, [data, id]);
  return (
    <div>
      <h1 className="font-bold mb-5">
        Total <span className="text-secondary">{categoryNews.length}</span> news
        found
      </h1>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard news={news} key={news.id}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
