let foodMenu = [
  {
    img: "/utils/item-1.jpeg",
    head: " Buttermilk Pancakes",
    price: "$15.99",
    underline: "Buttermilk Pancakes",
    desc: "im baby woke milkshy wolf bitters live-edge blue bottle hammock freegan copper  mug whatever cold pressed",
    category: 'Breakfast',
  },
  {
    img: "/utils/item-2.jpeg",
    head: "Diner Double",
    price: "$13.99",
    underline: "Diner Double",
    desc: "vaporwe iphone mumblecore selvage raw denim slow-carb leggings gocgugang helvetica man braid jianbrig. Marfa thundercats",
    category: 'Launch',
  },
  {
    img: "/utils/item-3.jpeg",
    head: "Godzilla Milkshake",
    price: "$6.99",
    underline: "Godzilla Milkshake",
    desc: "ombucha chilwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    category: 'Shakes',
  },
  {
    img: "/utils/item-4.jpeg",
    head: "Country Delight",
    price: "$20.99",
    underline: "Country Delight",
    desc: "shabby chic keffiyah neutra snackwave poor belly shoreditch. prism austin milshik tarruffet.",
    category: 'Breakfast',
  },
  {
    img: "/utils/item-5.jpeg",
    head: "Egg Attack",
    price: "$22.99",
    underline: "Egg Attack",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest mediation farm-to-table 90s pop-up",
    category: 'Launch',
  },
  {
    img: "/utils/item-6.jpeg",
    head: "Oreo Dream",
    price: "$18.99",
    underline: "Oreo Dream",
    desc: "portland chiccharronnes ethical edison bulb, palo santo craft beer chia herloon iphone everyday",
    category: 'Shakes',
  },
  {
    img: "/utils/item-7.jpeg",
    head: "Bacon Overflow",
    price: "$8.99",
    underline: "Bacon Overflow",
    desc: "carry jianbing normcore freegan, viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    category: 'Breakfast',
  },
  {
    img: "/utils/item-8.jpeg",
    head: "American Classic",
    price: "$12.99",
    underline: "American Classic",
    desc: "on it tumblir kickstarter thundercats miogas everyday carry squid palo santo leggings. food truck truffet",
    category: 'Launch',
  },
  {
    img: "/utils/item-9.jpeg",
    head: "Quanritine Buddy",
    price: "$16.99",
    underline: "Quanritine Buddy",
    desc: "skateboard fam synth authentic semiotics. live-edge lyftaf, edison bulb yuccie crucifix microdosing.",
    category: 'Shakes',
  },
  {
    img: "/utils/item-10.jpeg",
    head: "Steak Dinner",
    price: "$39.99",
    underline: "Steak Dinner",
    desc: "skateboard fam synth authentic semiotics. live-edge lyftaf, edison bulb yuccie crucifix microdosing.",
    category: 'Dinner',
  },
];
let sectionCenter = document.getElementById("js-section-center");
let btnContainer = document.querySelector('.button-container');

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(foodMenu); 
 displayButton();
});

function displayMenuItem(menuItem){
  let displayFoodMenu = ` <div class="item-class">`;
  menuItem.map(function (eachFood) {
    displayFoodMenu +=
    `
    <article>
        <ul class="item">
            <li class="item1">
                <img src=${eachFood.img} alt="${eachFood.head}">
            </li>
            <li class="item2">
                <h3>
                   ${eachFood.head}
                    <span class="price">$${eachFood.price}</span>
                    <p class="underline2">${eachFood.underline}</p>
                </h3>
                <p class="desc">${eachFood.desc}</p>
            </li>

        </ul>
   
    </article>
`
  });
  displayFoodMenu += `</div>`;
  sectionCenter.innerHTML = displayFoodMenu;
}

function displayButton(){
  let categories = foodMenu.reduce(function(values, item){
    if(!values.includes(item.category)){
      values.push(item.category);
    }
     return values;

 },
 ['all']
 );

 let dynamicBtn = categories.map(function(btn){
  return `<button class="filter-btn" data-id=${btn}>${btn}</button>`; 
 })
 .join("");
 btnContainer.innerHTML = dynamicBtn;

 let filterBtn =document.querySelectorAll('.filter-btn');

 filterBtn.forEach(function(btn){
  btn.addEventListener('click', function(e){
 let btnTarget =  e.currentTarget.dataset.id;  
 let displayFilter = foodMenu.filter(function(eachFilter){
  if(eachFilter.category === btnTarget){
    return eachFilter;
  }
  })
  if(btnTarget === 'all'){
    displayMenuItem(foodMenu);
  }else{
    displayMenuItem(displayFilter);
  }
  });
});
}

 
