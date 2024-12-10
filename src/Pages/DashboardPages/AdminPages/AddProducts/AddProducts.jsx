import { useState } from "react";
import axios from "axios";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";

const AddProducts = () => {
  const [loader, setLoader] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [product, setProduct] = useState({
    name: "",
    rate: "",
    regularPrice: "",
    sellPrice: "",
    brand: "",
    modelName: "",
    screenSize: "",
    driveSize: "",
    ram: "",
    processor: "",
    color: "",
    gpuBrand: "",
    category: "Laptop",
    stock: true,
  });

  const [featureImage, setFeatureImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const categories = ["Laptop", "Camera", "Watch", "Tab", "Game", "Mobile", "Headphone"];

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFeatureImageChange = (e) => {
    setFeatureImage(e.target.files[0]);
  };

  const handleGalleryImageChange = (e) => {
    setGalleryImages([...e.target.files]);
  };

  const uploadImageToImageBB = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=97099935520e7352c4d76225795a2662`,
        formData
      );
      return response.data.data.url;
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();

    // Upload feature image
    const featureImageUrl = await uploadImageToImageBB(featureImage);

    // Upload gallery images
    const galleryImageUrls = await Promise.all(
      galleryImages.map((image) => uploadImageToImageBB(image))
    );

    const productData = {
      ...product,
      featureImage: featureImageUrl,
      galleryImages: galleryImageUrls,
    };

    // Make API call to add product
    try {
      await axiosSecure.post("/products/add", productData).then((res) => {
        if (res?.status == 200) {
          toast.success("Successfully added a products");
          setLoader(false);
        }
      });
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product.");
      setLoader(false);
    }

    setProduct({
      name: "",
      rate: "",
      regularPrice: "",
      sellPrice: "",
      brand: "",
      modelName: "",
      screenSize: "",
      driveSize: "",
      ram: "",
      processor: "",
      color: "",
      gpuBrand: "",
      KeyboardType: "",
      category: "Laptop",
      stock: true,
      TouchPad: "",
      WebCam: "",
      Speaker: "",
      BatteryCapacity: "",
      WarrantyDetails: "",
    });
  };
  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Breadcrumb start  */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* Breadcrumb end  */}
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Product Rate */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Rate</label>
          <input
            type="number"
            name="rate"
            value={product.rate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Prices */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Regular Price</label>
            <input
              type="number"
              name="regularPrice"
              value={product.regularPrice}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Sell Price</label>
            <input
              type="number"
              name="sellPrice"
              value={product.sellPrice}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Brand and Model */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Brand</label>
            {product.category == "Laptop" && (
              <select
                name="brand"
                value={product.brand}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="" disabled>
                  Select a brand
                </option>
                <option value="Apple">Apple</option>
                <option value="Dell">Dell</option>
                <option value="HP">HP</option>
                <option value="Lenovo">Lenovo</option>
                <option value="ASUS">ASUS</option>
                <option value="Acer">Acer</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Razer">Razer</option>
              </select>
            )}
            {product.category == "Camera" && (
              <select
                name="brand"
                value={product.brand}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="" disabled>
                  Select a brand
                </option>
                <option value="Canon">Canon</option>
                <option value="Nikon">Nikon</option>
                <option value="Sony">Sony</option>
                <option value="Fujifilm">Fujifilm</option>
                <option value="Panasonic">Panasonic</option>
                <option value="Olympus">Olympus</option>
                <option value="Leica">Leica</option>
                <option value="Pentax">Pentax</option>
                <option value="GoPro">GoPro</option>
                <option value="Hasselblad">Hasselblad</option>
              </select>
            )}
            {product.category == "Watch" && (
              <select
                name="brand"
                value={product.brand}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="" disabled>
                  Select a brand
                </option>
                <option value="Rolex">Rolex</option>
                <option value="Omega">Omega</option>
                <option value="Tag Heuer">Tag Heuer</option>
                <option value="Casio">Casio</option>
                <option value="Seiko">Seiko</option>
                <option value="Tissot">Tissot</option>
                <option value="Fossil">Fossil</option>
                <option value="Apple">Apple</option>
                <option value="Garmin">Garmin</option>
                <option value="Swatch">Swatch</option>
              </select>
            )}
            {product.category == "Tab" && (
              <select
                name="brand"
                value={product.brand}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="" disabled>
                  Select a brand
                </option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Amazon">Amazon</option>
                <option value="Lenovo">Lenovo</option>
                <option value="Huawei">Huawei</option>
                <option value="Google">Google</option>
                <option value="Asus">Asus</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Dell">Dell</option>
              </select>
            )}
            {product.category == "Mobile" && (
              <select
                name="brand"
                value={product.brand}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="" disabled>
                  Select a brand
                </option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Huawei">Huawei</option>
                <option value="Nokia">Nokia</option>
                <option value="Sony">Sony</option>
                <option value="Motorola">Motorola</option>
                <option value="Oppo">Oppo</option>
              </select>
            )}
            {product.category == "Headphone" && (
              <select
                name="brand"
                value={product.brand}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="" disabled>
                  Select a brand
                </option>
                <option value="Sony">Sony</option>
                <option value="Bose">Bose</option>
                <option value="Sennheiser">Sennheiser</option>
                <option value="Apple">Apple</option>
                <option value="Beats">Beats</option>
                <option value="JBL">JBL</option>
                <option value="Audio-Technica">Audio-Technica</option>
                <option value="Bang & Olufsen">Bang & Olufsen</option>
                <option value="Skullcandy">Skullcandy</option>
                <option value="Samsung">Samsung</option>
              </select>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Model Name</label>
            <input
              type="text"
              name="modelName"
              value={product.modelName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-4">
          {(product.category === "Laptop" ||
            product.category === "Tab" ||
            product.category === "Mobile" ||
            product.category === "Camera") && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Drive Size</label>

                <select
                  name="driveSize"
                  value={product.driveSize}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="" disabled>
                    Select drive size
                  </option>
                  <option value="128GB">128GB</option>
                  <option value="256GB">256GB</option>
                  <option value="512GB">512GB</option>
                  <option value="1TB">1TB</option>
                  <option value="2TB">2TB</option>
                  <option value="4TB">4TB</option>
                </select>
              </div>
            )}

          {(product.category === "Laptop" ||
            product.category === "Tab" ||
            product.category === "Mobile" ||
            product.category === "Watch") && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">RAM</label>
                <select
                  name="ram"
                  value={product.ram}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="" disabled>
                    Select RAM size
                  </option>
                  <option value="4GB">4GB</option>
                  <option value="8GB">8GB</option>
                  <option value="12GB">12GB</option>
                  <option value="16GB">16GB</option>
                  <option value="32GB">32GB</option>
                  <option value="64GB">64GB</option>
                  <option value="128GB">128GB</option>
                </select>
              </div>
            )}

          {(product.category === "Laptop" ||
            product.category === "Tab" ||
            product.category === "Mobile") && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Processor</label>
                {(product.category === "Laptop" || product.category === "Tab") && (
                  <select
                    name="processor"
                    value={product.processor}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="" disabled>
                      Select a processor
                    </option>
                    <option value="Intel Core i3">Intel Core i3</option>
                    <option value="Intel Core i5">Intel Core i5</option>
                    <option value="Intel Core i7">Intel Core i7</option>
                    <option value="Intel Core i9">Intel Core i9</option>
                    <option value="AMD Ryzen 3">AMD Ryzen 3</option>
                    <option value="AMD Ryzen 5">AMD Ryzen 5</option>
                    <option value="AMD Ryzen 7">AMD Ryzen 7</option>
                    <option value="AMD Ryzen 9">AMD Ryzen 9</option>
                    <option value="Apple M1">Apple M1</option>
                    <option value="Apple M2">Apple M2</option>
                  </select>
                )}
                {product.category === "Mobile" && (
                  <select
                    name="processor"
                    value={product.processor}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="" disabled>
                      Select a mobile processor
                    </option>
                    <option value="Qualcomm Snapdragon 888">Qualcomm Snapdragon 888</option>
                    <option value="Qualcomm Snapdragon 865">Qualcomm Snapdragon 865</option>
                    <option value="Qualcomm Snapdragon 855">Qualcomm Snapdragon 855</option>
                    <option value="Qualcomm Snapdragon 845">Qualcomm Snapdragon 845</option>
                    <option value="Qualcomm Snapdragon 778G">Qualcomm Snapdragon 778G</option>
                    <option value="Qualcomm Snapdragon 750G">Qualcomm Snapdragon 750G</option>
                    <option value="Qualcomm Snapdragon 690">Qualcomm Snapdragon 690</option>
                    <option value="Qualcomm Snapdragon 675">Qualcomm Snapdragon 675</option>
                    <option value="Qualcomm Snapdragon 665">Qualcomm Snapdragon 665</option>
                    <option value="Qualcomm Snapdragon 450">Qualcomm Snapdragon 450</option>
                    <option value="Samsung Exynos 2100">Samsung Exynos 2100</option>
                    <option value="Samsung Exynos 1080">Samsung Exynos 1080</option>
                    <option value="Samsung Exynos 990">Samsung Exynos 990</option>
                    <option value="Samsung Exynos 980">Samsung Exynos 980</option>
                    <option value="Samsung Exynos 9611">Samsung Exynos 9611</option>
                    <option value="Samsung Exynos 850">Samsung Exynos 850</option>
                    <option value="MediaTek Dimensity 1200">MediaTek Dimensity 1200</option>
                    <option value="MediaTek Dimensity 1000">MediaTek Dimensity 1000</option>
                    <option value="MediaTek Helio G95">MediaTek Helio G95</option>
                    <option value="MediaTek Helio G90T">MediaTek Helio G90T</option>
                    <option value="MediaTek Helio G85">MediaTek Helio G85</option>
                    <option value="MediaTek P60">MediaTek P60</option>
                    <option value="Kirin 9000">Kirin 9000</option>
                    <option value="Kirin 990">Kirin 990</option>
                    <option value="Kirin 980">Kirin 980</option>
                    <option value="Kirin 810">Kirin 810</option>
                    <option value="Kirin 710A">Kirin 710A</option>
                    <option value="Apple A15 Bionic">Apple A15 Bionic</option>
                    <option value="Apple A14 Bionic">Apple A14 Bionic</option>
                    <option value="Apple A13 Bionic">Apple A13 Bionic</option>
                    <option value="Apple A12 Bionic">Apple A12 Bionic</option>
                    <option value="Apple A11 Bionic">Apple A11 Bionic</option>
                  </select>
                )}
              </div>
            )}

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Color</label>

            <select
              name="color"
              value={product.color}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="" disabled>
                Select a color variation
              </option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Silver">Silver</option>
              <option value="Gray">Gray</option>
              <option value="Gold">Gold</option>
              <option value="Rose Gold">Rose Gold</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Yellow">Yellow</option>
              <option value="Purple">Purple</option>
            </select>
          </div>
          {(product.category === "Laptop" ||
            product.category === "Tab" ||
            product.category === "Mobile" ||
            product.category === "Watch" ||
            product.category === "Camera") && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Screen Size</label>
                {product.category === "Laptop" && (
                  <select
                    name="screenSize"
                    value={product.screenSize}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="" disabled>
                      Select Laptop screen
                    </option>
                    <option value="11.6 x 7.9 inches">11.6 x 7.9 inches </option>
                    <option value="12.3 x 8.5 inches">12.3 x 8.5 inches</option>
                    <option value="13.3 x 8.6 inches">13.3 x 8.6 inches </option>
                    <option value="14.0 x 9.0 inches">14.0 x 9.0 inches </option>
                    <option value="15.6 x 10.0 inches">15.6 x 10.0 inches </option>
                    <option value="17.3 x 11.6 inches">17.3 x 11.6 inches </option>
                  </select>
                )}
                {product.category === "Tab" && (
                  <select
                    name="screenSize"
                    value={product.screenSize}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="" disabled>
                      Select Tab screen
                    </option>
                    <option value="7.0 x 4.0 inches">7.0 x 4.0 inches </option>
                    <option value="8.0 x 5.3 inches">8.0 x 5.3 inches</option>
                    <option value="9.7 x 7.3 inches">9.7 x 7.3 inches </option>
                    <option value="10.1 x 6.9 inches">10.1 x 6.9 inches </option>
                    <option value="11.0 x 8.5 inches">11.0 x 8.5 inches </option>
                    <option value="12.9 x 8.5 inches">12.9 x 8.5 inches </option>
                  </select>
                )}
                {product.category === "Mobile" && (
                  <select
                    name="screenSize"
                    value={product.screenSize}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="" disabled>
                      Select Mobile screen
                    </option>
                    <option value="5.0 x 2.5 inches">5.0 x 2.5 inches </option>
                    <option value="5.5 x 2.7 inches">5.5 x 2.7 inches </option>
                    <option value="6.0 x 2.9 inches">6.0 x 2.9 inches </option>
                    <option value="6.3 x 3.0 inches">6.3 x 3.0 inches </option>
                    <option value="6.7 x 3.1 inches">6.7 x 3.1 inches </option>
                    <option value="7.0 x 3.5 inches">7.0 x 3.5 inches </option>
                  </select>
                )}
                {product.category === "Watch" && (
                  <select
                    name="screenSize"
                    value={product.screenSize}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="" disabled>
                      Select Watch screen
                    </option>
                    <option value="38 x 38 mm">38 x 38 mm </option>
                    <option value="40 x 34 mm">40 x 34 mm </option>
                    <option value="44 x 44 mm">44 x 44 mm </option>
                    <option value="46 x 46 mm">46 x 46 mm </option>
                    <option value="42 x 42 mm">42 x 42 mm </option>
                    <option value="1.2 x 1.2 inches">1.2 x 1.2 inches </option>
                  </select>
                )}
                {product.category === "Camera" && (
                  <select
                    name="screenSize"
                    value={product.screenSize}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="" disabled>
                      Select Camera screen
                    </option>
                    <option value="4.5 x 3.0 inches">4.5 x 3.0 inches </option>
                    <option value="5.0 x 4.0 inches">5.0 x 4.0 inches</option>
                    <option value="5.5 x 4.5 inches">5.5 x 4.5 inches </option>
                    <option value="6.0 x 4.5 inches">6.0 x 4.5 inches </option>
                    <option value="6.5 x 4.0 inches">6.5 x 4.0 inches </option>
                    <option value="7.0 x 5.0 inches">7.0 x 5.0 inches </option>
                  </select>
                )}
              </div>
            )}

          {(product.category === "Laptop" ||
            product.category === "Tab" ||
            product.category === "Mobile") && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">GPU Brand</label>
                {(product.category === "Laptop" || product.category === "Tab") && (
                  <select
                    name="gpuBrand"
                    value={product.gpuBrand}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="" disabled>
                      Select a GPU brand
                    </option>
                    <option value="NVIDIA GeForce RTX 3080">NVIDIA GeForce RTX 3080</option>
                    <option value="NVIDIA GeForce RTX 3070">NVIDIA GeForce RTX 3070</option>
                    <option value="NVIDIA GeForce GTX 1660">NVIDIA GeForce GTX 1660</option>
                    <option value="NVIDIA GeForce GTX 1050 Ti">NVIDIA GeForce GTX 1050 Ti</option>
                    <option value="AMD Radeon RX 6800">AMD Radeon RX 6800</option>
                    <option value="AMD Radeon RX 6700 XT">AMD Radeon RX 6700 XT</option>
                    <option value="AMD Radeon RX 6600 XT">AMD Radeon RX 6600 XT</option>
                    <option value="Intel Iris Xe Graphics">Intel Iris Xe Graphics</option>
                    <option value="Apple M1 GPU">Apple M1 GPU</option>
                    <option value="Apple M1 Pro GPU">Apple M1 Pro GPU</option>
                    <option value="Apple M1 Max GPU">Apple M1 Max GPU</option>
                    <option value="NVIDIA Quadro P1000">NVIDIA Quadro P1000</option>
                    <option value="NVIDIA Quadro RTX 4000">NVIDIA Quadro RTX 4000</option>
                    <option value="AMD Radeon Pro 5500M">AMD Radeon Pro 5500M</option>
                    <option value="AMD Radeon Pro 5600M">AMD Radeon Pro 5600M</option>
                  </select>
                )}
                {product.category === "Mobile" && (
                  <select
                    name="gpuBrand"
                    value={product.gpuBrand}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="" disabled>
                      Select a mobile GPU brand
                    </option>
                    <option value="Qualcomm Adreno 660">Qualcomm Adreno 660</option>
                    <option value="Qualcomm Adreno 640">Qualcomm Adreno 640</option>
                    <option value="Qualcomm Adreno 612">Qualcomm Adreno 612</option>
                    <option value="ARM Mali-G78">ARM Mali-G78</option>
                    <option value="ARM Mali-G77">ARM Mali-G77</option>
                    <option value="ARM Mali-G76">ARM Mali-G76</option>
                    <option value="ARM Mali-G52">ARM Mali-G52</option>
                    <option value="ARM Mali-G31">ARM Mali-G31</option>
                    <option value="Apple GPU (A15 Bionic)">Apple GPU (A15 Bionic)</option>
                    <option value="Apple GPU (A14 Bionic)">Apple GPU (A14 Bionic)</option>
                    <option value="Apple GPU (A13 Bionic)">Apple GPU (A13 Bionic)</option>
                    <option value="Imagination PowerVR Series 9">Imagination PowerVR Series 9</option>
                    <option value="Imagination PowerVR Series 8">Imagination PowerVR Series 8</option>
                  </select>
                )}
              </div>
            )}

          {product.category === "Laptop" && (
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Keyboard Type</label>
              <input
                type="text"
                name="KeyboardType"
                value={product.KeyboardType}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          )}
          {product.category === "Laptop" && (
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">WebCam</label>
              <input
                type="text"
                name="WebCam"
                value={product.WebCam}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Battery Capacity</label>
            <input
              type="text"
              name="BatteryCapacity"
              value={product.BatteryCapacity}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {(product.category === "Laptop" ||
            product.category === "Tab" ||
            product.category === "Mobile" ||
            product.category === "Watch") && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Speaker</label>
                <input
                  type="text"
                  name="Speaker"
                  value={product.Speaker}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            )}

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Warranty Details</label>
            <input
              type="text"
              name="WarrantyDetails"
              value={product.WarrantyDetails}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {(product.category === "Laptop" ||
            product.category === "Tab" ||
            product.category === "Camera" ||
            product.category === "Watch") && (
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">TouchPad</label>
                <select
                  name="TouchPad"
                  value={product.TouchPad}
                  onChange={(e) => setProduct({ ...product, TouchPad: e.target.value === "true" })}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            )}
        </div>

        {/* Stock */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Stock Status</label>
          <select
            name="stock"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value === "true" })}
            className="w-full p-2 border rounded"
            required
          >
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </select>
        </div>

        {/* Feature Image */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Feature Image</label>
          <input
            type="file"
            onChange={handleFeatureImageChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Gallery Images */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Gallery Images</label>
          <input
            type="file"
            multiple
            onChange={handleGalleryImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Submit Button */}
        {loader ? (
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            <span className="loading loading-dots loading-lg"></span>
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        )}
      </form>
    </div>
  );
};

export default AddProducts;
