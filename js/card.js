class Card extends HTMLElement {
    rating() {
        let stars = ``
        for (let i = 0; i < 5; i++) {
            if (i < this.getAttribute('rating'))
                stars += `<i class="fa-solid fa-star"></i>`
            else
                stars += `<i class="fa-regular fa-star"></i>`
        }
        return stars
    }
    connectedCallback() {
        this.innerHTML = `<div class="card-container">
        <div class="card">
            <div class="img">
                <img src="${ this.getAttribute('imgSrc') }" alt="">
            </div>
            <div class="title">
            ${ this.getAttribute('title') }
            </div>
            <div class="rating">
                <div>Rating </div>
                <div>
                ${ this.rating }
                </div>
            </div>
            <div>
                <div class="cuisine">Cuisine: ${ this.getAttribute('cuisine') }</div>
                <div class="leave-a-review" id='${ this.getAttribute('id') }'>Leave a Review</div>
            </div>
        </div>
    </div>`
    }
}

customElements.define('my-card', Card)