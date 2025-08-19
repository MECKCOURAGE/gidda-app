export const PageRoutes = {
  //DashBoard
  Dashboard: "/",

  // Authentication
  Login: "/account/login",

  // Estate Management
  Estates: "/", 
  ViewEstate: (estateId: string) => `/${estateId}`,
  CreateEstate: "/create",

  // Estate Images
  UploadEstateImages: (estateId: string) =>
    `/${estateId}/upload-images`,

  // Location data (optional routes if separated)
  Countries: "/locations/countries",
  States: (countryId: string) => `/locations/countries/${countryId}/states`,
  Cities: (stateId: string) => `/locations/states/${stateId}/cities`,
};
