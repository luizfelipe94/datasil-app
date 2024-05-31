import * as PaginationStyles from "./styles";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Text } from "@chakra-ui/react";

interface PaginationProps {
  dataTestId?: string;
  initialPage: number;
  itemsPerPage: number;
  onlyIcons?: boolean;
  onSelect: (e: number) => void;
  pageCount: number;
  totalItems: number;
  type?: "simple" | "all";
}

function Pagination({
  dataTestId,
  initialPage = 1,
  itemsPerPage,
  onlyIcons,
  onSelect,
  pageCount,
  totalItems,
  type = "simple"
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage - 1);
  const [itemOffset, setItemOffset] = useState(1);
  const [endOffset, setEndOffset] = useState(0);

  const updateEndOffSet = (page: number) => {
    setEndOffset(
      page * itemsPerPage <= totalItems ? page * itemsPerPage : totalItems
    );
  };

  useEffect(() => {
    setItemOffset(((currentPage * itemsPerPage) % totalItems) + 1);
    updateEndOffSet(currentPage + 1);
  }, [currentPage, totalItems]);

  useEffect(() => {
    setCurrentPage(initialPage - 1);
  }, [totalItems]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
    onSelect(event.selected + 1);
  };

  return (
    <PaginationStyles.Wrapper data-testid={dataTestId} $onlyIcons={onlyIcons}>
      {type === "all" && (
        <PaginationStyles.Description>
          <Text color="read">
            {itemOffset}-{endOffset}
          </Text>
          <Text color="read">of</Text>
          <Text color="read">{totalItems}</Text>
        </PaginationStyles.Description>
      )}
      <ReactPaginate
        nextLabel={<MdKeyboardArrowRight />}
        pageCount={pageCount}
        previousLabel={<MdKeyboardArrowLeft />}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={undefined}
        forcePage={currentPage}
        breakLabel={onlyIcons ? 0 : "..."}
        pageRangeDisplayed={onlyIcons ? 0 : undefined}
        marginPagesDisplayed={onlyIcons ? 0 : undefined}
      />
    </PaginationStyles.Wrapper>
  );
}

export default Pagination;