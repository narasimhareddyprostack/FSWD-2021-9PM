""" numbers = [1, 2, 3, 4]
sumeven = 0
sumodd = 0

for num in range(len(numbers)):
    if numbers[num] % 2 == 0:
        sumeven += numbers[num]
    else:
        sumodd += numbers[num]

print(sumeven - sumodd)

print(sumeven)
print(sumodd)
 """

numbers = [1, 2, 3, 4]


def findOddeven(array):


sumeven = 0
sumodd = 0
   for num in range(len(numbers)):
        if numbers[num] % 2 == 0:
            sumeven += numbers[num]
        else:
            sumodd += numbers[num]

    return sumeven - sumodd


print(findOddeven(numbers))
