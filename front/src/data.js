
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

export const BannerSlider = [
  {
    url: "/category/men/accessories",
  },
  {
    url: "/category/men/clothing",
  },
  {
    url: "/category/men/accessories",
  },
  {
    url: "/category/men/accessories",
  },
  {
    url: "/category/men/accessories",
  },
  {
    url: "/category/men/accessories",
  },
  {
    url: "/category/men/accessories",
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
