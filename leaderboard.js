 document.getElementById('top-blogs').style.color='red';
document.getElementById('top-player').style.color='yellow'

document.getElementById('ul-add').addEventListener('click',function(){
    const child=document.createElement('li');
    child.innerText='new item added';
    document.getElementById('ul-parent').appendChild(child);
})

document.getElementById('test-button').addEventListener('click',function(){
 
    let inputField=document.getElementById('test-input');
     let inputNumber=inputField.value;
     inputNumber = parseInt(inputField.value) + 1;
     inputField.value=inputNumber;
    
})
const players=document.getElementsByClassName('player');
console.log(players);

for(const player of players){
    player.style.backgroundColor='red';
}
 
const Books=[
    'javascript dom manipulation',
    'Javascript beginner',
    'programming',
    'js toots'
]
const searchKey='javascript';
const array=[];

for (const book of Books){


        if(book.toLowerCase().startsWith((searchKey))!=-1){
            array.push(book);
           
    }
    
}
console.log(array); 

document.getElementById('test-button').addEventListener('click',function(){
    const inputField=document.getElementById('test-input');
    const inputFieldText=inputField.value;
    const inputFieldNumber=parseInt(inputFieldText);
    inputField.value=inputFieldNumber+1;
})




