class Review extends HTMLElement {

    get title() {
        return this.querySelector('[restroname]').innerHTML
    }
    set title(val) {
        val ? this.querySelector('[restroname]').innerHTML = val : ''
    }

    get imgSrc() {
        return this.querySelector('[restroimg]').src
    }
    set imgSrc(val) {
        val ? this.querySelector('[restroimg]').src = val : ''
    }

    get desc() {
        return this.querySelector('[restrodesc]').innerHTML
    }
    set desc(val) {
        val ? this.querySelector('[restrodesc]').innerHTML = val : ''
    }

    get cuisine() {
        return this.querySelector('[restroC]').innerHTML
    }
    set cuisine(val) {
        val ? this.querySelector('[restroC]').innerHTML = `Cuisine: ${ val }` : ''
    }

    get rating() {
        return this.querySelector('[ratinggg]').innerHTML
    }
    set rating(val) {
        val ? this.querySelector('[ratinggg]').innerHTML = this.ratings(val) : ''
    }

    ratings(val) {
        let stars = ``
        for (let i = 0; i < 5; i++) {
            if (i < val)
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
                        <img src="${ this.getAttribute('imgSrc') }" restroimg alt="">
                    </div>
                    <div class="title" restroname>
                    ${ this.getAttribute('title') }
                    </div>
                    <div class="description" restrodesc>
                        ${ this.getAttribute('desc') }
                    </div>
                    <div class="rating">
                        <div>Rating </div>
                        <div ratinggg>${ this.ratings() }</div>
                    </div>
                    <div>
                        <div class="cuisine" restroC>Cuisine: ${ this.getAttribute('cuisine') }</div>
                    </div>
                </div>
                <form action="#" method="POST" class="form" review-form>
                    <div> 
                        <i class="fa-solid fa-xmark" id="review-x123"></i>
                        <textarea name="" id="" cols="30" rows="6" placeholder="Review"></textarea>
                        </div>
                    <label for="rating">Rating</label>
                    <input type="range" min="1" max="6" name="rating">
                    <input type="submit" name="submit" value="Submit" reviewSubmit>
                </form>
            </div>
        </div>
    </div>`
    }
}

customElements.define('my-review', Review)



