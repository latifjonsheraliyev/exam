import useAuth from "../../../../Components/Hooks/useAuth/useAuth";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import WishProduct from "../../../../Components/WishProduct/WishProduct";
import img1 from "../../../../assets/product/image1.png";
import img2 from "../../../../assets/product/image2.png";
import img3 from "../../../../assets/product/image3.png";
import img4 from "../../../../assets/product/image4.png";
import img5 from "../../../../assets/product/image5.png";
import img6 from "../../../../assets/product/image6.png";


const WishList = () => {
   
    const { wishProduct} = useAuth();
    
  return (
    <div className="container mx-auto px-[10px] md:px-[10px] mb-[100px]  ">
      {/* Breadcrumb start  */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* Breadcrumb end  */}
      <div className="mt-[15px] mb-[50px]">
        <h1 className="text-[20px] font-medium">Wish list</h1>
        <p className="text-[#717171] text-[16px] font-light">See your favorites list here</p>
      </div>

      <div>
        { wishProduct.length > 0 ? (
          <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {wishProduct.map((pc,i) => (
              <WishProduct key={i} pc={pc}></WishProduct>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-32">
            <p className="text-center text-gray-500 text-base md:text-lg lg:text-xl">
              No products available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
