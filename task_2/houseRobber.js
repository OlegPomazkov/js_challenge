function houseRobber(nums) {
  var nL = nums.length; 
        
  if (!nL) return 0;
  if ( nL === 1 ) return nums[0];
  if ( nL === 2 ) return (nums[0]>nums[1]) ? nums[0] : nums[1];
  var max = 0;

  for (var i = 0; i < nL; i++) {
    for (var j = i+2; j< nL; j++) {
      max = (max < (nums[i] + nums[j])) ? (nums[i] + nums[j]) : max;
    }
  }   

  return max;
}
