

const email = document.getElementById('email')
const pwd = document.getElementById('pwd')

const btn = document.getElementById('btn')

function validate(){

    let re = /.com\@/
        return re.test()
}


btn.addEventListener('click',()=>{
 
   if(validate(email.value) !=true){

        console.log('invalid email')

    }else(console.log(email.value))


})