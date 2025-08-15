import type { MutationResponseType, PaginatedResponseType} from "../../types/api";

export const transformPaginatedResponse = <T>(
  response: PaginatedResponseType<T>
) => {
  return {
    value: response?.value?.value?.data || [],
    metadata: {
      pageNumber: response.value.value.pageNumber,
      pageSize: response.value.value.pageSize,
      totalPages: response.value.value.totalPages,
      totalRecords: response.value.value.totalRecords,
    },
  };
};

export const transformMutationResponse = <T>(
  response: MutationResponseType<T>
) => {
  return response.value.value.value
};
