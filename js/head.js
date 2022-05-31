class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
        integrity="sha384-/frq1SRXYH/bSyou/HUp/hib7RVN1TawQYja658FEOodR/FQBKVqT9Ol+Oz3Olq5" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="../styles/app.css">
    <link rel="stylesheet" href="../styles/restaurants.css">
    <link rel="stylesheet" href="../styles/profile.css">
    <title>${ this.getAttribute('pageTitle') }</title> </head>`
    }
}

customElements.define('my-header', Header)