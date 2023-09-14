//header login btn function
function logindiv(flag, username) {
  try {
    if (flag === 1) {
      let userpage = `<h5 id='h5-User-label'>${username}</h5>`;
      document.querySelector(".login-div").innerHTML = userpage;
      document.querySelector("#top-div").style.display = "none";
      document.querySelector("#logout").style.display = "block";
      loginpagefood();
    } else {
      // let loginbtn=`<button onclick='document.getElementById('login-box').style.display='block'' style='width:auto'><i class='fa-solid fa-user'></i>Login</button>`;
      let loginbtn = `<button class='login-btn' style = ' background: #F17228;
            color: white;width:100px;text-align:center; padding: 11px 20px;border-radius:10px;outline:none;border:none;font-size:15px;font-weight:bold'><i class='fa-solid fa-user' style='padding:3px;'></i>Login</button>`;

      document.querySelector(".login-div").innerHTML = loginbtn;
      document.querySelector(".login-btn").addEventListener("click", () => {
        document.getElementById("login-box").style.display = "block";
        document.getElementById("login-box").style.width = "100%";
        document.querySelector("#top-div").style.display = "block";
      });
      //adding cart on the top
    }
  } catch (error) {
    console.log("12==>", error);
  }
}

function loginProceed(event) {
  //event.preventDefault();
  const username = document.querySelector(".usertxtinput").value;
  const password = document.querySelector(".passtxtinput").value;
  const credential = {
    username: "12",
    password: "12",
  };
  if (username === credential.username && password === credential.password) {
    logindiv(1, username);
    document.getElementById("h5-User-label").innerHTML = username;
    document.querySelector(".modal").style.display = "none";
    // enabling cart div
    document.querySelector(".cart-div").style.display = "block";
    document.querySelector(".usertxtinput").value = "";
    document.querySelector(".passtxtinput").value = "";
  }
}

function logout() {
  document.querySelector("#top-div").style.display = "block";
  document.querySelector("#logout").style.display = "none";
  document.querySelector(".cart-div").style.display = "none";
  document.getElementById("popular-items-div1").style.display = "none";
  document.querySelector(".login-div").style.display = "block";

  let loginbtn = `<button class='login-btn' style = ' background: #F17228;
            color: white;width:100px; padding: 11px 20px;border-radius:10px;outline:none;border:none;font-size:15px;font-weight:bold'><i class='fa-solid fa-user' style='padding:3px;'></i>Login</button>`;

  document.querySelector(".login-div").innerHTML = loginbtn;
  document.querySelector(".login-btn").addEventListener("click", () => {
    document.getElementById("login-box").style.display = "block";
    document.getElementById("login-box").style.width = "100%";
    document.querySelector("#top-div").style.display = "block";
  });
}

//first food items
const handleMenu = () => {
  let items = ["vada", "itly", "parotta", "pongal"];
  let html = "";
  items.map((e) => {
    html += '<div class="first-menu-item" ' + e + ">";
    html +=
      '<div id="' +
      e +
      '" class="food-item-img-div" style="background:url(' +
      e +
      '.png)"></div>';
    html += "<p>" + e + "</p>";
    html +=
      '<button class="food-item-btn" onmouseover="fnHover(this)" onmouseout="fnHoverout(this)" >30 min Delivery</button>';
    html += "</div>";
  });
  document.getElementById("menu-list").innerHTML = html;
};

//process list
function processMenu() {
  let processobj = [
    { img: "discount", value: "Daily Discounts", class: "discount" },
    { img: "tracing", value: "Live Tracing", class: "tracing" },
    { img: "delivery", value: "Quick Delivery", class: "delivery" },
  ];
  let process = "";
  processobj.map((e) => {
    process += '<div class="process-in-div-div">';
    process +=
      '<div class="' +
      e.class +
      '" style="background: url(' +
      e.img +
      '.png);background-repeat:no-repeat;background-size: cover;filter: drop-shadow(3px 8px 8px rgb(73, 72, 72))"></div>';
    process += "<p><strong>" + e.value + "</strong></p>";
    process += "</div>";
  });
  document.getElementById("process-list").innerHTML = process;
}
document.addEventListener("DOMContentLoaded", () => {
  processMenu();
  searchFood();
  popularfood();
  logindiv(0, "loki");
  handleMenu();
});

