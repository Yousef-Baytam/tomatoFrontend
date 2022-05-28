class RestaurantItem extends HTMLElement{

    connectedCallback(){
        this.innerHTML=`
            <div class="card">
                <div class='head'>
                    <div class="title">
                        <h3>${this.getAttribute('name') || 'name'}</h3>
                    </div>
                    <div class="action-buttons">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <i class="fa-solid fa-trash-can"></i>
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
    console.log(rate)
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

customElements.define('restaurant-item', RestaurantItem);