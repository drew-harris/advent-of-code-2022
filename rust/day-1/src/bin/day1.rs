fn main() {
    let input = include_str!("./input.txt");

    let lines = input.split("\n\n");

    let mut elf_totals: Vec<u32> = lines
        .map(|line| {
            line.split("\n")
                .flat_map(|num| num.parse::<u32>())
                .sum::<u32>()
        })
        .collect();

    elf_totals.sort_by(|a, b| b.cmp(a));

    // Print the top three
    for i in 0..3 {
        println!("{}", elf_totals[i]);
    }

    // Print the sum of the top three
    println!("SUM: {}", elf_totals[0] + elf_totals[1] + elf_totals[2]);

    println!(
        "Even better way {:?}",
        elf_totals.iter().take(3).sum::<u32>()
    )
}
