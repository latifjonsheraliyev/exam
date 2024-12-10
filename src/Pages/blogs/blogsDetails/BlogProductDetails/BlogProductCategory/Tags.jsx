import React from "react";

const Tags = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-6">Tags</h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
        <button className="btn btn-outline btn-primary">Technology</button>
        <button className="btn btn-outline btn-primary">Headset</button>
        <button className="btn btn-outline btn-primary">Phone</button>
        <button className="btn btn-outline btn-primary">Wireless</button>
        <button className="btn btn-outline btn-primary">Apple</button>
      </div>
    </div>
  );
};

export default Tags;
