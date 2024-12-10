def main():
    import sys
    input = sys.stdin.read
    lines = input().splitlines()

    test_cases = int(lines[0])
    
    def calculate_sum_of_squares(values):
        if not values:
            return 0
        first, *rest = values
        return (first ** 2 if first >= 0 else 0) + calculate_sum_of_squares(rest)
    
    results = []
    for case in range(test_cases):
        count = int(lines[2 * case + 1])
        elements = list(map(int, lines[2 * case + 2].split()))[:count]
        results.append(str(calculate_sum_of_squares(elements)))
    
    sys.stdout.write("\n".join(results) + "\n")

if __name__ == "__main__":
    main()
