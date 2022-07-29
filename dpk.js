const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  let candidate;

  if (event) {
    candidate = event.partitionKey ? event.partitionKey : crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");;
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  
  return candidate;
};