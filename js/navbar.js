class Nav extends HTMLElement {

    get name() {
        return this.querySelector('[username]').innerHTML
    }
    set name(val) {
        val ? this.querySelector('[username]').innerHTML = val : ''
    }
    get imgSrc() {
        return this.querySelector('[userimage]').src
    }
    set imgSrc(val) {
        val ? this.querySelector('[userimage]').src = val : ''
    }
    connectedCallback() {
        this.innerHTML = `<nav>
        <div>
            <div class='logo'>
            <img src="${ this.getAttribute('logoSrc') }" alt="">
            <a href="http://localhost/zomato/tomatoFrontend/index.html">Tomato</a>
                
            </div>
            <div class='logo d-none' knownUser>
                <a href="http://localhost/zomato/tomatoFrontend/views/restaurants.html">All restaurants</a>
            </div>
        </div>
        <div>
            <div class="log-in logo" knownUser>
                Login
            </div>
            <div class="logged-in logo d-none" knownUser>
                <div username> ${ this.getAttribute('name') } ${ this.getAttribute('lastName') }</div>
                <div img><img userimage src="${ this.getAttribute('imgSrc') ? this.getAttribute('imgSrc') : `../assets/blank-profile.webp` }" alt=""></div>
                <div profile class='d-none'>
                <div>
                    <a href="/zomato/tomatoFrontend/views/profile.html">My profile</a>
                </div>
                <div logOut>
                    log out
                </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="form-bg hidden">
    <div class="steps-container">
        <div class="form-container">
            <form action="/zomato/tomatoBackend/login.php" method="POST" class="form login-form">
                <div>
                    <i class="fa-solid fa-xmark"></i>
                    <input type="Email" id='loginEmail' name="email" placeholder="Email" required>
                </div>
                <div>
                    <input type="password" id='password' name="passwrod" placeholder="Password" required>
                </div>
                <div not-found class='d-none'> user not found: invalid email or password</div>
                <input type="submit" id='login' name="submit" value="Log in">
                <div class="signIn" step>Create New Account</div>
            </form>
        </div>
        <div class="form-container translate">
            <form action="http://127.0.0.1:8000/api/add_user" method="POST" class="form" new-account>
                <i class="fa-solid fa-xmark"></i>
                <div>
                    <div>
                        <label dob-label for="first">First Name</label>
                        <input type="text" name="first_name" placeholder="First Name" id='first' required>
                    </div>
                    <div>
                        <label dob-label for="last">Last Name</label>
                        <input type="text" name="last_name" placeholder="Last Name" id='last' required>
                    </div>
                </div>
                <div>
                    <div>
                        <label dob-label for="phone">Phone Number</label>
                        <input type="text" name="phone" placeholder="Phone Number" id='phone' required>
                    </div>
                    <div>
                        <label dob-label for="dob"> Date of Birth</label>
                        <input type="Date" name="dob" id='dob' required>
                    </div>
                </div>
                <div>
                    <div>
                        <label dob-label for="email">Email</label>
                        <input type="Email" name="email" placeholder="Email" id="email" required> 
                    </div>
                    <div>
                        <label dob-label for="pass">Password</label>
                        <input type="password" name="passwrod" placeholder="Password" id="pass" required>
                    </div>
                </div>
                <input type="submit" name="submit" value="Register">
                <div class="back link" step>Back</div>
            </form>
        </div>
    </div>
</div>`
    }
}

customElements.define('my-navbar', Nav)