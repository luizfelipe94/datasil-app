export type PageMetaDTO<T> = {
  data: T[];
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
}