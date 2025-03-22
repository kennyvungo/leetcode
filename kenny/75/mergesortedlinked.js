/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let tail = dummy
    let current1 = list1;
    let current2 = list2;
    // while both lists have not been iterated through, if one list has already been completely iterated through, we are done
    while(current2 && current1){
        if(current1.val <= current2.val){
            tail.next = current1
            current1 = current1.next
        }
        else{
            tail.next = current2
            current2 = current2.next
        }
        tail = tail.next
    }
    // edge case for the last hanging value
    // example [1,2,4] and [1,3,4], we finish going through first list, but we need to point the last 4 to the other 4 in second list
    if(current1){
        head.next = current1
    }
    else{
        head.next = current2
    }
    // will always return our first val
    return dummy.next
};

// originally ran into error on line 22, checking only for one current val, if one of the current vals is null, that means we are done
// can also do this recursively

var mergeTwoListRecursive = function(list1,list2){
    // base case if one of the list has been exhausted
    if(!list1){
        return list2
    }
    if(!list2){
        return list1
    }
    
    if(list1.val <= list2.val){
        list1.next = mergeTwoListRecursive(list1.next,list2)
        return list1
    }
    else{
        list2.next = mergeTwoListRecursive(list1,list2.next)
        return list2
    }
}
