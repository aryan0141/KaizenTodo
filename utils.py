def find_max(arr):
    max = arr[0]
    for i in arr:
        if i > max:
            max = i
    return max


class ComplexNumbers:
    def __init__(self, xr, xi, yr, yi):
        self.xreal = xr
        self.yreal = yr
        self.ximg = xi
        self.yimg = yi

    def showcalc(self, a, b):
        if b < 0:
            return f'{a} {b}i'
        else:
            return f'{a} + {b}i'

    def add(self):
        a = self.xreal + self.yreal
        b = self.ximg + self.yimg
        return self.showcalc(a, b)

    def subtract(self):
        a = self.xreal - self.yreal
        b = self.ximg - self.yimg
        return self.showcalc(a, b)

    def multiply(self):
        a = self.xreal*self.yreal - self.ximg*self.yimg
        b = self.xreal*self.yimg + self.ximg*self.yreal
        return self.showcalc(a, b)


complex = ComplexNumbers(1, 5, -4, -3)
print(complex.add())
print(complex.subtract())
print(complex.multiply())