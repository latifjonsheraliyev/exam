import { useEffect, useState } from "react";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";

import { toast } from "react-toastify";

const ManageProducts = () => {
  const [editMode, setEditMode] = useState(null); // To track which product is being edited
  const [editProduct, setEditProduct] = useState({
    id: null,
    name: "",
    category: "",
    regularPrice: "",
    sellPrice: "",
    stock: false,
  });


  const [products, setProducts] = useState([]);
  console.log(editProduct);
  const axiosSecure = useAxiosSecure();

  // tab category filter state
  const [productsLaptop, setProductsLaptop] = useState([]);
  const [productsCamera, setProductsCamera] = useState([]);
  const [productsWatch, setProductsWatch] = useState([]);
  const [productsTab, setProductsTab] = useState([]);
  const [productsMobile, setProductsMobile] = useState([]);
  const [productsGame, setProductsGame] = useState([]);

  const [productsHeadphone, setProductsHeadphone] = useState([]);

  // get all   product details and make an API call

  // Function to fetch all products and update state initial call
  const fetchProducts = async () => {
    try {
      const response = await axiosSecure.get("/products/all");
      const data = response.data;

      setProducts(data);
      setProductsLaptop(data.filter((cat) => cat.category === "Laptop"));
      setProductsCamera(data.filter((cat) => cat.category === "Camera"));
      setProductsWatch(data.filter((cat) => cat.category === "Watch"));
      setProductsTab(data.filter((cat) => cat.category === "Tab"));
      setProductsMobile(data.filter((cat) => cat.category === "Mobile"));
      setProductsGame(data.filter((cat) => cat.category === "Game"));

      setProductsHeadphone(data.filter((cat) => cat.category === "Headphone"));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);



  // Delete the  product details and make an API call
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");

    if (confirmDelete) {
      try {
        const response = await axiosSecure.delete(`/products/delete/${id}`)
          .then((res => {
            if (res?.data?.deletedCount > 0) {
              fetchProducts(); // Call fetchProducts to refresh the product list
              setProducts(products.filter((product) => product._id !== id));
              toast.success('Product deleted successfully!')
            }
          }))


      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error('An error occurred while deleting the product.');
      }
    }
  };


  // Handle edit button click

  const onEdit = (product) => {
    setEditMode(product._id);
    setEditProduct({
      id: product._id,
      name: product.name,
      category: product.category,
      regularPrice: product.regularPrice,
      sellPrice: product.sellPrice,
      stock: product.stock,
    });
  };

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Save the updated product details and make an API call
  const handleSave = async () => {
    try {
      axiosSecure.patch(`/products/edit/${editProduct.id}`, editProduct)
        .then((res) => {
          console.log(res.data)
          if (res.data.modifiedCount > 0) {
            fetchProducts(); // Call fetchProducts to refresh the product list
            toast.success('Successfully Make admin')
          }
        })
      await refetch(); // Call refetch to update data

      alert("Product updated successfully!");
    } catch (error) {
      // console.error("Error updating product:", error);
      // alert("An error occurred while updating the product.");
    }
    setEditMode(null);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditMode(null);
  };
  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Breadcrumb start  */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* Breadcrumb end  */}
      <h1 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-700">
        Manage All Products
      </h1>

      {/* tab */}
      <div className="px-[5px]">
        <div role="tablist" className="tabs tabs-bordered overflow-x-auto">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-[16px] font-medium"
            aria-label="Laptop"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10 ">
            {/* product tab */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-b-2 border-gray-300">
                  <tr>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Image
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Name
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Category
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Regular Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Offer Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">Stock</th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsLaptop.length === 0 ? (
                    // Display this row if no products exist
                    <tr>
                      <td colSpan="7" className="text-center p-4 text-gray-500">
                        Product not available
                      </td>
                    </tr>
                  ) : (
                    // Loop through products if they exist
                    productsLaptop.map((product) => (
                      <tr
                        key={product._id}
                        className="border-b transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg rounded-lg"
                      >
                        {/* Product Image */}
                        <td className="p-2 sm:p-4">
                          <img
                            src={product?.featureImage}
                            alt={product.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                          />
                        </td>

                        {/* Editable fields if in edit mode */}
                        {editMode === product._id ? (
                          <>
                            {/* Product Name */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="name"
                                value={editProduct?.name}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Category */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="category"
                                value={editProduct?.category}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Regular Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="regularPrice"
                                value={editProduct?.regularPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Offer Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="sellPrice"
                                value={editProduct?.sellPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Stock */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="checkbox"
                                name="stock"
                                checked={editProduct?.stock}
                                onChange={handleChange}
                                className="w-4 h-4"
                              />
                            </td>

                            {/* Save/Cancel Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={handleSave}
                                className="bg-green-500 hover:bg-green-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancel}
                                className="bg-gray-500 hover:bg-gray-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Cancel
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            {/* Display Product Info */}
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.name}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.category}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.regularPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-red-500 font-bold text-sm sm:text-base">
                              {product?.sellPrice}

                            </td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.stock ? "In Stock" : "Out of Stock"}
                            </td>

                            {/* Edit/Delete Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={() => onEdit(product)}
                                className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(product._id)}
                                className="bg-red-500 hover:bg-red-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Delete
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* product table */}
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-[16px] font-medium "
            aria-label="Camera"
          />
          <div role="tabpanel" className="tab-content p-10 ">
            {/* product tab */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-b-2 border-gray-300">
                  <tr>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Image
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Name
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Category
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Regular Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Offer Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">Stock</th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsCamera.length === 0 ? (
                    // Display this row if no products exist
                    <tr>
                      <td colSpan="7" className="text-center p-4 text-gray-500">
                        Product not available
                      </td>
                    </tr>
                  ) : (
                    // Loop through products if they exist
                    productsCamera.map((product) => (
                      <tr
                        key={product._id}
                        className="border-b transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg rounded-lg"
                      >
                        {/* Product Image */}
                        <td className="p-2 sm:p-4">
                          <img
                            src={product?.featureImage}
                            alt={product.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                          />
                        </td>

                        {/* Editable fields if in edit mode */}
                        {editMode === product._id ? (
                          <>
                            {/* Product Name */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="name"
                                value={editProduct?.name}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Category */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="category"
                                value={editProduct?.category}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Regular Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="regularPrice"
                                value={editProduct?.regularPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Offer Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="sellPrice"
                                value={editProduct?.sellPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Stock */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="checkbox"
                                name="stock"
                                checked={editProduct?.stock}
                                onChange={handleChange}
                                className="w-4 h-4"
                              />
                            </td>

                            {/* Save/Cancel Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={handleSave}
                                className="bg-green-500 hover:bg-green-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancel}
                                className="bg-gray-500 hover:bg-gray-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Cancel
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            {/* Display Product Info */}
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.name}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.category}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.regularPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-red-500 font-bold text-sm sm:text-base">
                              {product?.sellPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.stock ? "In Stock" : "Out of Stock"}
                            </td>

                            {/* Edit/Delete Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={() => onEdit(product)}
                                className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(product._id)}
                                className="bg-red-500 hover:bg-red-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Delete
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* product table */}
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-[16px] font-medium"
            aria-label="Watch"
          />
          <div role="tabpanel" className="tab-content p-10">
            {/* product tab */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-b-2 border-gray-300">
                  <tr>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Image
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Name
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Category
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Regular Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Offer Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">Stock</th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsWatch.length === 0 ? (
                    // Display this row if no products exist
                    <tr>
                      <td colSpan="7" className="text-center p-4 text-gray-500">
                        Product not available
                      </td>
                    </tr>
                  ) : (
                    // Loop through products if they exist
                    productsWatch.map((product) => (
                      <tr
                        key={product?._id}
                        className="border-b transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg rounded-lg"
                      >
                        {/* Product Image */}
                        <td className="p-2 sm:p-4">
                          <img
                            src={product?.featureImage}
                            alt={product?.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                          />
                        </td>

                        {/* Editable fields if in edit mode */}
                        {editMode === product._id ? (
                          <>
                            {/* Product Name */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="name"
                                value={editProduct?.name}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Category */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="category"
                                value={editProduct?.category}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Regular Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="regularPrice"
                                value={editProduct?.regularPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Offer Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="sellPrice"
                                value={editProduct?.sellPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Stock */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="checkbox"
                                name="stock"
                                checked={editProduct?.stock}
                                onChange={handleChange}
                                className="w-4 h-4"
                              />
                            </td>

                            {/* Save/Cancel Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={handleSave}
                                className="bg-green-500 hover:bg-green-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancel}
                                className="bg-gray-500 hover:bg-gray-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Cancel
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            {/* Display Product Info */}
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product?.name}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product?.category}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product?.regularPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-red-500 font-bold text-sm sm:text-base">
                              {product?.sellPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product?.stock ? "In Stock" : "Out of Stock"}
                            </td>

                            {/* Edit/Delete Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={() => onEdit(product)}
                                className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(product?._id)}
                                className="bg-red-500 hover:bg-red-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Delete
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* product table */}
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-[16px] font-medium"
            aria-label="Tab"
          />
          <div role="tabpanel" className="tab-content p-10">
            {/* product tab */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-b-2 border-gray-300">
                  <tr>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Image
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Name
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Category
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Regular Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Offer Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">Stock</th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsTab.length === 0 ? (
                    // Display this row if no products exist
                    <tr>
                      <td colSpan="7" className="text-center p-4 text-gray-500">
                        Product not available
                      </td>
                    </tr>
                  ) : (
                    // Loop through products if they exist
                    productsTab.map((product) => (
                      <tr
                        key={product._id}
                        className="border-b transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg rounded-lg"
                      >
                        {/* Product Image */}
                        <td className="p-2 sm:p-4">
                          <img
                            src={product?.featureImage}
                            alt={product.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                          />
                        </td>

                        {/* Editable fields if in edit mode */}
                        {editMode === product._id ? (
                          <>
                            {/* Product Name */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="name"
                                value={editProduct?.name}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Category */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="category"
                                value={editProduct?.category}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Regular Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="regularPrice"
                                value={editProduct?.regularPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Offer Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="sellPrice"
                                value={editProduct?.sellPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Stock */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="checkbox"
                                name="stock"
                                checked={editProduct?.stock}
                                onChange={handleChange}
                                className="w-4 h-4"
                              />
                            </td>

                            {/* Save/Cancel Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={handleSave}
                                className="bg-green-500 hover:bg-green-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancel}
                                className="bg-gray-500 hover:bg-gray-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Cancel
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            {/* Display Product Info */}
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.name}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.category}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.regularPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-red-500 font-bold text-sm sm:text-base">
                              {product?.sellPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.stock ? "In Stock" : "Out of Stock"}
                            </td>

                            {/* Edit/Delete Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={() => onEdit(product)}
                                className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(product._id)}
                                className="bg-red-500 hover:bg-red-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Delete
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* product table */}
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-[16px] font-medium"
            aria-label="Mobile"
          />
          <div role="tabpanel" className="tab-content p-10">
            {/* product tab */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-b-2 border-gray-300">
                  <tr>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Image
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Name
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Category
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Regular Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Offer Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">Stock</th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsMobile.length === 0 ? (
                    // Display this row if no products exist
                    <tr>
                      <td colSpan="7" className="text-center p-4 text-gray-500">
                        Product not available
                      </td>
                    </tr>
                  ) : (
                    // Loop through products if they exist
                    productsMobile.map((product) => (
                      <tr
                        key={product._id}
                        className="border-b transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg rounded-lg"
                      >
                        {/* Product Image */}
                        <td className="p-2 sm:p-4">
                          <img
                            src={product?.featureImage}
                            alt={product.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                          />
                        </td>

                        {/* Editable fields if in edit mode */}
                        {editMode === product._id ? (
                          <>
                            {/* Product Name */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="name"
                                value={editProduct?.name}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Category */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="category"
                                value={editProduct?.category}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Regular Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="regularPrice"
                                value={editProduct?.regularPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Offer Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="sellPrice"
                                value={editProduct?.sellPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Stock */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="checkbox"
                                name="stock"
                                checked={editProduct?.stock}
                                onChange={handleChange}
                                className="w-4 h-4"
                              />
                            </td>

                            {/* Save/Cancel Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={handleSave}
                                className="bg-green-500 hover:bg-green-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancel}
                                className="bg-gray-500 hover:bg-gray-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Cancel
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            {/* Display Product Info */}
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.name}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.category}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.regularPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-red-500 font-bold text-sm sm:text-base">
                              {product?.sellPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.stock ? "In Stock" : "Out of Stock"}
                            </td>

                            {/* Edit/Delete Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={() => onEdit(product)}
                                className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(product._id)}
                                className="bg-red-500 hover:bg-red-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Delete
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* product table */}
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-[16px] font-medium"
            aria-label="Game"
          />
          <div role="tabpanel" className="tab-content p-10">
            {/* product tab */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-b-2 border-gray-300">
                  <tr>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Image
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Name
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Category
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Regular Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Offer Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">Stock</th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsGame.length === 0 ? (
                    // Display this row if no products exist
                    <tr>
                      <td colSpan="7" className="text-center p-4 text-gray-500">
                        Product not available
                      </td>
                    </tr>
                  ) : (
                    // Loop through products if they exist
                    productsGame.map((product) => (
                      <tr
                        key={product._id}
                        className="border-b transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg rounded-lg"
                      >
                        {/* Product Image */}
                        <td className="p-2 sm:p-4">
                          <img
                            src={product?.featureImage}
                            alt={product.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                          />
                        </td>

                        {/* Editable fields if in edit mode */}
                        {editMode === product._id ? (
                          <>
                            {/* Product Name */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="name"
                                value={editProduct?.name}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Category */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="category"
                                value={editProduct?.category}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Regular Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="regularPrice"
                                value={editProduct?.regularPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Offer Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="sellPrice"
                                value={editProduct?.sellPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Stock */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="checkbox"
                                name="stock"
                                checked={editProduct?.stock}
                                onChange={handleChange}
                                className="w-4 h-4"
                              />
                            </td>

                            {/* Save/Cancel Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={handleSave}
                                className="bg-green-500 hover:bg-green-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancel}
                                className="bg-gray-500 hover:bg-gray-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Cancel
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            {/* Display Product Info */}
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.name}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.category}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.regularPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-red-500 font-bold text-sm sm:text-base">
                              {product?.sellPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.stock ? "In Stock" : "Out of Stock"}
                            </td>

                            {/* Edit/Delete Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={() => onEdit(product)}
                                className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(product._id)}
                                className="bg-red-500 hover:bg-red-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Delete
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* product table */}
          </div>





          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-[16px] font-medium"
            aria-label="Headphone"
          />
          <div role="tabpanel" className="tab-content p-10">
            {/* product tab */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-b-2 border-gray-300">
                  <tr>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Image
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Product Name
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Category
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Regular Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Offer Price
                    </th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">Stock</th>
                    <th className="p-2 sm:p-4 text-left font-medium text-sm sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsHeadphone.length === 0 ? (
                    // Display this row if no products exist
                    <tr>
                      <td colSpan="7" className="text-center p-4 text-gray-500">
                        Product not available
                      </td>
                    </tr>
                  ) : (
                    // Loop through products if they exist
                    productsHeadphone.map((product) => (
                      <tr
                        key={product._id}
                        className="border-b transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg rounded-lg"
                      >
                        {/* Product Image */}
                        <td className="p-2 sm:p-4">
                          <img
                            src={product?.featureImage}
                            alt={product.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                          />
                        </td>

                        {/* Editable fields if in edit mode */}
                        {editMode === product._id ? (
                          <>
                            {/* Product Name */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="name"
                                value={editProduct?.name}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Category */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="category"
                                value={editProduct?.category}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Regular Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="regularPrice"
                                value={editProduct?.regularPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Offer Price */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="text"
                                name="sellPrice"
                                value={editProduct?.sellPrice}
                                onChange={handleChange}
                                className="w-full p-1 border rounded"
                              />
                            </td>

                            {/* Stock */}
                            <td className="p-2 sm:p-4">
                              <input
                                type="checkbox"
                                name="stock"
                                checked={editProduct?.stock}
                                onChange={handleChange}
                                className="w-4 h-4"
                              />
                            </td>

                            {/* Save/Cancel Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={handleSave}
                                className="bg-green-500 hover:bg-green-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancel}
                                className="bg-gray-500 hover:bg-gray-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Cancel
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            {/* Display Product Info */}
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.name}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">{product.category}</td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.regularPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-red-500 font-bold text-sm sm:text-base">
                              {product?.sellPrice}
                            </td>
                            <td className="p-2 sm:p-4 text-sm sm:text-base">
                              {product.stock ? "In Stock" : "Out of Stock"}
                            </td>

                            {/* Edit/Delete Buttons */}
                            <td className="p-2 sm:p-4 flex space-x-2">
                              <button
                                onClick={() => onEdit(product)}
                                className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(product._id)}
                                className="bg-red-500 hover:bg-red-700 text-white text-xs sm:text-sm font-bold py-1 sm:py-2 px-2 sm:px-4 rounded"
                              >
                                Delete
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* product table */}
          </div>
        </div>
      </div>
      {/* tab */}
    </div>
  );
};

export default ManageProducts;
