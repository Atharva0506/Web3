fn main() {
    let str1 = "One Piece Luffy";  
    let str2 = "One Piece Man";    

    // `longest_str` returns a reference to one of the input strings.
    // Both `str1` and `str2` are string literals with a `'static` lifetime,
    // meaning they live for the entire duration of the program.
    let ans = longest_str(&str1, &str2);

    println!("{}", ans);
}

// The lifetime parameter `'a` ensures that the returned reference
// lives at least as long as the shortest-lived input reference.
fn longest_str<'a>(a: &'a str, b: &'a str) -> &'a str {
    // The function does not create new data; it only returns an existing reference.
    // This ensures that Rust enforces valid lifetimes to prevent dangling references.
    if a.len() > b.len() {
        a  // Return `a` if it's longer, keeping the same lifetime `'a`
    } else {
        b  // Otherwise, return `b` with the same lifetime `'a`
    }
}
