export interface City {
    id: string;
    name: string;
    stateId: string;
    slug: string;
    dateCreated: string;
    state: string | null;
    popularLandMark: string | null;
    popularLandMarkLongitude: number;
    popularLandMarkLatitude: number;
    extraProperty: any;
  }
  export interface Country {
      id: string,
      name: string,
      stateCount: number,
      code: string,
      region: string
  }
  
  export interface EstateImage {
    id: string;
    name: string;
    description: string;
    extension: string;
    document: string;
    type: string;
    extraProperties: any;
    optionId: string;
    option: any;
  }
  
  export interface HouseStats {
    totalHouses: number;
    totalUnits: number;
  }
  
  export interface Organization {
    id: string;
    name: string;
    address: string;
    coverImage: string;
    logo: string;
    houseCount: number;
    estateCount: number;
    yearsInOperation: number;
    documentCount: number;
    partnerCount: number;
  }
  
  export interface Estate {
    id: string;
    name: string;
    slug: string;
    city: City;
    address: string;
    landmark: string;
    longitude: number;
    latitude: number;
    videoUrl: string | null;
    landSize: number;
    ownerType: string;
    description: string;
    completionStatus: string | null;
    completionDate: string | null;
    completionLevel: number | null;
    features: any[];  
    feature: any;
    images: EstateImage[];
    houses: any[];
    houseStats: HouseStats;
    organizationId: string;
    floors: number;
    organization: Organization;
    createdBy: string;
    dateCreated: string;
    dateLastModified: string | null;
    lastModifiedBy: string | null;
  }
  