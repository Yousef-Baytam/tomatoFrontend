const navbar = `
        <nav>
            <div>
                <div>
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

const createCard = (imageSrc, title, rating, cuisine) => {
    let stars = ``
    for (let i = 0; i < 5; i++) {
        if (i < rating)
            stars += `<i class="fa-solid fa-star"></i>`
        else
            stars += `<i class="fa-regular fa-star"></i>`
    }
    return (
        `<div class="card-container">
        <div class="card">
            <div class="img">
                <img src="${ imageSrc }" alt="">
            </div>
            <div class="title">
                ${ title }
            </div>
            <div class="rating">
                <div>Rating </div>
                <div>
                    ${ stars }
                </div>
            </div>
            <div>
                <div class="cuisine">Cuisine: ${ cuisine }</div>
                <div class="leave-a-review">Leave a Review</div>
            </div>
        </div>
    </div>`
    )
}
let nav = document.querySelector('.nav')

nav.insertAdjacentHTML('afterbegin', navbar)