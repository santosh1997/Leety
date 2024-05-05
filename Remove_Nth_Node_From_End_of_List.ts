/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
*/

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head.next) return null;
    let current = head;
    const buff = [];
    const buffSize = n + 1;
    let size = 0;

    while(current){
        buff.push(current);
        if(buff.length > buffSize){
            buff.shift();
        }
        current = current.next;
        size++;
    }

    if(size === n) return head.next;

    const prev = buff.shift();
    buff.shift()

    if(prev) {
        const newNext = buff.shift();
        prev.next = newNext ? newNext : null;
    }

    return head;
};
