
window.addEventListener('DOMContentLoaded',()=>{
    const name=document.getElementById('name').innerText;
    const email=document.getElementById('email').innerText;
    const goal=document.getElementById('goal').innerText;
    const role=document.getElementById('role').innerText;
    const city=document.getElementById('city').innerText;

const token=sessionStorage.getItem('token')
axios.get("http://localhost:5000/api/applications/profile",{ headers: { "Authorization": token } });
    
    
})