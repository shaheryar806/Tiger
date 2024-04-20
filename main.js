document.addEventListener("DOMContentLoaded",function (){
    document.getElementById("form").addEventListener("submit",function (event){
        let name = document.getElementById('name').value;
        let pass = document.getElementById('name').value;
        let email = document.getElementById('name').value; 
        let tel = document.getElementById('name').value;
        let gender = document.querySelector('input[name=gender]:checked');
        let checkbox =document.getElementById('checkbox').checked ? 'yes':'NO';
        let explain =document.getElementById('explain').value;
        let option =document.getElementById('country').value;
        nameRegex=/^[A-Za-z\s]+$/;
        passRegex=/^[\dA-Za-z\W]+$/;
        emailRegex=/^[\dA-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/;
        telRegex=/^[/d]+$/;
        if(name ==''|| pass ==''|| email ==''|| tel == ''|| !gender || option == 'no country' || !nameRegex.
        test(name)||!passRegex.test(pass)||!emailRegex.test(email)||!telRegex.test(tel)){
            alert('please fill the data with valid field');
        }else{
            alert('NAME:'+name+'/npassword'+ pass +)
            
        }
    }
    )
}
)