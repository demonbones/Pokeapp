import { useState } from "react";

export const usePagination = (list, quantityPerPage) => {
  const [pageNumber, setPageNumber] = useState(1);

  const lowerLimit = quantityPerPage * (pageNumber - 1);

  const upperLimit = quantityPerPage * pageNumber - 1;

  const totalPages = Math.ceil(list.length / quantityPerPage);

  const listSlice = list.slice(lowerLimit, upperLimit + 1);

  const changePageTo = (page) => {
    if (page > totalPages) setPageNumber(totalPages);
    else if (page < 1) setPageNumber(1);
    else setPageNumber(page);
  };
  const pages = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);

  const pageSize = 10; // Tamaño de la página

  const [visibleRange, setVisibleRange] = useState({ start: 0, end: pageSize });

  const handleNextPage = () => {
    const newStart = visibleRange.start + pageSize;
    const newEnd = visibleRange.end + pageSize;

    if (newEnd > pages.length) {
      // Límite superior alcanzado
      return;
    }

    setVisibleRange({ start: newStart, end: newEnd });
    changePageTo(pageNumber + 1);
  };

  const handleBackPage = () => {
    const newEnd = visibleRange.start;
    const newStart = visibleRange.start - pageSize;

    if (newStart < 0) {
      // Límite inferior alcanzado
      return;
    }

    setVisibleRange({ start: newStart, end: newEnd });
    changePageTo(pageNumber - 1);
  };

  const visiblePages = pages.slice(visibleRange.start, visibleRange.end);

  return [
    pageNumber,
    pages,
    listSlice,
    changePageTo,
    handleNextPage,
    handleBackPage,
    visiblePages,
    visibleRange,
  ];
};