//search food
function searchFood() {
  let searchobj = [
    { img: "dosa", value: "Dosa", class: "dosa" },
    { img: "appam", value: "Aappam", class: "appam" },
    { img: "puttu", value: "Puttu", class: "puttu" },
    { img: "idiappam", value: "Idiappam", class: "idiyappam" },
    { img: "pongal", value: "Pongal", class: "pongal" },
    { img: "vegrice", value: "Veg Rice", class: "vegrice" },
  ];
  let search = "";
  searchobj.map((e) => {
    search += "<div>";
    search +=
      '<div class="search-food-item ' +
      e.class +
      '" style = "background:url(' +
      e.img +
      '.png);background-repeat:no-repeat;background-size:contain" ></div > ';
    search += "<p><strong>" + e.value + "</strong></p>";
    search += "</div>";
  });
  document.getElementById("search-food").innerHTML = search;
}

//popular food items
function popularfood() {
  let popularobj = [
    { img: "murukku", value: "Murukku", class: "murukku" },
    { img: "paniyaram", value: "Paniyaram", class: "paniyaram" },
    {
      img: "seevalmurukku",
      value: "seeval Murukku",
      class: "seevalmurukku",
    },
    { img: "vegsoup", value: "Vegsoup", class: "vegsoup" },
    { img: "mixture", value: "Mixture", class: "mixture" },

    { img: "halwa", value: "Halwa", class: "halwa" },
    { img: "laddu", value: "Laddu", class: "laddu" },
    { img: "gulab_jamun", value: "Gulab Jamun", class: "gulabjamun" },
    { img: "jangri", value: "Jangri", class: "jangri" },
    {
      img: "porivellangai_urundai",
      value: "Porivellangai Urundai",
      class: "porivellangai_urundai",
    },
  ];
  let popular = "";
  popularobj.map((e) => {
    popular += '<div class="popular-item-in-div">';
    popular +=
      '<div class="popular-item-img ' +
      e.class +
      '" style = "background:url(' +
      e.img +
      '.png);background-repeat:no-repeat;background-size:contain" ></div > ';
    popular += "<p><strong>" + e.value + "</strong></p>";
    // popular += "<button id='"+e.class+"' onclick='fnOrderItems("+e.class+")'>Order Now</button>";

    popular += "</div>";
  });
  document.getElementById("popular-items-div").innerHTML = popular;
}

