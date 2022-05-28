class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav>
        <div>
            <div class='logo'>
            <img src="../assets/—Pngtree—tomato cartoon hand drawn clip_6942198.png" alt="">
                Tomato
            </div>
            <div class='logo'>
                <a href="./views/restaurants.html">All restaurants</a>
            </div>
        </div>
        <div>
            <div class="log-in logo">
                Login
            </div>
            <div class="logged-in logo d-none">
                <div username> ${ this.getAttribute('name') } ${ this.getAttribute('lastName') }</div>
                <div img><img src="${ this.getAttribute('imgSrc') ? this.getAttribute('imgSrc') : `../assets/blank-profile.webp` }" alt=""></div>
                <div profile class='d-none'>
                    My profile
                </div>
            </div>
        </div>
    </nav>
    <div class="form-bg hidden">
    <div class="steps-container">
        <div class="form-container">
            <form action="#" method="POST" class="form">
                <div>
                    <i class="fa-solid fa-xmark"></i>
                    <input type="Email" name="Email" placeholder="Email">
                </div>
                <div>
                    <input type="password" name="Passwrod" placeholder="Password">
                </div>
                <input type="submit" name="submit" value="Log in">
                <div class="signIn" step>Create New Account</div>
            </form>
        </div>
        <div class="form-container translate">
            <form action="#" method="POST" class="form" new-account>
                <i class="fa-solid fa-xmark"></i>
                <div>
                    <div>
                        <label dob-label for="first">First Name</label>
                        <input type="text" name="First" placeholder="First Name" id='first'>
                    </div>
                    <div>
                        <label dob-label for="last">Last Name</label>
                        <input type="text" name="Last" placeholder="Last Name" id='last'>
                    </div>
                </div>
                <div>
                    <div>
                        <label dob-label for="phone">Phone Number</label>
                        <input type="text" name="Phone" placeholder="Phone Number" id='phone'>
                    </div>
                    <div>
                        <label dob-label for="dob"> Date of Birth</label>
                        <input type="Date" name="dob" id='dob'>
                    </div>
                </div>
                <div>
                    <div>
                        <label dob-label for="email">Email</label>
                        <input type="Email" name="Email" placeholder="Email" id="email">
                    </div>
                    <div>
                        <label dob-label for="pass">Password</label>
                        <input type="password" name="Passwrod" placeholder="Password" id="pass">
                    </div>
                </div>
                <input type="submit" name="submit" value="Sign In">
                <div class="back link" step>Back</div>
            </form>
        </div>
    </div>
</div>`
    }
}

customElements.define('my-navbar', Nav)