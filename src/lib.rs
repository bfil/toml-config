#![cfg_attr(feature = "serde-serialization", feature(custom_derive, plugin))]
#![cfg_attr(feature = "serde-serialization", plugin(serde_macros))]

//! # Configuring your dependency
//! `toml-config` can be configured to use `rustc_serialize` or `serde`
//!
//! ### Using `toml-config` with `rustc_serialize`
//! By default `toml-config` uses `rustc_serialize`, so just add the dependency in Cargo.toml normally:
//!
//! ```toml
//! [dependencies]
//! toml-config = "0.2"
//! ```
//! ### Using `toml-config` with `serde`
//! To use toml-config with `serde`, opt out from the default features and enable the `serde-serialization`
//! feature:
//!
//! ```toml
//! [dependencies.toml-config]
//! version = "0.2"
//! default-features = false
//! features = ["serde-serialization"]
//! ```

#[cfg(feature = "rustc-serialize")] extern crate rustc_serialize;
#[cfg(feature = "serde-serialization")] extern crate serde;

#[macro_use] extern crate log;

extern crate toml;

#[cfg(feature = "rustc-serialize")] use rustc_serialize::{Encodable, Decodable};
#[cfg(feature = "serde-serialization")] use serde::{Serialize, Deserialize};


use std::io::Read;
use std::fs::File;
use std::path::Path;

/// Implements helper functions for loading TOML files into a structure
///
/// # Examples
/// To load a file into a Config struct, use `ConfigFactory`.
///
/// Either `rustc_serialize` or `serde` can be used for serialization.
///
/// ### Example using rustc_serialize
/// ```no_run
/// # #[cfg(feature = "rustc-serialize")]
/// extern crate rustc_serialize;
/// extern crate toml_config;
///
/// # #[cfg(feature = "rustc-serialize")]
/// # fn main() {
/// use rustc_serialize::{Encodable, Decodable};
/// use std::path::Path;
/// use toml_config::ConfigFactory;
///
/// #[derive(RustcEncodable, RustcDecodable)]
/// struct Config  {
///     nested: NestedConfig
/// }
///
/// // Defaults will be used for missing/invalid configurations in the TOML config file
/// impl Default for Config {
///     fn default() -> Config {
///         Config {
///             nested: NestedConfig::default()
///         }
///     }
/// }
///
/// #[derive(RustcEncodable, RustcDecodable)]
/// struct NestedConfig  {
///     value: String,
///     values: Vec<u16>
/// }
///
/// impl Default for NestedConfig {
///     fn default() -> NestedConfig {
///         NestedConfig {
///             value: "default".to_owned(),
///             values: vec![0, 0, 0]
///         }
///     }
/// }
///
/// /* config.toml:
///  * [nested]
///  * value = "test"
///  * values = [1, 2, 3]
///  */
///
/// let config: Config = ConfigFactory::load(Path::new("config.toml"));
/// assert_eq!(config.nested.value, "test");
/// assert_eq!(config.nested.values, vec![1, 2, 3]);
/// # }
/// # #[cfg(feature = "serde-serialization")] fn main() { }
/// ```
/// ## Example using serde
/// ```no_run
/// # #![cfg_attr(feature = "serde-serialization", feature(custom_derive, plugin))]
/// # #![cfg_attr(feature = "serde-serialization", plugin(serde_macros))]
/// # #[cfg(feature = "serde-serialization")]
/// extern crate serde;
/// extern crate toml_config;
///
/// # #[cfg(feature = "serde-serialization")]
/// # fn main() {
/// use serde::{Serialize, Deserialize};
/// use std::path::Path;
/// use toml_config::ConfigFactory;
///
/// #[derive(Serialize, Deserialize)]
/// struct Config  {
///     nested: NestedConfig
/// }
///
/// // Defaults will be used for missing/invalid configurations in the TOML config file
/// impl Default for Config {
///     fn default() -> Config {
///         Config {
///             nested: NestedConfig::default()
///         }
///     }
/// }
///
/// #[derive(Serialize, Deserialize)]
/// struct NestedConfig  {
///     value: String,
///     values: Vec<u16>
/// }
///
/// impl Default for NestedConfig {
///     fn default() -> NestedConfig {
///         NestedConfig {
///             value: "default".to_owned(),
///             values: vec![0, 0, 0]
///         }
///     }
/// }
///
/// /* config.toml:
///  * [nested]
///  * value = "test"
///  * values = [1, 2, 3]
///  */
///
/// let config: Config = ConfigFactory::load(Path::new("config.toml"));
/// assert_eq!(config.nested.value, "test");
/// assert_eq!(config.nested.values, vec![1, 2, 3]);
/// # }
/// # #[cfg(feature = "rustc-serialize")] fn main() { }
/// ```
pub struct ConfigFactory;

impl ConfigFactory {
    /// Loads a TOML file and decodes it into a target structure, using default values
    /// for missing or invalid file configurations
    #[cfg(feature = "rustc-serialize")]
    pub fn load<T>(path: &Path) -> T where T: Encodable + Decodable + Default {
        match ConfigFactory::parse_toml_file(path) {
            Some(toml_table) => {
                let default_table = toml::encode(&T::default()).as_table().unwrap().clone();
                let table_with_overrides = ConfigFactory::apply_overrides(default_table, toml_table);
                toml::decode(toml::Value::Table(table_with_overrides)).unwrap()
            },
            None => T::default()
        }
    }

