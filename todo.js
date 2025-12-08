const yourTodoList = [];
const yourDateAry = [];
const inputBox = document.querySelector('.js-input');
const divBox = document.querySelector('.js-div');
const datebox = document.querySelector('.js-date');


function addbtn(){
  if(inputBox.value !== '' && datebox.value !== ''){
    yourTodoList.push(inputBox.value)
    inputBox.value ='';

    yourDateAry.push(datebox.value)
    console.log(yourDateAry)
    addp();
  }
}

function enterPress(key){
  if(key === 'Enter'){
    addbtn()
  }
}

function addp(){

  let html = '';

  for(let i = 0; i<yourTodoList.length; i++){
    html += `
      <p>
        ${yourTodoList[i]} ${yourDateAry[i]}
        <button onclick="
          const index = ${i};
          deleteP(index);
        ">Delete</button>
      </p>
    `;
  }
  divBox.innerHTML = html;
}

function deleteP(index){

  yourTodoList.splice(index,1);
  yourDateAry.splice(index,1);
  addp();
}
