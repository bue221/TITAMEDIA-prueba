console.log("Hola perro");

const ImagesGalery = [
  {
    id: 1,
    img:
      "https://images.unsplash.com/photo-1525636889159-f7b7eb0b0596?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80",
    spanC: false,
    spanR: true,
  },
  {
    id: 2,
    img:
      "https://images.unsplash.com/photo-1601581949711-4529ae7d9bb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    spanC: false,
    spanR: true,
  },
  {
    id: 3,
    img:
      "https://images.unsplash.com/photo-1617033193056-91924bc8225b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
    spanC: false,
    spanR: false,
  },
  {
    id: 4,
    img:
      "https://images.unsplash.com/photo-1618684004782-d7532f894f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    spanC: false,
    spanR: false,
  },
  {
    id: 5,
    img:
      "https://images.unsplash.com/photo-1581281052334-d9e9a61dd048?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    spanC: true,
    spanR: false,
  },
  {
    id: 6,
    img:
      "https://images.unsplash.com/photo-1616164195296-c63562877c3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    spanC: false,
    spanR: true,
  },
  {
    id: 7,
    img:
      "https://images.unsplash.com/photo-1618488629820-8f664bb4f09b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    spanC: false,
    spanR: false,
  },
  {
    id: 8,
    img:
      "https://images.unsplash.com/photo-1602953678650-d8b8659e277f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    spanC: false,
    spanR: true,
  },
  {
    id: 9,
    img:
      "https://images.unsplash.com/photo-1612192520597-7c30e0aeb395?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    spanC: false,
    spanR: false,
  },
  {
    id: 10,
    img:
      "https://images.unsplash.com/photo-1617102888614-ae5c7c90d7eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    spanC: false,
    spanR: false,
  },
];

const AddImagesGalery = () => {
  //the main container
  var divContainer = document.getElementById("galery");

  //the mokup of galery images and create the elements with the dom
  setTimeout(() => {
    ImagesGalery.map((i) => {
      var div = document.createElement("div");
      div.setAttribute("class", "galery_item");
      if (i.spanC) div.setAttribute("class", " galery_item span-c-2");
      if (i.spanR) div.setAttribute("class", "galery_item span-r-2");

      var img = document.createElement("img");
      img.setAttribute("src", i.img);
      img.setAttribute("alt", `img_${i.id}`);

      div.appendChild(img);

      divContainer.appendChild(div);
    });
  }, 500);
};

const openMenu = () => {
  var x = document.getElementById("menu");
  if (x.className === "navbar-responsive") {
    x.className += " -active";
    console.log(x.className);
  } else {
    x.className = "navbar-responsive";
  }
  console.log(x.className);
};

window.onload = AddImagesGalery;
