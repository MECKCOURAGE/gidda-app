import { useEffect, useState, useMemo } from "react";
import NavBar from "./components/NavBar";
import useAxiosBase from "../../hooks/use-axios-base";
import type { Estate } from "../../types/estates";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FaPlus } from "react-icons/fa";
import Container from "../../components/container";
import { MoreVertical } from "lucide-react";
import Icons from "../../components/common/icons";
import view from "../../assets/images/view.png";
import { PageRoutes } from "../../constants/routes";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

const Estates = () => {
  const { getRequest } = useAxiosBase();
  const [estates, setEstates] = useState<Estate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  const fetchEstates = async () => {
    setIsLoading(true);
    try {
      const data = await getRequest("/developer/estate/get-all", {
        params: {
          pageNumber,
          pageSize: 4,
          search,
        },
      });
      setEstates(data.value.value.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEstates();
  }, [pageNumber, search]);

  const { totalHouses, totalUnits, estateCount } = useMemo(() => {
    let houses = 0;
    let units = 0;

    estates.forEach((estate) => {
      houses += estate.houseStats.totalHouses ?? 0;
      units += estate.houseStats.totalUnits ?? 0;
    });

    return {
      totalHouses: houses,
      totalUnits: units,
      estateCount: estates.length,
    };
  }, [estates]);

  return (
    <div className="">
      <NavBar
        estates={estateCount}
        units={totalUnits}
        houses={totalHouses}
        value={search}
        onChange={setSearch}
      />
      <div className="flex pl-[30px] pr-[40px] py-4">
        <h1 className="text-[24px] leading-[25px] font-light mb-4 font-millik">
          {" "}
          Estates - {estateCount}
        </h1>

        <NavLink to={PageRoutes.CreateEstate} className="ml-auto">
          <Button
            asChild
            className="border h-[39px] font-redhat text-[13px] leading-[23px] font-bold text-offWhite"
          >
            <span className="px-2 bg-green flex items-center">
              <FaPlus size={13} color="#FFFFFF" />
              Create Estate
            </span>
          </Button>
        </NavLink>
      </div>

      {isLoading && (
        <div className="font-redhat text-[27px] ml-[30px] font-extrabold text-green">
          LOADING...
        </div>
      )}
      {error && (
        <div>{error}</div>
      )}

      {!isLoading && (
        <div className="mx-auto">
          <Container className="gap-3 mx-[30px] flex">
            {estates.map((estate) => (
              <EstateBlock key={estate.id} estate={estate} />
            ))}
          </Container>
          <div className="flex space-x-2  mt-[20px] ml-[539px]">
            <Button
              onClick={() => setPageNumber((prevState) => prevState - 1)}
              className="p-[1px] bg-lightGray rounded-sm"
            >
              <BiCaretLeft color="#979797" size={19} />
            </Button>

            <Button
              onClick={() => setPageNumber((prevState) => prevState + 1)}
              className={`p-[1px] bg-green rounded-sm`}
            >
              <BiCaretRight color="#FFFFFF" size={19} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Estates;

const EstateBlock = ({ estate }: { estate: Estate }) => {
  const [showMenu, setShowMenu] = useState(false);
  const imageUrl =
    estate.images?.length > 0 ? estate.images[0].document : "/no-image.jpg";

  return (
    <div className="relative">
      <div className="rounded-[8px] border shadow border-midGray2 overflow-hidden">
        <div className="relative w-[257px] h-[110px]">
          <img
            src={imageUrl}
            alt="Estate"
            className="w-full h-full object-cover "
          />
          <div className="absolute top-2 left-2 border font-redhat text-[11px] bg-ascentGreen border-green font-semibold leading-[11px] text-green px-2 py-1 rounded-[100px]">
            {estate.houses.length} Houses
          </div>
        </div>

        <div className="w-[257px] h-[110px] relative bg-offWhite flex flex-col">
          <h1 className="font-redhat font-bold text-[13px] leading-[23px] mx-auto px-4 mt-[15px]">
            {estate.name}
          </h1>
          <p className="font-redhat font-regular text-[11px] leading-[21px] mx-auto px-4">
            {estate.address}
          </p>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-5 h-5 flex items-center justify-center rounded-full bg-lightGray mb-2 absolute bottom-0 ml-[232px]   "
          >
            <MoreVertical className="w-3 h-3 text-gray-400 rotate-90" />
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="absolute right-2 border border-midGray2  mb-2  text-[11px] text-special font-redhat space-y-2 bg-offWhite p-2 rounded-[15px] shadow-lg w-[125px]">
          <NavLink
            to={PageRoutes.ViewEstate(estate.id)}
            className=" px-1 py-1 cursor-pointer flex"
          >
            <img src={view} className="w-[15px] h-[15px] mx-1" />
            View
          </NavLink>
          <NavLink to="/" className="px-1 py-1 cursor-pointer flex">
            <Icons iconName="edit" className="w-[15px] h-[15px] mx-1" />
            Edit
          </NavLink>
          <NavLink to="/" className="px-1 py-1 cursor-pointer flex">
            <Icons iconName="house" className="w-[17px] h-[17px] mx-1" />
            Add House
          </NavLink>
          <button className="px-1 py-1 text-red font-extrabold cursor-pointer flex">
            <Icons iconName="delete" className="w-[15px] h-[15px] mx-1" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
