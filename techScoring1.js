
const getLastVal = (theArr) => {
  return theArr[theArr.length - 1];
}

const getFirstVal = (theArr) => {
  return theArr[0];
}


const sortArr = (arrToSort) => {
  const sortedArr = [];
  for(let i = 0; i< arrToSort.length; i++){
    if(sortedArr.length === 0){
      sortedArr.push(arrToSort[i]);
    }else{
      //check if last value of sorted arr is smallser than arrToSort[i]
      if(arrToSort[i] > getLastVal(sortedArr)){
        sortedArr.push(arrToSort[i]);
      }else{
        //iterate down of sorted arr
        for(let j = sortedArr.length - 2; j>= 0; j--){
          if(sortedArr[j] < arrToSort[i]){ // if current val of sorted arr is 

          }
        }
      }

    }

  }
}

const countUniqValue = (valArr) => {
  const uniqVal = [];

  for (let i = 0; i < valArr.length; i++) {
    if (uniqVal.length === 0) {
      uniqVal.push(valArr[i]);
    }
    if(uniqVal.length !== 0 && (getLastVal(uniqVal) !== valArr[i])){
      uniqVal.push(valArr[i]);
    }

  }
  return uniqVal.length
};

console.log(countUniqValue([1, 1, 1, 2, 3, 4, 5, 5, 7, 7, 7]));

