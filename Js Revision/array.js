//Spread operator will combine 2 arrays and give one new array
let fruit=['mangoe','apple','peace','banana']
let juice = ['mangoe juice','apple juice','peace juice']
let mix = [...fruit,...juice]
console.log(mix);

//Make a nested array to single array by flat method

let arr= [1,2,3,[2,4,5,[6,8,10]]]
let single = arr.flat(Infinity)
console.log(single)
console.log(arr.flat(Infinity));