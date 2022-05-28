class User extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="header-2"><div class="profile-pic">
        <img src="${ this.getAttribute('imgSrc') ? this.getAttribute('imgSrc') : `../assets/blank-profile.webp` }" alt="user Image">
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
        <div>${ this.getAttribute('name') }</div>
        <div>${ this.getAttribute('lastName') }</div>
        <div>${ this.getAttribute('email') }</div>
        <div>${ this.getAttribute('phone') }</div>
        <div>${ this.getAttribute('location') }</div>
        <div>${ this.getAttribute('dob') }</div>
        <div extra></div>
    </div>
    </div>`
    }
}

customElements.define('my-user', User)