class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /**
         * 1. Return true if a value appears more than once.
         * 2. false if so/opposite.
         * 3. Approach -> use a set <a new set avoid repeated values>
         */
        nums.sort((a,b)=> a-b);
        for(let i=1; i<nums.length; i++){
            if(nums[i]=== nums[i-1]){
                return true
            }
        }
        return false;

    }
}
