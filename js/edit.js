class Edit extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="form-bg hidden">
        <div class="steps-container">
            <div class="form-container">
                <form action="#" method="POST" class="form">
                    <div>
                        <i class="fa-solid fa-xmark"></i>
                        <input type="text" name="First" placeholder="First Name">
                    </div>
                    <div>
                        <input type="text" name="Last" placeholder="Last Name">
                    </div>
                    <div>
                        <input type="number" name="Phone" placeholder="Phone Number">
                    </div>
                    <div>
                        <label dob-label for="dob"> Date of Birth</label>
                        <input type="Date" name="dob" id='dob'>
                    </div>
                    <input type="submit" name="submit" value="Submit">
                </form>
            </div>
        </div>
    </div>`
    }
}

customElements.define('my-edit', Edit)



