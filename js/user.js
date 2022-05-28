class User extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="header-2"><div class="profile-pic">
        <img src="${ this.getAttribute('imgSrc') ? this.getAttribute('imgSrc') : `../assets/blank-profile.webp` }" alt="user Image">
    </div>
    <div info>
        <div>First Name: ${ this.getAttribute('name') }</div>
        <div>Last Name:${ this.getAttribute('lastName') }</div>
        <div>Email: ${ this.getAttribute('email') }</div>
        <div>Phone: ${ this.getAttribute('phone') }</div>
        <div>Location: ${ this.getAttribute('location') }</div>
        <div>Date of Birth: ${ this.getAttribute('dob') }</div>
        <button>Edit</button>
    </div></div>`
    }
}

customElements.define('my-user', User)