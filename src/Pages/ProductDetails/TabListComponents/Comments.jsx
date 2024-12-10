import React, { useState } from "react";
import { FaAngleDown, FaCommentDots } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import useAuth from "../../../Components/Hooks/useAuth/useAuth";
import { toast } from "react-toastify";
const Comments = ({ isPresentPastOrder }) => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Gabriel",
      date: "July 28, 2023",
      rating: 4.5,
      content:
        "I needed a fast, efficient laptop for on the go use. Battery life is amazing. Build quality is fantastic. Perfect fit for my needs.",
      avatar: "https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg",
    },
    {
      id: 2,
      name: "Gabriel",
      date: "July 28, 2023",
      rating: 4.5,
      content:
        "This macbook air at first feels just so big to me using it for school, and after a while, it felt as a perfect size. I look at it sometimes and realize how portable and small it is, but IT FEELS AS BIG AS LIKE A TV SCREEN. It's not a huge computer, but when your doing work and typing or whatever watching youtube it feels like a movie screen, beautiful. I never had such a good computer that just feels like a breath of fresh air. If you are contemplating on buying one, I would get 512 GB of storage and 16 ram. You will not be disappointed if you buy this no matter what, I strongly recommend it.",
      avatar:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]);
  const [newReview, setNewReview] = useState("");
  const handleInputChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isPresentPastOrder) {
      if (newReview.trim() !== "") {
        const newReviewEntry = {
          id: reviews.length + 1, // or use a better ID generation method

          date: new Date().toLocaleDateString(),
          rating: 5, // default rating, or allow user to set it
          content: newReview,
        };
        setReviews([newReviewEntry, ...reviews]);
        setNewReview("");
      }
    } else {
      setNewReview("");
      toast.warning(
        "You must place an order and receive the product before you can leave a review. Thank you for your understanding!"
      );
    }
  };
  return (
    <div className="my-20 ">
      <div className="flex flex-col lg:flex-row lg:gap-14">
        {/* section-1  */}
        <div className="lg:w-1/4 w-full p-4 lg:p-6">
          <h1 className="text-3xl  font-semibold mb-8 text-[#0C68F4]">Comments</h1>
          <div className="card bg-base-100 lg:w-96 w-full ">
            <div>
              <h2 className="text-2xl mb-6">leave your comments here for other customers</h2>
              {/* Input for New Review */}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Share your thoughts about this product here"
                  className="input input-bordered w-full h-20"
                  value={newReview}
                  onChange={handleInputChange}
                />
                <button className="btn rounded-lg btn-lg border-[#0C68F4] bg-white text-[#0C68F4] border-2 hover:text-white hover:border-[#0C68F4] hover:bg-[#0C68F4] w-full text-xl font-semibold mt-6">
                  Submit <FaCommentDots className="h-7 w-7" />
                </button>
              </form>

              <div>
                <h1 className="text-2xl mt-6 font-semibold">By feature</h1>
                <div className="flex items-center mt-2 gap-4">
                  <p className="text-semibold ">Battery charge</p>
                  <progress
                    className="progress progress-warning mt-1 w-52"
                    value="70"
                    max="100"
                  ></progress>
                  <p className="font-bold">4.8</p>
                </div>
                <div className="flex items-center mt-2 gap-4">
                  <p className="text-semibold ">Monitor</p>
                  <progress
                    className="progress progress-warning mt-1 ml-10 w-52"
                    value="80"
                    max="100"
                  ></progress>
                  <p className="font-bold"> 4.9</p>
                </div>
                <div className="flex items-center mt-2 gap-4">
                  <p className="text-semibold ">Lightness</p>
                  <progress
                    className="progress progress-warning mt-1 w-52 ml-8"
                    value="50"
                    max="100"
                  ></progress>
                  <p className="font-bold"> 4.3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section-2  */}
        <div className="lg:w-3/4 lg:ml-10 w-full p-4 lg:p-6">
          {reviews.map((review) => (
            <div key={review.id} className="card mb-6 lg:card-side bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-20 rounded-full">
                        <img
                          src={review.avatar || user.photoURL}
                          alt={review.name || user.displayName}
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="card-title">{review.name || user.displayName}</h2>
                      <p className="text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-[#063A88] text-white border rounded-lg px-2 p-1">
                    <IoStar className="w-5 h-5" />
                    <p className="font-semibold">{review.rating}</p>
                  </div>
                </div>
                <p className="font-semibold text-xl text-gray-600">{review.content}</p>
                <div className="card-actions justify-end">
                  <button className="btn text-xl text-blue-600 bg-white hover:bg-white">
                    Show More <FaAngleDown />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
