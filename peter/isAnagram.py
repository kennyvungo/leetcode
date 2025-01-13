class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        
        if (len(s) != len(t)):
            return False
        
        myDict1 = {}
        myDict2 = {}

        for letterS in s:
            if letterS in myDict1:
                myDict1[letterS] += 1
            else:
                myDict1[letterS] = 1
        
        for letterT in t:
            if letterT in myDict2:
                myDict2[letterT] += 1
            else:
                myDict2[letterT] = 1
        
        print(myDict1)
        print(myDict2)
        if myDict1 == myDict2:
            return True
        else:
            return False