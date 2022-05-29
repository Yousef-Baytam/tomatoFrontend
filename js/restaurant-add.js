class RestaurantAdd extends HTMLElement{

    connectedCallback(){
        this.innerHTML=`
            <div class="restaurant-add">
                <button onclick='openAdd()'><i class="fa-solid fa-add"></i> Add</button>
            </div>

            <div class= "add-restaurant hidden" id="add-restaurant">
                <div class="form-bg">
                    <div class="steps-container">
                        <div class="form-container" review>
                            <div class="edit-restaurant-close"><span id="restaurant-add-close"><i class="fa-solid fa-xmark" id="review-x"></i></span></div>
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
                </div>
        `
    }
}

function openAdd(){
    console.log("test")
    let elm = document.getElementById('add-restaurant').classList.remove('hidden')
    console.log(elm)
}

function remove(){
    return console.log("remove")
}

customElements.define('restaurant-add', RestaurantAdd);