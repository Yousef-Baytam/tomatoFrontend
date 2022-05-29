class UserItem extends HTMLElement{


    fullname = this.getAttribute('fname') + " " + this.getAttribute('lname')

    connectedCallback(){
        this.innerHTML=`
            <div class="admin-user-card">
                <div class="profile-pic">
                    <img src="/assets/blank-profile.webp"/>
                </div>
                <div style="width:100%; margin-left: 24px">
                    <div class='head'>
                        <div class="title">
                            <h3>${this.fullname}</h3>
                        </div>
                        <div class="action-buttons">
                            <span onclick="editRest()"><i class="fa-solid fa-pen-to-square"></i></span>
                            <span onclick="remove()"><i class="fa-solid fa-trash-can"></i></span>
                        </div>
                    </div>
                    
                        <div class="description">
                            <p>${this.getAttribute('dob') || 'Date of birth'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}



function editRest(){
    
    let elm = document.getElementsByTagName('my-edit')[0].children[0].classList.remove('hidden')
}
function remove(){
    return console.log("remove")
}

customElements.define('user-item', UserItem);