/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  dataItems,
  dataPagination,
} from "../components/pagination";
import createPagination from "../components/pagination/createPagination";

function Home() {
  const [current, setCurrent] = useState(1);
  const [item, setItem] = useState<dataPagination | null>(null);
  const getItems = async (page: number) => {
    const { data } = await axios.get("https://reqres.in/api/users", {
      params: {
        per_page: 1,
        page: page,
      },
    });
    setItem(data);
    console.log(data);
  };

  useEffect(() => {
    getItems(current);
  }, [current]);

  const handleClick = (page: number) => {
    getItems(page);
    setCurrent(page);
  };

  const numberOfButton = 5;

  const { pagination } = createPagination(
    numberOfButton,
    item?.total_pages || 0,
    item?.page || 0
  );

  return (
    <>
      <div>
        {item?.data?.map((img) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img.id}
            src={img.avatar}
            alt="1"
            style={{ width: 200, height: 200 }}
          />
        ))}
      </div>
      <div>
        <button
          disabled={current === 1}
          onClick={() => setCurrent((page) => page - 1)}
        >
          Prev
        </button>
        {pagination &&
          pagination.map((page) => (
            <button
              key={page}
              onClick={() => handleClick(page)}
              style={{
                backgroundColor: page === current ? "red" : "transparent",
              }}
            >
              {page}
            </button>
          ))}
        <button
          disabled={current === item?.total_pages}
          onClick={() => setCurrent((page) => page + 1)}
        >
          Prox
        </button>
      </div>
    </>
  );
}
export default Home;
