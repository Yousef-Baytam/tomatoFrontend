class User extends HTMLElement {
    get name() {
        return this.querySelector('[fName]').innerHTML
    }
    set name(val) {
        val ? this.querySelector('[fName]').innerHTML = val : ''
    }

    get lastName() {
        return this.querySelector('[lName]').innerHTML
    }
    set lastName(val) {
        val ? this.querySelector('[lName]').innerHTML = val : ''
    }

    get email() {
        return this.querySelector('[eEmail]').innerHTML
    }
    set email(val) {
        val ? this.querySelector('[eEmail]').innerHTML = val : ''
    }

    get phone() {
        return this.querySelector('[pPhone]').innerHTML
    }
    set phone(val) {
        val ? this.querySelector('[pPhone]').innerHTML = val : ''
    }

    get location() {
        return this.querySelector('[location]').innerHTML
    }
    set location(val) {
        val ? this.querySelector('[location]').innerHTML = val : ''
    }

    get dob() {
        return this.querySelector('[dob]').innerHTML
    }
    set dob(val) {
        val ? this.querySelector('[dob]').innerHTML = val : ''
    }

    connectedCallback() {
        this.innerHTML = `<div class="header-2"><div class="profile-pic">
        <img src="${ this.getAttribute('imgSrc') ? this.getAttribute('imgSrc') : `../assets/blank-profile.webp` }" alt="user Image">
        <div>
            <label for="imgyaay">
            <i class="fa-solid fa-camera"></i>
            </label>
        <input type="file" id="imgyaay" class='d-none'>
        </div>
    </div>
    <div info>
        <div>First Name:</div>
        <div>Last Name:</div>
        <div>Email:</div>
        <div>Phone:</div>
        <div>Location:</div>
        <div>Date of Birth:</div>
        <button class='edit'>Edit</button>
    </div>
    <div info two>
        <div fName>${ this.getAttribute('name') }</div>
        <div lName>${ this.getAttribute('lastName') }</div>
        <div eEmail>${ this.getAttribute('email') }</div>
        <div pPhone>${ this.getAttribute('phone') }</div>
        <div location>${ this.getAttribute('location') }</div>
        <div dob>${ this.getAttribute('dob') }</div>
        <div extra></div>
    </div>
    </div>`
    }
}

customElements.define('my-user', User)