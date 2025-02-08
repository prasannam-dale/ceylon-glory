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
                        <h2 className="text-2xl font-bold mb-4">International Return & Refund Policy</h2>

                        <div
                            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                At Ceylon Glory PVT ltd, we want to ensure that our international customers are completely satisfied with their purchases. If for any reason you're not satisfied with your order, we oYer a straightforward return process. Please review our I Return & Refund Policy below:
                            </p>

                            <ol className="space-y-4 text-gray-900 list-decimal list-inside dark:text-white">
                                <li>
                                    <b>Returns</b>
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>
                                            Eligibility: We accept returns for unopened and unused products in their original packaging. Returns are accepted within 14 days of receiving the product.
                                        </li>
                                        <li>
                                            Condition: Items must be returned unused, unopened, and in the condition you received them. Products that are damaged, altered, or opened cannot be returned unless they are defective.
                                        </li>
                                        <li>
                                            Non-Returnable Items: Certain products such as personalized or customized orders cannot be returned.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>How to Return an International Order</b>
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>
                                            Step 1: Contact our customer support team at info@ceylonglory.com or call +94777XXXXXX to initiate the return process. Please provide your order number and details about the product you wish to return.
                                        </li>
                                        <li>
                                            Step 2: Once your return is authorized, we will send you instructions on how to return the item and the return shipping address. Ensure that the product is securely packed in its original packaging.
                                        </li>
                                        <li>
                                            Step 3: You will need to return the product to our designated return address. Return shipping costs are the responsibility of the customer, and we recommend using a trackable shipping service for your return to ensure safe delivery.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Refunds</b>
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>
                                            Processing Time: Once we receive your returned item and verify its condition, we will process your refund. Refunds will be issued to the original payment method within 7-10 business days.
                                        </li>
                                        <li>
                                            Shipping Costs: The original shipping costs are non-refundable unless the return is due to an error on our part (e.g., defective products or incorrect items).
                                        </li>
                                        <li>
                                            Partial Refunds: In some cases, a partial refund may be issued for opened or used products that are returned in a condition other than their original state.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Damaged or Defective Items</b>
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>
                                            If you receive a damaged or defective product, please notify us within 7 days of receiving the item. We will arrange a full refund or a replacement for any defective or damaged goods.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Exchanges</b>
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>
                                            We do not currently oYer direct exchanges. If you wish to exchange a product, please return the item and place a new order for the desired product.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Customs Duties and Taxes</b>
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>
                                            Customers are responsible for any customs duties, taxes, or import fees that may apply to returns. These costs are not covered by us and will not be refunded.
                                        </li>
                                        <li>
                                            If the package is not picked up by the customer due to customs fees, we are unable to refund the original shipping costs or the return shipping costs.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>International Return Shipping Costs</b>
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>
                                            Return shipping costs are the responsibility of the customer, unless the return is due to an error on our part. We recommend using a trackable shipping service and insuring the return shipment for its full value. Unfortunately, we are unable to cover the return shipping costs for international orders.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Contact Us</b>
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>
                                            If you have any questions regarding our international return policy or need assistance with your return, please contact us at:
                                            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                                <li>Email: info@ceylonglory.com</li>
                                                <li>Phone: +94777XXXXXX</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Cinnamon;