var editModal;
var editSpan;
var editCancel;

var addModal;
var addSpan;
var addCancel;


window.onload = (e)=>{
    
    fetchData().then(()=>{
        
        
        addModal = document.getElementById("restaurant-add-modal");
        editModal = document.getElementById("restaurant-edit-modal");


        editSpan = document.getElementsByClassName("edit-close")[0];
        editCancel = document.getElementById("edit-cancel");

        addSpan = document.getElementsByClassName("add-close")[0];
        addCancel = document.getElementById("add-cancel");


        editSpan.onclick = function() {
            editModal.style.display = "none";
        }

        
        editCancel.onclick = function() {
            editModal.style.display = "none";
        }

        addSpan.onclick = function() {
            addModal.style.display = "none";
        }

        
        addCancel.onclick = function() {
            addModal.style.display = "none";
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
            container.innerHTML +=`<restaurant-item id="${rest.id}" status="${rest.status}" name="${rest.name}" description="${rest.description}" rate="${rest.rate}" image="${rest.image}"></restaurant-item>`
        )
    }
    
}

async function addRest(){

    addModal.style.display="block"

    document.getElementById('restaurant-add-logo-input').addEventListener('change',(e)=>{
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener('loadend', ()=>{
            document.getElementById('restaurant-add-logo').src = reader.result
        })
    })

    let cities = []
    await axios.get('http://127.0.0.1/tomatobackend/getCities.php').then(response=>{
        cities = [...response.data]
        let citySelect = document.getElementById('restaurant-add-city');
        cities?.map(city=>citySelect.innerHTML+=`<option value='${city.id}'>${city.name}</option>`)
    })

    document.getElementById('add-save').onclick = saveNewRestaurant

}

async function saveNewRestaurant(){
    let img = document.getElementById('restaurant-add-logo').src
    let name = document.getElementById('restaurant-add-namee').value
    let description = document.getElementById('restaurant-add-description').value
    let status = document.getElementById('restaurant-add-status').value
    let city = document.getElementById('restaurant-add-city').value

    const form = new FormData();
    form.append('img', img)
    form.append('name', name)
    form.append('description', description)
    form.append('status', status)
    form.append('city', city)

        console.log(img,
            name,
            description,
            status,
            city)
    await axios.post('http://127.0.0.1/tomatobackend/addRestaurant.php', form).then(response=>{
            addModal.style.display = 'none';
            location.reload()
    })
}
async function editRest(id){
    const form = new FormData();
    form.append('id', id)
    editModal.style.display="block"

    let cities = []
    await axios.get('http://127.0.0.1/tomatobackend/getCities.php').then(response=>{
        cities = [...response.data]
        let citySelect = document.getElementById('restaurant-city');
        cities?.map(city=>citySelect.innerHTML+=`<option value='${city.id}'>${city.name}</option>`)
    })

    await axios.post('http://127.0.0.1/tomatobackend/getRestaurant.php', form).then(response=>{
        const data = response.data[0];
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

    await axios.post('http://127.0.0.1/tomatobackend/updateRestaurant.php', form).then(()=>{
        document.getElementById('restaurant-logo').src = ''
        document.getElementById('restaurant-namee').value = ''
        document.getElementById('restaurant-description').value =''
        document.getElementById('restaurant-status').value = ''
        document.getElementById('restaurant-city').value = ''
        editModal.style.display = "none";
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