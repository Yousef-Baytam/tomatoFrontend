let filterValue 
let reviews = []

window.onload = ()=>{
    filterValue = document.getElementById('filter-list').value
    fetchData()
    
}



const fetchData = async ()=>{
    
    
    await axios.get('http://127.0.0.1/tomatobackend/getReviews.php').then(response=>{
        reviews = response.data
    })

    if(reviews.length > 0){
       
        showReviews()
    }
}

function onFilterChange(e){
    filterValue = e.value;
    showReviews()

}

function showReviews(){
    const container = document.getElementsByClassName('reviews-list')[0];
    container.innerHTML = ``
    reviews.filter(review=>review.status === filterValue).map(review=>
        container.innerHTML +=`<review-item id="${review.id}" name="${review.name}" review-text="${review.review}" rate="${review.rating}" status="${review.status}"></review-item>`
    )
}


async function accept(id){
    const form = new FormData();
    form.append('status', 'accepted')
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomatobackend/updateReviewStatus.php', form).then(response=>
    console.log(response))
}
async function decline(id){
    const form = new FormData();
    form.append('status', 'declined')
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomatobackend/updateReviewStatus.php', form).then(response=>
    console.log(response))
}
