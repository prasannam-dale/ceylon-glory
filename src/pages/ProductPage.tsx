import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import cinnamonImg from "../assets/products/cinnamon.jpg";
import pepperImg from "../assets/products/pepper.jpg";
import cloveImg from "../assets/products/clove.jpg";
import cardamomImg from "../assets/products/cardamom.jpg";
import gingerImg from "../assets/products/ginger.jpg";
import turmericImg from "../assets/products/turmeric.jpg";
import nutmegImg from "../assets/products/nutmeg.jpg";
import curryLeavesImg from "../assets/products/curry_leaves.png";
import moringaLeavesImg from "../assets/products/moringa_leaves.jpg";

const productData = {
    cinnamon: {
        image: cinnamonImg,
        title: 'Cinnamon',
        descriptions: [
            'Discover the unparalleled quality of Ceylon Cinnamon, renowned worldwide as “True Cinnamon.” Sourced sustainably from Sri Lanka’s fertile landscapes, this premium spice is available in three versatile forms: Powder, Sticks, and Essential Oil—each designed to cater to your diverse needs.',
            'Experience the unparalleled quality of True Ceylon Cinnamon, sourced directly from the fertile lands of Sri Lanka. Known as Cinnamomum Verum, this exceptional spice is celebrated for its mild sweetness, soft texture, and a distinct aroma that sets it apart from cassia cinnamon. Whether enhancing culinary creations, supporting wellness, or serving as a key ingredient in industrial applications, our Ceylon Cinnamon is the ultimate choice for those seeking authenticity and premium quality.',
            'With versatile forms including powder, sticks, and essential oil, and an array of meticulously categorized grades, we ensure every customer finds the perfect match for their needs.'
        ],
        varieties: {
            title: 'Grades of Ceylon Cinnamon',
            items: [
                {
                    name: 'Alba',
                    description: 'Ultra-thin, smooth quills of the highest quality.',
                    uses: 'Perfect for gourmet dishes, premium beverages, and luxury markets.'
                },
                {
                    name: 'C5 & C5 Special',
                    description: 'High-quality quills with a uniform texture and sweet flavor.',
                    uses: 'Suitable for premium culinary uses and specialty products.'
                },
                {
                    name: 'C4',
                    description: 'Medium-thin quills with a balanced flavor profile.',
                    uses: 'A versatile choice for both household and commercial applications.'
                },
                {
                    name: 'MGrades (M5, M4)',
                    description: 'Thicker quills with bold aroma and flavor.',
                    uses: 'Ideal for bulk use in food preparation and manufacturing.'
                },
                {
                    name: 'H Grades (H1, H2)',
                    description: 'Coarser, thicker quills oYering a strong, intense cinnamon flavor.',
                    uses: 'Widely used in industrial processing and large-scale production.'
                },
                {
                    name: 'Quillings & Chips',
                    description: 'Small, broken pieces of cinnamon quills and bark chips.',
                    uses: 'Perfect for infusions, spice blends, and essential oil extraction.'
                }
            ]
        },
        whyChoose: {
            title: 'Why Choose Our Ceylon Cinnamon?',
            reasons: [
                {
                    title: '100% Pure & Authentic',
                    description: 'True Ceylon Cinnamon (Cinnamomum verum) sourced directly from Sri Lanka.'
                },
                {
                    title: 'Naturally Processed',
                    description: 'Hand-harvested, sun-dried, and free from chemicals or additives.'
                },
                {
                    title: 'Low Coumarin Content',
                    description: 'Safer for daily consumption compared to Cassia cinnamon.'
                },
                {
                    title: 'Sustainably Sourced',
                    description: 'Supports local farmers using eco-friendly practices.'
                },
                {
                    title: 'Rich Aroma & Sweet Flavor',
                    description: 'Ideal for teas, desserts, curries, and spice blends.'
                },
                {
                    title: 'Multiple Forms Available',
                    description: 'Sticks (quills), powder, and cinnamon oil.'
                },
                {
                    title: 'Health Benefits',
                    description: 'Anti-inflammatory, antioxidant-rich, supports digestion & blood sugar control.'
                },
                {
                    title: 'Fresh & Direct from Source',
                    description: 'No middlemen, ensuring superior quality and freshness.'
                },
                {
                    title: 'Certified & Quality Tested',
                    description: 'Meets international food safety standards.'
                },
                {
                    title: 'Bulk & Wholesale Options',
                    description: 'Competitive pricing with reliable global shipping.'
                }
            ],
            comment: ''
        }
    },
    pepper: {
        image: pepperImg,
        title: 'Pepper – The King of Spices',
        descriptions: [
            'Elevate your culinary and wellness experiences with our premium Pepper, sourced from Sri Lanka\'s fertile soils. As one of the most sought-after spices globally, our Black Pepper and White Pepper stand out for their rich aroma, bold flavor, and exceptional quality. Whether seasoning gourmet dishes, crafting spice blends, or exploring health benefits, our pepper varieties cater to all your needs.'
        ],
        varieties: {
            title: 'Our Pepper Varieties',
            items: [
                {
                    name: 'Black Pepper',
                    description: 'Whole or ground peppercorns with a robust, pungent flavor and earthy aroma.',
                    uses: 'A staple in savory dishes, marinades, soups, and sauces.'
                },
                {
                    name: 'White Pepper',
                    description: 'Milder than black pepper, with a smooth, refined taste and a subtle heat.',
                    uses: 'Ideal for light-colored dishes like soups, sauces, and seafood to maintain a clean appearance.'
                }
            ]
        },
        whyChoose: {
            title: 'Why Choose Our Pepper?',
            reasons: [
                {
                    title: 'Premium Quality',
                    description: 'Sourced from Sri Lanka’s finest pepper plantations, known for their rich flavor and strong aroma.'
                },
                {
                    title: '100% Pure & Natural',
                    description: 'No additives, preservatives, or artificial processing.'
                },
                {
                    title: 'Bold & Pungent Flavor',
                    description: 'High piperine content for an intense, spicy taste.'
                },
                {
                    title: 'Sustainably Sourced',
                    description: 'Grown using eco-friendly and ethical farming practices.'
                },
                {
                    title: 'Available in Both Varieties',
                    description: 'Black Pepper (bold, robust) & White Pepper (milder, smoother).'
                }
            ],
            comment: 'Our commitment to quality and sustainability ensures that every grain of our Black Pepper and White Pepper delivers maximum flavor and value. Choose our pepper products for authentic taste, unmatched versatility, and exceptional quality.'
        }
    },
    clove: {
        image: cloveImg,
        title: 'Clove – The Aromatic Wonder of Spices',
        descriptions: [
            'Discover the rich aroma and bold flavor of our premium-grade Cloves, harvested from the fertile plantations of Sri Lanka. Known for their distinctive fragrance and intense taste, Cloves are a versatile spice used in culinary, medicinal, and industrial applications worldwide.',
            'Packed with natural oils, our cloves deliver unmatched quality, ensuring that every piece enhances your recipes and wellness routines.'
        ],
        varieties: {
            title: 'Clove Grades',
            items: [
                {
                    name: 'Handpicked Super Grade',
                    description: 'Carefully selected whole cloves with uniform size, rich brown color, and intact heads.',
                    uses: 'Ideal for gourmet cooking, spice blends, and high-end markets.'
                },
                {
                    name: 'Grade 1 Cloves',
                    description: 'High-quality cloves with slight size variation, maintaining excellent flavor and aroma.',
                    uses: 'Suitable for culinary purposes, tea blends, and confectionery.'
                },
                {
                    name: 'Clove Stems',
                    description: 'Dried stems from the clove flower, offering a milder flavor profile.',
                    uses: 'Commonly used in essential oil extraction and industrial applications.'
                }
            ]
        },
        whyChoose: {
            title: 'Why Choose Our Cloves?',
            reasons: [
                {
                    title: 'Superior Aroma and Flavor',
                    description: 'High eugenol content for bold, spicy notes.'
                },
                {
                    title: 'Sustainably Sourced',
                    description: 'Ethical harvesting methods to support the environment and local communities.'
                },
                {
                    title: 'Versatile Applications',
                    description: 'Perfect for cooking, traditional medicine, aromatherapy, and perfumery.'
                },
                {
                    title: 'Eco-Friendly Packaging',
                    description: 'Designed to preserve freshness while reducing environmental impact.'
                }
            ],
            comment: 'Add the unmistakable warmth of Cloves to your kitchen, wellness rituals, or production lines. With our commitment to quality and authenticity, you’ll experience the best of Sri Lanka’s spice heritage.'
        }
    },
    cardamom: {
        image: cardamomImg,
        title: 'Cardamom – The Queen of Spices',
        descriptions: [
            'Experience the exquisite aroma and rich flavor of Cardamom, one of the world’s most cherished spices. Grown in the lush highlands of Sri Lanka, our premium-grade Cardamom is carefully harvested to retain its natural oils and bold taste, making it a must-have for culinary, medicinal, and aromatic applications.'
        ],
        whyChoose: {
            title: 'Why Choose Our Cardamom?',
            reasons: [
                {
                    title: 'Exceptional Quality',
                    description: 'Handpicked to ensure uniform size, vibrant color, and high oil content.'
                },
                {
                    title: 'Versatility',
                    description: 'Perfect for cooking, beverages, traditional remedies, and aromatherapy.'
                },
                {
                    title: 'Sustainably Sourced',
                    description: 'Grown and harvested using eco-friendly practices.'
                },
                {
                    title: 'Eco-Conscious Packaging',
                    description: 'Designed to preserve freshness and reduce environmental impact.'
                }
            ],
            comment: 'With its bold flavor and captivating aroma, our Cardamom is the ultimate spice to elevate your culinary creations and wellness routines. Discover the unmatched quality of Sri Lanka’s finest Cardamom today.'
        }
    },
    ginger: {
        image: gingerImg,
        title: 'Ginger – Nature’s Zestful Treasure',
        descriptions: [
            'Revel in the bold flavor and wellness benefits of our premium Ginger, cultivated in Sri Lanka’s nutrient-rich soils. Known for its warm, spicy taste and invigorating aroma, Ginger is a versatile spice used in cuisines, beverages, and traditional medicine worldwide. Whether fresh, dried, powdered, or processed, our ginger delivers exceptional quality and flavor.'
        ],
        varieties: {
            title: 'Forms of Ginger',
            items: [
                {
                    name: 'Dried Ginger',
                    description: 'Sun-dried rhizomes that retain concentrated flavor and aroma.',
                    uses: 'Ideal for long-term storage, spice blends, and brewing teas.'
                },
                {
                    name: 'Ginger Powder',
                    description: 'Finely ground dried ginger for convenient use in cooking and baking.',
                    uses: 'A staple in spice blends, desserts, marinades, and wellness drinks.'
                },
                {
                    name: 'Ginger Oil',
                    description: 'Extracted from fresh ginger, offering a potent and aromatic essence.',
                    uses: 'Widely used in aromatherapy, skincare, and flavoring applications.'
                }
            ]
        },
        whyChoose: {
            title: 'Why Choose Our Ginger?',
            reasons: [
                {
                    title: 'Premium Quality',
                    description: 'Handpicked and processed to preserve natural oils and flavor.'
                },
                {
                    title: 'Rich in Benefits',
                    description: 'Packed with antioxidants, supports digestion, immunity, and overall well-being.'
                },
                {
                    title: 'Sustainably Sourced',
                    description: 'Ethical farming practices ensure minimal environmental impact.'
                },
                {
                    title: 'Customizable Options',
                    description: 'Available in various forms to suit diverse needs.'
                }
            ],
            comment: 'From enhancing your favorite recipes to boosting your health, our Ginger is your perfect partner in flavor and wellness. Experience the zest and authenticity of Sri Lanka’s finest ginger today.'
        }
    },
    turmeric: {
        image: turmericImg,
        title: 'Turmeric – The Golden Spice of Life',
        descriptions: [
            'Celebrate the vibrant color, earthy flavor, and exceptional health benefits of our premium Turmeric, grown in Sri Lanka’s fertile soils. Known as a cornerstone of traditional medicine and culinary heritage, this golden spice is packed with curcumin, a powerful antioxidant with numerous wellness properties. Whether in powder or fresh root form, our Turmeric is a testament to purity and quality.'
        ],
        varieties: {
            title: 'Forms of Turmeric',
            items: [
                {
                    name: 'Dried Turmeric',
                    description: 'Sun-dried roots with concentrated flavor and longer shelf life.',
                    uses: 'Suitable for grinding, spice blends, and medicinal purposes.'
                },
                {
                    name: 'Turmeric Powder',
                    description: 'Finely ground powder made from premium dried turmeric.',
                    uses: 'Ideal for cooking, health drinks, beauty products, and supplements.'
                }
            ]
        },
        whyChoose: {
            title: 'Why Choose Our Turmeric?',
            reasons: [
                {
                    title: 'Rich in Curcumin',
                    description: 'High potency for maximum flavor and health benefits.'
                },
                {
                    title: 'Pure and Natural',
                    description: 'Free from additives, ensuring authentic quality.'
                },
                {
                    title: 'Versatile Applications',
                    description: 'Perfect for cooking, wellness, and natural beauty care.'
                },
                {
                    title: 'Sustainably Grown',
                    description: 'Cultivated using eco-friendly practices to support the environment.'
                }
            ],
            comment: 'Add the warmth and vitality of our Turmeric to your dishes, wellness routines, and skincare regimens. Discover the true essence of Sri Lanka’s golden spice with every pinch.'
        }
    },
    nutmeg: {
        image: nutmegImg,
        title: 'Nutmeg – A Spice of Warmth and Elegance',
        descriptions: [
            'Unlock the rich, nutty flavor and enchanting aroma of our premium Nutmeg, sourced from Sri Lanka’s lush plantations. A timeless spice cherished for its culinary versatility and health-enhancing properties, Nutmeg is perfect for sweet and savory dishes, beverages, and traditional remedies.'
        ],
        varieties: {
            title: 'Forms of Nutmeg',
            items: [
                {
                    name: 'Whole Nutmeg',
                    description: 'Handpicked, whole nutmeg seeds with a smooth texture and robust aroma.',
                    uses: 'Ideal for grating fresh into dishes or beverages for maximum flavor.'
                }
            ]
        },
        whyChoose: {
            title: 'Why Choose Our Nutmeg?',
            reasons: [
                {
                    title: 'Superior Quality',
                    description: 'Carefully selected and processed to ensure intense flavor and aroma.'
                },
                {
                    title: 'Rich in Nutrients',
                    description: 'Contains essential oils and compounds known for their health benefits.'
                },
                {
                    title: 'Versatile Uses',
                    description: 'Ideal for culinary, medicinal, and industrial purposes.'
                },
                {
                    title: 'Sustainably Sourced',
                    description: 'Harvested using eco-friendly practices that preserve nature.'
                }
            ],
            comment: 'Enhance your recipes, uplift your wellness routines, and savor the unique warmth of Sri Lanka’s finest Nutmeg—a true treasure of the spice world.'
        }
    },
    'curry-leaves': {
        image: curryLeavesImg,
        title: 'Curry Leaves – Nature’s Flavorful Garnish',
        descriptions: [
            'Discover the vibrant aroma and distinct flavor of Curry Leaves, a cornerstone of South Asian cuisine. Handpicked from Sri Lanka’s lush greenery, these leaves bring a fresh, citrusy, and slightly nutty essence to every dish. Revered not just for their culinary uses but also for their health-enhancing properties, our Curry Leaves are a perfect addition to your kitchen and wellness routines.'
        ],
        varieties: {
            title: 'Forms of Curry Leaves',
            items: [
                {
                    name: 'Dried Curry Leaves',
                    description: 'Naturally dried leaves retaining their unique aroma and taste.',
                    uses: 'Ideal for long-term storage, spice blends, and seasoning.'
                },
                {
                    name: 'Curry Leaf Powder',
                    description: 'Finely ground powder made from dried curry leaves for convenience.',
                    uses: 'A great addition to marinades, spice mixes, and health drinks.'
                }
            ]
        },
        whyChoose: {
            title: 'Why Choose Our Curry Leaves?',
            reasons: [
                {
                    title: 'Farm Fresh Quality',
                    description: 'Harvested at peak freshness to ensure maximum flavor and aroma.'
                },
                {
                    title: 'Nutrient-Rich',
                    description: 'Packed with essential nutrients that promote digestion, hair health, and overall wellness.'
                },
                {
                    title: 'Eco-Friendly Practices',
                    description: 'Sustainably cultivated to support environmental health.'
                },
                {
                    title: 'Versatile Uses',
                    description: 'From cooking to wellness, a must-have in every household.'
                }
            ],
            comment: 'Add the authentic taste and aroma of Sri Lanka to your dishes with our premium Curry Leaves, and experience their culinary and wellness benefits.'
        }
    },
    'moringa-leaves': {
        image: moringaLeavesImg,
        title: 'Moringa Leaves – The Superfood of Nature',
        descriptions: [
            'Harness the power of Moringa Leaves, a nutrient-dense superfood sourced from Sri Lanka’s fertile lands. Known as the "Miracle Tree," Moringa is prized for its exceptional nutritional profile, offering a rich source of vitamins, minerals, and antioxidants. Whether fresh, dried, or powdered, Moringa Leaves are a versatile addition to your diet and wellness routine.'
        ],
        varieties: {
            title: 'Forms of Moringa Leaves',
            items: [
                {
                    name: 'Dried Moringa Leaves',
                    description: 'Naturally dried to retain their nutrients and flavor.',
                    uses: 'Ideal for teas, infusions, and long-term storage.'
                },
                {
                    name: 'Moringa Powder',
                    description: 'Finely ground powder made from dried leaves for convenient use.',
                    uses: 'Perfect for health drinks, smoothies, and as a natural supplement.'
                },
                {
                    name: 'Moringa Capsules',
                    description: 'Encapsulated powder for an easy, on-the-go superfood boost.',
                    uses: 'Ideal as a daily dietary supplement.'
                }
            ]
        },
        whyChoose: {
            title: 'Why Choose Our Moringa Leaves?',
            reasons: [
                {
                    title: 'Nutritional Powerhouse',
                    description: 'Packed with essential nutrients, including vitamins A, C, calcium, iron, and protein.'
                },
                {
                    title: 'Antioxidant-Rich',
                    description: 'Supports immune health, reduces inflammation, and promotes overall well-being.'
                },
                {
                    title: 'Sustainably Grown',
                    description: 'Cultivated with eco-friendly practices to ensure purity and quality.'
                },
                {
                    title: 'Versatile Applications',
                    description: 'Perfect for cooking, beverages, and natural health remedies.'
                }
            ],
            comment: 'Incorporate the goodness of Moringa Leaves into your daily life for a wholesome, natural boost to your health and vitality. Experience the miracle of Sri Lanka’s finest Moringa today.'
        }
    },
};

