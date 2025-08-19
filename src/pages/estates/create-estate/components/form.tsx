import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../../../../components/common/Input";
import { Button } from "../../../../components/ui/button";
import useAxiosBase from "../../../../hooks/use-axios-base";

type EstateFormInputs = {
  name: string;
  countryId: string;
  stateId: string;
  city: string;
  landmark: string;
  landSize: number;
  completionStatus: string;
  videoUrl: string;
  rooms: number;
};

// Yup schema
const EstateFormSchema = yup.object().shape({
  name: yup.string().required("Estate name is required"),
  countryId: yup.string().required("Country is required"),
  stateId: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  landmark: yup.string().required("Landmark is required"),
  landSize: yup
    .number()
    .typeError("Land size must be a number")
    .required("Land size is required")
    .positive("Land size must be positive"),
  completionStatus: yup.string().required("Completion status is required"),
  videoUrl: yup.string().url("Enter a valid URL").required("Video URL is required"),
  rooms: yup
    .number()
    .typeError("Rooms must be a number")
    .required("Number of rooms is required")
    .positive("Rooms must be positive"),
});

const CreateEstateForm: React.FC = () => {
  const { getRequest } = useAxiosBase();
  const form = useForm<EstateFormInputs>({
    resolver: yupResolver(EstateFormSchema),
    mode: "all",
  });

  const [countries, setCountries] = useState<{ id: string; name: string }[]>([]);
  const [states, setStates] = useState<{ id: string; name: string }[]>([]);
  const [cities, setCities] = useState<{ id: string; name: string }[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  const fetchCountries = async () => {
    try {
      const res = await getRequest("/public/country/get-all", {
        params: { pageNumber: 1, pageSize: 100, search: " " },
      });
      setCountries(res.value.value.data);
    } catch (err: any) {
      console.error("Error fetching countries:", err);
    }
  };

  const fetchStates = async (countryId: string) => {
    if (!countryId) return;
    try {
      const res = await getRequest(`/public/state/${countryId}/get-all`, {
        params: { pageNumber: 1, pageSize: 100, search: " " },
      });
      setStates(res.value.value.data);
    } catch (err: any) {
      console.error("Error fetching states:", err);
    }
  };

  const fetchCities = async (stateId: string) => {
    if (!stateId) return;
    try {
      const res = await getRequest(`/public/city/${stateId}/get-all`, {
        params: { pageNumber: 1, pageSize: 100, search: " " },
      });
      setCities(res.value.value.data || []);
    } catch (err: any) {
      console.error("Error fetching cities:", err);
    }
  };

  useEffect(() => { fetchCountries(); }, []);
  useEffect(() => { fetchStates(selectedCountry); form.setValue("stateId", ""); }, [selectedCountry]);
  useEffect(() => { fetchCities(selectedState); form.setValue("city", ""); }, [selectedState]);

  const onSubmit = (data: EstateFormInputs) => {
    console.log("Estate Form Data:", data);
  };

  const FieldWrapper: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div className="flex flex-col w-[200px] gap-1">
      <label className="text-[12px] font-bold text-black font-redhat">{label}</label>
      {children}
    </div>
  );

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-6">

      {/* Row 1 */}
      <div className="flex flex-wrap gap-[5px] items-start">
        <FieldWrapper label="Estate Name">
          <FormInput
            {...form.register("name")}
            placeholder="Enter estate name"
            className="h-[45px] text-[12px] w-full rounded-full"
            error={form.formState.errors.name?.message}
          />
        </FieldWrapper>

        <FieldWrapper label="Country">
          <select
            {...form.register("countryId")}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="h-[45px] text-[12px] w-full rounded-full pl-4 border"
          >
            <option value="">Select country</option>
            {countries.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </FieldWrapper>

        <FieldWrapper label="State">
          <select
            {...form.register("stateId")}
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="h-[45px] text-[12px] w-full rounded-full pl-4 border"
          >
            <option value="">Select state</option>
            {states.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </FieldWrapper>

        <FieldWrapper label="City">
          <select
            {...form.register("city")}
            className="h-[45px] text-[12px] w-full rounded-full pl-4 border"
          >
            <option value="">Select city</option>
            {cities.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </FieldWrapper>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap gap-[5px] items-start">
        <FieldWrapper label="Popular Landmark">
          <FormInput
            {...form.register("landmark")}
            placeholder="Enter landmark"
            className="h-[45px] text-[12px] w-full rounded-full"
            error={form.formState.errors.landmark?.message}
          />
        </FieldWrapper>

        <FieldWrapper label="Land Size (hectares)">
          <FormInput
            {...form.register("landSize")}
            type="number"
            placeholder="Enter land size"
            className="h-[45px] text-[12px] w-full rounded-full"
            error={form.formState.errors.landSize?.message}
          />
        </FieldWrapper>

        <FieldWrapper label="Completion Status">
          <select
            {...form.register("completionStatus")}
            className="h-[45px] text-[12px] w-full rounded-full pl-4 border"
          >
            <option value="">Select status</option>
            <option value="Completed">Completed</option>
            <option value="InProgress">In Progress</option>
          </select>
        </FieldWrapper>

        <FieldWrapper label="Video URL">
          <FormInput
            {...form.register("videoUrl")}
            placeholder="Enter video URL"
            className="h-[45px] text-[12px] w-full rounded-full"
            error={form.formState.errors.videoUrl?.message}
          />
        </FieldWrapper>
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap gap-[5px] items-start mt-2">
        <FieldWrapper label="Number of Rooms">
          <FormInput
            {...form.register("rooms")}
            type="number"
            placeholder="Enter number of rooms"
            className="h-[45px] text-[12px] w-full rounded-full"
            error={form.formState.errors.rooms?.message}
          />
        </FieldWrapper>

        <div className="flex items-end w-[200px]">
          <Button
            type="submit"
            className="h-[45px] w-full font-bold text-[12px] text-offWhite bg-green border rounded-full"
          >
            Create Estate
          </Button>
        </div>
      </div>

    </form>
  );
};

export default CreateEstateForm;
