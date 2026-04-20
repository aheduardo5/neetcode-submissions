class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /*
            1.if s and t are differents return false
            s:[B,U,F,F,A,L,O] t:[B,A,N,A,N,A] => length 
            return it's value
            s:7 and t:6 = false
            2.create a hash map to walk through it
                apply lower case
                walk throught s and + 1 for every letter
                listen
                [l:1,i:1,s:1,t:1,e:1,n:1]
            3.Double checking do a loop in t
                silent
                [s:1,i:1,l:1,e:1,n:1,t:1]
                If letter is < 0 = false

              [l:1,i:1,s:1,t:1,e:1,n:1]
              [s:1,i:1,l:1,e:1,n:1,t:1]
            4. If the loop cycle finish it without issues it pass = true
         */
        s = s.toLowerCase();
        t = t.toLowerCase();
        const myHash = {}
        if(s.length !== t.length){
            return false;
        }
        for(let char of s){
            myHash[char] = (myHash[char]|| 0)+ 1;
        }
        for(let char of t){
            if(!myHash[char]){
                return false
            }
            myHash[char]--;
        }
        return true;
    }
}
