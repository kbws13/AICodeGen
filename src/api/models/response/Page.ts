export interface Page<T> {
  records?: T[];
  totalRow?: string;
  pageNumber?: string;
  totalPage?: string;
  pageSize?: string;
}