    /// Loads a TOML file and decodes it into a target structure, using default values
    /// for missing or invalid file configurations
    #[cfg(feature = "serde-serialization")]
    pub fn load<T>(path: &Path) -> T where T: Serialize + Deserialize + Default {
        match ConfigFactory::parse_toml_file(path) {
            Some(toml_table) => {
                let default_table = toml::encode(&T::default()).as_table().unwrap().clone();
                let table_with_overrides = ConfigFactory::apply_overrides(default_table, toml_table);
                toml::decode(toml::Value::Table(table_with_overrides)).unwrap()
            },
            None => T::default()
        }
    }

    fn parse_toml_file(path: &Path) -> Option<toml::Table> {
        let mut toml_config = String::new();

        let mut file = match File::open(path) {
            Ok(file) => file,
            Err(_)  => {

                warn!("Config file not found: {}, using defaults..", path.display());
                return None;
            }
        };

        file.read_to_string(&mut toml_config)
            .unwrap_or_else(|err| panic!("Unable to read config file: {}", err));

        let mut parser = toml::Parser::new(&toml_config);
        let toml_table = parser.parse();

        if toml_table.is_none() {
            for err in &parser.errors {
                let (line, col) = parser.to_linecol(err.lo);
                error!("Parsing of {} failed [{}:{}] - {}", path.display(), line + 1, col + 1, err.desc);
            }
            error!("Unable to parse config file: {}, using defaults..", path.display());
            return None;
        }

        toml_table
    }

    fn apply_overrides(defaults: toml::Table, overrides: toml::Table) -> toml::Table {
        let mut merged = defaults.clone();
        for (k, v) in overrides.into_iter() {
            match defaults.get(&k) {
                Some(default_value) =>
                    if v.type_str() == default_value.type_str() {
                        match v {
                            toml::Value::Table(overrides_table) => {
                                let defaults_table = default_value.as_table().unwrap().clone();
                                let merged_table = ConfigFactory::apply_overrides(defaults_table, overrides_table);
                                merged.insert(k, toml::Value::Table(merged_table))
                            },
                            any => merged.insert(k, any)
                        };
                    } else {
                        warn!("Wrong type for config: {}. Expected: {}, found: {}, using default value..",
                            k, default_value.type_str(), v.type_str());
                    },
                None => {
                    merged.insert(k, v);
                }
            }
        }
        merged
    }
}

#[cfg(test)]
mod tests {
    use super::ConfigFactory;

    extern crate tempfile;
    use std::io::Write;

    macro_rules! tempfile {
        ($content:expr) => {
            {
                let mut f = tempfile::NamedTempFile::new().unwrap();
                f.write_all($content.as_bytes()).unwrap();
                f.flush().unwrap();
                f
            }
        }
    }

    #[cfg_attr(feature = "rustc-serialize", derive(RustcEncodable, RustcDecodable))]
    #[cfg_attr(feature = "serde-serialization", derive(Serialize, Deserialize))]
    pub struct Config  {
        pub nested: NestedConfig,
        pub optional: Option<String>
    }

    impl Default for Config {
        fn default() -> Config {
            Config {
                nested: NestedConfig::default(),
                optional: None
            }
        }
    }

    #[cfg_attr(feature = "rustc-serialize", derive(RustcEncodable, RustcDecodable))]
    #[cfg_attr(feature = "serde-serialization", derive(Serialize, Deserialize))]
    pub struct NestedConfig  {
        pub value: String,
        pub values: Vec<u16>
    }

    impl Default for NestedConfig {
        fn default() -> NestedConfig {
            NestedConfig {
                value: "default".to_owned(),
                values: vec![0, 0, 0]
            }
        }
    }

    #[test]
    fn it_should_parse_and_decode_a_valid_toml_file() {
        let toml_file = tempfile!(r#"
            optional = "override"
            [nested]
            value = "test"
            values = [1, 2, 3]
        "#);
        let config: Config = ConfigFactory::load(toml_file.path());
        assert_eq!(config.nested.value, "test");
        assert_eq!(config.nested.values, vec![1, 2, 3]);
        assert_eq!(config.optional, Some("override".to_owned()));
    }

    #[test]
    fn it_should_use_the_default_for_missing_config() {
        let toml_file = tempfile!("");
        let config: Config = ConfigFactory::load(toml_file.path());
        assert_eq!(config.nested.value, "default");
        assert_eq!(config.nested.values, vec![0, 0, 0]);
    }

    #[test]
    fn it_should_use_the_default_values_for_missing_config_values() {
        let toml_file = tempfile!(r#"
            [nested]
            value = "test"
        "#);
        let config: Config = ConfigFactory::load(toml_file.path());
        assert_eq!(config.nested.value, "test");
        assert_eq!(config.nested.values, vec![0, 0, 0]);
    }

    #[test]
    fn it_should_return_the_default_config_value_for_misconfigured_properties() {
        let toml_file = tempfile!(r#"
            [nested]
            value = "test"
            values = "wrong-type"
        "#);
        let config: Config = ConfigFactory::load(toml_file.path());
        assert_eq!(config.nested.value, "test");
        assert_eq!(config.nested.values, vec![0, 0, 0]);
    }

    #[test]
    fn it_should_ignore_unexpected_config() {
        let toml_file = tempfile!(r#"
            [nested]
            value = "test"
            values = [1, 2, 3]
            unexpected = "ignore-me"
        "#);
        let config: Config = ConfigFactory::load(toml_file.path());
        assert_eq!(config.nested.value, "test");
        assert_eq!(config.nested.values, vec![1, 2, 3]);
    }

    #[test]
    fn it_should_return_the_default_config_when_parsing_fails() {
        let toml_file = tempfile!(r#"
            [nested]
            value = "test
            values = [1, 2, 3]
        "#);
        let config: Config = ConfigFactory::load(toml_file.path());
        assert_eq!(config.nested.value, "default");
        assert_eq!(config.nested.values, vec![0, 0, 0]);
    }
}
