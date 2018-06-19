function arrDiff(ar1,ar2)
{
  var arr=[];
ar1.forEach(function (val)
{
  if(ar2.indexOf(val)<0)
    arr.push(val);
});
ar2.forEach(function (val)
{
  if(ar1.indexOf(val)<0)
     arr.push(val)
});
arr.sort()
console.log(arr);
}
arrDiff([1,2,3],[9,5,7,1,2,3])