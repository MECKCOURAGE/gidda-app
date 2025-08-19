import { useState } from "react";
import type { Estate } from "../../../../types/estates";
import Details from "./detail";
const Tabs = ({ estate }: {estate: Estate}) => {
  const [activeTab, setActiveTab] = useState("Details");

  const tabs = [
    {
      key: "Details",
      label: "Details",
      content: (
        <Details estate={estate}/>
      ),
    },
    {
      key: "Properties",
      label: "Properties",
      content: (
        <div>
          <p>This is the Properties Page</p>
        </div>
      ),
    },
    {
      key: "Allocation",
      label: "Allocation",
      content: (
        <div>
          <p>All estate-related documents will appear here.</p>
        </div>
      ),
    },
    {
        key: "Prospects",
        label: "Prospects",
        content: (
          <div>
            <p>This is the overview of Prospects Page.</p>
          </div>
        ),
      },
      {
        key: "Analytics",
        label: "Analytics",
        content: (
          <div>
            <p>This is the overview of Analytics.</p>
          </div>
        ),
      },
      {
        key: "Activity",
        label: "Activity",
        content: (
          <div>
            <p>This is the overview of Activities.</p>
          </div>
        ),
      },
  ];

  return (
    <div>
      <div className="border-b border-lightGray flex gap-6 px-[30px] mt-[10px]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 text-[13px] leading-[10px] font-redhat transition ${
              activeTab === tab.key
                ? "font-bold text-green border-b-2 border-green"
                : "text-deepGray font-semibold hover:text-green"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="py-[10px] px-[30px]">
        {tabs.find((tab) => tab.key === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
