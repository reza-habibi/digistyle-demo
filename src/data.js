export const data = {
  products: [
    {
      _id: "1",
      name: "پیراهن مردانه نایک",
      mainCategory: "Mens",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 540000,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      _id: "2",
      name: "پیراهن مردانه آدیداس",
      mainCategory: "Mens",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 580000,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      _id: "3",
      name: "پیراهن مردانه لاکوست",
      mainCategory: "Mens",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 800000,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 17,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      _id: "4",
      name: "شلوار مردانه نایک",
      mainCategory: "Mens",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 490000,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      _id: "5",
      name: "شلوار مردانه پوما",
      mainCategory: "Mens",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 630000,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      _id: "6",
      name: "شلوار مردانه آدیداس",
      mainCategory: "Mens",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 850000,
      countInStock: 12,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 15,
      description: "اورجینال با بهترین کیفیت",
    },
  ],
};

export const Categories = [
  {
    name: "مردانه",
    URL: "/category/men",
    gridCol: 3,
    subCategory: [
      {
        name: "لباس مردانه",
        url: "/category/men/men-clothing",
        image: "./images/product-category/category-men-clothes.jpg",
        colSpan: 3,
      },
      {
        name: "کفش مردانه",
        url: "/category/men/men-shoes",
        image: "./images/product-category/category-men-shoes.jpg",
      },
      {
        name: "اکسسوری مردانه",
        url: "/category/men/men-accessories",
        image: "./images/product-category/category-men-accessories.jpg",
      },
      {
        name: "ورزشی مردانه",
        url: "/category/men/men-sport",
        image: "./images/product-category/category-men-sports.jpg",
      },
    ],
  },
  {
    name: "زنانه",
    URL: "/category/women",
    gridCol: 3,
    subCategory: [
      {
        name: "لباس زنانه",
        url: "/category/women/women-clothing",
        image: "./images/product-category/category-women-clothes.jpg",
        colSpan: 3,
      },
      {
        name: "کفش زنانه",
        url: "/category/women/women-shoes",
        image: "./images/product-category/category-women-shoes.jpg",
      },

      {
        name: "اکسسوری زنانه",
        url: "/category/women/women-accessories",
        image: "./images/product-category/category-men-accessories.jpg",
      },
      {
        name: "ورزشی زنانه",
        url: "/category/women/women-sport",
        image: "./images/product-category/category-women-sports.jpg",
      },
    ],
  },
  {
    name: "بچگانه",
    URL: "/category/kids",
    gridCol: 2,
    subCategory: [
      {
        name: "لباس نوزاد",
        url: "/category/kids/baby-clothing",
        image: "./images/product-category/category-baby-clothes.jpg",
        colSpan: 2,
      },
      {
        name: "لباس دخترانه",
        url: "/category/kids/girl-clothing",
        image: "./images/product-category/category-girl-clothes.jpg",
      },
      {
        name: "لباس پسرانه",
        url: "/category/kids/boy-clothing",
        image: "./images/product-category/category-boy-clothes.jpg",
      },
    ],
  },
  {
    name: "زیبایی و سلامت ",
    URL: "/category/personal-appliance-shop",
    gridCol: 4,
    subCategory: [
      {
        name: "لوازم آرایشی",
        url: "/category/personal-appliance-shop/category-beauty",
        image: "./images/product-category/beauty.jpg",
        colSpan: 4,
      },
      {
        name: "لوازم بهداشتی",
        url: "/category/personal-appliance-shop/personal-care",
        image: "./images/product-category/category-personal-care.jpg",
      },
      {
        name: "لوازم شخصی برقی",
        url: "/category/personal-appliance-shop/personal-electrical-care",
        image:
          "./images/product-category/category-personal-electrical-care.jpg",
      },
      {
        name: "عطر",
        url: "/category/personal-appliance-shop/perfume-all",
        image: "./images/product-category/category-perfume-all.jpg",
      },
      {
        name: "ابزار سلامت",
        url: "/category/personal-appliance-shop/boy-clothing",
        image: "./images/product-category/category-health-care.jpg",
      },
    ],
  },
];

export const mobileCategory = [
  {
    name: "زنانه",
    img: "bg-women",
    color: "bg-we-peep",
    url: "/category/women",
  },
  {
    name: "مردانه",
    img: "bg-men",
    color: "bg-beauty-bush",
    url: "/category/men",
  },
  {
    name: "بچگانه",
    img: "bg-kids",
    color: "bg-we-kids",
    url: "/category/kids",
  },
  {
    name: "زیبایی و سلامت",
    img: "bg-beauty",
    color: "bg-vanilla-ice",
    url: "/category/personal-appliance-shop",
  },
];
