class Review extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="form-bg hidden" id="review">
        <div class="steps-container">
            <div class="form-container" review>
                <div class="card">
                    <div class="img">
                        <img src="../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="">
                    </div>
                    <div class="title">
                        Hakoona Matata
                    </div>
                    <div class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusamus dolorem
                        necessitatibus enim quae ab officia iusto repudiandae. Beatae quibusdam ea natus doloremque
                        voluptatum fuga, vero nostrum ipsa porro totam!
                    </div>
                    <div class="rating">
                        <div>Rating </div>
                        <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i><i
                                class="fa-regular fa-star"></i></div>
                    </div>
                    <div>
                        <div class="cuisine">Cuisine: catfood</div>
                    </div>
                </div>
                <form action="#" method="POST" class="form" review-form>
                    <div>
                        <i class="fa-solid fa-xmark" id="review-x"></i>
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



