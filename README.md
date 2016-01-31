# toml-config
Loads and decodes TOML files into Rust structures

[![Crates.io](https://img.shields.io/crates/v/toml-config.svg)](https://crates.io/crates/toml-config)

[Documentation](https://bfil.github.io/toml-config)

## Examples
```rust
extern crate rustc_serialize;
extern crate toml_config;

use rustc_serialize::{Encodable, Decodable};
use std::path::Path;
use toml_config::ConfigFactory;

#[derive(RustcEncodable, RustcDecodable)]
struct Config  {
    nested: NestedConfig
}

// Defaults will be used for missing/invalid configurations in the TOML config file
impl Default for Config {
    fn default() -> Config {
        Config {
            nested: NestedConfig::default()
        }
    }
}

#[derive(RustcEncodable, RustcDecodable)]
struct NestedConfig  {
    value: String,
    values: Vec<u16>
}

impl Default for NestedConfig {
    fn default() -> NestedConfig {
        NestedConfig {
            value: "default".to_owned(),
            values: vec![0, 0, 0]
        }
    }
}

/* config.toml:
[nested]
value = "test"
values = [1, 2, 3]
*/

let config: Config = ConfigFactory::load(Path::new("config.toml"));
assert_eq!(config.nested.value, "test");
assert_eq!(config.nested.values, vec![1, 2, 3]);
```
