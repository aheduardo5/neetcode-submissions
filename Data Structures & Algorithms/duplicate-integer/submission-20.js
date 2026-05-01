class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();

        for (const num of nums) {
            // La búsqueda en un Set es O(1) - tiempo constante
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}
