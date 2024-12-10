import React from 'react';

const Returns = () => {
    return (
        <div className="bg-[#FAFAFA] py-10">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800 ">
                    Return Policy
                </h1>
                <h3 className="text-right text-lg font-medium text-gray-600 mb-6">
                    Last modified: October 03, 2024
                </h3>

                {/* Return Window */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">1. Return Window</h2>
                    <p className="text-lg text-gray-700">
                        We offer a 30-day return policy. If 30 days have gone by since your purchase, unfortunately, we cannot offer you a refund or exchange.
                    </p>
                </section>

                {/* Eligibility for Returns */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">2. Eligibility for Returns</h2>
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">To be eligible for a return:</h4>
                    <ul className="list-disc ml-6 text-lg text-gray-700 space-y-2">
                        <li>The item must be unused and in the same condition that you received it.</li>
                        <li>The item must be in the original packaging with all accessories, manuals, and any other components that came with it.</li>
                        <li>Proof of purchase (such as a receipt or order number) is required for all returns.</li>
                    </ul>
                </section>

                {/* Non-Returnable Items */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">3. Non-Returnable Items</h2>
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">The following items are non-returnable:</h4>
                    <ul className="list-disc ml-6 text-lg text-gray-700 space-y-2">
                        <li>Gift cards</li>
                        <li>Downloadable software products</li>
                        <li>Products marked as "final sale" or "non-refundable" during promotion</li>
                        <li>Products that have been damaged or altered after delivery (unless due to manufacturing defect)</li>
                    </ul>
                </section>

                {/* Refund Process */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">4. Refund Process</h2>
                    <p className="text-lg text-gray-700">
                        Once your return is received and inspected, we will notify you of the approval or rejection of your refund.
                        If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days.
                        Partial refunds may be granted for items that are returned used or not in their original condition.
                    </p>
                </section>

                {/* Exchanges */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">5. Exchanges</h2>
                    <p className="text-lg text-gray-700">
                        We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <a href="mailto:support@yourwebsite.com" className="text-blue-500 underline">support@yourwebsite.com</a> and send your item to <span>[return address]</span>.
                    </p>
                </section>

                {/* Return Shipping */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">6. Return Shipping</h2>
                    <p className="text-lg text-gray-700">
                        Customers are responsible for paying for their own shipping costs for returning an item, unless the product is defective or a wrong item was shipped.
                        Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund (if applicable).
                        For high-value products, consider using a trackable shipping service or purchasing shipping insurance, as we cannot guarantee that we will receive your returned item.
                    </p>
                </section>

                {/* Restocking Fees */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">7. Restocking Fees</h2>
                    <p className="text-lg text-gray-700">
                        A restocking fee of 10-15% may apply for opened items that are returned in their original condition. This fee covers inspection, repackaging, and restocking expenses.
                    </p>
                </section>

                {/* Warranty Returns */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">8. Warranty Returns</h2>
                    <p className="text-lg text-gray-700">
                        If your product is covered by our warranty and you need to return it for repair or replacement, please follow the warranty claim process outlined <a href="[link to warranty section]" className="text-blue-500 underline">here</a>.
                    </p>
                </section>

                {/* Damaged or Defective Products */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">9. Damaged or Defective Products</h2>
                    <p className="text-lg text-gray-700">
                        If your product arrives damaged or defective, please contact us immediately at <a href="mailto:support@yourwebsite.com" className="text-blue-500 underline">support@yourwebsite.com</a> with photos and a description of the issue, and we will arrange for a replacement or repair.
                    </p>
                </section>

                {/* Final Notes */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">10. Important Notes</h2>
                    <p className="text-lg text-gray-700">
                        Be transparent: Clear rules on what qualifies for returns or exchanges (e.g., tech products must be in original condition).
                        Flexibility builds trust: Offering free returns for defective products or allowing exchanges can improve customer loyalty.
                        Automate the process: Provide easy access to shipping labels or return portals to make returns seamless.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Returns;
