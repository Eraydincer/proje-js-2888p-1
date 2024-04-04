async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    console.log(users[0].name)
    console.log(users[0].username)
    console.log(users[0].address)
    console.log(users[0].company.name)
    console.log(users[0].email)
    console.log(users[0].phone)
    console.log(users[0].website)

    displayUsers(users)
  } catch (error) {
    console.log("hata: ",error)
  }
}

function displayUsers(data){
 const container = document.getElementById("user-cards")
data.forEach(user => {
  const userCardHtml=`
  <div class="col-md-12 mb-4 d-flex align-items-stretch">
  <div class="card w-100">
  <div class="card-body d-flex flex-column">
  <h5 class="card-title user-name">${user.name}</h5>
  <div class="user-details">
  <p class="card-text"><i class="fa-solid fa-user"></i> ${user.username}</p>
  <p class="card-text"><i class="fa-solid fa-location-dot"></i> ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}</p>
  <p class="card-text"><i class="fa-solid fa-building"></i> ${user.company.name}</p>
  <p class="card-text"><i class="fa-solid fa-envelope"></i> ${user.email}</p>
  <p class="card-text"><i class="fa-solid fa-phone"></i> ${user.phone}</p>
  <p class="card-text"><i class="fa-solid fa-globe"></i> ${user.website}</p>
  </div>
  <div class="text-center mt-3 toggle-details">
  <i class="fa-solid fa-arrow-down-z-a fa-2x"></i>
  
  </div>
  </div>
  </div>
  </div>
  `;
  
  container.innerHTML+=userCardHtml

});
addToggleListeners()
}



function addToggleListeners() {
  const toggleDetails = document.querySelectorAll(".toggle-details");
  toggleDetails.forEach((item) => {
    item.addEventListener("click", function () {
      const userDetails = this.closest(".card-body").querySelector(".user-details");
      userDetails.classList.toggle("show");

      const icon = this.querySelector("i");
      if (icon.classList.contains("fa-arrow-down-z-a")) {
        setTimeout(()=>{
          icon.classList.remove("fa-arrow-down-z-a");
          icon.classList.add("fa-arrow-up-a-z");
        },400);
       

      } else {
        setTimeout(() => {
          icon.classList.remove("fa-arrow-up-a-z");
        icon.classList.add("fa-arrow-down-z-a");
        }, 400); // 0.4 saniye gecikme.
      }
    });
  });
}


fetchUsers()

   
 