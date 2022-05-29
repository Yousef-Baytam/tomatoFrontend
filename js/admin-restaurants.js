


window.onload = (e)=>{
    fetchData();
}

const restaurantEditClose = document.getElementById('restaurant-edit-close').onclick = (e)=>{
    document.getElementsByTagName('edit-restaurant')[0].children[0]?.classList.add('hidden')
}

const restaurantAddClose = document.getElementById('restaurant-add-close').onclick = (e)=>{
    document.getElementById('add-restaurant').classList.add('hidden')
}

const fetchData = async ()=>{
    let restaurants = []
    await axios.get('http://127.0.0.1/tomatobackend/getRestaurants.php').then(response=>{
        restaurants = response.data
    })

    if(restaurants.length > 0){
        const container = document.getElementsByClassName('restaurants-admin-container')[0];
        restaurants.map(rest=>
            container.innerHTML +=`<restaurant-item name="${rest.name}" description="${rest.description}" rate="${rest.rate}"></restaurant-item>`
        )
    }
    
}