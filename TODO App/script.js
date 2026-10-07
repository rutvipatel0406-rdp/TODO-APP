let form = document.getElementById('form');

let arr = JSON.parse(localStorage.getItem('dataa')) || []

window.addEventListener('load',()=>{
    display(arr)
})

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    let task = document.getElementById('task').value
    console.log("Form Submitted");

    let Priority = document.getElementById('Priority').value

    let data = {
    task,
    Priority
    }

    arr.push(data)
    localStorage.setItem("dataa",JSON.stringify(arr));
    console.log(data)

display(arr);
});

function display(arr){

    document.querySelector('tbody').innerHTML = ""
    arr.forEach((el,index)=>{
    
    
    let row = document.createElement('tr')
    
    let col1 = document.createElement('td')
    col1.innerText = el.task
    let  col2 = document.createElement('td')
    col2.innerText = el.Priority
    
    let col3 = document.createElement('td')
    col3.innerText = "DELETE"
    
    col3.addEventListener('click', ()=>{
        deleteT(el,index);
    })
    
    row.append(col1, col2, col3)
    document.querySelector('tbody').append(row)
});
}

function deleteT(el, index){
    arr.splice(index,1)
    localStorage.setItem("dataa",JSON.stringify(arr))
    display(arr);
}