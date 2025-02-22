use chrono::prelude::{Utc,Local};
use dotenv::dotenv;
use std::env;

fn main() {
    let utc = Utc::now(); 
    let local = Local::now(); 
    println!("{}",local);
    println!("{}",utc);
    dotenv().ok();
    let var = env::var("REDIS_ADDRESS").unwrap();
    println!("{}", var);
}
