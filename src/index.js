import axios from 'axios'
const URL = "http://localhost:3000/contacts";

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
    EditBtn.addEventListener('click',()=>{
        
    })
    tdActions.appendChild(EditBtn)

    let DeleteBtn = document.createElement('button')
    DeleteBtn.className = 'btn btn-danger'
    DeleteBtn.innerHTML = 'Delete'
    DeleteBtn.addEventListener('click',()=>{

    })
    tdActions.appendChild(DeleteBtn)
    TR.appendChild(tdActions)
    Parent.appendChild(TR)
}

window.onload = function(){
    const Parent = document.getElementById('Parents')
    axios.get(URL)
    .then(res=>{
        res.data.forEach(element => {
            CreateRow(element,Parent);
         });
    })
    .catch(err=>{
    console.log(err);
    })

}


