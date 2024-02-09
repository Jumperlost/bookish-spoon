let kitchenProducts = [
  {
    type: "grater",
    price: 10,
  },
  {
    type: "pastry-bag",
    price: 25,
  },
  {
    type: "scale",
    price: 5,
  },
  {
    type: "whisk",
    price: 15,
  },
];

let devicesProducts = [
  {
    type: "desktop",
    price: [100, 1000],
  },
  {
    type: "laptop",
    price: [50, 1500],
  },
  {
    type: "smartphone",
    price: [80, 2000],
  },
  {
    type: "tablet",
    price: [20, 1300],
  },
];

let cosmeticsProducts = [
  {
    type: "blush",
    price: 100,
  },
  {
    type: "eyeshadow",
    price: 50,
  },
  {
    type: "lipstick",
    price: 80,
  },
  {
    type: "nail-polish",
    price: 200,
  },
  {
    type: "perfume",
    price: 300,
  },
];

let kitchenCategory = {
  category: "kitchen",
};
let devicesCategory = {
  category: "devices",
};
let cosmeticsCategory = {
  category: "cosmetics",
};

function addProto(arr, obj) {
  return arr.forEach((item) => {
    Object.setPrototypeOf(item, obj);
  });
}
addProto(kitchenProducts, kitchenCategory);
addProto(devicesProducts, devicesCategory);
addProto(cosmeticsProducts, cosmeticsCategory);
console.log(kitchenProducts);

function renderProduct(arr) {
  let box = "";
  arr.forEach((product) => {
    let price = Array.isArray(product.price)
      ? product.price.join("-")
      : product.price;
    box += `<div class="inner" style="width: calc(100% / ${arr.length})">
          <div class="inner-img">
            <img src="img/${product.category}/${product.type}.svg" alt="${product.type}">
         </div>
            <p class="inner-text">
            Name:<span class="text"><b>${product.type}</b></span>
            </p>
            <p class="inner-text">
            Price:<span class="text"><b>$${price}</b></span>
            </p>
    </div>`;
  });
  return document.getElementById("container").insertAdjacentHTML(
    "beforeend",
    `<div class="block">
    <p class="category"> Category:${arr[0].category}</p>
    <div class="inner-box" >
      ${box}
    </div>
  </div>`
  );
}

renderProduct(kitchenProducts);
renderProduct(devicesProducts);
renderProduct(cosmeticsProducts);
