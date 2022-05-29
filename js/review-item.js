class ReviewItem extends HTMLElement{


    connectedCallback(){
        this.innerHTML=`
            <div class="admin-review-card">
                <div style="width:100%; margin-left: 24px">
                    <div class='head'>
                        <div class="title">
                            <h3>${this.getAttribute('name')}</h3>
                        </div>
                        <div class="action-buttons">
                            <span title="Accept" onclick="accept()"><i class="fa-solid fa-check"></i></span>
                            <span title="Decline" onclick="decline()"><i class="fa-solid fa-xmark"></i></span>
                        </div>
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

function accept(){
   console.log("accept")
}
function decline(){
    console.log("decline")
}

customElements.define('review-item', ReviewItem);