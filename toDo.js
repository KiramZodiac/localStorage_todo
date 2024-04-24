
let input = document.getElementById('input')
const btn = document.getElementById('btn')
const li = document.getElementById('li')
const ret = document.getElementById('ret')



let delBtn = document.createElement('button')
delBtn.innerHTML = 'delete'

btn.addEventListener('click',()=>{

if(input.value !==""){

    let lis = document.createElement('li');
 
    
    lis.append(input.value)
    
    li.appendChild(lis)
    

saveTask()
    input.value = ''

}else{

    alert('please enter a to do')
}
})
function saveTask(){
const taskList = document.getElementById('li')

const tasks =[]

taskList.querySelectorAll('li').forEach(function(taskItem){
    tasks.push(taskItem.textContent)
localStorage.setItem('tasks',JSON.stringify(tasks))


})
}
function retTask(){

    const taskList = document.getElementById('li')

   let tsk = JSON.parse(localStorage.getItem('tasks'))


tsk.forEach(function(taskText){

    const li = document.createElement('li');
    li.textContent = taskText
    
    taskList.appendChild(li)
    
})


}
window.onload = function(){


setTimeout(()=>{
    retTask()

},2000)

}


ret.addEventListener('click', () => {
    li.innerText = ""
    localStorage.clear()
})
