import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import React from "react";

import imgCinnamon from '../assets/products/cinnamon.jpg';
import imgPepper from '../assets/products/pepper.jpg';
import imgClove from '../assets/products/clove.jpg';
import imgCardamom from '../assets/products/cardamom.jpg';
import imgGinger from '../assets/products/ginger.jpg';
import imgTurmeric from '../assets/products/turmeric.jpg';
import imgNutmeg from '../assets/products/nutmeg.jpg';
import imgCurryLeaves from '../assets/products/curry_leaves.png';
import imgMoringaLeaves from '../assets/products/moringa_leaves.jpg';

interface ProductListCardPropsType {
  img: string;
  name: string;
  href: string;
}

export function ProductListCard({
                                  img,
                                  name,
                                  href
                                }: ProductListCardPropsType) {
  return (
      <Card shadow={false} className="border border-gray-300">
        <CardBody className="pb-0">
          <img src={img} alt={img} className="min-w-[280px] w-full" />
          <div className="flex flex-col">
            <Typography className="mb-5 text-center" color="blue-gray" variant="h5">
              {name}
            </Typography>
            <a
                href={href}
                type="submit"
                className="w-full bg-orange-600 text-white text-center px-6 py-3 mb-5 rounded-md hover:bg-orange-700 transition-colors"
            >
              View More
            </a>
          </div>
        </CardBody>
      </Card>
  );
}

const CONTENTS = [
  {
    img: imgCinnamon,
    name: 'Cinnamon',
    href: '/products/cinnamon'
  },
  {
    img: imgPepper,
    name: 'Pepper',
    href: '/products/pepper'
  },
  {
    img: imgClove,
    name: 'Clove',
    href: '/products/clove'
  },
  {
    img: imgCardamom,
    name: 'Cardamom',
    href: '/products/cardamom'
  },
  {
    img: imgGinger,
    name: 'Ginger',
    href: '/products/ginger'
  },
  {
    img: imgTurmeric,
    name: 'Turmeric',
    href: '/products/turmeric'
  },
  {
    img: imgNutmeg,
    name: 'Nutmeg',
    href: '/products/nutmeg'
  },
  {
    img: imgCurryLeaves,
    name: 'Curry Leaves',
    href: '/products/curry-leaves'
  },
  {
    img: imgMoringaLeaves,
    name: 'Moringa Leaves',
    href: '/products/moringa-leaves'
  }
];

export function Products() {
  return (
      <div className="pt-20">
        <section className="py-10 px-8">
          <div className="mx-auto text-center mb-16">
            <Typography variant="h1" className="my-4 text-4xl">
              Find What You Need
            </Typography>
          </div>
          <div className="mx-auto container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
              {CONTENTS.map(({ img, name, href }, index) => (
                  <ProductListCard
                      key={index}
                      img={img}
                      name={name}
                      href={href}
                  />
              ))}
            </div>
          </div>
        </section>
      </div>
  );
}

export default Products;