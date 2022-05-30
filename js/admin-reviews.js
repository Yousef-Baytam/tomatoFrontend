let filterValue 
let reviews = []

window.onload = ()=>{
    filterValue = document.getElementById('filter-list').value
    fetchData()
    // filter.onchange=(e)=>console.log(e)
    // console.log(filter)
    
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
        container.innerHTML +=`<review-item name="${review.name}" review-text="${review.review}" rate="${review.rating}" status="${review.status}"></review-item>`
    )
}
