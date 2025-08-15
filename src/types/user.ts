export type LoginResponse = {
    value: {
      statusCode: number;
      message: string;
      value: {
        user: User;
        token: string;
      };
    };
  };
  
  export type User = {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    title: string;
    phoneNumber: string;
    address: string | null;
    organizationId: string;
    description: string;
    organization: {
      name: string;
      address: string;
      description: string;
      emailAddress: string;
      phoneNumber: string;
      mobileNumber: string | null;
      logo: string;
      coverImage: string;
      brandColorCode: string;
      bankName: string;
      accountNumber: string;
      bankCode: string;
      longitude: number;
      latitude: number;
      yearsInOperation: number;
      city: string | null;
      interview: string | null;
      documents: string | null;
      organizationType: string | null;
      estates: any[];
      propertyCount: string | null;
      partnerships: string | null;
      houses: any[];
      verifications: any[];
      id: string;
      createdBy: string;
      dateCreated: string;
      dateLastModified: string | null;
      lastModifiedBy: string | null;
    };
    verificationCode: string;
    roleId: string;
    applicationRole: {
      id: string;
      name: string;
      access: Array<{
        id: string;
        groupName: string;
        rules: Array<{
          id: string;
          name: string;
          value: boolean;
        }>;
      }>;
      description: string;
      identifier: string | null;
      createdBy: string;
      dateCreated: string;
      lastModifiedBy: string | null;
      dateLastModified: string;
    };
    profilePicture: string | null;
    withInNigeria: boolean;
    age: number;
    income: number;
    preferredPurchaseOption: string | null;
    partnerIncome: number;
    partnerAge: number;
    partnerEmail: string | null;
    maritalStatus: string | null;
    howDidYouHearOfUs: string | null;
    city: string | null;
    isActive: boolean;
    isSuperAdmin: boolean;
    registrationCode: string | null;
    roleName: string;
    userType: string;
    isVerified: boolean;
    id: string;
  };
  
  export type InviteUserParams = {
    email: string;
    roleId: string;
  };
  
  export type updateUserRoleParams = {
    id: string;
    roleId: string;
  };
  