// src/models/api.ts
export interface ResponseDto<T> {
  message: string;
  success: boolean;
  statusCode: number;
  data: T;
}

export interface ApiResult<T> {
  data: T | null;
  error: string | null;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  pageSize: number;
  pageIndex: number;
  currentPage: number;
  totalPages: number;
}

export interface ContactUsRequestDto {
  name: string;
  phoneNumber: string;
  desiredService: string;
  email: string;
  message: string;
}
