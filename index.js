const form=document.getElementById("form");
numberInput=document.getElementById("numbers")
const calculateBtn=document.getElementById("calculate-btn");

 
// For mode
const getMode=(numbers)=>{
const counts={};
let maxCount=0;
let mode=[]
// let mostFreq=null
numbers.forEach((num)=>{
counts[num]=(counts[num] || 0)+1
if(counts[num]>maxCount){
  maxCount=counts[num]
  // mostFreq=num
}
})
for(let num in counts){
  if(counts[num]===maxCount){
  mode.push(Number(num))
  console.log(mode)}
}
// return mostFreq
return mode
}

// For mean
const getMean = (numbers) => numbers.reduce((acc, el) => acc + el,0) / numbers.length;

const getMedian = (numbers) => {
  const sorted = [...numbers].sort((a, b) => a - b);
  const midIndex=Math.floor(sorted.length/2)
  const median =sorted.length % 2 === 0? getMean([sorted[midIndex-1], sorted[midIndex]]): sorted[midIndex];
  return median;
}

const getRange=(numbers)=>{
const min=Math.min(...numbers)
const max=Math.max(...numbers)
return max-min;
}

const getVariance=(numbers)=>{
 const average=getMean(numbers);
 const variance=numbers.reduce((acc,el)=>{
const deviation=el-average;
const square=deviation**2
return acc+square
 },0)/numbers.length
 return variance
}

const getStandardDeviation=(numbers)=>{
const standard=Math.sqrt(getVariance(numbers))
return standard
}


const calculate=(e)=>{
e.preventDefault()
const numberInputValue=numberInput.value;
const array=numberInputValue.split(/,\s?/g);
const numbers=array.map((el)=>Number(el)).filter((el)=>!isNaN(el))
const mean=getMean(numbers)
const mode=getMode(numbers)
const median=getMedian(numbers)
const range=getRange(numbers)
const variance=getVariance(numbers)
const standardDeveviation=getStandardDeviation(numbers)

if(numberInput.value===""){
  document.querySelectorAll(".result-span")[0].textContent=""
document.querySelectorAll(".result-span")[1].textContent=""
document.querySelectorAll(".result-span")[2].textContent=""
document.querySelectorAll(".result-span")[3].textContent=""
document.querySelectorAll(".result-span")[4].textContent=""
document.querySelectorAll(".result-span")[5].textContent=""
}
else{
  document.querySelectorAll(".result-span")[0].textContent=mean
document.querySelectorAll(".result-span")[1].textContent=mode.join(",")
document.querySelectorAll(".result-span")[2].textContent=median
document.querySelectorAll(".result-span")[3].textContent=range
document.querySelectorAll(".result-span")[4].textContent=variance
document.querySelectorAll(".result-span")[5].textContent=standardDeveviation
}
}

calculateBtn.addEventListener("click",calculate);