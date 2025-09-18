# Coding Assessment 

## 1️⃣ Question

Write a program that takes a number as input and prints whether it is even or odd.

**Answer (Python):**

```python
num = int(input("Enter a number: "))
if num % 2 == 0:
    print("The number is even")
else:
    print("The number is odd")
```

---

## 2️⃣ Question

Write a program that checks if a given number is prime or not.

**Answer (Python):**

```python
num = int(input("Enter a number: "))
if num > 1:
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            print("The number is not prime")
            break
    else:
        print("The number is prime")
else:
    print("The number is not prime")
```

---

## 3️⃣ Question

Write a program that takes an array of numbers and returns the maximum number in the array.

**Answer (Python):**

```python
arr = [int(x) for x in input("Enter numbers separated by space: ").split()]
max_num = arr[0]
for num in arr:
    if num > max_num:
        max_num = num
print("The maximum number is:", max_num)
```
