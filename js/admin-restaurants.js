window.onload = (e)=>{
    fetchData().then(()=>{
        var btn = document.getElementById("myBtn");
        // When the user clicks on the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }
        
        var modal = document.getElementById("restaurant-edit-modal");



        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    
    });

    
}

// const restaurantEditClose = document.getElementById('restaurant-edit-close').onclick = (e)=>{
//     console.log("TEST")
//     document.getElementsByClassName('edit-restaurant')[0]?.classList.add('hidden')
// }

// const restaurantAddClose = document.getElementById('restaurant-add-close').onclick = (e)=>{
//     document.getElementById('add-restaurant').classList.add('hidden')
// }

const fetchData = async ()=>{
    let restaurants = []
    await axios.get('http://127.0.0.1/tomatobackend/getRestaurants.php').then(response=>{
        restaurants = response.data
    })

    if(restaurants.length > 0){
        const container = document.getElementsByClassName('restaurants-admin-container')[0];
        restaurants.map(rest=>
            container.innerHTML +=`<restaurant-item id="${rest.id}" status="${rest.status}" name="${rest.name}" description="${rest.description}" rate="${rest.rate}"></restaurant-item>`
        )
    }
    
}

function editRest(){
    
    document.getElementsByTagName('edit-restaurant')[0].children[0].classList.remove('hidden')
 }
 async function remove(id){
    const form = new FormData();
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomatobackend/removeRestaurant.php', form).then(response=>
        location.reload()
    )
 }
 
 async function ban(id){
    const form = new FormData();
    form.append('status', 'banned')
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomatobackend/updateRestaurantStatus.php', form).then(response=>
        location.reload()
    )
 }

 async function activate(id){
    const form = new FormData();
    form.append('status', 'active')
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomatobackend/updateRestaurantStatus.php', form).then(response=>
        location.reload()
    )
 }


 function openAdd(){
    document.getElementById('add-restaurant').classList.remove('hidden')
}