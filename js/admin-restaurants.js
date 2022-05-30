var modal;
var span;

window.onload = (e)=>{
    fetchData().then(()=>{
        
        
        modal = document.getElementById("restaurant-edit-modal");



        span = document.getElementsByClassName("close")[0];

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

async function editRest(id){
    const form = new FormData();
    form.append('id', id)
    modal.style.display="block"

    let cities = []
    await axios.get('http://127.0.0.1/tomatobackend/getCities.php').then(response=>{
        cities = [...response.data]
        let citySelect = document.getElementById('restaurant-city');
        cities?.map(city=>citySelect.innerHTML+=`<option value='${city.id}'>${city.name}</option>`)
    })

    await axios.post('http://127.0.0.1/tomatobackend/getRestaurant.php', form).then(response=>{
        const data = response.data[0];
        console.log(data)
        console.log(document.getElementById('restaurant-name'))
        document.getElementById('restaurant-logo').src = data.image
        document.getElementById('restaurant-namee').defaultValue = data.name
        document.getElementById('restaurant-description').defaultValue = data.description
        document.getElementById('restaurant-status').value = data.status
        document.getElementById('restaurant-city').value = data.cities_id
        document.getElementById('restaurant-logo-input').addEventListener('change',(e)=>{
            let reader = new FileReader()
            reader.readAsDataURL(e.target.files[0]);
            reader.addEventListener('loadend', ()=>{
                document.getElementById('restaurant-logo').src = reader.result
            })
        })

        document.getElementById('edit-save').onclick = ()=>saveRestaurantChanges(data.id)
        
    })
 }

 async function saveRestaurantChanges(id){
    let img = document.getElementById('restaurant-logo').src
    let name = document.getElementById('restaurant-namee').value
    let description = document.getElementById('restaurant-description').value
    let status = document.getElementById('restaurant-status').value
    let city = document.getElementById('restaurant-city').value

    const form = new FormData();
    form.append('id', id)
    form.append('img', img)
    form.append('name', name)
    form.append('description', description)
    form.append('status', status)
    form.append('city', city)

    console.log(
        name,
        description,
        status,
        city,)
    await axios.post('http://127.0.0.1/tomatobackend/updateRestaurant.php', form).then(()=>{
        document.getElementById('restaurant-logo').src = ''
        document.getElementById('restaurant-namee').value = ''
        document.getElementById('restaurant-description').value =''
        document.getElementById('restaurant-status').value = ''
        document.getElementById('restaurant-city').value = ''
        modal.style.display = "none";
        location.reload()
    })
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