import {
  ArriveItemType,
  BannerType,
  BrandType,
  CategoryType,
  FooterType,
  NavbarType,
  OfferType,
  ProductsType,
} from "../types";

export const navbar: NavbarType[] = [
  {
    id: 1,
    path: "/",
    nav: "Home",
  },
  {
    id: 2,
    path: "/shop",
    nav: "Shop",
  },
  {
    id: 3,
    path: "/blog",
    nav: "Blog",
  },
  {
    id: 4,
    path: "/about",
    nav: "About",
  },
  {
    id: 5,
    path: "/contact",
    nav: "Contact",
  },
];

export const banners: BannerType[] = [
  {
    banner: "../images/miniture/slider-1.jpeg",
  },
  {
    banner: "../images/miniture/slider-2.jpeg",
  },
  {
    banner: "../images/miniture/slider-3.jpeg",
  },
];

export const category: CategoryType[] = [
  {
    id: 1,
    img: "../images/miniture/living_room.jpg",
    name: "Living Room",
  },
  {
    id: 2,
    img: "../images/miniture/bed_room.jpg",
    name: "Bed Room",
  },
  {
    id: 3,
    imgs: [
      {
        id: 31,
        img: "../images/miniture/kids_room.jpg",
        name: "Kids Room",
      },
      {
        id: 32,
        img: "../images/miniture/kitchen.jpg",
        name: "Kitchen",
      },
    ],
    name: "Mixed Category",
  },
];

export const products: ProductsType[] = [
  {
    id: 1,
    img: "../images/miniture/chair/1.jpeg",
    category: "bestsell",
    brand: "Old Brand",
    title: "Natural Wood Dining Chair",
    short_description: "Lorem ipsum dolor",
    price: 129.0,
    description:
      "Crafted from high-quality natural wood, this chair combines rustic charm with modern comfort. Its ergonomic backrest and durable frame make it perfect for everyday dining or special occasions.",
  },
  {
    id: 2,
    img: "../images/miniture/chair/2.jpeg",
    category: "New Category",
    brand: "Latest Brand",
    title: "Dining Chair",
    short_description: "Lorem ipsum dolor",
    price: 1209.0,
    description:
      "A timeless dining solution featuring a sleek silhouette and cushioned seat. Ideal for any table setup, this chair delivers both comfort and contemporary style.",
  },
  {
    id: 3,
    img: "../images/miniture/chair/3.jpeg",
    category: "bestsell",
    brand: "Latest Brand",
    title: "Best Chair",
    short_description: "Lorem ipsum dolor",
    price: 529.0,
    description:
      "Designed to be the centerpiece of your room, this chair offers exceptional comfort with a refined aesthetic. Built to last, it's a perfect blend of style and substance.",
  },
  {
    id: 4,
    img: "../images/miniture/chair/4.jpeg",
    category: "Old Category",
    brand: "Latest Brand",
    title: "Natural Wood Chair",
    short_description: "Lorem ipsum dolor",
    price: 900.0,
    description:
      "Inspired by nature, this chair showcases beautiful wood grain textures and a smooth finish. A sturdy and stylish addition to any indoor setting.",
  },
  {
    id: 5,
    img: "../images/miniture/chair/5.jpeg",
    category: "bestsell",
    brand: "Latest Brand",
    title: "Sitting Chair",
    short_description: "Lorem ipsum dolor",
    price: 129.0,
    description:
      "A cozy and compact chair made for moments of relaxation. Whether reading, chatting, or lounging, it supports your posture while enhancing your decor.",
  },
  {
    id: 6,
    img: "../images/miniture/chair/6.jpeg",
    category: "Low Price",
    brand: "Latest Brand",
    title: "Natural Wood Dining Chair",
    short_description: "Lorem ipsum dolor",
    price: 129.0,
    description:
      "A classic pick for farmhouse or modern interiors. Made from solid wood, this dining chair offers durability and a clean design that elevates any dining room.",
  },
  {
    id: 7,
    img: "../images/miniture/chair/7.jpeg",
    category: "bestsell",
    brand: "Latest Brand",
    title: "Beautiful Chair",
    short_description: "Lorem ipsum dolor",
    price: 1129.0,
    description:
      "Gracefully crafted with detailed curves and a soft finish, this chair is made to impress. Perfect for stylish interiors that demand attention to detail.",
  },
  {
    id: 8,
    img: "../images/miniture/chair/8.jpeg",
    category: "Low Price",
    brand: "Indian",
    title: "Chair set",
    short_description: "Lorem ipsum dolor",
    price: 129.0,
    description:
      "A coordinated set of chairs designed for both function and elegance. Great for families or gatherings, these chairs are lightweight, stackable, and easy to maintain.",
  },
  {
    id: 9,
    img: "../images/miniture/chair/9.jpeg",
    category: "Best One",
    brand: "Indian",
    title: "Best One",
    short_description: "Lorem ipsum dolor",
    price: 129.0,
    description:
      "This chair stands out with its premium build and chic appearance. Ideal for customers looking for high-quality seating with a stylish touch.",
  },
  {
    id: 10,
    img: "../images/miniture/chair/10.jpeg",
    category: "High Price",
    brand: "Indian",
    title: "Chair",
    short_description: "Lorem ipsum dolor",
    price: 129.0,
    description:
      "Simple yet effective, this versatile chair suits offices, dining rooms, or waiting areas. Designed for everyday use with a focus on durability.",
  },
  {
    id: 11,
    img: "../images/miniture/chair/11.jpeg",
    category: "bestsell",
    brand: "Indian",
    title: "Old Chair",
    short_description: "Lorem ipsum dolor",
    price: 129.0,
    description:
      "A vintage-inspired chair that adds character to any room. With aged wood tones and classic lines, it’s a nostalgic nod to timeless craftsmanship.",
  },
  {
    id: 12,
    img: "../images/miniture/chair/12.jpeg",
    category: "High Price",
    brand: "Indian",
    title: "New Chair",
    short_description: "Lorem ipsum dolor",
    price: 129.0,
    description:
      "Modern, minimal, and fresh—this new chair is designed for today’s living. Perfect for trendy interiors needing a clean and functional piece.",
  },
  {
    id: 13,
    img: "../images/miniture/chair/13.jpeg",
    category: "bestsell",
    brand: "Indian",
    title: "New Brand Chair",
    short_description: "Lorem ipsum dolor",
    price: 129.0,
    description:
      "A contemporary take from a rising brand, this chair blends innovation with comfort. Its sturdy base and stylish frame are ideal for modern homes.",
  },
  {
    id: 14,
    img: "../images/miniture/chair/14.jpeg",
    category: "High Price",
    brand: "Indian",
    title: "Stylish Chair",
    short_description: "Lorem ipsum dolor",
    price: 129.0,
    description:
      "Sophistication meets comfort in this stylish chair. Upholstered in premium fabric and designed with elegance in mind, it elevates any room it graces.",
  },
  {
    id: 15,
    img: "../images/miniture/chair/9.jpeg",
    category: "High Price",
    brand: "Indian",
    title: "Stylish Chair",
    short_description: "Lorem ipsum dolor",
    price: 145.0,
    description:
      "This stylish chair features a bold silhouette and a comfortable build, perfect for living spaces that embrace modern design.",
  },
  {
    id: 16,
    img: "../images/miniture/chair/2.jpeg",
    category: "High Price",
    brand: "Indian",
    title: "Stylish Chair",
    short_description: "Lorem ipsum dolor",
    price: 134.0,
    description:
      "Add flair to your room with this stylish chair. Its sleek lines and smooth finish make it a standout choice for those who love clean design.",
  },
];

