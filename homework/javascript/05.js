const terminalWidth = process.stdout.columns;
const border = "=".repeat(terminalWidth);
import axios from "axios";
const BASE_URL = "https://dummyjson.com";

// TODO: 모든 댓글 목록 조회
async function getComments() {
  const response = await axios.get(`${BASE_URL}/comments`);
  const data = response["data"];
  console.log(data);
}
//getComments();
/* 출력 결과
{
  "comments": [
    {
      "id": 1,
      "body": "This is some awesome thinking!",
      "postId": 242,
      "likes": 3,
      "user": {
        "id": 105,
        "username": "emmac",
        "fullName": "Emma Wilson"
      }
    },
    ...
  ]
}
*/
console.log(border);

// TODO: ID가 6인 게시글의 댓글 조회
const getCommentsId = async () => {
  const response = await axios.get(`${BASE_URL}/comments/post/6`);
  const data = response["data"];
  console.log(data);
};

//getCommentsId();
/* 출력 결과
{
  "comments": [
    {
      "id": 15,
      "body": "You've shown so much growth!",
      "postId": 6, // post id is 6
      "likes": 2,
      "user": {
        "id": 17,
        "username": "evelyns",
        "fullName": "Evelyn Sanchez"
      }
    }
  ],
  "total": 1,
  "skip": 0,
  "limit": 1
}
*/
console.log(border);

// TODO: 랜덤 할일 조회
async function getCommentsRandom() {
  const random = Math.round(Math.random()); // 랜덤 숫자 생성
  //const response = await axios.get(`${BASE_URL}/comments/${random}`);
  const response = await axios.get(`${BASE_URL}/comments/127`);
  const data = response["data"];
  console.log(data);
}
//getCommentsRandom();
/* 출력 결과
{
  // random result, will be changed on every call to /random
  "id": 127,
  "todo": "Prepare a dish from a foreign culture",
  "completed": false,
  "userId": 7
}
*/
console.log(border);

// TODO: 상품 종류 목록 조회
async function getCategoryList() {
  const response = await axios.get(`${BASE_URL}/products/category-list`);
  const data = response["data"];
  console.log(data);
}
//getCategoryList();
/* 출력 결과
[
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  ...
]
*/
console.log(border);

// TODO: 랜덤 인용문(quote) 조회
async function getQuote() {
  const random = Math.round(Math.random()); // 랜덤 숫자 생성
  //const response = await axios.get(`${BASE_URL}/quotes/${random}`);
  const response = await axios.get(`${BASE_URL}/quotes/62`);
  const data = response["data"];
  console.log(data);
}
//getQuote();
/* 출력 결과
{
  // random result, will change on every call to /random
  "id": 62,
  "quote": "If you want to lift yourself up, lift up someone else.",
  "author": "Booker T. Washington"
}
*/

console.log(border);

// TODO: Beef 태그 요리법(recipes) 조회
async function getRecipes() {
  const response = await axios.get(`${BASE_URL}/recipes/11`);
  const data = response["data"];
  console.log(data);
}
//getRecipes();
/* 출력 결과
{
  recipes: [
    {
      id: 11,
      name: 'Chicken Biryani',
      ingredients: [Array],
      instructions: [Array],
      prepTimeMinutes: 30,
      cookTimeMinutes: 45,
      servings: 6,
      difficulty: 'Medium',
      cuisine: 'Pakistani',
      caloriesPerServing: 550,
      tags: [Array],
      userId: 133,
      image: '<https://cdn.dummyjson.com/recipe-images/11.webp>',
      rating: 5,
      reviewCount: 32,
      mealType: [Array]
    },
    ...
  ],
  total: 7,
  skip: 0,
  limit: 7
}
*/
console.log(border);

// TODO: 가격(price) 내림차순(desc) 상품 목록 조회
async function getPriceDesc() {
  const response = await axios.get(`${BASE_URL}/products`);
  const data = response["data"];
  const products = data["products"];
  const sortproducts = products.sort((a, b) => {
    return b.price - a.price;
  });
  console.log(sortproducts);
}
//getPriceDesc();
/* 출력 결과
{
  products: [
    {
      id: 170,
      title: 'Durango SXT RWD',
      description: 'The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.',
      category: 'vehicle',
      price: 36999.99,
      discountPercentage: 16.44,
      rating: 4.07,
      stock: 95,
      tags: [Array],
      brand: 'Dodge',
      sku: 'VEH-DOD-DUR-170',
      weight: 1,
      dimensions: [Object],
      warrantyInformation: '2 year warranty',
      shippingInformation: 'Ships in 1 month',
      availabilityStatus: 'In Stock',
      reviews: [Array],
      returnPolicy: '30 days return policy',
      minimumOrderQuantity: 1,
      meta: [Object],
      images: [Array],
      thumbnail: '<https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/thumbnail.webp>'
    },
    {
      id: 168,
      title: 'Charger SXT RWD',
      description: 'The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.',
      category: 'vehicle',
      price: 32999.99,
      discountPercentage: 8.23,
      rating: 2.58,
      stock: 57,
      tags: [Array],
      brand: 'Dodge',
      sku: 'VEH-DOD-CHA-168',
      weight: 6,
      dimensions: [Object],
      warrantyInformation: '1 month warranty',
      shippingInformation: 'Ships in 3-5 business days',
      availabilityStatus: 'In Stock',
      reviews: [Array],
      returnPolicy: 'No return policy',
      minimumOrderQuantity: 1,
      meta: [Object],
      images: [Array],
      thumbnail: '<https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/thumbnail.webp>'
    },
    ...
  ],
  total: 194,
  skip: 0,
  limit: 30
}
*/
console.log(border);

// TODO: id가 6인 유저의 장바구니(cart) 조회
const getUserCart = async () => {
  const response = await axios.get(`${BASE_URL}/carts/user/6`);
  const data = response["data"];
  console.log(data);
};
getUserCart();
/* 출력 결과
{
  carts: [
    {
      id: 24,
      products: [Array],
      total: 1749.9,
      discountedTotal: 1594.33,
      userId: 6,
      totalProducts: 3,
      totalQuantity: 10
    }
  ],
  total: 1,
  skip: 0,
  limit: 1
}
*/
console.log(border);
