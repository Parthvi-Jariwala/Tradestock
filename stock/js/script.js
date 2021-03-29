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

            }
            else if(add.style.display=='flex'){
                add.style.display='none';
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


                rowToInput();
           }

        }
    
var rIndex,table=document.getElementById('center');

//display selected row data into input box

        function rowToInput(){
            
            for(var i = 1; i < table.rows.length; i++){
                table.rows[i].onclick=function(){
                    rIndex=this.rowIndex;
            
                    document.getElementById('name').value=this.cells[1].innerHTML;
                    document.getElementById('ticker').value=this.cells[2].innerHTML;
                    document.getElementById('buySell').value=this.cells[3].innerHTML;
                    document.getElementById('cPrice').value=this.cells[4].innerHTML;
                    document.getElementById('tPrice').value=this.cells[5].innerHTML;
                    document.getElementById('stopLoss').value=this.cells[6].innerHTML;
                    document.getElementById('tradeType').value=this.cells[7].innerHTML;
                    document.getElementById('duration').value=this.cells[8].innerHTML;
                    document.getElementById('riskLevel').value=this.cells[9].innerHTML;
                    document.getElementById('com').value=this.cells[10].innerHTML;
                };
            }
        }
        rowToInput();


//edit button 

        function editButton(){

            if(!rowToInput()){
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

                table.rows[rIndex].cells[1].innerHTML=name;
                table.rows[rIndex].cells[2].innerHTML=ticker;
                table.rows[rIndex].cells[3].innerHTML=buySell;
                table.rows[rIndex].cells[4].innerHTML=cPrice;
                table.rows[rIndex].cells[5].innerHTML=tPrice;
                table.rows[rIndex].cells[6].innerHTML=stopLoss;
                table.rows[rIndex].cells[7].innerHTML=tradeType;
                table.rows[rIndex].cells[8].innerHTML=duration;
                table.rows[rIndex].cells[9].innerHTML=riskLevel;
                table.rows[rIndex].cells[10].innerHTML=comment;

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
            }
        }

//delete button

        function deleteButton(){
            if(!rowToInput()){
                table.deleteRow(rIndex);

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
  


       
      



