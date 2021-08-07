import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "Reza",
      email: "rezhabibi372@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Hossien",
      email: "example@gamil.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      
      name: "پیراهن مردانه نایک",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "لباس مردانه",
      categoryEn: "men-clothing",
      subCategory: "پیراهن مردانه",
      subCategoryEn: "men-shirts",
      image: "/images/products/p1.jpg",
      price: 540000,
      discount: "19",
      countInStock: 10,
      brand: "nike",
      brandFa: "نایک",
      rating: 4.5,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      
      name: "پیراهن مردانه آدیداس",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "لباس مردانه",
      categoryEn: "men-clothing",

      subCategory: "پیراهن مردانه",
      subCategoryEn: "men-shirts",
      image: "/images/products/p2.jpg",
      price: 580000,
      discount: "0",
      countInStock: 20,
      brand: "adidas",
      brandFa: "آدیداس",
      rating: 4.0,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      
      name: "پیراهن مردانه لاکوست",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "لباس مردانه",
      categoryEn: "men-clothing",
      subCategory: "پیراهن مردانه",
      subCategoryEn: "men-shirts",
      image: "/images/products/p3.jpg",
      price: 800000,
      discount: "0",
      countInStock: 0,
      brand: "lacoste",
      brandFa: "لاکوست",
      rating: 4.8,
      numReviews: 17,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      
      name: "شلوار مردانه نایک",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "لباس مردانه",
      categoryEn: "men-clothing",
      subCategory: "شلوار مردانه",
      subCategoryEn: "men-pants",
      image: "/images/products/p4.jpg",
      price: 490000,
      discount: "23",
      countInStock: 15,
      brand: "nike",
      brandFa: "نایک",
      rating: 4.5,
      numReviews: 14,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      
      name: "شلوار مردانه پوما",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "لباس مردانه",
      categoryEn: "men-clothing",
      subCategory: "شلوار مردانه",
      subCategoryEn: "men-pants",
      image: "/images/products/p5.jpg",
      price: 630000,
      discount: "0",
      countInStock: 5,
      brand: "puma",
      brandFa: "پوما",
      rating: 4.5,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      
      name: "شلوار مردانه آدیداس",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "لباس مردانه",
      categoryEn: "men-clothing",

      subCategory: "شلوار مردانه",
      subCategoryEn: "men-pants",
      image: "/images/products/p6.jpg",
      price: 850000,
      discount: "0",
      countInStock: 12,
      brand: "adidas",
      brandFa: "آدیداس",
      rating: 4.5,
      numReviews: 15,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      
      name: "لگینگ ورزشی مردانه تکنیک پلاس 07 مدل SH-126-ME",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "ورزشی مردانه",
      categoryEn: "men-clothing",
      subCategory: "لباس ورزشی مردانه",
      subCategoryEn: "men-sport-clothing",
      image: "/images/products/men-leg-techniqueplus7.jpg",
      price: 850000,
      discount: "0",
      countInStock: 12,
      brand: "technique+7",
      brandFa: "تکنیک+07",
      rating: 4,
      numReviews: 15,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      
      name: "پولوشرت ورزشی مردانه تکنیک پلاس 07 مدل TS-145-SO",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "ورزشی مردانه",
      categoryEn: "men-clothing",
      subCategory: "لباس ورزشی مردانه",
      subCategoryEn: "men-sport-clothing",
      image: "/images/products/men-polo-techniqueplus7.jpg",
      price: 850000,
      discount: "0",
      countInStock: 12,
      brand: "technique+7",
      brandFa: "تکنیک+07",
      rating: 5,
      numReviews: 5,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      
      name: "لگینگ ورزشی مردانه تکنیک پلاس 07 مدل SH-115-KA",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "ورزشی مردانه",
      categoryEn: "men-sports",
      subCategory: "لباس ورزشی مردانه",
      subCategoryEn: "men-sport-clothing",
      image: "/images/products/men-leg-techniqueplus7-115.jpg",
      price: 850000,
      discount: "0",
      countInStock: 12,
      brand: "technique+7",
      brandFa: "تکنیک+07",
      rating: 4.5,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      
      name: "کفش پیاده روی مردانه آدیداس مدل alpha bounce",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "کفش مردانه",
      categoryEn: "men-shoes",
      subCategory: "ورزشی مردانه",
      subCategoryEn: "sport-shoes",
      image: "/images/products/adidas-running.jpg",
      price: 2370000,
      discount: "0",
      countInStock: 12,
      brand: "adidas",
      brandFa: "آدیداس",
      rating: 4.5,
      numReviews: 15,
      description: "اورجینال با بهترین کیفیت",
    },
    {
      
      name: "تی شرت یقه گرد مردانه Jordan Sportswear - نایکی",
      mainCategory: "مردانه",
      mainCategoryEn: "men",
      category: "لباس مردانه",
      categoryEn: "men-clothing",
      subCategory: "تی شرت مردانه",
      image: "/images/products/nike-t-shirt.jpg",
      price: 1090000,
      discount: "0",
      countInStock: 10,
      brand: "nike",
      brandFa: "نایک",
      rating: 4.5,
      numReviews: 10,
      description: "اورجینال با بهترین کیفیت",
    },
  ],
};

