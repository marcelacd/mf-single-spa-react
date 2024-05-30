import Pubsub from "pubsub-js"

export const publishlib = (event, task) => {
    Pubsub.publish(event, task)
}

export const subscribelib = (event, colback) => {
    Pubsub.subscribe(event, colback)
}

// export function publicApiFunction() { }

// export function add(a, b) {
//     return a + b;
// }

// export function subtract(a, b) {
//     return a - b;
// }