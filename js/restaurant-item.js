class RestaurantItem extends HTMLElement{

    connectedCallback(){
        this.innerHTML=`
            <div class="admin-card">
                <div class='head'>
                    <div class="title">
                        <h3>${this.getAttribute('name') || 'name'}</h3>
                    </div>
                    <div class="action-buttons">
                        <span onclick="editRest()"><i class="fa-solid fa-pen-to-square"></i></span>
                        <span onclick="remove()"><i class="fa-solid fa-trash-can"></i></span>
                        <span onclick="ban()"><i class="fa-solid fa-ban"></i></span>
                    </div>
                </div>
                <div class='content'>
                    <div>
                        ${generateStars(this.getAttribute('rate') || 0)} (${this.getAttribute('rate') || 0}/5)
                    </div>
                    <div class="description">
                        <p>${this.getAttribute('description') || 'description'}</p>
                    </div>
                </div>
            </div>
        `
    }
}

function generateStars(rate){
    stars=''
    for(let i = 0; i < 5; i++){
        if(i < rate){
            stars+='<i class="fa-solid fa-star"></i>'
        }else{
            stars+='<i class="fa-regular fa-star"></i>'
        }
    }
    return stars
}

function editRest(){
    
    let elm = document.getElementsByTagName('edit-restaurant')[0].children[0].classList.remove('hidden')
}
function remove(){
    return console.log("remove")
}

function ban(){
    console.log('ban')
}

customElements.define('restaurant-item', RestaurantItem);