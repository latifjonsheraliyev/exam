import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="bg-gray-50 py-12 px-6 lg:px-12">
            <div className="container mx-auto max-w-6xl">
                {/* Header Section */}
                <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8">Terms and Conditions</h1>
                <p className="text-lg text-gray-600 text-center mb-10">
                    Please read these terms and conditions carefully before using our e-commerce tech website. By accessing or using the website, you agree to comply with and be bound by the following terms.
                </p>
                <div className="text-center flex justify-end my-2 font-semibold mt-10">
                    <p className="text-sm text-gray-500">
                        Last Updated: October 03, 2024
                    </p>
                </div>
                {/* Terms and Conditions Content */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    {/* 1. Acceptance of Terms */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
                        <p className="text-md text-gray-600 mt-4">
                            By using our website, you agree to be bound by these Terms and Conditions, as well as our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>. If you do not agree with any part of these terms, you should not use our website or services.
                        </p>
                    </div>

                    {/* 2. Changes to Terms */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">2. Changes to Terms</h2>
                        <p className="text-md text-gray-600 mt-4">
                            We reserve the right to modify or update these terms at any time. Any changes will be effective immediately upon posting to this page. It is your responsibility to review these terms regularly.
                        </p>
                    </div>

                    {/* 3. Account Registration */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">3. Account Registration</h2>
                        <p className="text-md text-gray-600 mt-4">
                            To access certain features on our website, you may need to create an account. You agree to provide accurate and complete information when registering, and to keep your account information up to date. You are responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account.
                        </p>
                    </div>

                    {/* 4. Orders and Payments */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">4. Orders and Payments</h2>
                        <p className="text-md text-gray-600 mt-4">
                            All orders placed through our website are subject to acceptance and availability. We reserve the right to refuse or cancel orders at any time. By placing an order, you agree to provide valid payment details and authorize us to charge the total amount of the order.
                        </p>
                    </div>

                    {/* 5. Pricing and Availability */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">5. Pricing and Availability</h2>
                        <p className="text-md text-gray-600 mt-4">
                            Prices for products on our website are subject to change without notice. We strive to ensure that all prices and product information are accurate; however, errors may occur. In the event of a pricing error, we reserve the right to cancel any orders affected by the error.
                        </p>
                    </div>

                    {/* 6. Shipping and Delivery */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">6. Shipping and Delivery</h2>
                        <p className="text-md text-gray-600 mt-4">
                            We will make every effort to ensure your order is processed and shipped in a timely manner. Shipping times may vary depending on location and product availability. Any delivery dates provided are estimates and not guaranteed. We are not liable for any delays in shipping.
                        </p>
                    </div>

                    {/* 7. Returns and Refunds */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">7. Returns and Refunds</h2>
                        <p className="text-md text-gray-600 mt-4">
                            Please refer to our <a href="/return-policy" className="text-blue-600 hover:underline">Return Policy</a> for information on returning products and requesting refunds. Refunds will only be processed once the returned item has been received and inspected.
                        </p>
                    </div>

                    {/* 8. Intellectual Property */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">8. Intellectual Property</h2>
                        <p className="text-md text-gray-600 mt-4">
                            All content on our website, including text, graphics, logos, images, and software, is the property of [Your Company Name] or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without prior written permission from us.
                        </p>
                    </div>

                    {/* 9. Limitation of Liability */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">9. Limitation of Liability</h2>
                        <p className="text-md text-gray-600 mt-4">
                            To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of the website or products purchased through the website.
                        </p>
                    </div>

                    {/* 10. Governing Law */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">10. Governing Law</h2>
                        <p className="text-md text-gray-600 mt-4">
                            These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under or in connection with these terms shall be resolved in the courts of [Your Jurisdiction].
                        </p>
                    </div>

                    {/* 11. Contact Information */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">11. Contact Information</h2>
                        <p className="text-md text-gray-600 mt-4">
                            If you have any questions about these Terms and Conditions, please contact us at:
                        </p>
                        <p className="text-md text-gray-700 mt-2 font-semibold">Email: infotechheim@gmail.com</p>
                        <p className="text-md text-gray-700 mt-1 font-semibold">Address: 123 Main Street, USA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