export const arriveItems: ArriveItemType[] = [
  {
    id: 1,
    img: "../images/miniture/chair/insta-1.jpg",
  },
  {
    id: 2,
    img: "../images/miniture/chair/insta-2.jpg",
  },
  {
    id: 3,
    img: "../images/miniture/chair/insta-3.jpg",
  },
  {
    id: 4,
    img: "../images/miniture/chair/insta-4.jpg",
  },
  {
    id: 5,
    img: "../images/miniture/chair/insta-5.jpg",
  },
  {
    id: 6,
    img: "../images/miniture/chair/insta-6.jpg",
  },
];

export const offer: OfferType[] = [
  {
    customer_img: "../images/miniture/creation.jpg",
    title: "CRAFT OWN FURNITURE",
    subtitle: "Your new forever favorites are here",
  },
];

export const brands: BrandType[] = [
  {
    id: 1,
    img: "../images/miniture/chair/1.jpeg",
    title: "Coty",
    short_description: "Grab a deal Airspun Products",
  },
  {
    id: 2,
    img: "../images/miniture/chair/2.jpg",
    title: "Laten",
    short_description: "Grab a deal Airspun Products",
  },
  {
    id: 3,
    img: "../images/miniture/chair/3.png",
    title: "Imagic",
    short_description: "Grab a deal Airspun Products",
  },
  {
    id: 4,
    img: "../images/miniture/chair/4.png",
    title: "Pee Safe",
    short_description: "Grab a deal Airspun Products",
  },
  {
    id: 5,
    img: "../images/miniture/chair/5.jpg",
    title: "Maybeleine",
    short_description: "Grab a deal Airspun Products",
  },
  {
    id: 6,
    img: "../images/miniture/chair/6.png",
    title: "The Purest",
    short_description: "Grab a deal Airspun Products",
  },
];

export const footer: FooterType[] = [
  {
    id: 1,
    header: "Miniture",
    content: [
      "Miniture is one of the biggest international fashion companies, one of the world’s largest distribution groups.",
    ],
  },
  {
    id: 2,
    header: "Quick Links",
    content: ["My Account", "Shopping Cart", "Wishlist", "Product Compare"],
  },
  {
    id: 3,
    header: "Information",
    content: [
      "Privacy Policy",
      "Refund Policy",
      "Shipping & Return",
      "Terms & Condition",
    ],
  },
  {
    id: 4,
    header: "Let's Get In Touch",
    content: ["Sign Up For Our newsletter and receive 10% off your"],
  },
];
