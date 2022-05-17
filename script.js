// const onclick_event=()=>{
//     document.querySelector(".tabualarFirstName").innerText="#FirstNameInput1";
//     document.querySelector(".tabularSecondname").innerText="#SecondNameInput1";
//     document.querySelector(".tabularaddress").innerText="#AddressInput1";
//     document.querySelector(".tabularPincode").innerText="#PincodeInput1";
//     document.querySelector(".tabularGender").innerText="#FirstNameInput1";
//     document.querySelector(".tabularFavfood").innerText="#FirstNameInput1";
//     document.querySelector(".tabularstate").innerText="#StateInput1";
//     document.querySelector(".tabularcountry").innerText="#CoutryInput1";
// }

let n=1
   let x=0
   let list1=[]
   let list2=[]
   let list3=[]
   let list4=[]
   let list5=[]
   let list6=[]
   let list7=[]
   let list8=[]
function submit(){
  
  let submit1 = document.querySelector('#table1');
  let newrow=submit1.insertRow(n)
  let vikas;

   list1[x]=document.querySelector('#FirstNameInput1').value;
   list2[x]=document.querySelector('#SecondNameInput1').value;
   list3[x]=document.querySelector('#AddressInput1').value;
   list4[x]=document.querySelector('#PincodeInput1').value;
   list5[x]=document.querySelector('.radio-check-input:checked').value;
   //let checkboxes=document.querySelectorAll('.form-check-input')
  
   let max = 2;
   let flag=false;
   let checkboxes=document.querySelectorAll('.form-check-input:checked')

   
   if(checkboxes.length>max){
    for (let checkbox of checkboxes) {
      flag=true
      vikas+=" ,"+checkbox.value
    }
    list6[x]=vikas.slice(11)
      }
   else{
     flag=false
    alert("Please select atleast 3 foods ")

   }

   
   list7[x]=document.querySelector('#StateInput1').value;
   list8[x]=document.querySelector('#CoutryInput1').value;

   


   let cel1=newrow.insertCell(0)
   let cel2=newrow.insertCell(1)
   let cel3=newrow.insertCell(2)
   let cel4=newrow.insertCell(3)
   let cel5=newrow.insertCell(4)
   let cel6=newrow.insertCell(5)
   let cel7=newrow.insertCell(6)
   let cel8=newrow.insertCell(7)


   


  



   cel1.innerHTML = list1[x]
   cel2.innerHTML = list2[x]
   cel3.innerHTML = list3[x]
   cel4.innerHTML = list4[x]
   cel5.innerHTML = list5[x]
   cel6.innerHTML = list6[x]
   cel7.innerHTML = list7[x]
   cel8.innerHTML = list8[x]
   n++;
   x++;


   
   

   const inputs = document.querySelectorAll('#FirstNameInput1,#SecondNameInput1,#AddressInput1,#PincodeInput1,#radiobuttonsallign,#checkboxesallign,#StateInput1,#CoutryInput1');

  inputs.forEach(input => {
    input.value = '';
  });
  let radio=document.querySelectorAll('.radio-check-input')
  for(disable of radio) {
    disable.checked=false
    
  }
  
  let uncheck=document.querySelectorAll('.form-check-input')
  for(checkbox of uncheck) {
    checkbox.checked=false
    
  }
}
