import React from "react";
import { FaEye } from "react-icons/fa";
import { format } from "date-fns";
import { FiBookmark, FiShare2 } from "react-icons/fi";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    thumbnail_url,
    details,
    total_view,
    author,
    rating,
    tags,
    published_date = author?.published_date,
  } = news;

  const formattedDate = format(new Date(published_date), "yyyy-MM-dd");
  return (
    <div className="card bg-base-100 shadow-md rounded-lg">
      {/* Author & Meta */}
      <div className="flex items-center justify-between px-4 pt-4 text-sm text-gray-500 bg-base-200">
        <div className="flex items-center gap-2">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-xs">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-lg">
          <button className="btn btn-ghost btn-sm text-gray-500">
            <FiBookmark />
          </button>
          <button className="btn btn-ghost btn-sm text-gray-500">
            <FiShare2 />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-2">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full h-48 object-cover rounded-lg"
        />
      </figure>

      {/* Tags & Date */}
      <div className="px-4 text-sm text-gray-500">
        <p>
          {format(new Date(published_date), "EEEE, MMMM dd, yyyy")} |
          <span className="ml-1">Tag Cloud Tags: {tags?.join(", ")}</span>
        </p>
      </div>

      {/* Details */}
      <div className="px-4 pt-2 pb-1 text-sm text-gray-700">
        {details.length > 200 ? details.slice(0, 200) + "..." : details}
        <Link
          to={`/newsDetails/${id}`}
          className="text-orange-600 font-semibold ml-1 cursor-pointer"
        >
          Read More
        </Link>
      </div>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center px-4 py-2 border-t mt-2 text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < rating.number ? "★" : "☆"}</span>
          ))}
          <span className="text-gray-700 ml-1">{rating.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
