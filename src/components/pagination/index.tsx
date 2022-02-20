import React from "react";
import createPagination from "./createPagination";

type dataItems = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type dataPagination = {
  page: number;
  per_page?: number;
  total?: number;
  total_pages: number;
  items?: dataItems[];
};

export function Pagination({}: dataPagination) {
  const { pagination } = createPagination();
  return (
    <div>
      <button>Prev</button>
      <button>pagination</button>
      <button>Prox</button>
    </div>
  );
}
