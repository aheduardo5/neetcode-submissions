class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /**
         * 1. Receiving num = [1,2,3]
         * 2.return tru if repeated
         * 3. otherwise return false
         * --------
         * 1. Set which will save
         * 2. create a loop
         * 3. Evaluate the requirements
         * 4.add our valoue to our set.
         */
        const mySet = new Set();
        for(let i=0;i<nums.length;i++){
            /**
             * Set has a method that return a boolean = has
             */
            if(mySet.has(nums[i])){
                return true;
            }
            mySet.add(nums[i])
        }
        return false;
    }
}
