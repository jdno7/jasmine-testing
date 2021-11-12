
it('should calculate the monthly rate correctly', function () {
  expect (calculateMonthlyPayment({amount:'10000', rate: '10', years:'12' })).toEqual('119.51');
});


it("should return a result with 2 decimal places", function() {
  expect (checkForTwoDec(monthlyPayment)).toBe('true');
});



function checkForTwoDec(str){
for (let i = 0; i < str.length; i++){
  if (str[i] === '.'){
  const places = ((str.length -1)- [i]);
    if(places === 2){
      return true;
    }
    else{
      return false;
    }
 } }}