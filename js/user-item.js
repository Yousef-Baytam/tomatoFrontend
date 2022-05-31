class UserItem extends HTMLElement{


    id = this.getAttribute('id')
    fname = this.getAttribute('fname')
    lname = this.getAttribute('lname')
    email = this.getAttribute('email')
    phone_number = this.getAttribute('phone')
    profile_pic = this.getAttribute('image')
    dob = this.getAttribute('dob')
    user_types_id = this.getAttribute('type')
    cities_id = this.getAttribute('city')
    status = this.getAttribute('status')

    connectedCallback(){
        this.innerHTML=`
            <div class="admin-user-card">
                <div class="profile-pic">
                    <img src="${this.getAttribute("image")}"/>
                </div>
                <div style="width:100%; margin-left: 24px">
                    <div class='head'>
                        <div class="title">
                            <h3>${this.fname} ${this.lname}</h3>
                        </div>
                        <div class="action-buttons">
                            <span onclick="remove(${this.id})"><i class="fa-solid fa-trash-can"></i></span>`+
                            (this.status != "banned" ? `<span onclick="ban(${this.id})" title="ban"><i class="fa-solid fa-ban"></i></span>`:'') +
                            (this.status == "banned" ? `<span onclick="activate(${this.id})" title="unban" ><i class="fa-solid fa-check"></i></span>` :'')+
                        `</div>
                    </div>
                    <div class = "content">
                        <div class="description">
                            <p>${this.dob || 'Date of birth'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('user-item', UserItem);