const ProductPage = () => {
    const { productName } = useParams();
    const product = productData[productName];

    if (!product) {
        return <div className="text-center text-2xl pt-20">Product not found.</div>;
    }

    return (
        <div className="pt-20">
            <section className="p-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                                <img className="w-full dark:hidden" src={product.image} alt={product.title}/>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-lg shadow-lg"
                        >
                            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>

                            {product.descriptions.map((description) => (
                                <p className="mb-6 text-gray-500 dark:text-gray-400">{description}</p>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="pb-10 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        className="bg-white p-8 mb-8 rounded-lg shadow-lg"
                    >
                        {product.varieties && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">{product.varieties.title}</h2>
                                <div
                                    className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    {product.varieties.items.map((variety, index) => (
                                        <div key={index}>
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{variety.name}</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{variety.description}</p>
                                            <p className="mb-2">
                                                <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">Uses: </span>
                                                {variety.uses}
                                            </p>
                                            {product.varieties.items.length - 1 > index && (
                                                <hr className="my-8"/>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {product.whyChoose && (
                            <div>
                                <h2 className="mt-6 text-2xl font-bold mb-4">{product.whyChoose.title}</h2>
                                <div
                                    className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <ul className="ps-1 space-y-2 list-disc list-inside">
                                        {product.whyChoose.reasons.map((reason, index) => (
                                            <li key={index}>
                                                <span className="text-l font-bold tracking-tight text-gray-900 dark:text-white">{reason.title} - </span>
                                                {reason.description}
                                            </li>
                                        ))}
                                    </ul>
                                    {product.whyChoose.comment && (
                                        <p className="pt-4">{product.whyChoose.comment}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default ProductPage;
