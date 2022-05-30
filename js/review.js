class Review extends HTMLElement {
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
        this.innerHTML = `<div class="form-bg hidden" id="review">
        <div class="steps-container">
            <div class="form-container" review>
                <div class="card">
                    <div class="img">
                        <img src="${ this.getAttribute('imgSrc') }" alt="">
                    </div>
                    <div class="title">
                    ${ this.getAttribute('title') }
                    </div>
                    <div class="description">
                        ${ this.getAttribute('imgSrc') }
                    </div>
                    <div class="rating">
                        <div>Rating </div>
                        <div>${ this.rating() }</div>
                    </div>
                    <div>
                        <div class="cuisine">Cuisine: ${ this.getAttribute('cuisine') }</div>
                    </div>
                </div>
                <form action="#" method="POST" class="form" review-form>
                    <div> 

                        <i class="fa-solid fa-xmark" id="review-x123"></i>
                        <textarea name="" id="" cols="30" rows="6" placeholder="Review"></textarea>
                        </div>
                    <label for="rating">Rating</label>
                    <input type="range" min="1" max="6" name="rating">
                    <input type="submit" name="submit" value="Submit">
                </form>
            </div>
        </div>
    </div>`
    }
}

customElements.define('my-review', Review)



