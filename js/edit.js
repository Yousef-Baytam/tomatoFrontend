class Edit extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="card-container">
        <div class="card">
            <div class="img">
                <img src="../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="">
            </div>
            <div class="title">
                Hakoona Matata
            </div>
            <div class="rating">
                <div>Rating </div>
                <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                        class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i><i
                        class="fa-regular fa-star"></i></div>
            </div>
            <div>
                <div class="cuisine">Cuisine: catfood</div>
                <div class="leave-a-review">Leave a Review</div>
            </div>
        </div>
    </div>`
    }
}

customElements.define('my-edit', Edit)



