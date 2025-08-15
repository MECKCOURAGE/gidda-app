export const PageRoutes = {

    // Authentication
    Login: "/account/login",
  
    // Dashboard (if needed after login)
    Dashboard: "/dashboard",
  
    // Estate Management
    Estates: "/estates", // list all estates
    ViewEstate: (estateId: string) => `/estates/${estateId}`,
    CreateEstate: "/estates/create",
    EditEstate: (estateId: string) => `/estates/${estateId}/edit`,
  
    // Estate Images
    UploadEstateImages: (estateId: string) => `/estates/${estateId}/upload-images`,
  
    // Location data (optional routes if separated)
    Countries: "/locations/countries",
    States: (countryId: string) => `/locations/countries/${countryId}/states`,
    Cities: (stateId: string) => `/locations/states/${stateId}/cities`,
  };
  