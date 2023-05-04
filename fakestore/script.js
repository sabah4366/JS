


  // var categoryList=new Set(products.map(p=> p.category))

  
  // let categories=``

  // for (let category of categoryList){
  //   categories+=`
  //   <button class="btn btn-info">${category}</button>
  //   `
  // }

  // nav.innerHTML=categories

fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>displayproducts(data))

function displayproducts(data){
  console.log(data);
 
  

  let htmldata=``
  for (let p of data){
    htmldata+=`
    <div class="col-3">
        <div class="card" style="width: 18rem;">
        <img src="${p.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">${p.description}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${p.category}</li>
          <li class="list-group-item">${p.price}</li>
          <li class="list-group-item">${p.rating.rate}</li>
          
        </ul>
            <div class="card-body">
          
            </div>
      </div>


</div>
`
  }

  result.innerHTML=htmldata
  

}
// this is a xmlhttprequest tyep but this we can simplify with fetch

// var request= new XMLHttpRequest()

// request.open('get','https://fakestoreapi.com/products')

// request.send()
// // if(request.readyState==4) for checking task completed
// // if(request.status>=200 && request.status<300) for status succes of status
// request.onreadystatechange=()=>{
//   if(request.readyState==4){
//     if(request.status>=200 && request.status<300){
//       let data=JSON.parse(request.responseText)
//       displayproducts(data)
//     }
//   }
// }


// uppercode we can simplify using js le fetch()  method 
