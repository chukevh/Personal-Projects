class TestCalcAdd(unittest.TestCase):
    def test_add_pos_num(self):
        result = calc.add(2, 3)
        self.assertEqual(result, 5)

    def test_add_neg_num(self):
        result = calc.add(-2, -3)
        self.assertEqual(result, -5)

    def test_add_mixed_num(self):
        result = calc.add(2, -3)
        self.assertEqual(result, -1)

    def test_add_zero(self):
        result = calc.add(0, 0)
        self.assertEqual(result, 0)