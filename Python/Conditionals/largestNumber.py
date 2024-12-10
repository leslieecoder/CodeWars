# Write a program that takes three numbers and prints the largest number.


num1 = int(input("enter first number: "))
num2 = int(input("enter second number: "))
num3 = int(input("enter third number: "))

if num1 >= num2 and num1 >= num3:
    print("The largest number is", num1)

elif num2 >= num3 and num2 >= num1:
    print("The largest number is ", num2)

else:
    print("The largest number is", num3)