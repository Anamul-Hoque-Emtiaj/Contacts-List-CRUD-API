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
        console.log('Edit Button Pressed')
    })
    tdActions.appendChild(EditBtn)

    let DeleteBtn = document.createElement('button')
    DeleteBtn.className = 'btn btn-danger'
    DeleteBtn.innerHTML = 'Delete'
    DeleteBtn.addEventListener('click',function(){
        axios.delete('${URL}/${contact.id}')
        .then(res =>{
            Parent.removeChild(TR)
        }).catch(err=>{
            console.log('Error Occured')
        })
        
    })
    tdActions.appendChild(DeleteBtn)
    TR.appendChild(tdActions)
    Parent.appendChild(TR)
}

window.onload = function() {
    const Parent = document.getElementById('Parents')
    axios.get(URL)
    .then(res=>{
        
        res.data.forEach(element => {
            CreateRow(element,Parent);
            console.log(res.data.name)
         });
    })
    .catch(err=>{
    console.log(err);
    })
    document.getElementById('submit').addEventListener('click',CreateNew)
}

const CreateNew = ()=>{
    const contact = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        MobileNo: document.getElementById('pnum').value
    }
    axios.post(URL,contact)
    .then(res=>{
        const Parent = document.getElementById('Parents')
        CreateRow(res.data,Parent)
        console.log(res.data)
    }).catch(err=>{
        console.log("Error Occured")
    })
}


