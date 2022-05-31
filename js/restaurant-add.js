class RestaurantAdd extends HTMLElement{

    connectedCallback(){
        // this.innerHTML=`
        //     <div class="restaurant-add">
        //         <button onclick='openAdd()'><i class="fa-solid fa-add"></i> Add</button>
        //     </div>

        //     <div class= "add-restaurant hidden" id="add-restaurant">
        //         <div class="form-bg">
        //             <div class="steps-container">
        //                 <div class="form-container" review>
        //                     <div class="edit-restaurant-close"><span id="restaurant-add-close"><i class="fa-solid fa-xmark" id="review-x"></i></span></div>
        //                     <div class="card">
        //                         <div class="img">
        //                             <img src="../../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="">
        //                         </div>
                                
        //                         <input type="file" style="padding: 0; margin-top:10px"/>
        //                         <div class="title">
        //                             <input id='restaurant-name' value="${this.getAttribute('title') || 'Restaurant name'}">
        //                         </div>
        //                         <div class="description">
        //                         <textarea>${this.getAttribute('description') || 'description'}</textarea>
        //                         </div>
        //                         <div>
        //                             <div class="cousine">
        //                                 <select class="cousine-list">
        //                                     <option value="cousine 1">Cousine 1</option>
        //                                     <option value="cousine 2">Cousine 2</option>
        //                                     <option value="cousine 3">Cousine 3</option>
        //                                 </select>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        // `

        this.innerHTML = `
        <div class="restaurant-add">
            <button onclick="addRest()"><i class="fa-solid fa-add"></i> Add</button>
        </div>

        <div id="restaurant-add-modal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Add Restaurant</h2>
                    <span class="add-close">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="logo-container">
                        <img id="restaurant-add-logo" >
                        <input type="file" id="restaurant-add-logo-input"/>
                    </div>
                    <input id="restaurant-add-namee" placeholder="Name"/>
                    <textarea id="restaurant-add-description" placeholder="Description"></textarea>

                    <label for="restaurant-add-city">City:</label>
                    <select id="restaurant-add-city" name="restaurant-city">

                    </select>

                    <label for="restaurant-add-category">Category:</label>
                    <select id="restaurant-add-category" name="restaurant-category">

                    </select>

                    <label for="restaurant-add-type">Type:</label>
                    <select id="restaurant-add-type" name="restaurant-type">

                    </select>

                    <label for="restaurant-add-status">Status:</label>
                    <select id="restaurant-add-status" name="restaurant-status">
                        <option value="active">Active</option>
                        <option value="banned">Banned</option>
                    </select>

                </div>
                <div class="modal-footer">
                <button id="add-cancel">Cancel</button>
                <button id="add-save">Save</button>
                </div>
            </div>
        </div>
        `
    }
}


customElements.define('restaurant-add', RestaurantAdd);