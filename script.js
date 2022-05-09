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

var n=1
   var x=0
   var list1=[]
   var list2=[]
   var list3=[]
   var list4=[]
   var list5=[]
   var list6=[]
   var list7=[]
   var list8=[]
function submit(){
  
  var submit1 = document.querySelector('#table1');
  var newrow=submit1.insertRow(n)
  
  let vikas;
   list1[x]=document.querySelector('#FirstNameInput1').value;
   list2[x]=document.querySelector('#SecondNameInput1').value;
   list3[x]=document.querySelector('#AddressInput1').value;
   list4[x]=document.querySelector('#PincodeInput1').value;
   list5[x]=document.querySelector('.radio-check-input:checked').value;
   let checkboxes=document.querySelectorAll('.form-check-input:checked')
   for (var checkbox of checkboxes) {
    vikas=document.body.append(checkbox.value + ' ');
  }
  list6[x]=vikas

  
   list7[x]=document.querySelector('#StateInput1').value;
   list8[x]=document.querySelector('#CoutryInput1').value;

   var cel1=newrow.insertCell(0)
   var cel2=newrow.insertCell(1)
   var cel3=newrow.insertCell(2)
   var cel4=newrow.insertCell(3)
   var cel5=newrow.insertCell(4)
   var cel6=newrow.insertCell(5)
   var cel7=newrow.insertCell(6)
   var cel8=newrow.insertCell(7)

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
}
