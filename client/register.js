function handleSubmit(event)
{
    event.preventDefault()

    const username=document.getElementById("username").value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const password=document.getElementById('password').value;

    const user={
        username:username,
        email:email,
        phone:phone,
        password:password
    }
console.log(user);

axios.post('http://localhost:5000/api/register',user)
.then(r=>{
    console.log(r.data);
    window.location.href='http://localhost:5500/client/login.html'    
}).catch(e=>{console.log(e.response)

    alert("User already Exist")
})

    
}

function handleClike(event)
{
    event.preventDefault()
    window.location.href='http://localhost:5500/client/login.html' 
    
}