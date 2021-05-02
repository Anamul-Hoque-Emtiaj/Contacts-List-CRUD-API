const axios = require('axios').default;
const URL = "http://localhost:3000/contacts";

const obj={
    ID: 4,
    name: 'Emran',
    email: 'emran@gmail.com',
    MobileNo: '01632547656'
}

const CreateRow = (contact,Parent) =>{
    let TR = document.createElement('tr')
    let tdName = document.createElement('td')
    tdName.innerHTML = contact.name
    TR.appendChild(tdName)

    let tdEmail = document.createElement('td')
    tdEmail.innerHTML = contact.email
    TR.appendChild(tdEmail)

    let tdMnum = document.createElement('td')
    tdMnum.innerHTML = contact.MobileNo
    TR.appendChild(tdMnum)

    let tdActions = document.createElement('td')
    let EditBtn = document.createElement('button')
    EditBtn.className = 'btn btn-warning'
    EditBtn.innerHTML = 'Edit'
    tdActions.appendChild(EditBtn)

    let DeleteBtn = document.createElement('button')
    DeleteBtn.className = 'btn btn-danger'
    DeleteBtn.innerHTML = 'Delete'
    tdActions.appendChild(DeleteBtn)
    TR.appendChild(tdActions)
    Parent.appendChild(TR)
}

axios.get(URL)
.then(res=>{
    console.log(res.data);
})
.catch(err=>{
    console.log(err);
})

axios.post(URL, obj)
.then(res=>{
    console.log(res.data);
}).catch(err=>{
    console.log("Error Occured");
})