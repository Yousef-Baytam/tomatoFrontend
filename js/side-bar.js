class SideBar extends HTMLElement{

    connectedCallback(){
        this.innerHTML += `
            <div class = 'sidebar'>
                <div class = 'sidebar-head'><h1>Admin Panel</h1></div>
                <ul class= 'nav-list'>
                    <a href="./users.html" target="admin-frame"><li class="nav-item" id="users" onclick="setSelected('users')"><i class="fa-solid fa-users"></i>Users</li></a>
                    <a href="./restaurants.html" target="admin-frame"><li class="nav-item" id="restaurants" onclick="setSelected('restaurants')"><i class="fa-solid fa-store"></i>Restaurants</li></a>
                    <a href="./reviews.html" target="admin-frame"><li class="nav-item" id="reviews" onclick="setSelected('reviews')"><i class="fa-solid fa-star"></i>Reviews</li></a>
                </ul>
            </div>
        `
    }
}

function setSelected(id){
    document.querySelectorAll(".nav-item").forEach(item=>item.classList.remove('selected'))
    document.getElementById(id).classList.add('selected')
}

customElements.define('side-bar', SideBar)