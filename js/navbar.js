class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav>
        <div>
            <div class='logo'>
                Tomato
            </div>
            <div>
                <a href="./views/restaurants.html">All restaurants</a>
            </div>
        </div>
        <div class="log-in">
            <div class="log-in">
                Login
            </div>
            <div class="log-in d-none">
                <div>username</div>
                <div>profile img</div>
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