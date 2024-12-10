import { useState } from "react";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TechnicalDetails from "./TabListComponents/TechnicalDetails";
import SimilarProduct from "./TabListComponents/SimilarProduct";
import Comments from "./TabListComponents/Comments";

const TabListProduct = ({ product, similarProduct,isPresentPastOrder }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="mt-20">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList
          role="tablist"
          className="tabs  tabs-bordered lg:max-w-screen-xl	max-w-screen-sm mx-auto "
        >
          <Tab role="tab" className="tab pr-4  text-2xl font-semibold border-0">
            Technical Details
          </Tab>
          <Tab role="tab" className="tab text-2xl font-semibold border-0">
            Similar Product
          </Tab>
          <Tab role="tab" className="tab text-2xl font-semibold border-0">
            Comments
          </Tab>
        </TabList>

        {/* tab-1  */}
        <TabPanel>
          <TechnicalDetails product={product} key={product._id}></TechnicalDetails>
        </TabPanel>
        {/* tab-2 */}
        <TabPanel>
          <>
            {similarProduct?.length > 0 ? (
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
                {similarProduct?.slice(0, 4)?.map((pc, i) => (
                  <SimilarProduct key={i} pc={pc}></SimilarProduct>
                ))}
              </div>
            ) : (
              <div>
                {" "}
                <p className="text-center text-[30px] font-bold text-gray-500">
                  No products available
                </p>
              </div>
            )}
          </>
        </TabPanel>
        {/* tab-3  */}
        <TabPanel>
          <Comments isPresentPastOrder={isPresentPastOrder}></Comments>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabListProduct;
