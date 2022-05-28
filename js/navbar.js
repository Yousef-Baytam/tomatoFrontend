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
            <div class="log-in logo d-none">
                Login
            </div>
            <div class="logged-in logo">
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
                <form action="#" method="POST" class="form">
                    <div>
                        <i class="fa-solid fa-xmark"></i>
                        <input type="Email" name="Email" placeholder="Email">
                    </div>
                    <div>
                        <input type="password" name="Passwrod" placeholder="Password">
                    </div>
                    <input type="submit" name="submit" value="Sign In">
                    <div class="back" step>Back</div>
                </form>
            </div>
        </div>
    </div>`
    }
}

customElements.define('my-navbar', Nav)