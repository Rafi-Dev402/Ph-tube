
//1. fetch , load and show catagories

const loadData = ()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(response=> response.json())
        .then(data=> displayData(data.categories
        ))
        .catch(error => console.log(error))
}

const displayData =(catagories)=>{
    const catagorieNav = document.getElementById('catagories');
   catagories.forEach((item)=>{
    // console.log(item.category)
    const button = document.createElement('button');
    button.classList = "btn bg-gray-300"
    button.innerText = item.category;
    catagorieNav.appendChild(button)

   })
}
loadData()