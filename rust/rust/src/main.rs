fn main() {
    str();
    bool();
    vect();
}

// Vectors
fn vect() {
    let mut xs = vec![1, 2, 3];
    
    println!("{}", xs.len());
    println!("{:?}", xs);
    xs.push(4);
    
    print!("{}", xs.len());
}
// bool
fn bool() {
    let is_male: bool = true;
    let is_above_18: bool = true;
    
    if is_male {
        println!("You are a male");

    } else {
        println!("You are not a male");
    }

    if is_male && is_above_18 {
        print!("You are a legal male");
    }
}
//string
fn str() {
    let greeting = String::from("hello world");
    println!("{}", greeting);

    // make mutable variable

    let mut greet = String::from("Hiiii");
    greet.push_str(" luffy");
    println!("{}", greet);
}