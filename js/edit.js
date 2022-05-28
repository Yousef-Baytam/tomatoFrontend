class Edit extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="form-bg hidden">
        <div class="steps-container">
            <div class="form-container">
                <form action="#" method="POST" class="form">
                    <div>
                        <i class="fa-solid fa-xmark"></i>
                        <input type="text" name="name" placeholder="First Name" value='${ this.getAttribute('name') }'>
                    </div>
                    <div>
                        <input type="text" name="Last" placeholder="Last Name" value='${ this.getAttribute('lastName') }'>
                    </div>
                    <div>
                        <input type="text" name="Phone" placeholder="Phone Number" value='${ this.getAttribute('phone') }'>
                    </div>
                    <div>
                        <label dob-label for="dob"> Date of Birth</label>
                        <input type="Date" name="dob" id='dob' value='${ this.getAttribute('dob') }'>
                    </div>
                    <div>
                        <input type="text" name="Phone" placeholder="Location" value='${ this.getAttribute('location') }'>
                    </div>
                    <input type="submit" name="submit" value="Submit">
                </form>
            </div>
        </div>
    </div>`
    }
}

customElements.define('my-edit', Edit)



