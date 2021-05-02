const axios = require('axios');
const URL = "http://localhost:3000/contacts";

axios.get(URL)
.then(res=>{
    console.log(res.data);
})
.catch(err=>{
    console.log(err);
})

const obj={
    ID: 4,
    name: "Emran",
    email: "emran@gmail.com",
    MobileNo: "01632547656"
}
axios.post(URL, obj)
.then(res=>{
    console.log(res.data);
}).catch(err=>{
    console.log(err);
})