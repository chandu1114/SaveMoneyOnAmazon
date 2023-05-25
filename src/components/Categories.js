import classes from "./Categories.module.scss";

const categories_list = [
  {
    id: 1,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg",
    name: "Mobiles",
    link: "https://amzn.to/3MTJQac",
  },

  {
    id: 2,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/electronics.jpg",
    name: "Electronics",
    link: "https://amzn.to/3IEwNH0",
  },

  {
    id: 3,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/computer_accessories.jpg",
    name: "Mobile & Computer accessories",
    link: "https://amzn.to/3OEXP4L",
  },

  {
    id: 4,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/home_appliances.jpg",
    name: "Large Appliances",
    link: "https://amzn.to/3Ww4Mav",
  },

  {
    id: 5,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/Home__kitchen.jpg",
    name: "Home & Kitchen",
    link: "https://amzn.to/3BTeJoQ",
  },

  {
    id: 6,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/furniture.jpg",
    name: "Furniture",
    link: "https://amzn.to/3MVfHaj",
  },

  {
    id: 7,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_ASIN-Icons_150x150_PCA.jpg",
    name: "Grooming & Wellness",
    link: "https://amzn.to/3WyyBHm",
  },

  {
    id: 8,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/health__households.jpg",
    name: "Health & Household",
    link: "https://amzn.to/3MVpXiZ",
  },

  {
    id: 9,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/clothinghalos-model-icon.jpg",
    name: "Clothing",
    link: "https://amzn.to/43v3oHv",
  },

  {
    id: 10,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/footwear-icon.jpg",
    name: "Footwear",
    link: "https://amzn.to/3onXN6Z",
  },

  {
    id: 11,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/Icons_Beauty1.png",
    name: "Beauty & Makeup",
    link: "https://amzn.to/3oAU1a7",
  },

  {
    id: 12,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/jewelleryhalos.jpg",
    name: "Jewellery, Luggage, Watches",
    link: "https://amzn.to/42bqEsK",
  },

  {
    id: 13,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/bankt1/All_ASIN-Icons_Template_2_332.jpg",
    name: "Kids & Baby",
    link: "https://amzn.to/437M5MF",
  },

  {
    id: 14,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/PB-icon.jpg",
    name: "Amazon Brands & more",
    link: "https://amzn.to/3IHV6Ux",
  },

  {
    id: 15,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/grocery.jpg",
    name: "Grocery",
    link: "https://amzn.to/3WBd4h2",
  },

  {
    id: 16,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/sports.jpg",
    name: "Sports & Fitness",
    link: "https://amzn.to/3WBcNuw",
  },

  {
    id: 17,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_ASIN-Icons_150x150_Books.jpg",
    name: "Books & Stationery",
    link: "https://amzn.to/45sVsrV",
  },

  {
    id: 18,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/automobiles.jpg",
    name: "Car & Motorbike accessories",
    link: "https://amzn.to/3BV7b4Z",
  },

  {
    id: 19,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/pet.jpg",
    name: "Pet Supplies",
    link: "https://amzn.to/3BYCRqd",
  },

  {
    id: 20,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jupiter21P1/All_ASIN-Icons_150x150_VG.jpg",
    name: "Video games & software",
    link: "https://amzn.to/43JfI79",
  },

  {
    id: 21,
    imgae:
      "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg",
    name: "Musical Instruments",
    link: "https://amzn.to/3MVfqnP",
  },
];

const Categories = () => {
  const category_rendorList = categories_list.map((item) => (
    <li key={item.id} className={classes.categoryItem}>
      <img src={item.imgae} className={classes.categoryItem_categoryImg} />
      <a
        href={item.link}
        className={classes.categoryItem_categoryName}
        target="_blank"
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <>
      <h2 className={classes.heading}>Today's Best Deals by Category</h2>
      <div className={classes.container}>{category_rendorList}</div>
    </>
  );
};

export default Categories;
