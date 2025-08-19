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


};
