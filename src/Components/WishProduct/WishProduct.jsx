import { BsCart4 } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import line from "../../assets/product/Line.png";
import useAuth from "../Hooks/useAuth/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";

const WishProduct = ({ pc }) => {
  const axiosPublic = useAxiosPublic();
  const { user ,fetchWishList} = useAuth();
  
  const userEmail = user?.email;
  const {
    category,
    color,
    driveSize,
    featureImage,
    gpuBrand,
    modelName,
    name,
    processor,
    ram,
    rate,
    regularPrice,
    screenSize,
    sellPrice,
    stock,
    _id,
  } = pc;


  const handelWishItemDelete= async (_id, userEmail)=>{
    console.log(2)
    try {
      const response = await axiosPublic.delete("/wishlist/remove", {
        data: { userId: userEmail, productId: _id }, // Sending userId and productId in the body
      });
      fetchWishList()
      
    } catch (error) {
      console.error("Error removing from wishlist", error);
    }
  }
  
  return (
    <div className="p-[16px] rounded-[8px] shadow-md  mx-auto">
      <div className="text-center">
        <img className="w-[255px] h-[190px] mx-auto" src={featureImage} alt="" />
        <img className=" my-[16px] " src={line} alt="" />
      </div>
      <p className="text-[16px] font-light text-[#063A88]">
      {name}
      </p>
      <div className="mt-[8px] flex items-center justify-between">
        <button className="btn text-[#0C68F4] text-[16px] font-normal rounded-[8px]">
          <BsCart4></BsCart4>
          Add to cart
        </button>
        <button onClick={()=>handelWishItemDelete(_id, userEmail)}> 
          <RiDeleteBin2Fill className="text-[red] text-[24px]"></RiDeleteBin2Fill>
        </button>
      </div>
    </div>
  );
};

export default WishProduct;
