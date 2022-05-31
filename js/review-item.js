class ReviewItem extends HTMLElement{

    status = this.getAttribute('status')
    id = this.getAttribute('id')
    connectedCallback(){
        this.innerHTML=`
            <div class="admin-review-card">
                <div style="width:100%; margin-left: 24px">
                    <div class='head'>
                        <div class="title">
                            <h3>${this.getAttribute('name')}</h3>
                        </div>
                        <div class="action-buttons">` +
                            (this.status === 'pending' || this.status === 'declined' ? `<span title="Accept" onclick="accept(${this.id})"><i class="fa-solid fa-check"></i></span>` : '') +
                            (this.status === 'pending' || this.status === 'accepted' ? `<span title="Decline" onclick="decline(${this.id})"><i class="fa-solid fa-xmark"></i></span>` : '')+
                            
                        `</div>
                    </div> 
                    <div class="content">
                        <div>
                            ${generateStars(this.getAttribute('rate') || 0)} (${this.getAttribute('rate') || 0}/5)
                        </div>
                        <div class="description">
                            <p>${this.getAttribute('review-text')}</p>
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



customElements.define('review-item', ReviewItem);