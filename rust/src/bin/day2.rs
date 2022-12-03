fn main() {
    let input = include_str!("./input.txt");
    let mut total: u32 = 0;

    // Iterate through every 3 lines with access to all three lines
    for line_group in input.lines().collect::<Vec<&str>>().chunks(3) {
        // Find the letter that appears in all 3 lines
        let mut common_letters = line_group[0].chars().collect::<Vec<char>>();
        for line in line_group {
            common_letters = common_letters
                .iter()
                .filter(|&c| line.contains(*c))
                .map(|&c| c)
                .collect();
        }

        // if there is no common letter, skip this line line_group
        if common_letters.len() == 0 {
            continue;
        }

        // If there is a common letter, add it to the Total
        let letter = common_letters[0];
        if letter.is_lowercase() {
            let number = letter as u8 - 96;
            total += u32::from(number);
        } else {
            let number = letter as u8 - 38;
            total += u32::from(number);
        }
    }
    println!("Total: {}", total);
}
