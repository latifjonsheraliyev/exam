import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 py-12 px-6 lg:px-12">
            <div className="container mx-auto max-w-6xl">
                {/* Header Section */}
                <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8">Privacy Policy</h1>
                <p className="text-lg text-gray-600 text-center mb-10">
                    This Privacy Policy explains how we collect, use, and protect your personal information when you use our tech e-commerce website. By visiting our website, you agree to the practices described below.
                </p>
                <div className="text-center flex justify-end my-2 font-semibold mt-10">
                    <p className="text-sm text-gray-500">
                        Last Updated: October 03, 2024
                    </p>
                </div>

                {/* Privacy Policy Content */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    {/* 1. Information We Collect */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">1. Information We Collect</h2>
                        <p className="text-md text-gray-600 mt-4 mb-2">
                            We collect information that you provide to us directly, as well as data collected automatically as you use our services. This includes:
                        </p>
                        <ul className="list-disc ml-6 text-md text-gray-600">
                            <li><strong>Personal Information:</strong> Name, email address, shipping address, payment information, and other personal details provided during the checkout process.</li>
                            <li><strong>Usage Data:</strong> Information on how you use our website, including IP address, browser type, and device information.</li>
                            <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience (refer to our <a href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</a> for more details).</li>
                        </ul>
                    </div>

                    {/* 2. How We Use Your Information */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">2. How We Use Your Information</h2>
                        <p className="text-md text-gray-600 mt-4 mb-2">
                            Your information is used to:
                        </p>
                        <ul className="list-disc ml-6 text-md text-gray-600">
                            <li>Process your orders, manage your account, and provide customer service.</li>
                            <li>Improve our website, products, and services through analytics and feedback.</li>
                            <li>Send you updates, promotional materials, and marketing content (you can opt-out at any time).</li>
                            <li>Ensure the security of our website and comply with legal obligations.</li>
                        </ul>
                    </div>

                    {/* 3. Sharing Your Information */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">3. Sharing Your Information</h2>
                        <p className="text-md text-gray-600 mt-4 mb-2">
                            We do not sell your personal information. However, we may share your data with:
                        </p>
                        <ul className="list-disc ml-6 text-md text-gray-600">
                            <li>Third-party service providers who help us operate our business, such as payment processors and shipping companies.</li>
                            <li>Analytics and advertising partners to help us understand how users interact with our website and for marketing purposes.</li>
                            <li>Government authorities if required by law or to protect our legal rights.</li>
                        </ul>
                    </div>

                    {/* 4. Data Security */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">4. Data Security</h2>
                        <p className="text-md text-gray-600 mt-4">
                            We take the security of your personal information seriously and implement reasonable security measures to protect it from unauthorized access, disclosure, alteration, or destruction. However, no system is 100% secure, so we cannot guarantee absolute security.
                        </p>
                    </div>

                    {/* 5. Your Rights */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">5. Your Rights</h2>
                        <p className="text-md text-gray-600 mt-4">
                            Depending on your location, you may have the right to:
                        </p>
                        <ul className="list-disc ml-6 text-md text-gray-600">
                            <li>Access, correct, or delete your personal data.</li>
                            <li>Request that we restrict or stop processing your data.</li>
                            <li>Withdraw your consent to receive marketing communications.</li>
                            <li>Request data portability or file a complaint with a data protection authority.</li>
                        </ul>
                    </div>

                    {/* 6. Third-Party Links */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">6. Third-Party Links</h2>
                        <p className="text-md text-gray-600 mt-4">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before sharing any personal information.
                        </p>
                    </div>

                    {/* 7. Changes to This Policy */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">7. Changes to This Policy</h2>
                        <p className="text-md text-gray-600 mt-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any significant changes.
                        </p>
                    </div>

                    {/* 8. Contact Us */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800">8. Contact Us</h2>
                        <p className="text-md text-gray-600 mt-4">
                            If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
                        </p>
                        <p className="text-md text-gray-700 mt-2 font-semibold">Email: infotechheim@gmail.com</p>
                        <p className="text-md text-gray-700 mt-1 font-semibold">Address: 123 Main Street, USA</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default PrivacyPolicy;
