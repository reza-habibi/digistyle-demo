export const data = {
  products: [
    {
      _id: "1",
      name: "پیراهن مردانه نایک",
      mainCategory: "Mens",
      category: "Shirts",
      image: "/images/products/p1.jpg",
      price: 540000,
      countInStock: 10,
      brand: "Nike",
      brandFa: "نایک",
      rating: 4.5,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      _id: "2",
      name: "پیراهن مردانه آدیداس",
      mainCategory: "Mens",
      category: "Shirts",
      image: "/images/products/p2.jpg",
      price: 580000,
      countInStock: 20,
      brand: "Adidas",
      brandFa: "آدیداس",
      rating: 4.0,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      _id: "3",
      name: "پیراهن مردانه لاکوست",
      mainCategory: "Mens",
      category: "Shirts",
      image: "/images/products/p3.jpg",
      price: 800000,
      countInStock: 0,
      brand: "Lacoste",
      brandFa:"لاکوست",
      rating: 4.8,
      numReviews: 17,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      _id: "4",
      name: "شلوار مردانه نایک",
      mainCategory: "Mens",
      category: "Pants",
      image: "/images/products/p4.jpg",
      price: 490000,
      countInStock: 15,
      brand: "Nike",
      brandFa: "نایک",
      rating: 4.5,
      numReviews: 14,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      _id: "5",
      name: "شلوار مردانه پوما",
      mainCategory: "Mens",
      category: "Pants",
      image: "/images/products/p5.jpg",
      price: 630000,
      countInStock: 5,
      brand: "Puma",
      brandFa: "پوما",
      rating: 4.5,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      _id: "6",
      name: "شلوار مردانه آدیداس",
      mainCategory: "men",
      category: "Pants",
      image: "/images/products/p6.jpg",
      price: 850000,
      countInStock: 12,
      brand: "Adidas",
      brandFa: "آدیداس",
      rating: 4.5,
      numReviews: 15,
      description: "اورجینال با بهترین کیفیت",
    },{
      _id: "7",
      name: "لگینگ ورزشی مردانه تکنیک پلاس 07 مدل SH-126-ME",
      mainCategory: "men",
      category: "men-legging",
      image: "/images/products/men-leg-techniqueplus7.jpg",
      price: 850000,
      countInStock: 12,
      brand: "technique+7",
      brandFa: "تکنیک+07",
      rating: 4,
      numReviews: 15,
      description: "اورجینال با بهترین کیفیت",
    },{
      _id: "8",
      name: "پولوشرت ورزشی مردانه تکنیک پلاس 07 مدل TS-145-SO",
      mainCategory: "mens",
      category: "t-shirt",
      image: "/images/products/men-polo-techniqueplus7.jpg",
      price: 850000,
      countInStock: 12,
      brand: "technique+7",
      brandFa: "تکنیک+07",
      rating: 5,
      numReviews: 5,
      description: "اورجینال با بهترین کیفیت",
    },{
      _id: "9",
      name: "لگینگ ورزشی مردانه تکنیک پلاس 07 مدل SH-115-KA",
      mainCategory: "men",
      category: "men-legging",
      image: "/images/products/men-leg-techniqueplus7-115.jpg",
      price: 850000,
      countInStock: 12,
      brand: "technique+7",
      brandFa: "تکنیک+07",
      rating: 4.5,
      numReviews: 10,
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
    bg: "bg-women",
    color: "bg-we-peep",
    url: "/category/women",
    image: "./images/mobile/category-women.png",
  },
  {
    name: "مردانه",
    bg: "bg-men",
    color: "bg-beauty-bush",
    url: "/category/men",
    image: "./images/mobile/category-men.png",
  },
  {
    name: "بچگانه",
    bg: "bg-kids",
    color: "bg-we-kids",
    url: "/category/kids",
    image: "./images/mobile/category-kids.png",
  },
  {
    name: "زیبایی و سلامت",
    bg: "bg-beauty",
    color: "bg-vanilla-ice",
    url: "/category/personal-appliance-shop",
    image: "./images/mobile/category-beauty.png",
  },
];

export const MobileBannerSlider = [
  {
    url: "/category/men/accessories",
    img: "/images/mobile/bannerSlider/mobile-banner.jpg",
  },
  {
    url: "/category/men/clothing",
    img: "/images/mobile/bannerSlider/mobile-banner-2.jpg",
  },
  {
    url: "/category/men/accessories",
    img: "/images/mobile/bannerSlider/mobile-banner-3.jpg",
  },
  {
    url: "/category/men/accessories",
    img: "/images/mobile/bannerSlider/mobile-banner-4.jpg",
  },
];

export const brands = [
  { name:"mango",url: "/brands/mango", img: "/images/brands/mango.png" },
  { name:"geox",url: "/brands/geox", img: "/images/brands/geox.png" },
  { name:"adidas",url: "/brands/adidas", img: "/images/brands/adidas.png" },
  { name:"reebook",url: "/brands/reebook", img: "/images/brands/reebook.png" },
  { name:"superdry",url: "/brands/superdry", img: "/images/brands/superdry.png" },
  { name:"zi",url: "/brands/zi", img: "/images/brands/zi.png" },

];


export const DesktopBannerSlider = [
  {
    url: "/category/men/accessories",
    img: "/images/desktop/main-slider.jpg",
  },
  {
    url: "/category/men/clothing",
    img: "/images/desktop/main-slider2.jpg",
  },
  {
    url: "/category/men/accessories",
    img: "/images/desktop/main-slider3.jpg",
  },
  {
    url: "/category/men/accessories",
    img: "/images/desktop/main-slider4.jpg",
  },
  {
    url: "/category/men/accessories",
    img: "/images/desktop/main-slider5.jpg",
  },{
    url: "/category/men/accessories",
    img: "/images/desktop/main-slider6.jpg",
  },{
    url: "/category/men/accessories",
    img: "/images/desktop/main-slider7.jpg",
  },
];