import { PageRoutes } from "../constants/routes";

export const checkActive = (
  pathname: string,
  route: string,
  groupItem: boolean
) => {
  // Ensures the id is of the right structure
  const match = pathname.match(
    /\/([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})$/i
  );
//   const id = match ? match[1] : undefined;

  // Check if the route is  view listing
//   if (
//     (id && pathname === PageRoutes.ViewListing(id)) ||
//     pathname === PageRoutes.CreateListingInspection ||
//     (id && pathname === PageRoutes.UpdateListingInspection(id))
//   ) {
//     return pathname.startsWith(`${route}/`);
//   }

  if (route === "/" || groupItem) {
    return pathname === route;
  }

  return pathname.startsWith(route);
};
