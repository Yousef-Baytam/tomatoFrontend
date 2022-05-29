window.onload = ()=>{
    fetchData()
}

const fetchData = async ()=>{
    let reviews = []
    await axios.get('http://127.0.0.1/tomatobackend/getReviews.php').then(response=>{
        reviews = response.data
    })

    if(reviews.length > 0){
        const container = document.getElementsByClassName('reviews-admin-container')[0];
        reviews.map(review=>
            container.innerHTML +=`<review-item name="${review.name}" review-text="${review.review}" rate="${review.rate}"></review-item>`
        )
    }
}
    