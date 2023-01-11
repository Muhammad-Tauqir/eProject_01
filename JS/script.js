let products = {
  data: [
    {
      productName: "Ornamental Archtop Mirror",
      category: "Simple",
      price: "30",
      image: "../img/Mirror_1.jpg",
      btn: "Read More",
      an: "../Product/First.html"
    },
    {
      productName: "Early Regency Mirror with Bars",
      category: "Bold-Borders",
      price: "49",
      image: "../img/Mirror_2.jpg",
      btn: "Read More",
      an: "../Product/Second.html"
    },
    {
      productName: "George II Mirror with Broken Pediment",
      category: "Design",
      price: "99",
      image: "../img/Mirror_3.jpg",
      btn: "Read More",
      an: "../Product/Fourth.html"
    },
    {
      productName: "Decorative Serpentine Mirror",
      category: "Design",
      price: "29",
      image: "../img/Mirror_4.jpg",
      btn: "Read More",
      an: "../Product/Fiveth.html"
    },
    {
      productName: "French Cushion Mirror",
      category: "Design",
      price: "129",
      image: "../img/Mirror_5.jpg",
      btn: "Read More",
      an: "../Product/Sixth.html"
    },
    {
      productName: "Modern Border Mirror",
      category: "Simple",
      price: "89",
      image: "../img/Mirror_6.jpg",
      btn: "Read More",
      an: "../Product/Third.html"
    },
    {
      productName: "Georgian Parcel Gilt Swept Mirror",
      category: "Border",
      price: "189",
      image: "../img/Border_1.jpg",
      btn: "Read More",
      an: "../Product/Seventh.html"
    },
    {
      productName: "Georgian Ribbed Mirror",
      category: "Border",
      price: "49",
      image: "../img/Border_2.jpg",
      btn: "Read More",
      an: "../Product/Eightth.html"
    },
    {
      productName: "Louis XV Swept Mirror",
      category: "Border",
      price: "490",
      image: "../img/Border_3.jpg",
      btn: "Read More",
      an: "../Product/Tenth.html"
    },
    {
      productName: "CARLO MARATTA MIRROR",
      category: "Border",
      price: "490",
      image: "../img/Border_4.jpg",
      btn: "Read More",
      an: "../Product/Ninth.html"
    },
  ],
};

for (let i of products.data) {
  let Main = document.createElement("div");
  Main.classList.add("products-container");
  //Create Card
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("Container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  price.classList.add("price");
  //Button
  let an = document.createElement("a");
  an.setAttribute("href" , i.an);
  container.appendChild(an);
  an.classList.add("btn-style");
  an.innerText = i.btn;

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.card').forEach(card => {
  card.onclick = () => {
    preveiwContainer.style.display = 'flex';
    let name = card.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('actived');
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('actived');
    preveiwContainer.style.display = 'none';
  };
});