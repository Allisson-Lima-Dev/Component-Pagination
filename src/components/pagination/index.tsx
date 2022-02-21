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

export function Pagination({
  page = 0,
  total_pages = 0,
  total,
  items,
  per_page,
}: dataPagination) {
  const numberOfButton = 5;
  const { pagination } = createPagination(page, numberOfButton, total_pages);

  return (
    <div>
      <button disabled={page === 1}>Prev</button>
      {pagination &&
        pagination.map((buttons) => <button key={buttons}>{buttons}</button>)}
      <button disabled={page === total_pages}>Prox</button>
    </div>
  );
}
