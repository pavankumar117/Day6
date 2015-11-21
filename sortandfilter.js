//Creating an array
var arr = [{
'Id' : '72',
'Name' : 'Pavan',
'City' : 'Vijayawada',
'Age' : '22'
},
{
'Id' : '91',
'Name' : 'Kasaiah',
'City' : 'Ongole',
'Age' : '25'
},
{
'Id' : '32',
'Name' : 'Akhil',
'City' : 'Thuli',
'Age' : '21'
},
{
  'Id' : '53',
  'Name' : 'Viswakanth',
  'City' : 'Vijayawada',
  'Age' : '25'
},
{
  'Id' : '1',
  'Name' : 'Raja',
  'City' : 'Hyderabad',
  'Age' : '27'
},
{
  'Id' : '67',
  'Name' : 'Sriram',
  'City' : 'Chennai',
  'Age' : '28'
}
];
// End of creation of array

//Creating of another Empty array which will be use full in storing data from temp variable in filter function
var keys = Object.keys(arr[0]); //Object.keys will bring the data of key node values|| head values
var length=keys.length;

// function for printing tables.
function printtables(a){
var fresh = document.getElementById('mytable').innerHTML='';  // this varable will refresh the tables on every call of function so that that will be creating another variable
var dvv = document.getElementById('mytable');
//document.getElementById('table12').innerHTML='';
var tab = document.createElement('table');
//console.log(tab);
tab.setAttribute('border','1');
tab.setAttribute('id' , 'table12');//table
var row = document.createElement('tr');//tr
for( var k=0; k<length;k++){
var head = document.createElement('th');//th
head.setAttribute('class','head');
var headText = document.createTextNode(keys[k]);//printing the Keys values
head.setAttribute('onclick','fn3('  + k +')');//calling a function with parameters for two clicks
//head.setAttribute('id','sort'+i);//
head.appendChild(headText);
row.appendChild(head);
tab.appendChild(row);
}
for(var i = 0; i <a.length; i++) {
  var row1 = document.createElement('tr');
  for(var j=0; j<length; j++) {
    var col = document.createElement('td');
    var colText = document.createTextNode(a[i][keys[j]]);
    col.setAttribute('id','col');
    col.setAttribute('align','center');
    col.appendChild(colText);
    row1.appendChild(col);
  }
  tab.appendChild(row1);
  }
dvv.appendChild(tab);
// End of creation of table
}

//Function for sorting the Elements.

//Function for sorting of elements in Asscending order

function mysort(c){
  for(var i=0; i<arr.length;i++){
    for(var j=i+1; j<arr.length;j++){
      if(arr[i][keys[c]]>arr[j][keys[c]]){
        console.log('this is mysort function');
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
}
printtables(arr);
}
// End of function for sorting elements in Asscending order

// Function for sorting Elements in Descending order

function mysortd(c){
  console.log('This is mysortd function');
for(var i=0; i<arr.length;i++){
for(var j=i+1; j<arr.length;j++){
if(arr[i][keys[c]]<arr[j][keys[c]]){
var temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
printtables(arr);
}

//End of Function for sorting elements in Descending order

//function for filtering.

function myfilter() {
  var arr1=[];
  var x = (document.getElementById('search').value);
  for(var i=0; i<arr.length; i++) {
    for(var j=0; j<length; j++){
      if(arr[i][keys[j]].toLowerCase().indexOf(x.toLowerCase()) !== -1) {
          if(arr1.indexOf(arr[i]) === -1) {
                   arr1.push(arr[i]);
          }
        }
          //arr1.push(temp);


    //  if(temp.indexof(arr[i])!==-1){
      //   arr1.push(temp);
  //   }
    //  else {
      //    console.log('nothing found');
        //  }

    }
  }

  printtables(arr1);
    console.log('hello');
}

//End Function of filter function

//Function for clicks
var fn3 = (function(p)
{
  var first = true;
  return function(p)
    {
      first ? mysort(p) : mysortd(p);
      first = !first;
    }
})();
