/*

const navEffect = document.getElementById("nav-effect-link");
  
for(const link of navEffect.getElementsByTagName("a")){
  link.onmousemove = e =>{
    const rect = link.getBoundingClientRect(), img = link.querySelector("img");
    
    img.style.left = `${e.clientX - rect.left}px`;
    img.style.toop = `${e.clientY - rect.top}px`;
  }
}

window.onmousemove = e =>{
 const percent = e.clientY / window.innerHeight, y = percent * navEffect.offsetHeight * -1;
 
navEffect.animate({
  transform: `translateY(${y}px)`
}, {
  fill: "forwards",
  duration: 4000
})
}

*/

//------------- Filter array in Javascript ------------------//

const employees = [
  {id: 15, empName: 'john', dept: 'Support'},
  {id: 10, empName: 'Max', dept: 'IT'},
  {id: 15, empName: 'Bella', dept: 'Support'},
  {id: 15, empName: 'Amelia', dept: 'IT'},
];

let onlyITEmployees = employees.filter(e => e.dept == 'IT');

for(let emp of onlyITEmployees){
  console.log(emp.empName);
}