//loginpage food items
function loginpagefood() {
  let popularobj = [
    { img: "murukku", value: "Murukku", class: "murukku", price: 30 },
    { img: "paniyaram", value: "Paniyaram", class: "paniyaram", price: 40 },
    {
      img: "seevalmurukku",
      value: "seeval Murukku",
      class: "seevalmurukku",
      price: 20,
    },
    { img: "vegsoup", value: "Vegsoup", class: "vegsoup", price: 40 },
    { img: "mixture", value: "Mixture", class: "mixture", price: 50 },
    { img: "itly", value: "Itly", class: "itly", price: 50 },
    { img: "idiappam", value: "Idiappam", class: "idiappam", price: 45 },
    { img: "parotta", value: "Parotta", class: "parotta", price: 80 },
    { img: "puttu", value: "Puttu", class: "puttu", price: 70 },
    { img: "vegrice", value: "Vegrice", class: "vegrice", price: 90 },
    { img: "Vegsoup", value: "Vegsoup", class: "Vegsoup", price: 30 },
    

    { img: "halwa", value: "Halwa", class: "halwa", price: 40 },
    { img: "laddu", value: "Laddu", class: "laddu", price: 80 },
    {
      img: "gulab_jamun",
      value: "Gulab Jamun",
      class: "gulabjamun",
      price: 60,
    },
    { img: "jangri", value: "Jangri", class: "jangri", price: 20 },
    {
      img: "porivellangai_urundai",
      value: "Porivellangai Urundai",
      class: "porivellangai_urundai",
      price: 60,
    },
  ];
  let popular = "";
  popularobj.map((e) => {
    popular += '<div class="popular-item-in-div">';
    popular +='<div class="popular-item-img ' +e.class +'" style = "background:url(' +e.img +'.png);background-repeat:no-repeat;background-size:contain" ></div > ';
    popular += "<p><strong>" + e.value + "</strong></p>";
    popular +="<p>Price : <strong id='pricevalue-" +e.class +"'>" +e.price +"</strong></p>";
    popular +="<button key='" +e.class +"' id='btn-order-" +e.class +"' onclick='fnOrderItems(this)'>Order Now</button>";
    popular +="<div id='btn-quantity-" +e.class +"' style='display:none;justify-content:space-around;align-items:center;gap:15px'><button key='" +e.class +"' id='btn-add-" +e.class +"' onclick='fnAdd(this)'> + </button>";
    popular += "<p id='p-count-" + e.class + "'>1</p>";
    popular +="<button key='" +e.class +"' id='btn-sub-" +e.class +"' onclick='fnSub(this)'> - </button></div>";
    popular += "</div>";
  });

  document.getElementById("popular-items-div1").innerHTML = popular;
}

// adding items to the cart
let OrderedItems = [];
let itemCount = 0;
function fnOrderItems(item) {
  document.querySelector("#" + item.id).style.display = "none";
  document.querySelector(
    "#btn-quantity-" + item.getAttribute("key")
  ).style.display = "flex";
  OrderedItems.push({
    Item: item.getAttribute("key"),
    count: 1,
    img: item.getAttribute("key"),
    price: document.getElementById("pricevalue-" + item.getAttribute("key")).innerHTML,
    total: document.getElementById("pricevalue-" + item.getAttribute("key")).innerHTML,
  });
  itemCount++;
  document.querySelector("#cart-count").innerHTML = itemCount;

}



function fnAdd(item) {
  //getting the innerHTML value of count and assign it to the variable
  let count = document.getElementById("p-count-" + item.getAttribute("key")).innerHTML;
  count = parseInt(count) + 1;
  
  let index = OrderedItems.findIndex((e) => e.Item == item.getAttribute("key")); // To get the index from the orderItems array for the specific dish
  OrderedItems[index].count = count;
  
  //assigning and updating intial increment count to the object and setting it to the cart count label
  document.getElementById("p-count-" + item.getAttribute("key")).innerHTML =count;
  OrderedItems[index].count=count;
  OrderedItems[index].total=parseInt(OrderedItems[index].price)*parseInt(OrderedItems[index].count);
 
  //updating the totalitem price when increment
  let itemindexprice=OrderedItems[index].price;
// console.log(typeof(itemindexprice));
let updatedTotalItemprice=parseInt(itemindexprice)*parseInt(OrderedItems[index].count);
document.getElementById("itemTotal-"+item.getAttribute("key")).innerHTML=updatedTotalItemprice;
OrderedItems[index].total=updatedTotalItemprice;//updating the total value through index 
  
  //cart-items count value changing
  let cartcount = document.getElementById("p-cart-count-" + item.getAttribute("key")).innerHTML;
  cartcount = parseInt(cartcount) + 1;
  document.getElementById("p-cart-count-" + item.getAttribute("key")).innerHTML =cartcount;


 
   //updating the sum of total when increment 
   let overAllTotalVariable=OrderedItems.reduce((a, b) => ({total: parseInt(a.total) + parseInt(b.total)}))
   console.log(typeof(overAllTotalVariable));
   document.getElementById("total-div").innerHTML=`<p>Sum  :</p><h3>${overAllTotalVariable.total}</h3>`;
 
  itemCount++;
  document.querySelector("#cart-count").innerHTML = itemCount;
}


