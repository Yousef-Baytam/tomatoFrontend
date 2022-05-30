class Edit extends HTMLElement {
    get name() {
        return this.querySelector('[placeholder="First Name"]').value
    }
    set name(val) {
        console.log('triggered')
        val ? this.querySelector('[placeholder="First Name"]').value = val : ''
    }

    get lastName() {
        return this.querySelector('[placeholder="Last Name"]').value
    }
    set lastName(val) {
        val ? this.querySelector('[placeholder="Last Name"]').value = val : ''
    }

    get email() {
        return this.querySelector('[placeholder="Email"]').value
    }
    set email(val) {
        val ? this.querySelector('[placeholder="Email"]').value = val : ''
    }

    get phone() {
        return this.querySelector('[placeholder="Phone Number"]').value
    }
    set phone(val) {
        val ? this.querySelector('[placeholder="Phone Number"]').value = val : ''
    }

    get location() {
        return this.querySelector('[placeholder="Location"]').value
    }
    set location(val) {
        val ? this.querySelector('[placeholder="Location"]').value = val : ''
    }

    get dob() {
        return this.querySelector('[type="Date"]').value
    }
    set dob(val) {
        val ? this.querySelector('[type="Date"]').value = val : ''
    }

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
                        <input type="text" name="email" placeholder="Email" value='${ this.getAttribute('email') }'>
                    </div>
                    <div>
                        <input type="text" name="Phone" placeholder="Phone Number" value='${ this.getAttribute('phone') }'>
                    </div>
                    <div>
                        <label dob-label for="dob"> Date of Birth</label>
                        <input type="Date" name="dob" id='dob' value='${ this.getAttribute('dob') ? this.getAttribute('dob') : '' }'>
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



