let filterValue
let reviews = []
let container
let searchInput = "";

window.onload = () => {
    filterValue = document.getElementById('filter-list').value
    fetchData().then(() => {
        document.getElementById('reviews-search').oninput = (e) => {
            searchInput = e.target.value
            showReviews()
        }
    })

}



const fetchData = async () => {
    container = document.getElementsByClassName('reviews-list')[0];

    await axios.get('http://lcoalhost/tomato/tomatoBackend/getAllReviews.php').then(response => {
        reviews = response.data
    })

    if (reviews.length > 0) {

        showReviews()
    } else {
        container.innerHTML += `No Reviews Found`
    }
}

function onFilterChange(e) {
    filterValue = e.value;
    showReviews()

}

function showReviews() {

    container.innerHTML = ``
    reviews.filter(review => (review.status === filterValue && (review.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) || review.review.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())))).map(review =>
        container.innerHTML += `<review-item id="${ review.id }" name="${ review.name }" review-text="${ review.review }" rate="${ review.rating }" status="${ review.status }"></review-item>`
    )
}


async function accept(id) {
    const form = new FormData();
    form.append('status', 'approved')
    form.append('id', id)
    await axios.post('http://lcoalhost/tomato/tomatoBackend/updateReviewStatus.php', form).then(response =>
        location.reload()
    )
}
async function decline(id) {
    const form = new FormData();
    form.append('status', 'declined')
    form.append('id', id)
    await axios.post('http://lcoalhost/tomato/tomatoBackend/updateReviewStatus.php', form).then(response =>
        location.reload()
    )
}
