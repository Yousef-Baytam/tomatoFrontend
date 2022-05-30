class RestaurantItem extends HTMLElement{
    id = this.getAttribute('id')
    status = this.getAttribute('status')
    connectedCallback(){
        this.innerHTML=`
            <div class="admin-card">
                <div class="restaurant-item-logo">
                    <img src="${this.getAttribute('image')}" />
                </div>
                <div style="width: 100%">
                    <div class='head'>
                        <div class="title">
                            <h3>${this.getAttribute('name') || 'name'}</h3>
                        </div>
                        <div class="action-buttons">
                            <span title="edit" onclick="editRest(${this.id})"><i class="fa-solid fa-pen-to-square"></i></span>
                            <span title="remove" onclick="remove(${this.id})"><i class="fa-solid fa-trash-can"></i></span>`+
                            (this.status != "banned" ? `<span title="ban" onclick="ban(${this.id})"><i class="fa-solid fa-ban"></i></span>`:'') +
                            (this.status == "banned" ? `<span title="unban" onclick="activate(${this.id})"><i class="fa-solid fa-check"></i></span>` :'')+
                        `</div>
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

customElements.define('restaurant-item', RestaurantItem);