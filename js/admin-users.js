let container;
let users = [];
let searchInput = "";

window.onload = () => {
    fetchData().then(() => {
        document.getElementById('users-search').oninput = (e) => {
            searchInput = e.target.value;
            showUsers()
        }
    })
}

const fetchData = async () => {
    container = document.getElementsByClassName('users-list')[0];
    await axios.get('http://lcoalhost/tomato/tomatoBackend/getUsers.php').then(response => {
        users = response.data
    })

    if (users.length > 0) {
        showUsers()
    } else {
        container.innerHTML += `No Users Found`
    }

}

function showUsers() {
    container.innerHTML = ``;
    users.filter(user => `${ user.first_name } ${ user.last_name }`.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())).map(user =>
        container.innerHTML += `
        <user-item 
            id="${ user.id }" 
            fname="${ user.first_name }" 
            lname="${ user.last_name }" 
            email= "${ user.email }" 
            phone="${ user.phone_number }" 
            image="${ user.profile_pic }"
            dob="${ user.dob }"
            status = "${ user.status }"
            city = "${ user.cities_id }"
            type= "${ user.user_types_id }"></user-item>`
    )
}

async function remove(id) {
    const form = new FormData();
    form.append('id', id)
    await axios.post('http://lcoalhost/tomato/tomatoBackend/removeUser.php', form).then(response =>
        location.reload()
    )
}

async function ban(id) {
    const form = new FormData();
    form.append('status', 'banned')
    form.append('id', id)
    await axios.post('http://lcoalhost/tomato/tomatoBackend/updateUserStatus.php', form).then(response =>
        location.reload()
    )
}

async function activate(id) {
    const form = new FormData();
    form.append('status', 'active')
    form.append('id', id)
    await axios.post('http://lcoalhost/tomato/tomatoBackend/updateUserStatus.php', form).then(response =>
        location.reload()
    )
}
