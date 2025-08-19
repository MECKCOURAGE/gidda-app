import type { Estate } from "../../../../types/estates";
import clsx from "clsx";

const Details = ({ estate }: { estate: Estate }) => {
  const images = estate.images?.slice(0, 3) ?? [];

  const displayImages =
    images.length > 0 ? images : [{ document: "/no-image.jpg" }];

  return (
    <div>
      <div className="flex gap-2">
        {displayImages.map((img, idx) => (
          <div key={idx} className="relative w-1/3 h-[165px]">
            <img
              src={img.document}
              alt={`Estate image ${idx + 1}`}
              className="w-full h-full object-cover rounded-[8px]"
            />

            <div className="absolute bottom-2 left-2 flex flex-col font-redhat space-y-1">
              <span className="text-green bg-offWhite text-[11px] font-bold leading-[11px] w-[74px] h-[24px] px-[10px] py-[6px] border border-green rounded-[100px]">
                Side View
              </span>
              <span className="bg-green border border-offWhite text-offWhite w-[74px] h-[24px] text-[10px] font-bold leading-[11px] px-[5.5px] py-[5px] rounded-[100px]">
                Actual Image
              </span>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-black font-millik text-[20px] my-[20px] leading-[25px] font-regular">
        Estate Details
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <EstateDetail title="name" detail={estate.name} />
        <EstateDetail title="state" detail={estate.city.stateId} />
        <EstateDetail title="city" detail={estate.city.name} />
        <EstateDetail title="address" detail={estate.address} />
        <EstateDetail
          title="popular landmark"
          detail={estate.landmark ?? "N/A"}
        />
        <EstateDetail
          title="estateland(in hectares)"
          detail={estate.landSize}
        />
        <EstateDetail
          title="completion status"
          detail={estate.completionStatus ?? "Incomplete"}
        />
        <EstateDetail
          title="video url"
          detail={estate.videoUrl ?? "giddaa.youtube.com"}
        />
        <EstateDetail title="number of floors" detail={estate.floors} />
      </div>
      <div className="mt-4">
        <EstateDetail title="description" detail={estate.description} detailClassName="w-[581px]" />
      </div>
      <h1 className="text-black font-millik text-[20px] my-[20px] leading-[25px] font-regular">
        Specifications and Ammenities
      </h1>
    </div>
  );
};

export default Details;

const EstateDetail = ({
  title,
  detail,
  detailClassName,
}: {
  title: string;
  detail: string | number;
  detailClassName?: string;
}) => {
  return (
    <div className="space-y-[5px]">
      <h1 className="font-redhat font-extrabold text-[11px] leading-[11px] uppercase mt-[0px]">
        {title}
      </h1>
      <p
        className={clsx(
          "font-redhat font-light text-[13px] leading-[23px]",
          detailClassName
        )}
      >
        {detail}
      </p>
    </div>
  );
};
