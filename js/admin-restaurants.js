


const restaurantEditClose = document.getElementById('restaurant-edit-close').onclick = (e)=>{
    document.getElementsByTagName('edit-restaurant')[0].children[0]?.classList.add('hidden')
}

const restaurantAddClose = document.getElementById('restaurant-add-close').onclick = (e)=>{
    document.getElementById('add-restaurant').classList.add('hidden')
}