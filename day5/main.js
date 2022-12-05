/*
--- Day 5: Supply Stacks ---

The expedition can depart as soon as the final supplies have been unloaded from the ships. Supplies are stored in stacks of marked crates, but because the needed supplies are buried under many other crates, the crates need to be rearranged.

The ship has a giant cargo crane capable of moving crates between stacks. To ensure none of the crates get crushed or fall over, the crane operator will rearrange them in a series of carefully-planned steps. After the crates are rearranged, the desired crates will be at the top of each stack.

The Elves don't want to interrupt the crane operator during this delicate procedure, but they forgot to ask her which crate will end up where, and they want to be ready to unload them as soon as possible so they can embark.

They do, however, have a drawing of the starting stacks of crates and the rearrangement procedure (your puzzle input). For example:

    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
In this example, there are three stacks of crates. Stack 1 contains two crates: crate Z is on the bottom, and crate N is on top. Stack 2 contains three crates; from bottom to top, they are crates M, C, and D. Finally, stack 3 contains a single crate, P.

Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:

[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 
In the second step, three crates are moved from stack 1 to stack 3. Crates are moved one at a time, so the first crate to be moved (D) ends up below the second and third crates:

        [Z]
        [N]
    [C] [D]
    [M] [P]
 1   2   3
Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved one at a time, crate C ends up below crate M:

        [Z]
        [N]
[M]     [D]
[C]     [P]
 1   2   3
Finally, one crate is moved from stack 1 to stack 2:

        [Z]
        [N]
        [D]
[C] [M] [P]
 1   2   3
The Elves just need to know which crate will end up on top of each stack; in this example, the top crates are C in stack 1, M in stack 2, and Z in stack 3, so you should combine these together and give the Elves the message CMZ.

After the rearrangement procedure completes, what crate ends up on top of each stack?

--- Part Two ---

As you watch the crane operator expertly rearrange the crates, you notice the process isn't following your prediction.

Some mud was covering the writing on the side of the crane, and you quickly wipe it away. The crane isn't a CrateMover 9000 - it's a CrateMover 9001.

The CrateMover 9001 is notable for many new and exciting features: air conditioning, leather seats, an extra cup holder, and the ability to pick up and move multiple crates at once.

Again considering the example above, the crates begin in the same configuration:

    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 
Moving a single crate from stack 2 to stack 1 behaves the same as before:

[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 
However, the action of moving three crates from stack 1 to stack 3 means that those three moved crates stay in the same order, resulting in this new configuration:

        [D]
        [N]
    [C] [Z]
    [M] [P]
 1   2   3
Next, as both crates are moved from stack 2 to stack 1, they retain their order as well:

        [D]
        [N]
[C]     [Z]
[M]     [P]
 1   2   3
Finally, a single crate is still moved from stack 1 to stack 2, but now it's crate C that gets moved:

        [D]
        [N]
        [Z]
[M] [C] [P]
 1   2   3
In this example, the CrateMover 9001 has put the crates in a totally different order: MCD.

Before the rearrangement process finishes, update your simulation so that the Elves know where they should stand to be ready to unload the final supplies. After the rearrangement procedure completes, what crate ends up on top of each stack?

*/

const input = require('fs').readFileSync('day5/input.txt', 'utf8').split('\n');


let stack1 = [];
let stack2 = [];
let stack3 = [];
let stack4 = [];
let stack5 = [];
let stack6 = [];
let stack7 = [];
let stack8 = [];
let stack9 = [];

//get the first 1,2,3 characters of each first 8 lines and push them to the stack1, the 5,6,7 characters to stack2, etc.
for (let i = 0; i < 8; i++) {
    stack1.push(input[i].slice(0, 3));
    stack2.push(input[i].slice(4, 7));
    stack3.push(input[i].slice(8, 11));
    stack4.push(input[i].slice(12, 15));
    stack5.push(input[i].slice(16, 19));
    stack6.push(input[i].slice(20, 23));
    stack7.push(input[i].slice(24, 27));
    stack8.push(input[i].slice(28, 31));
    stack9.push(input[i].slice(32, 35));
}
const stacksArray = [stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9];

//remove all the empty items from the array
let stacksArrayFiltered = stacksArray.map((stack) => stack.filter((item) => item !== '   '));

// inverse the items in each stacks
stacksArrayFiltered = stacksArrayFiltered.map((stack) => stack.reverse());





// rearrange the stacks according to the instructions
const rearrangeStacks = (stacksArrayFiltered, instructions) => {
    instructions.forEach((instruction) => {
        // get the stack number and the number of crates to move
        let numberOfCrates = instruction.split(' ')[1];
        let fromStack = instruction.split(' ')[3];
        let toStack = instruction.split(' ')[5];
        // move the crates from one stack to another
        for (let i = 0; i < numberOfCrates; i++) {
            // if array is empty, do nothing
            if (stacksArrayFiltered[fromStack - 1].length === 0) {
                return;
            }
            stacksArrayFiltered[toStack - 1].push(stacksArrayFiltered[fromStack - 1].pop());
        }
    });
}


// get the instructions from the input, starting from the 11th line
const instructions = input.slice(10);

// console.log(instructions);
// console.log(stacksArrayFiltered[0].length);


rearrangeStacks(stacksArrayFiltered, instructions);
// console.log(stacksArrayFiltered);

// // get the top item of each stack
const topItems = stacksArrayFiltered.map((stack) => stack[stack.length - 1]);
console.log(topItems);


// --- PART 2 ---

// rearrange the stacks but keeping the same order of the crates
const rearrangeStacks2 = (stacksArrayFiltered, instructions) => {
    instructions.forEach((instruction) => {
        // get the stack number and the number of crates to move
        let numberOfCrates = instruction.split(' ')[1];
        let fromStack = instruction.split(' ')[3];
        let toStack = instruction.split(' ')[5];
        // get the crates to move
        let cratesToMove = stacksArrayFiltered[fromStack - 1].slice(stacksArrayFiltered[fromStack - 1].length - numberOfCrates);
        // remove the crates from the stack
        stacksArrayFiltered[fromStack - 1].splice(stacksArrayFiltered[fromStack - 1].length - numberOfCrates, numberOfCrates);
        // add the crates to the stack
        stacksArrayFiltered[toStack - 1] = stacksArrayFiltered[toStack - 1].concat(cratesToMove);

    });
}

// reset the stacks
stacksArrayFiltered = stacksArray.map((stack) => stack.filter((item) => item !== '   '));
stacksArrayFiltered = stacksArrayFiltered.map((stack) => stack.reverse());

rearrangeStacks2(stacksArrayFiltered, instructions);

// get the top item of each stack in one word
const topItems2 = stacksArrayFiltered.map((stack) => stack[stack.length - 1]);
// remove [ and ] from the string
const topItems2String = topItems2.join('').replace(/[\[\]]/g, '');
console.log(topItems2String);