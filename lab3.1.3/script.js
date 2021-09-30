let s=1000;
let years=2;

for(let i=0;i<years;i++){
    s+=(s*0.2);
}

let cash = s-(s*0.05);
console.log(cash);
