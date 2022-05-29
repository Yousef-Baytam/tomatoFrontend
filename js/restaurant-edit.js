class EditRestaurant extends HTMLElement {

    rating() {
        let stars = ``
        for (let i = 0; i < 5; i++) {
            if (i < this.getAttribute('rate'))
                stars += `<i class="fa-solid fa-star"></i>`
            else
                stars += `<i class="fa-regular fa-star"></i>`
        }
        return stars
    }

    connectedCallback() {
        this.innerHTML += `<div class="form-bg " id="review">
        <div class="steps-container">
            <div class="form-container" review>
                <div class="card">
                    <div class="img">
                        <img src="../../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="">
                    </div>
                    <input type="file" style="padding: 0; margin-top:10px"/>
                    <div class="title">
                        <input id='restaurant-name' value="${this.getAttribute('title') || 'Restaurant name'}">
                    </div>
                    <div class="description">
                       <textarea>${this.getAttribute('description') || 'description'}</textarea>
                    </div>
                    <div class="rating">
                        <div>Rating </div>
                        <div>
                            ${this.rating()}
                        </div>
                    </div>
                    <div>
                        <div class="cousine">
                            <select class="cousine-list">
                                <option value="cousine 1">Cousine 1</option>
                                <option value="cousine 2">Cousine 2</option>
                                <option value="cousine 3">Cousine 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
}

customElements.define('edit-restaurant', EditRestaurant)



