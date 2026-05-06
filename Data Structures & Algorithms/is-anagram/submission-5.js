class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /*
        * if s and t != then return false
        */
        if(s.lenght !== t.lenght){
            return false;
        }

        let sSort = s.split('').sort().join();
        let tSort = t.split('').sort().join();

        return sSort === tSort;
    }
}
