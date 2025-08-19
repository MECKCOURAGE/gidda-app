import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxiosBase from "../../../hooks/use-axios-base";
import type { Estate } from "../../../types/estates";
import NavBar from "./components/navbar";
import Tabs from "./Tabs";

const EstateView = () => {
  const { getRequest } = useAxiosBase();
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [estate, setEstate] = useState<Estate | null>(null);

  const fetchEstates = async () => {
    setIsLoading(true);
    try {
      const data = await getRequest(`/developer/estate/${id}`);
      setEstate(data.value.value);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEstates();
  }, []);

  return (
    <div>
      <NavBar name={estate?.name ?? "Estate"} />

      {isLoading && (
        <div className="font-redhat text-[27px] ml-[30px] font-extrabold text-green">
          LOADING...
        </div>
      )}
      {error && (
        <div>{error}</div>
      )}

      {estate && <Tabs estate={estate} />}
    </div>
  );
};

export default EstateView;