export const Categories = [
  {
    name: "مردانه",
    nameEn: "men",
    URL: "/category/men",
    gridCol: 3,
    subCategory: [
      {
        name: "لباس مردانه",
        nameEn: "men-clothing",
        subSubCategories: [
          {
            name: "پیراهن",
            nameEn: "men-shirts",
            url: "/category/men/men-clothing/men-shirts",
          },
          {
            name: "شلوار",
            nameEn: "men-pants",

            url: "/category/men/men-clothing/men-pants",
          },
          {
            name: "کت و شلوار ",
            nameEn: "men-suits",

            url: "/category/men/men-clothing/men-suits",
          },
          {
            name: "هودی و سویشرت",
            nameEn: "men-hoodies",

            url: "/category/men/men-clothing/men-hoodies",
          },
          {
            name: "تی شرت",
            nameEn: "men-t-shirts",
            url: "/category/men/men-clothing/men-t-shirts",
          },
        ],
        url: "/category/men/men-clothing",
        image: "./images/product-category/category-men-clothes.jpg",
        colSpan: 3,
      },
      {
        name: "کفش مردانه",
        nameEn: "men-shoes",

        subSubCategories: [
          {
            name: "کفش ورزشی مردانه",
            nameEn: "men-sport-shoes",

            url: "/category/men/men-shoes/men-sport-shoes",
          },
          {
            name: "کفش رسمی مردانه",
            nameEn: "men-formal-shoes",

            url: "/category/men/men-shoes/men-formal-shoes",
          },
          {
            name: "کفش روزمره مردانه",
            nameEn: "men-casual-shoes",

            url: "/category/men/men-shoes/men-casual-shoes",
          },
        ],
        url: "/category/men/men-shoes",
        image: "./images/product-category/category-men-shoes.jpg",
      },
      {
        name: "اکسسوری مردانه",
        nameEn: "men-accessories",

        url: "/category/men/men-accessories",
        image: "./images/product-category/category-men-accessories.jpg",
      },
      {
        name: "ورزشی مردانه",
        nameEn: "men-sports",

        subSubCategories: [
          {
            name: "پوشاک ورزشی مردانه",
            nameEn: "men-sport-clothing",

            url: "/category/men/men-sports/men-sport-clothing",
          },
          {
            name: "گرمکن و ست ورزشی مردانه",
            nameEn: "men-tracksuits-sets",

            url: "/category/men/men-sports/men-tracksuits-sets",
          },
        ],
        url: "/category/men/men-sports",
        image: "./images/product-category/category-men-sports.jpg",
      },
    ],
  },
  {
    name: "زنانه",
    nameEn: "women",

    URL: "/category/women",
    gridCol: 3,
    subCategory: [
      {
        name: "لباس زنانه",
        nameEn: "women-clothing",

        subSubCategories: [
          {
            name: "پیراهن و لباس مجلسی زنانه",
            nameEn: "women-dresses",

            url: "/category/women/women-clothing/women-dresses",
          },
          {
            name: "شلوار زنانه",
            nameEn: "women-pants",

            url: "/category/women/women-clothing/women-pants",
          },
          {
            name: "بلوز و شومیز زنانه",
            nameEn: "women-shirts",

            url: "/category/women/women-clothing/women-shirts",
          },
          {
            name: "تاپ و تونیک زنانه",
            nameEn: "women-tops",

            url: "/category/women/women-clothing/women-tops",
          },
          {
            name: "تی شرت زنانه",
            nameEn: "women-t-shirts",

            url: "/category/women/women-clothing/women-t-shirts",
          },
        ],
        url: "/category/women/women-clothing",
        image: "./images/product-category/category-women-clothes.jpg",
        colSpan: 3,
      },
      {
        name: "کفش زنانه",
        nameEn: "women-shoes",

        subSubCategories: [
          {
            name: "کفش ورزشی زنانه",
            nameEn: "women-sport-shoes",

            url: "/category/women/women-shoes/women-sport-shoes",
          },
          {
            name: "کفش پاشنه بلند زنانه",
            nameEn: "women-heeled-shoes",

            url: "/category/men/men-shoes/women-heeled-shoes",
          },
          {
            name: "کفش روزمره زنانه",
            nameEn: "women-casual-shoes",

            url: "/category/wo/wo-shoes/wo-casual-shoes",
          },
        ],
        url: "/category/women/women-shoes",
        image: "./images/product-category/category-women-shoes.jpg",
      },
      {
        name: "اکسسوری زنانه",
        nameEn: "women-accessories",

        url: "/category/women/women-accessories",
        image: "./images/product-category/category-men-accessories.jpg",
      },
      {
        name: "ورزشی زنانه",
        nameEn: "women-sports",

        subSubCategories: [
          {
            name: "پوشاک ورزشی زنانه",
            nameEn: "women-sport-clothing",

            url: "/category/women/women-sports/women-sport-clothing",
          },
          {
            name: "گرمکن و ست ورزشی زنانه",
            nameEn: "women-tracksuits-sets",

            url: "/category/women/women-sports/women-tracksuits-sets",
          },
        ],
        url: "/category/women/women-sports",
        image: "./images/product-category/category-women-sports.jpg",
      },
    ],
  },
  {
    name: "بچگانه",
    nameEn: "kids",

    URL: "/category/kids",
    gridCol: 2,
    subCategory: [
      {
        name: "لباس نوزاد",
        nameEn: "baby-clothing",

        url: "/category/kids/baby-clothing",
        image: "./images/product-category/category-baby-clothes.jpg",
        colSpan: 2,
      },
      {
        name: "لباس دخترانه",
        nameEn: "girl-clothing",

        url: "/category/kids/girl-clothing",
        image: "./images/product-category/category-girl-clothes.jpg",
      },
      {
        name: "لباس پسرانه",
        nameEn: "boy-clothing",

        url: "/category/kids/boy-clothing",
        image: "./images/product-category/category-boy-clothes.jpg",
      },
    ],
  },
  {
    name: "زیبایی و سلامت ",
    nameEn: "personal-appliance-shop",

    URL: "/category/personal-appliance-shop",
    gridCol: 4,
    subCategory: [
      {
        name: "لوازم آرایشی",
        nameEn: "beauty",
        url: "/category/personal-appliance-shop/beauty",
        image: "./images/product-category/category-beauty.jpg",
        colSpan: 4,
      },
      {
        name: "لوازم بهداشتی",
        nameEn: "personal-care",

        url: "/category/personal-appliance-shop/personal-care",
        image: "./images/product-category/category-personal-care.jpg",
      },
      {
        name: "لوازم شخصی برقی",
        nameEn: "personal-electrical-care",

        url: "/category/personal-appliance-shop/personal-electrical-care",
        image:
          "./images/product-category/category-personal-electrical-care.jpg",
      },
      {
        name: "عطر",
        nameEn: "perfume-all",

        url: "/category/personal-appliance-shop/perfume-all",
        image: "./images/product-category/category-perfume-all.jpg",
      },
      {
        name: "ابزار سلامت",
        nameEn: "health-care",

        url: "/category/personal-appliance-shop/health-care",
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
  {
    name: "mango",
    url: "/brands/mango",
    img: "/images/brands/mango.png",
  },
  {
    name: "geox",
    url: "/brands/geox",
    img: "/images/brands/geox.png",
  },
  {
    name: "adidas",
    url: "/brands/adidas",
    img: "/images/brands/adidas.png",
  },
  {
    name: "reebook",
    url: "/brands/reebook",
    img: "/images/brands/reebook.png",
  },
  {
    name: "superdry",
    url: "/brands/superdry",
    img: "/images/brands/superdry.png",
  },
  {
    name: "zi",
    url: "/brands/zi",
    img: "/images/brands/zi.png",
  },
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
  },
  {
    url: "/category/men/accessories",
    img: "/images/desktop/main-slider6.jpg",
  },
  {
    url: "/category/men/accessories",
    img: "/images/desktop/main-slider7.jpg",
  },
];

export const AllCategories = [
  {
    name: "پیراهن مردانه",
    url: "/category/men/men-clothing/men-shirts",
  },
  {
    name: "شلوار مردانه",
    url: "/category/men/men-clothing/men-pants",
  },
  {
    name: "کت و شلوار مردانه",
    url: "/category/men/men-clothing/men-suits",
  },
  {
    name: "هودی و سویشرت مردانه",
    url: "/category/men/men-clothing/men-hoodies",
  },
  {
    name: "تی شرت مردانه",
    url: "/category/men/men-clothing/men-t-shirts",
  },
  {
    name: "کفش ورزشی مردانه",
    url: "/category/men/men-shoes/men-sport-shoes",
  },
  {
    name: "کفش رسمی مردانه",
    url: "/category/men/men-shoes/men-formal-shoes",
  },
  {
    name: "کفش روزمره مردانه",
    url: "/category/men/men-shoes/men-casual-shoes",
  },
  {
    name: "پوشاک ورزشی مردانه",
    url: "/category/men/men-sports/men-sport-clothing",
  },
  {
    name: "گرمکن و ست ورزشی مردانه",
    url: "/category/men/men-sports/men-tracksuits-sets",
  },
  {
    name: "پیراهن و لباس مجلسی زنانه",
    url: "/category/women/women-clothing/women-dresses",
  },
  {
    name: "شلوار زنانه",
    url: "/category/women/women-clothing/women-pants",
  },
  {
    name: "بلوز و شومیز زنانه",
    url: "/category/women/women-clothing/women-shirts",
  },
  {
    name: "تاپ و تونیک زنانه",
    url: "/category/women/women-clothing/women-tops",
  },
  {
    name: "تی شرت زنانه",
    url: "/category/women/women-clothing/women-t-shirts",
  },
  {
    name: "کفش ورزشی زنانه",
    url: "/category/women/women-shoes/women-sport-shoes",
  },
  {
    name: "کفش پاشنه بلند زنانه",
    url: "/category/men/men-shoes/women-heeled-shoes",
  },
  {
    name: "کفش روزمره زنانه",
    url: "/category/wo/wo-shoes/wo-casual-shoes",
  },
  {
    name: "مردانه",
    url: "/category/men",
  },
  {
    name: "لباس مردانه",
    url: "/category/men/men-clothing",
  },
  {
    name: "کفش مردانه",
    url: "/category/men/men-shoes",
  },
  {
    name: "اکسسوری مردانه",
    url: "/category/men/men-accessories",
  },
  {
    name: "ورزشی مردانه",
    url: "/category/men/men-sport",
  },
  {
    name: "زنانه",
    url: "/category/women",
  },
  {
    name: "لباس زنانه",
    url: "/category/women/women-clothing",
  },
  {
    name: "کفش زنانه",
    url: "/category/women/women-shoes",
  },
  {
    name: "اکسسوری زنانه",
    url: "/category/women/women-accessories",
  },
  {
    name: "ورزشی زنانه",
    url: "/category/women/women-sport",
  },
  {
    name: "پوشاک ورزشی زنانه",
    url: "/category/women/women-sports/women-sport-clothing",
  },
  {
    name: "گرمکن و ست ورزشی زنانه",
    url: "/category/women/women-sports/women-tracksuits-sets",
  },
  {
    name: "بچگانه",
    url: "/category/kids",
  },
  {
    name: "لباس نوزاد",
    url: "/category/kids/baby-clothing",
  },
  {
    name: "لباس دخترانه",
    url: "/category/kids/girl-clothing",
  },
  {
    name: "لباس پسرانه",
    url: "/category/kids/boy-clothing",
  },
  {
    name: "زیبایی و سلامت ",
    url: "/category/personal-appliance-shop",
  },
  {
    name: "لوازم آرایشی",
    url: "/category/personal-appliance-shop/beauty",
  },
  {
    name: "لوازم بهداشتی",
    url: "/category/personal-appliance-shop/personal-care",
  },
  {
    name: "لوازم شخصی برقی",
    url: "/category/personal-appliance-shop/personal-electrical-care",
  },
  {
    name: "عطر",
    url: "/category/personal-appliance-shop/perfume-all",
  },
  {
    name: "ابزار سلامت",
    url: "/category/personal-appliance-shop/health-care",
  },
];

export const Comment = [
  {
    title: "عالی",
    author: "اصغر جوزجانی",
    description:
      "کیفیت خیلی خوبی داره و البته زیاد خنک نیست برا تابستون. من سایز لارج هستم ولی این تی شرت سایز مدیوم اندازه من هست. جنس لباس نخ پنبه کامل نیست و پلاسیک هم داخلش داره. ترکیب یخه خوب هست و با شستشو حالتش رو از دست نمی ده. فقط با تخفیف ویژه ارزش خرید داره",
  },
  {
    title: "عالی",
    author: "اصغر جوزجانی",
    description:
      "کیفیت خیلی خوبی داره و البته زیاد خنک نیست برا تابستون. من سایز لارج هستم ولی این تی شرت سایز مدیوم اندازه من هست. جنس لباس نخ پنبه کامل نیست و پلاسیک هم داخلش داره. ترکیب یخه خوب هست و با شستشو حالتش رو از دست نمی ده. فقط با تخفیف ویژه ارزش خرید داره",
  },
  {
    title: "عالی",
    author: "اصغر جوزجانی",
    description:
      "کیفیت خیلی خوبی داره و البته زیاد خنک نیست برا تابستون. من سایز لارج هستم ولی این تی شرت سایز مدیوم اندازه من هست. جنس لباس نخ پنبه کامل نیست و پلاسیک هم داخلش داره. ترکیب یخه خوب هست و با شستشو حالتش رو از دست نمی ده. فقط با تخفیف ویژه ارزش خرید داره",
  },
  {
    title: "عالی",
    author: "اصغر جوزجانی",
    description:
      "کیفیت خیلی خوبی داره و البته زیاد خنک نیست برا تابستون. من سایز لارج هستم ولی این تی شرت سایز مدیوم اندازه من هست. جنس لباس نخ پنبه کامل نیست و پلاسیک هم داخلش داره. ترکیب یخه خوب هست و با شستشو حالتش رو از دست نمی ده. فقط با تخفیف ویژه ارزش خرید داره",
  },
];
