//search button
        function search(){
            var input, filter,table, tr, td, i, txtValue;
            input = document.getElementById("searchButton");
            filter= input.value.toUpperCase();
            table= document.getElementById("center");
            tr= table.getElementsByTagName("tr");
            for(i=0; i<tr.length; i++){
                td= tr[i].getElementsByTagName('td')[2];
                if(td){
                    txtValue= td.textContent || td.innerHTML;
                    if(txtValue.toUpperCase().indexOf(filter)>-1){
                        tr[i].style.display="";
                    }
                    else{
                        tr[i].style.display="none";
                    }
                }    
            }
        }


//add button
        function addButton(){
            var add=document.getElementById('addData');
            var addButton=document.getElementById('addButton');
            if(add.style.display=='none'){
                add.style.display='flex';
                addButton.disabled=true;
            }
        }
        

//checking infomation box is not empty
        function checkValue(){
            var isEmpty = false;
            var name=document.getElementById('name').value;
            var ticker=document.getElementById('ticker').value;
            var buySell=document.getElementById('buySell').value;
            var cPrice=document.getElementById('cPrice').value;
            var tPrice=document.getElementById('tPrice').value;
            var tradeType=document.getElementById('tradeType').value;
            var duration=document.getElementById('duration').value;
            var riskLevel=document.getElementById('riskLevel').value;
            
            if(name === ''){
                alert('name can not be empty');
                isEmpty=true;
            }
            else if(ticker === ''){
                alert('ticker can not be empty');
                isEmpty=true;
            }
            else if(buySell === ''){
                alert('Select Buy or Sell');
                isEmpty=true;
            }
            else if(cPrice === ''){
                alert('Current price can not be empty');
                isEmpty=true;
            }
            else if(tPrice === ''){
                alert('Target price  can not be empty');
                isEmpty=true;
            }
            else if(tradeType === ''){
                alert('Select Trade type');
                isEmpty=true;
            }
            else if(duration === ''){
                alert('Duration can not be empty');
                isEmpty=true;
            }
            else if(riskLevel === ''){
                alert('Select Risk level');
                isEmpty=true;
            }
            return isEmpty;
            
        }
        


//getting value from information box
        function submit(){
            if(!checkValue()){
                
               
                var table=document.getElementById('center');
                var newRow=table.insertRow(1);
                var cell1=newRow.insertCell(0);
                var cell2=newRow.insertCell(1);
                var cell3=newRow.insertCell(2);
                var cell4=newRow.insertCell(3);
                var cell5=newRow.insertCell(4);
                var cell6=newRow.insertCell(5);
                var cell7=newRow.insertCell(6);
                var cell8=newRow.insertCell(7);
                var cell9=newRow.insertCell(8);
                var cell10=newRow.insertCell(9);
                var cell11=newRow.insertCell(10);
                var name=document.getElementById('name').value;
                var ticker=document.getElementById('ticker').value;
                var buySell=document.getElementById('buySell').value;
                var cPrice=document.getElementById('cPrice').value;
                var tPrice=document.getElementById('tPrice').value;
                var stopLoss=document.getElementById('stopLoss').value;
                var tradeType=document.getElementById('tradeType').value;
                var duration=document.getElementById('duration').value;
                var riskLevel=document.getElementById('riskLevel').value;
                var comment=document.getElementById('com').value;
                var d = new Date();
                var n = d.toLocaleDateString();
                cell1.innerHTML = n;
                cell2.innerHTML=name;
                cell3.innerHTML=ticker;
                cell4.innerHTML=buySell;
                cell5.innerHTML=cPrice;
                cell6.innerHTML=tPrice;
                cell7.innerHTML=stopLoss;
                cell8.innerHTML=tradeType;
                cell9.innerHTML=duration;
                cell10.innerHTML=riskLevel;
                cell11.innerHTML=comment;
                

                
                document.getElementById('name').value='';
                document.getElementById('ticker').value='';
                document.getElementById('buySell').value='';
                document.getElementById('cPrice').value='';
                document.getElementById('tPrice').value='';
                document.getElementById('stopLoss').value='';
                document.getElementById('tradeType').value='';
                document.getElementById('duration').value='';
                document.getElementById('riskLevel').value='';
                document.getElementById('com').value='';

                var add=document.getElementById('addData');
                add.style.display='none';
                document.getElementById('addButton').disabled=false;
           }

        }
        
        

        







        // //getting data from json file
        // var data, i, num;
       
        // function loadData() {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open('GET', 'data.json', true);
            
        //     xhttp.send();
        //     xhttp.onreadystatechange = function () {
        //         if (xhttp.readyState == 4 && xhttp.status == 200) {
        //             data = JSON.parse(xhttp.responseText);
        //             for(i=0; i<data.stocktrade.length; i++){
        //                 var row = `<tr>
        //                               <td>${data.stocktrade[i].date}</td>
        //                               <td>${data.stocktrade[i].name}</td>
        //                               <td>${data.stocktrade[i].ticker}</td>
        //                               <td>${data.stocktrade[i].buysell}</td>
        //                               <td>${data.stocktrade[i].currentprice}</td>
        //                               <td>${data.stocktrade[i].pricetarget}</td>
        //                               <td>${data.stocktrade[i].stoploss}</td>
        //                               <td>${data.stocktrade[i].tradetype}</td>
        //                               <td>${data.stocktrade[i].approxduration}</td>
        //                               <td>${data.stocktrade[i].risklevel}</td>
        //                               <td>${data.stocktrade[i].othercomment}</td>
        //                            </tr>`
        //                            document.getElementById('myTable').innerHTML+=row;
        //             }
                    
        //         }
                
        //     }
        // }
  


       
      



