window.onload= ()=>{
    fetchData()
}

const fetchData = async ()=>{
    const container = document.getElementsByClassName('users-admin-container')[0];
    let users = []
    await axios.get('http://127.0.0.1/tomatobackend/getUsers.php').then(response=>{
        users = response.data
    })

    if(users.length > 0){
        users.map(user=>
            container.innerHTML +=`
            <user-item 
                id="${user.id}" 
                fname="${user.first_name}" 
                lname="${user.last_name}" 
                email= "${user.email}" 
                phone="${user.phone_number}" 
                image="${user.profile_pic}"
                dob="${user.dob}"
                status = "${user.status}"
                city = "${user.cities_id}"
                type= "${user.user_types_id}"></user-item>`
        )
    }else{
        container.innerHTML += `No Users Found`
    }
    
}

async function remove(id){
    const form = new FormData();
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomatobackend/removeUser.php', form).then(response=>
        location.reload()
    )
 }
 
 async function ban(id){
    const form = new FormData();
    form.append('status', 'banned')
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomatobackend/updateUserStatus.php', form).then(response=>
        location.reload()
    )
 }

 async function activate(id){
    const form = new FormData();
    form.append('status', 'active')
    form.append('id', id)
    await axios.post('http://127.0.0.1/tomatobackend/updateUserStatus.php', form).then(response=>
        location.reload()
    )
 }
