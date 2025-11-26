# b00da Exercise — My Solution

This repository contains my solution to the **b00da** coding exercise, implemented in both **Ruby** and **TypeScript**.

## The Challenge
The goal of this exercise is to write a program that finds a random string whose **SHA256 hash** contains the specific substring **"b00da"**.

## Solution Approach
Both implementations (Ruby and TypeScript) follow the same core algorithm:
1.  **Generate a Random String:** A cryptographically secure random 16-byte string is generated and then encoded into a hexadecimal format.
2.  **Hash and Check:** The SHA256 hash of the generated string is calculated.
3.  **Iterate:** The process is repeated in a loop until the resulting hash string includes the target substring **"b00da"**.
4.  **Output:** The program then prints the final generated string and its successful SHA256 hash.

---

## Requirements
To run the solutions, you need:
* **Ruby** (for `b00da.rb`)
* **Node.js + npm** (for `b00da.ts`)
    * The TypeScript version relies on `tsx` for direct execution.

---

## How to Run

### Ruby Version
This version uses the standard `Digest` and `Random` libraries built into Ruby.
1.  Make sure you have **Ruby** installed.
2.  Execute the script:
    ```bash
    ruby b00da.rb
    ```

### TypeScript Version
This version uses the `crypto` module built into Node.js. It requires `tsx` to run the TypeScript file directly without a pre-compilation step.
1.  Make sure you have **Node.js** and **npm** installed.
2.  Run the script using `npx tsx`:
    ```bash
    npx tsx b00da.ts
    ```
    *(Alternatively, you can install `tsx` globally with `npm install -g tsx`)*

---

## Example Output (Varies with each run)
```
Generated string is: 0b533418e7c1c23f40f04c637a7b973c and hash result is: 54b00da0d1645e548842c22262d14210f9942a22c159f8c679b380f274a44fa6
```
