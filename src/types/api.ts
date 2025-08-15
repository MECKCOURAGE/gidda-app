export type GetRequestParamsType = {
    pageNumber?: number;
    pageSize?: number;
    search?: string;
    spaceId?: string;
    type?: string;
  };
  
  export type PaginatedResponseType<T> = {
    statusCode: number;
    value: {
      value: {
        pageNumber: number;
        pageSize: number;
        totalPages: number;
        totalRecords: number;
        data: T[];
      };
    };
  };
  
  export type SingleResponseType<T> = {
    statusCode: number;
    formatters: Array<any>;
    contentTypes: Array<any>;
    declaredType: any;
    value: {
      value: T;
      message: string;
      statusCode: number;
    };
  };
  
  export type MutationResponseType<T> = {
    statusCode: number;
    value: {
      value: {
        value: T[];
        message: string;
        statusCode: number;
      };
    };
  };
  