import React, { useState } from "react";

const Tabs = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className="border-b border-gray-200 mb-6">
      <ul className="flex space-x-4">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`cursor-pointer pb-2 ${
              selectedTab === tab.id
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.label} <span>({tab.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
