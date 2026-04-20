class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       /*
       1. receiving nums = [1,2,3]
       2. Return true if repeated
       3. otherwise return false
       --------
       1. Set/Save our variable
       2. Create a loop
       3. Evaluate the requirements
       4. add our value to the set
    */
      let mySet = new Set();
      for(let i=0;i<nums.length;i++){
        if(mySet.has(nums[i])) return true
        mySet.add(nums[i]);
      }
      return false;
    }
}
