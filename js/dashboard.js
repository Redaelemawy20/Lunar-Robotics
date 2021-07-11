const items = document.querySelectorAll(".list_item");
const product = document.getElementById("product__name");
const dashboard = document.getElementById("dashboard");
const sideBar = document.getElementById("sidebar");
const openSide = document.getElementById("open");
openSide.style.display = "none";
let currentProduct = "Product1";
function openSideBar() {
  openSide.style.opacity = "0";
  sidebar.classList.remove("side-bar--closed");

  dashboard.classList.remove("animate");
}

function closeSideBar() {
  sidebar.classList.add("side-bar--closed");

  openSide.style.opacity = "1";
  openSide.style.display = "block";

  dashboard.classList.add("animate");
}

const products = {
  Product1: [
    {
      name: "Miyah Myles",
      position: "From Ai Team",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
      text: "First Step : Plug the Device",
    },
    {
      name: "Miyah Myles",
      position: "From Ai Team",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",

      text: "Second Perpare the room ",
    },
    {
      name: "Miyah Myles",
      position: "From Ai Team",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",

      text: "Then Press Start Button on the right hand side ",
    },
    {
      name: "Miyah Myles",
      position: "From Ai Team",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",

      text: "Finally enjoy the product",
    },
  ],
  Product2: [
    {
      name: "Iida Niskanen",
      position: "Software Enginee",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "First Step : Plug the Device",
    },
    {
      name: "Iida Niskanen",
      position: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Second Open the Device from the Left Button",
    },
    {
      name: "Iida Niskanen",
      position: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Then Control the device by The Remote ",
    },
    {
      name: "Iida Niskanen",
      position: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Finally enjoy the product",
    },
  ],
  Product3: [
    {
      name: "Renee Sims",
      position: "From Machine Learning Team",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "First Step : Put the device in a safe space",
    },
    {
      name: "Renee Sims",
      position: "From Machine Learning Team",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Second : Turn on The power",
    },
    {
      name: "Renee Sims",
      position: "From Machine Learning Team",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Then Press Start Button on the right hand side ",
    },
    {
      name: "Renee Sims",
      position: "From Machine Learning Team",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Finally enjoy the product",
    },
  ],
};

let testimonials;
let idx = 0; // move through currentProduct's steps

function updateTestimonial() {
  testimonials = products[currentProduct];
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  const testimonial = document.querySelector(".testimonial");
  const userImage = document.querySelector(".user-image");
  const username = document.querySelector(".username");
  const role = document.querySelector(".role");
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}
function getSingleGuide() {
  return `<div class="progress-bar"></div>
    
    <p class="testimonial">
      ${products[currentProduct][0].text}
    </p>
    <div class="user">
      <img
        src="${products[currentProduct][0].photo}"
        alt="user"
        class="user-image"
      />
      <div class="user-details">
        <h4 class="username">${products[currentProduct][0].name}</h4>
        <p class="role">${products[currentProduct][0].position}</p>
      </div>
    </div>`;
}
function removeActiveClass() {
  items.forEach((item) => {
    item.classList.remove("list_item--active");
  });
}
document.getElementById("testimonial-container").innerHTML = getSingleGuide();
let interval = setInterval(updateTestimonial, 10000);
items.forEach((item) => {
  item.addEventListener("click", () => {
    clearInterval(interval);
    const productName = item.innerText;
    idx = 0;
    currentProduct = productName;
    document.getElementById(
      "testimonial-container"
    ).innerHTML = getSingleGuide();

    updateTestimonial();
    interval = setInterval(updateTestimonial, 10000);

    product.innerText = productName;
    removeActiveClass();
    item.classList.add("list_item--active");
  });
});
