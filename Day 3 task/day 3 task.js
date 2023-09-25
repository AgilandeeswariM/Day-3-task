//  Question 1
//How to compare two JSON have the same properties without order:
//let obj1 = {name:"person1", age:5}
//let obj2 = {age:5 , name:"person1"}

let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

var a =true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            a=false;
            break;
        }
    }
}
else {
    a=false;
}
console.log(a);

//Output:
//true



//Question 2
//Use the rest countries API URL and display all the country flag in console:

//Step 1 : Create a XHR object
var request = new XMLHttpRequest();
//Step 2: Specify the API
request.open("GET","https://restcountries.com/v3.1/all");
//Step 3: Sending the request
request.send();
//4th step : Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags);   

}
}


//Question 3
//Use rest countries API URL and print all countries names,regions,subregion and populations:

//Step 1: Create a XHR objects
var request = new XMLHttpRequest();
//Step 2: Specify the API
request.open("GET", "https://restcountries.com/v3.1/all");
//Step 3: Sending the request
request.send();
//Step 4: Once the requested data is there in server once data is successfully loaded,
//Server response will be of 200 status code.
//Functions: they are used to perform specific task.
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population);    

}
}