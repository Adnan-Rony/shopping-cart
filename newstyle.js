let total=0;
function ClickCard(data)
{
  const NewElement =document.getElementById('container');
  
    const ProductsName =data.childNodes[5].childNodes[1].innerText;

  
    

    const li =document.createElement('li');

    li.innerText=ProductsName;
    NewElement.appendChild(li);

    // 
  const prices=data.childNodes[5].childNodes[3].innerText.split(" ")[0];


    total=parseFloat(total) + parseFloat(prices);

    document.getElementById('Total-Prices').innerText=total;
    
}

document.getElementById('btn-submit').addEventListener('click',function(){
    

    const inputfield =document.getElementById('input-text');
    const input =inputfield.value;
    
        if(input === 'SELL200' )
        {
            // console.log('valid');

            const cupon=document.getElementById('Total-Prices');
            const cupon2=cupon.innerText;
            const cupon3=parseFloat(cupon2)

            const discountSection =document.getElementById('discount');
            const discount=discountSection.innerText;
            
            // neww.innerText=cupon * 0.20
          const dis=  discountSection.innerText=cupon3 * 0.20;

            //
          
            const TotalField = document.getElementById('total');
            const TotalString =TotalField.innerText;
            const Total=parseFloat(TotalString);
                
          

            TotalField.innerText = cupon3 - dis



        }
        

})

function refreshPage(){
  window.location.reload();
}