function fnSub(item) {
  let count = document.getElementById(
    "p-count-" + item.getAttribute("key")
  ).innerHTML;
  count = parseInt(count) - 1;
  document.getElementById("p-count-" + item.getAttribute("key")).innerHTML =
    count;

  //cart-items count value changing
  let cartcount = document.getElementById("p-cart-count-" + item.getAttribute("key")).innerHTML;
  cartcount = parseInt(cartcount) - 1;
  document.getElementById("p-cart-count-" + item.getAttribute("key")).innerHTML =cartcount;

  let index = OrderedItems.findIndex((e) => e.Item == item.getAttribute("key"));
  OrderedItems[index].count = count;


//updating the totalitem price when increment
let itemindexprice=OrderedItems[index].price;
console.log(typeof(itemindexprice));
let updatedTotalItemprice=parseInt(itemindexprice)*parseInt(OrderedItems[index].count);
document.getElementById("itemTotal-"+item.getAttribute("key")).innerHTML=updatedTotalItemprice;
OrderedItems[index].total=updatedTotalItemprice;//updating the total value through index 
 
//updating the sum of total when increment 
let overAllTotalVariable=OrderedItems.reduce((a, b) => ({total: parseInt(a.total) + parseInt(b.total)}))
console.log(typeof(overAllTotalVariable));
document.getElementById("total-div").innerHTML=`<p>Sum  :</p><h3>${overAllTotalVariable.total}</h3>`;

  itemCount--;
  document.querySelector("#cart-count").innerHTML = itemCount;
}

//cart displaying
function displayCart() {
  debugger
  document.querySelector(".cart-popup").style.display = "block";

  console.log(OrderedItems);
  let cartItems = "";
  OrderedItems.map((i) => {
    cartItems += '<div key="' +i.Item +'" id="cart-item-div">';
    cartItems += '<div key="' +i.Item +'" onclick="fnDelete(this)" class="cart-item-delete" id="card-item-delete"><i class="fa-solid fa-trash"></i></div>';
    cartItems += '<img src="' + i.img + '.png" alt="' + i.Item + 'image" />';
    cartItems += "<p>" + i.Item + "</p>";
    cartItems += "<p>" + i.price + "</p>";
    cartItems += '<div id="btn-quantity-' +i.Item +'" style="display:flex;justify-content:center;align-items:center;gap:10px">';
    cartItems += '<button key="' +i.Item +'" id="btn-sub-' +i.Item +'" onclick="fnSub(this)" style="padding:3px 14px;background:green;color:white;font-size:19px;border:none;border-radius:10px">-</button>';
    cartItems += "<p id='p-cart-count-" + i.Item + "'>" + i.count + "</p>";
    cartItems += '<button key="' +i.Item +'" id="btn-add-' +i.Item +'" onclick="fnAdd(this)" style="padding:3px 14px;background:green;color:white;font-size:19px;border:none;border-radius:10px">+</button>';
    cartItems += "</div>";
    cartItems += '<p id="itemTotal-'+i.Item+'">'+i.total+'</p>';
    cartItems += "</div>";
  });
  document.getElementById("cart-item-display-div").innerHTML = cartItems;

  //displaying sum of total in the cart popup
  let overAllTotalVariable=OrderedItems.reduce((a, b) => ({total: parseInt(a.total) + parseInt(b.total)}))
  console.log(typeof(overAllTotalVariable));
  document.getElementById("total-div").innerHTML=`<p>Sum  :</p><h3>${overAllTotalVariable.total}</h3>`;

}

function fnDelete(item){
  //finding index of that particular item's
  OrderedItems=OrderedItems.filter((e)=>e.Item!=item.getAttribute("key"));
  // console.log(index);
  displayCart()
   //displaying sum of total in the cart popup
   let overAllTotalVariable=OrderedItems.reduce((a, b) => ({total: parseInt(a.total) + parseInt(b.total)}))
   console.log(typeof(overAllTotalVariable));
   document.getElementById("total-div").innerHTML=`<p>Sum  :</p><h3>${overAllTotalVariable.total}</h3>`;
 
}