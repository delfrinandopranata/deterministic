const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns expected result when given empty object", () => {
    const event = {}
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns expected result when given int as event", () => {
    const event = 1
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa");
  });

  it("Returns expected result when given event with partitionKey", () => {
    const event = {
      partitionKey: 1
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("1");
  });
});
