import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/navbar";
import useAxiosBase from "../../../hooks/use-axios-base";
import ImageUplaod from "./components/image-upload";
import FormInput from "../../../components/common/Input";
import useCreateEstate from "./hooks/use-create-estate";
import { useQueryClient } from "@tanstack/react-query";
import CreateEstateForm from "./components/form";

const CreateEstate = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const createMutation = useCreateEstate();
  const { isPending, mutate: create } = createMutation;
  const queryClient = useQueryClient();

  const handleLogin = (data: any) => {
    const submitData = {
      ...data,
    };
    create(submitData, {
      onSuccess: () => {
        queryClient.clear();
      },
      onError: (error) => {
        setErrorMessage(error.message);
      },
    });
  };

  const data = {
    name: "Estate One",
    cityId: "d532be79-fae0-4374-b64b-a709d9ddb2a6", //issue
    address: "Somewhere",
    videoUrl: "string",
    ownerType: "string",
    landmark: "string",
    description: "string",
    completionStatus: null, //issue
    completionDate: "2025-01-30T12:38:14.920Z",
    completionLevel: 0,
    longitude: 0,
    latitude: 0,
    features: [
      {
        id: "string",
        name: "string",
        icon: "string",
        hasAmpleParkingSpace: true,
        hasUniformSecurity: true,
        hasCCTVSurveillanceSystem: true,
        hasInverter: true,
        has24HoursElectricity: true,
        hasInternetServices: true,
        hasFiberOptics: true,
        hasReliableWaterSupply: true,
        hasChildernPlayground: true,
        hasEquestrainOrPoloCenter: true,
        hasTennisCourt: true,
        hasGolfCourt: true,
        hasLoungeOrBar: true,
        hasResturant: true,
        hasLakesOrPonds: true,
        hasGazebos: true,
        hasChildcareFacilities: true,
        hasSchool: true,
        hasHospital: true,
        hasShoppingComplex: true,
        hasChurchOrMosque: true,
        hasGreeneryAndOpenGardens: true,
        hasGym: true,
        hasBasketballCourt: true,
        hasFootballPitch: true,
        hasSwimmingPool: true,
        hasClubHouse: true,
        hasBank: true,
        hasCinema: true,
        hasEnsuite: true,
        hasPoPCeiling: true,
        hasWalkInClosets: true,
        hasAirConditioning: true,
        hasSpeedInternet: true,
        hasWineCeller: true,
        hasFurnished: true,
        hasWifi: true,
        hasFibreOptics: true,
        hasSatelliteTV: true,
        hasElevator: true,
        hasBoysQuarters: true,
        hasSmartHomeTechnology: true,
        hasFullyEquippedKitcken: true,
        hasModernAppliances: true,
        hasGraniteCountertops: true,
        hasBreakfastBar: true,
        hasStorageRoom: true,
        hasUpgradedBathroomFeatures: true,
        hasSpaLikeFeatures: true,
        hasTileOrMarbleFeatures: true,
        hasOpenFloorPlan: true,
        hasLargeWindwos: true,
        hasBuiltInHouseTheater: true,
        hasPrivateBackyard: true,
        hasPatioOrDarkSpace: true,
        hasLandscapedGarden: true,
        hasHomeOfficeSpace: true,
        hasBuiltInShelfOrBookSpace: true,
        hasAmpleNaturalLight: true,
        hasSecuritySystem: true,
        hasBulletProofDoors: true,
        hasGatedCompound: true,
        hasReinforcedDoorsAndWindows: true,
        hasGaurdedCommunity: true,
        hasUniformedSecurity: true,
        hasParkingGarage: true,
        hasDriveWaySpace: true,
        hasStreetParkingAvaliability: true,
        hasPrivateParkingSpace: true,
        hasElectricity: true,
        hasBackupGenerator: true,
        hasBorehole: true,
        hasWaterBoard: true,
        hasProximityToSchools: true,
        hasProximityToShoppingMalls: true,
        hasProximityToSupermarkets: true,
        hasNearByPublicTransportation: true,
        hasAccessiblityViaBoltOrUber: true,
        hasFencedBackyard: true,
        hasPetFriendlyNeighbourhood: true,
        hasNearbyWalkingTrailsAndSidewalks: true,
      },
    ],
    landSize: 0,
    organizationId: "c05f48a0-2c6d-45b6-806a-52c26179bd19",
    floors: 0,
  };

  return (
    <div className="">
      <NavBar />
      <ImageUplaod />

      <CreateEstateForm/>
    </div>
  );
};

export default CreateEstate;
