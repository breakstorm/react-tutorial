export function getFinalState(baseState, queue) {
    let finalState = baseState;

    // TODO: do something with the queue...
    queue.forEach((item) => {
        if (typeof item === 'function') {
            finalState = item(finalState);
        } else {
            finalState = item;
        }
    })
    return finalState;
}
