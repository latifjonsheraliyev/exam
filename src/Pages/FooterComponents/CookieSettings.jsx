import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CookieSettings = () => {
    const [cookies, setCookies] = useState({
        necessary: true, // Necessary cookies are enabled by default and cannot be disabled
        analytics: false,
        marketing: false,
        preferences: false,
    });

    const handleCookieToggle = (type) => {
        setCookies({ ...cookies, [type]: !cookies[type] });
    };

    const handleSaveSettings = () => {
        // Logic to save cookie settings goes here
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your cookie preferences have been saved.",
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                {/* Header Section */}
                <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-gray-900">
                    Cookie Settings
                </h1>
                <p className="text-lg text-gray-600 text-center mb-10">
                    We use cookies to enhance your shopping experience. Manage your preferences below or accept all cookies to continue enjoying full functionality.
                </p>

                {/* Cookie Categories */}
                <div className="bg-white shadow-md rounded-lg p-8 mb-8">
                    {/* Necessary Cookies */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Necessary Cookies</h2>
                        <p className="text-md text-gray-600 mb-2">
                            These cookies are essential for the website's core functionality and cannot be disabled.
                        </p>
                        <label className="inline-flex items-center text-gray-500">
                            <input type="checkbox" className="form-checkbox" checked disabled />
                            <span className="ml-2 text-gray-700 font-semibold">Always Enabled</span>
                        </label>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Analytics Cookies</h2>
                        <p className="text-md text-gray-600 mb-2">
                            Help us understand how visitors interact with our website by collecting anonymized data.
                        </p>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-blue-500"
                                checked={cookies.analytics}
                                onChange={() => handleCookieToggle('analytics')}
                            />
                            <span className="ml-2 text-gray-700 font-semibold">Enable Analytics Cookies</span>
                        </label>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Marketing Cookies</h2>
                        <p className="text-md text-gray-600 mb-2">
                            These cookies are used to display personalized ads relevant to your interests.
                        </p>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-blue-500"
                                checked={cookies.marketing}
                                onChange={() => handleCookieToggle('marketing')}
                            />
                            <span className="ml-2 text-gray-700 font-semibold">Enable Marketing Cookies</span>
                        </label>
                    </div>

                    {/* Preferences Cookies */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Preferences Cookies</h2>
                        <p className="text-md text-gray-600 mb-2">
                            These cookies remember your choices such as language and region to enhance your experience.
                        </p>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-blue-500"
                                checked={cookies.preferences}
                                onChange={() => handleCookieToggle('preferences')}
                            />
                            <span className="ml-2 text-gray-700 font-semibold">Enable Preferences Cookies</span>
                        </label>
                    </div>

                    {/* Save Preferences Button */}
                    <div className="mt-8 text-center">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none transition ease-in-out duration-300"
                            onClick={handleSaveSettings}
                        >
                            Save Preferences
                        </button>
                    </div>
                </div>

                {/* Additional Links */}
                <div className="text-center">
                    <p className="text-sm text-gray-500">
                        To learn more about how we use cookies, please visit our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookieSettings;
