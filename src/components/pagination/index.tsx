import React from "react";
import createPagination from "./createPagination";

export type dataItems = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export interface dataPagination {
  page: number | undefined;
  per_page?: number;
  total?: number;
  total_pages: number | undefined;
  items?: dataItems[];
  getItem?: (page: number) => Promise<void>;
}

export function Pagination({
  page = 0,
  total_pages = 0,
  total,
  items,
  per_page,
  getItem,
}: dataPagination) {
  const numberOfButton = 5;
  const { pagination } = createPagination(page, numberOfButton, total_pages);


  return (
    <div>
      <button disabled={page === 1}>
        Prev
      </button>
      {pagination &&
        pagination.map((buttons) => (
          <button
            key={buttons}
            style={{
              backgroundColor: buttons === page ? "red" : "transparent",
            }}
          >
            {buttons}
          </button>
        ))}
      <button disabled={page === total_pages}>Prox</button>
    </div>
  );
}
