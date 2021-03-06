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
    //     this.innerHTML += `
    //     <div class= "edit-restaurant hidden">
    //         <div class="form-bg" id="review">
    //         <div class="steps-container">
    //             <div class="form-container" review>
    //                 <div class="edit-restaurant-close"><span id="restaurant-edit-close"><i class="fa-solid fa-xmark" id="review-x"></i></span></div>
    //                 <div class="card">
    //                     <div class="img">
    //                         <img src="../../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="">
    //                     </div>
                        
    //                     <input type="file" style="padding: 0; margin-top:10px"/>
    //                     <div class="title">
    //                         <input id='restaurant-name' value="${this.getAttribute('title') || 'Restaurant name'}">
    //                     </div>
    //                     <div class="description">
    //                     <textarea>${this.getAttribute('description') || 'description'}</textarea>
    //                     </div>
    //                     <div class="rating">
    //                         <div>Rating </div>
    //                         <div>
    //                             ${this.rating()}
    //                         </div>
    //                     </div>
    //                     <div>
    //                         <div class="cousine">
    //                             <select class="cousine-list">
    //                                 <option value="cousine 1">Cousine 1</option>
    //                                 <option value="cousine 2">Cousine 2</option>
    //                                 <option value="cousine 3">Cousine 3</option>
    //                             </select>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>`
    

    this.innerHTML = `
        <div id="restaurant-edit-modal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Edit Restaurant</h2>
                    <span class="edit-close">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="logo-container">
                        <img id="restaurant-logo" >
                        <input type="file" id="restaurant-logo-input"/>
                    </div>
                    <input id="restaurant-namee" placeholder="Name"/>
                    <textarea id="restaurant-description" placeholder="Description"></textarea>

                    <label for="restaurant-city">City:</label>
                    <select id="restaurant-city" name="restaurant-city">

                    </select>


                    <label for="restaurant-edit-category">Category:</label>
                    <select id="restaurant-edit-category" name="restaurant-category">

                    </select>

                    <label for="restaurant-edit-type">Type:</label>
                    <select id="restaurant-edit-type" name="restaurant-type">

                    </select>

                    <label for="restaurant-status">Status:</label>
                    <select id="restaurant-status" name="restaurant-status">
                        <option value="active">Active</option>
                        <option value="banned">Banned</option>
                    </select>

                </div>
                <div class="modal-footer">
                   <button id="edit-cancel">Cancel</button>
                   <button id="edit-save">Save</button>
                </div>
            </div>
        </div>`
    }
}



customElements.define('edit-restaurant', EditRestaurant)



