let editModal;
let editSpan;
let editCancel;

let addModal;
let addSpan;
let addCancel;

let restaurants = []
let searchInput = ""

let container;

window.onload = (e) => {

    fetchData().then(() => {


        addModal = document.getElementById("restaurant-add-modal");
        editModal = document.getElementById("restaurant-edit-modal");


        editSpan = document.getElementsByClassName("edit-close")[0];
        editCancel = document.getElementById("edit-cancel");

        addSpan = document.getElementsByClassName("add-close")[0];
        addCancel = document.getElementById("add-cancel");


        editSpan.onclick = function () {
            editModal.style.display = "none";
        }


        editCancel.onclick = function () {
            editModal.style.display = "none";
        }

        addSpan.onclick = function () {
            addModal.style.display = "none";
        }


        addCancel.onclick = function () {
            addModal.style.display = "none";
        }



        document.getElementById('restaurants-search').oninput = (e) => {
            searchInput = e.target.value
            showRestaurants()
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

const fetchData = async () => {

    container = document.getElementsByClassName('restaurants-list')[0];
    await axios.get('http://127.0.0.1/tomato/tomatoBackend/getRestaurants.php').then(response => {
        restaurants = response.data
    })

    if (restaurants.length > 0) {
        showRestaurants()
    } else {
        container.innerHTML += `No Restaurant Found`
    }

}


function showRestaurants() {
    container.innerHTML = ``
    restaurants.filter(rest => (rest.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) || rest.description.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))).map(rest =>
        container.innerHTML += `<restaurant-item id="${ rest.id }" status="${ rest.status }" name="${ rest.name }" description="${ rest.description }" rate="${ rest.rate }" image="${ rest.image }"></restaurant-item>`
    )
}
async function addRest() {

    addModal.style.display = "block"

    document.getElementById('restaurant-add-logo-input').addEventListener('change', (e) => {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener('loadend', () => {
            document.getElementById('restaurant-add-logo').src = reader.result
        })
    })

    let cities = []
    await axios.get('http://127.0.0.1/tomato/tomatoBackend/getCities.php').then(response => {
        cities = [...response.data]
        let citySelect = document.getElementById('restaurant-add-city');
        citySelect.innerHTML = ``
        cities?.map(city => citySelect.innerHTML += `<option value='${ city.id }'>${ city.city_name }</option>`)
    })

    let categories = []
    await axios.get('http://127.0.0.1/tomato/tomatoBackend/getCategories.php').then(response => {
        categories = [...response.data]
        let categorySelect = document.getElementById('restaurant-add-category');
        categorySelect.innerHTML = ``
        categories?.map(category => categorySelect.innerHTML += `<option value='${ category.id }'>${ category.category }</option>`)
    })

    let types = []
    await axios.get('http://127.0.0.1/tomato/tomatoBackend/getTypes.php').then(response => {
        types = [...response.data]
        let typeSelect = document.getElementById('restaurant-add-type');
        typeSelect.innerHTML = ``
        types?.map(type => typeSelect.innerHTML += `<option value='${ type.id }'>${ type.type }</option>`)
    })

    document.getElementById('add-save').onclick = saveNewRestaurant

}

async function saveNewRestaurant() {
    let img = document.getElementById('restaurant-add-logo').src
    let name = document.getElementById('restaurant-add-namee').value
    let description = document.getElementById('restaurant-add-description').value
    let status = document.getElementById('restaurant-add-status').value
    let city = document.getElementById('restaurant-add-city').value
    let category = document.getElementById('restaurant-add-category').value
    let type = document.getElementById('restaurant-add-type').value

    const form = new FormData();
    form.append('img', img)
    form.append('name', name)
    form.append('description', description)
    form.append('status', status)
    form.append('city', city)
    form.append('category', category)
    form.append('type', type)

    console.log(img,
        name,
        description,
        status,
        city)
    await axios.post('http://127.0.0.1/tomato/tomatoBackend/addRestaurant.php', form).then(response => {
        addModal.style.display = 'none';
        location.reload()
    })
}
async function editRest(id) {
    const form = new FormData();
    form.append('id', id)
    editModal.style.display = "block"

    let cities = []
    await axios.get('http://127.0.0.1/tomato/tomatoBackend/getCities.php').then(response => {
        cities = [...response.data]
        let citySelect = document.getElementById('restaurant-city');
        citySelect.innerHTML = ``
        cities?.map(city => citySelect.innerHTML += `<option value='${ city.id }'>${ city.city_name }</option>`)
    })

    let categories = []
    await axios.get('http://127.0.0.1/tomato/tomatoBackend/getCategories.php').then(response => {
        categories = [...response.data]
        let categorySelect = document.getElementById('restaurant-edit-category');
        categorySelect.innerHTML = ``
        categories?.map(category => categorySelect.innerHTML += `<option value='${ category.id }'>${ category.category }</option>`)
    })

    let types = []
    await axios.get('http://127.0.0.1/tomato/tomatoBackend/getTypes.php').then(response => {
        types = [...response.data]
        let typeSelect = document.getElementById('restaurant-edit-type');
        typeSelect.innerHTML = ``
        types?.map(type => typeSelect.innerHTML += `<option value='${ type.id }'>${ type.type }</option>`)
    })

    await axios.post('http://127.0.0.1/tomato/tomatoBackend/getRestaurant.php', form).then(response => {
        const data = response.data[0];
        document.getElementById('restaurant-logo').src = data.image
        document.getElementById('restaurant-namee').defaultValue = data.name
        document.getElementById('restaurant-description').defaultValue = data.description
        document.getElementById('restaurant-status').value = data.status
        document.getElementById('restaurant-city').value = data.cities_id
        document.getElementById('restaurant-logo-input').addEventListener('change', (e) => {
            let reader = new FileReader()
            reader.readAsDataURL(e.target.files[0]);
            reader.addEventListener('loadend', () => {
                document.getElementById('restaurant-logo').src = reader.result
            })
        })

        document.getElementById('edit-save').onclick = () => saveRestaurantChanges(data.id)

    })
}

async function saveRestaurantChanges(id) {
    let img = document.getElementById('restaurant-logo').src
    let name = document.getElementById('restaurant-namee').value
    let description = document.getElementById('restaurant-description').value
    let status = document.getElementById('restaurant-status').value
    let city = document.getElementById('restaurant-city').value
    let category = document.getElementById('restaurant-edit-category').value
    let type = document.getElementById('restaurant-edit-type').value

    const form = new FormData();
    form.append('id', id)
    form.append('img', img)
    form.append('name', name)
    form.append('description', description)
    form.append('status', status)
    form.append('city', city)
    form.append('category', category)
    form.append('type', type)

    await axios.post('http://127.0.0.1/tomato/tomatoBackend/updateRestaurant.php', form).then(() => {
        editModal.style.display = "none";
        location.reload()
    })
}

async function remove(id) {
    const form = new FormData();
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomato/tomatoBackend/removeRestaurant.php', form).then(response =>
        location.reload()
    )
}

async function ban(id) {
    const form = new FormData();
    form.append('status', 'banned')
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomato/tomatoBackend/updateRestaurantStatus.php', form).then(response =>
        location.reload()
    )
}

async function activate(id) {
    const form = new FormData();
    form.append('status', 'active')
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomato/tomatoBackend/updateRestaurantStatus.php', form).then(response =>
        location.reload()
    )
}


function openAdd() {
    document.getElementById('add-restaurant').classList.remove('hidden')
}