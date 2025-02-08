import React from 'react';
import {motion} from "framer-motion";

const Cinnamon = () => {
    return (
        <div className="pt-20">
            <section className="pt-10 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        className="bg-white p-8 mb-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    1. What is the difference between True Ceylon Cinnamon and Cassia?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                True Ceylon Cinnamon (Cinnamomum Verum) is considered the "true" cinnamon, known for its delicate flavor, soft texture, and health benefits. Cassia, often sold as cinnamon, has a stronger, spicier flavor and a thicker bark. Ceylon cinnamon contains significantly lower levels of coumarin, a compound that can be harmful in high quantities.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    2. How do I store my spices?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                To preserve the freshness and aroma of your spices, store them in an airtight container in a cool, dry place away from direct sunlight. For powdered spices like turmeric and cinnamon, it’s best to keep them in a dark container to prevent light from degrading their quality.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    3. Are your products organic?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Yes, our products are sustainably sourced and, wherever possible, grown using organic farming practices. We strive to ensure the highest quality while minimizing environmental impact.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    4. Can I use your spices for medicinal purposes?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Our spices, such as Ceylon Cinnamon, Turmeric, and Ginger, are known for their potential health benefits, such as supporting digestion and immunity. However, it is always advisable to consult with a healthcare professional before using them as part of a therapeutic regimen.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    5. Do you offer bulk purchasing or wholesale pricing?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Yes, we oYer bulk purchasing and wholesale options for businesses and distributors. Please contact us for more information about our bulk order discounts and custom offerings.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    6. How do I place an order?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                You can place an order directly on our website by selecting the products you wish to purchase and proceeding through the checkout process. If you need assistance, feel free to contact our customer support team.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    7. What is your return policy?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                We accept returns for products that are unopened and in their original packaging within 14 days of purchase. Please refer to our Return & Refund Policy page for more details.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    8. Do you ship internationally?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Yes, we oYer international shipping. Shipping costs and delivery times vary depending on your location. You can check shipping rates at checkout.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    9. What forms of payment do you accept?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                We accept all major credit and debit cards, including Visa, MasterCard, and American Express. We also oYer payment via PayPal for added convenience.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    10. Can I customize spice blends or request special packaging?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Yes, we oYer custom spice blends and specialized packaging for bulk orders. If you have specific requirements, please reach out to our team for further details.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    11. How can I contact customer support?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                You can contact our customer support team via the contact form on our website, by email at support@yourcompany.com, or by phone at +1-800-123-4567.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    12. Do you provide any recipes using your spices?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Yes, we provide a selection of recipes using our spices on the website. You can explore them in our Recipes section for creative ways to incorporate our products into your cooking.
                            </p>
                        </div>
                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                                    13. Are your products suitable for vegan or gluten-free diets?
                                </h5>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Yes, all our products are naturally vegan and gluten-free. However, we recommend checking the individual product descriptions for any specific dietary information.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Cinnamon;