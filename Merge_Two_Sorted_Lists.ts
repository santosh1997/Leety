/*
https://leetcode.com/problems/merge-two-sorted-lists/
*/

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1) return list2;
    if(!list2) return list1;

    const head = list1.val < list2.val ? list1 : list2;
    let current1 = list1 === head ? list1.next : list1;
    let current2 = list2 === head ? list2.next : list2;
    let current = head;

    while(current1 || current2) {
        if(current1 && (!current2 || current1.val < current2.val)){
            current.next = current1;
            current1 = current1.next;
        } else {
            current.next = current2;
            current2 = current2.next;
        }
        current = current.next;
    }
    return head;
};
