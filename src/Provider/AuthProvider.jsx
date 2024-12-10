import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Components/Firebase/Firebase.config";
import useAxiosPublic from "../Components/Hooks/useAxiosPublic/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();

  // wishList product related state
  const [wishProduct, setWishProduct] = useState([]);
  const [wistList, setWistList] = useState([]);

  // cart product related state
  const [cartProduct, setCartProduct] = useState([]);
  const [cartProductID, setCartProductID] = useState([]);
// lottery related state
  const [ticketNumber, setTicketNumber] = useState(null);

  // shipping cost state
  const[shippingCost,setShippingCost]=useState(5)
   // discountAmount state
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
// final price with product cost , discount, shipping 
  const[finalPrice,setFinalPrice]=useState(null);

  /////////////////// user related state & function start /////////////////
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    setWistList([]);
    setCartProduct({ cart: [], totalPrice: 0 });
    setCartProductID([]);
    return signOut(auth);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post('jwt', userInfo)
          .then((res) => {
            if (res?.data?.token) {
              localStorage.setItem('access-token', res?.data?.token);
              setLoading(false);
            }
          });
      } else {
        localStorage.removeItem('access-token');
      }
    });
    return () => unsubscribe();
  }, [axiosPublic]);

  // WishList product-related functions
  const fetchWishList = async () => {
    const userEmail = user?.email;
    const response = await axiosPublic.get(`/wishlist/${userEmail}`);
    const data = response?.data?.products?.map((item) => item?._id);
    setWishProduct(response?.data?.products);
    setWistList(data);
  };

  useEffect(() => {
    fetchWishList();
  }, []);

  // Cart product-related functions
  const fetchCartDetails = async () => {
    try {
      const userEmail = user?.email;
      const response = await axiosPublic.get(`/cart/${userEmail}`);
      const { cart, totalPrice } = response?.data;
      setCartProductID(cart.map((item) => item.product._id));
      setCartProduct({ cart, totalPrice });
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCartDetails();
  }, []);

  const authInfo = {
    user,
    loading,
    wishProduct,
    wistList,
    cartProduct,
    cartProductID,
    shippingCost,
    discountAmount, 
    finalPrice,
    discountApplied, 
    ticketNumber, 
    createUser,
    signIn,
    logOut,
    googleSignIn,
    setWishProduct,
    setWistList,
    fetchWishList,
    setCartProduct,
    fetchCartDetails,
    setCartProductID,
    setShippingCost,
    setDiscountAmount,
    setFinalPrice,
    setDiscountApplied,
    setTicketNumber,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
