const createPagination = (
  currentPage: number,
  numberOfButtons: number,
  numberOfPages: number
) => {
  if (currentPage > numberOfPages || currentPage < 1) {
    return {
      pagination: [],
      // currentPage,
    };
  }
  const showButton = Array(numberOfPages)
    .fill(1)
    .map((item, indice) => item + indice);

  console.log(showButton);

  const sideButtons =
    numberOfButtons % 2 === 0 ? numberOfButtons / 2 : (numberOfButtons - 1) / 2;

  const calculLeft = (rest = 0) => ({
    array: showButton
      .slice(0, currentPage - 1)
      .reverse()
      .slice(0, sideButtons + rest)
      .reverse(),
    rest() {
      return sideButtons - calculLeft().array.length;
    },
  });

  const calculRight = (rest = 0) => ({
    array: showButton.slice(currentPage).slice(0, currentPage + rest),
    rest() {
      return sideButtons - calculRight().array.length;
    },
  });

  const buttonLeft = calculLeft(calculRight().rest()).array;
  const buttonRight = calculRight(calculLeft().rest()).array;

  return {
    pagination: [...buttonLeft, currentPage, ...buttonRight],
    // currentPage,
  };
};

export default createPagination;
