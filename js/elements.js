// const createCard = (imageSrc, title, rating, cuisine) => {
//     let stars = ``
//     for (let i = 0; i < 5; i++) {
//         if (i < rating)
//             stars += `<i class="fa-solid fa-star"></i>`
//         else
//             stars += `<i class="fa-regular fa-star"></i>`
//     }
//     return (
//         `<div class="card-container">
//         <div class="card">
//             <div class="img">
//                 <img src="${ imageSrc }" alt="">
//             </div>
//             <div class="title">
//                 ${ title }
//             </div>
//             <div class="rating">
//                 <div>Rating </div>
//                 <div>
//                     ${ stars }
//                 </div>
//             </div>
//             <div>
//                 <div class="cuisine">Cuisine: ${ cuisine }</div>
//                 <div class="leave-a-review">Leave a Review</div>
//             </div>
//         </div>
//     </div>`
//     )
// }

const conatiner = document.querySelector('.container')

const cardGenerator = (api) => {
    conatiner.innerHTML = ''
    axios.get(api)
        .then((res) => {
            if (!res)
                conatiner.appendChild(document.createElement('div').innerHTML('<h1>No restaurants matching this criteria</h1>'))
            for (let i of res) {
                let { image, title, rating, category } = i
                let card = `<my-card imgSrc='${ image }' title='${ title }' cuisine='${ category }' rating='rating'/>`
                conatiner.insertAdjacentHTML('beforeend', card)
            }
        }).catch((e) => {
            console.log(e)
        })
}

let nav = document.querySelector('.nav')

nav.insertAdjacentHTML('afterbegin', navbar)