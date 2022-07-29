const { deterministicPartitionKey } = require("./dpk");

const event = {}

const event1 = {
    partitionKey: 1
}

const event2 = "1"

const a = deterministicPartitionKey(event2)

console.log(a.length);