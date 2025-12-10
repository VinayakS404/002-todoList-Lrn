const dataArry = [
 // {todo : 'wyz', date : 'dd,mm,yy'},
//  {todo : 'wyz', date : 'dd,mm,yy'},
//  {todo : 'wyz', date : 'dd,mm,yy'}
];

let i = 0;

const inputBox = document.querySelector('.js-input');
const divBox = document.querySelector('.js-div');
const datebox = document.querySelector('.js-date');


function addbtn(){
  if(inputBox.value !== '' && datebox.value !== ''){

    dataArry[i] = {
        todo : inputBox.value,
        date : datebox.value
    }

    console.log(dataArry[i])
    addp();

    inputBox.value = '';
    datebox.value = '';

  }
  i++;
}

function enterPress(key){
  if(key === 'Enter'){
    addbtn()
  }
}

function addp(){

  let html = '';

  for(let i = 0; i<dataArry.length; i++){
    html += `
      <p>
        ${dataArry[i].todo} ${dataArry[i].date}
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

  dataArry.splice(index,1);
 // yourDateAry.splice(index,1);
  addp();
}

// array[] = [{task : xyz , date : dd,mm,yyyy}, {task : xyz , date : dd,mm,yyyy}, {task : xyz , date : dd,mm,yyyy}]