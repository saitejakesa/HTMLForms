// const onclick_event=()=>{
//     document.querySelector(".tabualarFirstName").innerText="#first-name";
//     document.querySelector(".tabularSecondname").innerText="#SecondNameInput1";
//     document.querySelector(".tabularaddress").innerText="#AddressInput1";
//     document.querySelector(".tabularPincode").innerText="#PincodeInput1";
//     document.querySelector(".tabularGender").innerText="#first-name";
//     document.querySelector(".tabularFavfood").innerText="#first-name";
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

function submitdetails(event){
  console.log("submitted");
  event.preventDefault();
  
  let submit1 = document.querySelector('#table1');
  let newrow=submit1.insertRow(n)
  let vikas;

   list1[x]=document.getElementById('first-name').value;
   list2[x]=document.querySelector('#last-name').value;
   list3[x]=document.querySelector('#address').value;
   list4[x]=document.querySelector('#pincode').value;
   list5[x]=document.querySelector('.radio-check-input:checked').value;
   //let checkboxes=document.querySelectorAll('.form-check-input')
  
   let max = 2;
   let flag=false;
   let checkboxes=document.querySelectorAll('.form-check-input:checked')

   
   if(checkboxes.length<max){
      flag=false;
      
    alert("Please select atleast 3 foods ")
    clearAll();
    deleterow=submit1.deleterow(n)
      }
   else{
    for (let checkbox of checkboxes) {
      flag=true;
      vikas+=" ,"+checkbox.value
    }
    list6[x]=vikas.slice(11)

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


   
  clearAll() 
   
  }

  function clearAll(){
    const inputs = document.querySelectorAll('#first-name,#last-name,#address,#pincode,#radiobuttonsallign,#checkboxesallign,#StateInput1,#CoutryInput1');
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

