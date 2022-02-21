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
        per_page: 2,
        page: page,
      },
    });
    setItem(data);
  };

  useEffect(() => {
    getItems(current);
  }, [current]);


  const numberOfButton = 5;
  const { pagination } = createPagination(
    item?.page || 0,
    numberOfButton,
    item?.total_pages || 0
  );

  return (
    <>
      <div>oi</div>
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
              onClick={() => getItems(page)}
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
