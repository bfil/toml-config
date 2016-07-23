var searchIndex = {};
searchIndex["toml_config"] = {"doc":"# Configuring your dependency\n`toml-config` can be configured to use `rustc_serialize` or `serde`","items":[[3,"ConfigFactory","toml_config","Implements helper functions for loading TOML files into a structure",null,null],[11,"load","","Loads a TOML file and decodes it into a target structure, using default values\nfor missing or invalid file configurations",0,{"inputs":[{"name":"path"}],"output":{"name":"t"}}],[11,"decode","","Decodes a TOML table into a target structure, using default values\nfor missing or invalid configurations",0,{"inputs":[{"name":"table"}],"output":{"name":"t"}}]],"paths":[[3,"ConfigFactory"]]};
searchIndex["toml"] = {"doc":"A TOML-parsing library","items":[[3,"Parser","toml","Parser for converting a string to a TOML `Value` instance.",null,null],[12,"errors","","A list of all errors which have occurred during parsing.",0,null],[3,"ParserError","","A structure representing a parse error.",null,null],[12,"lo","","The low byte at which this error is pointing at.",1,null],[12,"hi","","One byte beyond the last character at which this error is pointing at.",1,null],[12,"desc","","A human-readable description explaining what the error is.",1,null],[3,"Encoder","","A structure to transform Rust values into TOML values.",null,null],[12,"toml","","Output TOML that is emitted. The current version of this encoder forces\nthe top-level representation of a structure to be a table.",2,null],[3,"Decoder","","A structure to transform TOML values into Rust values.",null,null],[12,"toml","","The TOML value left over after decoding. This can be used to inspect\nwhether fields were decoded or not.",3,null],[3,"DecodeError","","Description for errors which can occur while decoding a type.",null,null],[12,"field","","Field that this error applies to.",4,null],[12,"kind","","The type of error which occurred while decoding,",4,null],[4,"Error","","Enumeration of errors which can occur while encoding a rust value into a\nTOML value.",null,null],[13,"NeedsKey","","Indication that a key was needed when a value was emitted, but no key\nwas previously emitted.",5,null],[13,"NoValue","","Indication that a key was emitted, but not value was emitted.",5,null],[13,"InvalidMapKeyLocation","","Indicates that a map key was attempted to be emitted at an invalid\nlocation.",5,null],[13,"InvalidMapKeyType","","Indicates that a type other than a string was attempted to be used as a\nmap key type.",5,null],[13,"Custom","","A custom error type was generated",5,null],[4,"DecodeErrorKind","","Enumeration of possible errors which can occur while decoding a structure.",null,null],[13,"ApplicationError","","An error flagged by the application, e.g. value out of range",6,null],[13,"ExpectedField","","A field was expected, but none was found.",6,null],[13,"UnknownField","","A field was found, but it was not an expected one.",6,null],[13,"ExpectedType","","A field was found, but it had the wrong type.",6,null],[13,"ExpectedMapKey","","The nth map key was expected, but none was found.",6,null],[13,"ExpectedMapElement","","The nth map element was expected, but none was found.",6,null],[13,"NoEnumVariants","","An enum decoding was requested, but no variants were supplied",6,null],[13,"NilTooLong","","The unit type was being decoded, but a non-zero length string was found",6,null],[13,"SyntaxError","","There was an error with the syntactical structure of the TOML.",6,null],[13,"CustomError","","A custom error was generated when decoding.",6,null],[13,"EndOfStream","","The end of the TOML input was reached too soon",6,null],[13,"InvalidType","","Produced by serde ...",6,null],[4,"Value","","Representation of a TOML value.",null,null],[13,"String","","",7,null],[13,"Integer","","",7,null],[13,"Float","","",7,null],[13,"Boolean","","",7,null],[13,"Datetime","","",7,null],[13,"Array","","",7,null],[13,"Table","","",7,null],[5,"encode","","Encodes an encodable value into a TOML value.",null,{"inputs":[{"name":"t"}],"output":{"name":"value"}}],[5,"encode_str","","Encodes an encodable value into a TOML string.",null,{"inputs":[{"name":"t"}],"output":{"name":"string"}}],[5,"decode","","Decodes a TOML value into a decodable type.",null,{"inputs":[{"name":"value"}],"output":{"name":"option"}}],[5,"decode_str","","Decodes a string into a toml-encoded value.",null,{"inputs":[{"name":"str"}],"output":{"name":"option"}}],[11,"clone","","",1,null],[11,"fmt","","",1,null],[11,"new","","Creates a new parser for a string.",0,{"inputs":[{"name":"str"}],"output":{"name":"parser"}}],[11,"to_linecol","","Converts a byte offset from an error message to a (line, column) pair",0,null],[11,"set_require_newline_after_table","","Historical versions of toml-rs accidentally allowed a newline after a\ntable definition, but the TOML spec requires a newline after a table\ndefinition header.",0,null],[11,"parse","","Executes the parser, parsing the string contained within.",0,null],[11,"lookup","","Parse a path into a vector of paths",0,null],[11,"description","","",1,null],[11,"fmt","","",1,null],[11,"fmt","","",7,null],[11,"emit_nil","","",2,null],[11,"emit_usize","","",2,null],[11,"emit_u8","","",2,null],[11,"emit_u16","","",2,null],[11,"emit_u32","","",2,null],[11,"emit_u64","","",2,null],[11,"emit_isize","","",2,null],[11,"emit_i8","","",2,null],[11,"emit_i16","","",2,null],[11,"emit_i32","","",2,null],[11,"emit_i64","","",2,null],[11,"emit_bool","","",2,null],[11,"emit_f32","","",2,null],[11,"emit_f64","","",2,null],[11,"emit_char","","",2,null],[11,"emit_str","","",2,null],[11,"emit_enum","","",2,null],[11,"emit_enum_variant","","",2,null],[11,"emit_enum_variant_arg","","",2,null],[11,"emit_enum_struct_variant","","",2,null],[11,"emit_enum_struct_variant_field","","",2,null],[11,"emit_struct","","",2,null],[11,"emit_struct_field","","",2,null],[11,"emit_tuple","","",2,null],[11,"emit_tuple_arg","","",2,null],[11,"emit_tuple_struct","","",2,null],[11,"emit_tuple_struct_arg","","",2,null],[11,"emit_option","","",2,null],[11,"emit_option_none","","",2,null],[11,"emit_option_some","","",2,null],[11,"emit_seq","","",2,null],[11,"emit_seq_elt","","",2,null],[11,"emit_map","","",2,null],[11,"emit_map_elt_key","","",2,null],[11,"emit_map_elt_val","","",2,null],[11,"encode","","",7,null],[11,"fmt","","",5,null],[11,"new","","Constructs a new encoder which will emit to the given output stream.",2,{"inputs":[],"output":{"name":"encoder"}}],[11,"fmt","","",5,null],[11,"description","","",5,null],[11,"read_nil","","",3,null],[11,"read_usize","","",3,null],[11,"read_u64","","",3,null],[11,"read_u32","","",3,null],[11,"read_u16","","",3,null],[11,"read_u8","","",3,null],[11,"read_isize","","",3,null],[11,"read_i64","","",3,null],[11,"read_i32","","",3,null],[11,"read_i16","","",3,null],[11,"read_i8","","",3,null],[11,"read_bool","","",3,null],[11,"read_f64","","",3,null],[11,"read_f32","","",3,null],[11,"read_char","","",3,null],[11,"read_str","","",3,null],[11,"read_enum","","",3,null],[11,"read_enum_variant","","",3,null],[11,"read_enum_variant_arg","","",3,null],[11,"read_enum_struct_variant","","",3,null],[11,"read_enum_struct_variant_field","","",3,null],[11,"read_struct","","",3,null],[11,"read_struct_field","","",3,null],[11,"read_tuple","","",3,null],[11,"read_tuple_arg","","",3,null],[11,"read_tuple_struct","","",3,null],[11,"read_tuple_struct_arg","","",3,null],[11,"read_option","","",3,null],[11,"read_seq","","",3,null],[11,"read_seq_elt","","",3,null],[11,"read_map","","",3,null],[11,"read_map_elt_key","","",3,null],[11,"read_map_elt_val","","",3,null],[11,"error","","",3,null],[11,"fmt","","",4,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"fmt","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"new","","Creates a new decoder, consuming the TOML value to decode.",3,{"inputs":[{"name":"value"}],"output":{"name":"decoder"}}],[11,"fmt","","",4,null],[11,"description","","",4,null],[6,"Array","","Type representing a TOML array, payload of the Value::Array variant",null,null],[6,"Table","","Type representing a TOML table, payload of the Value::Table variant",null,null],[11,"fmt","","",7,null],[11,"clone","","",7,null],[11,"eq","","",7,null],[11,"ne","","",7,null],[11,"same_type","","Tests whether this and another value have the same type.",7,null],[11,"type_str","","Returns a human-readable representation of the type of this value.",7,null],[11,"as_str","","Extracts the string of this value if it is a string.",7,null],[11,"as_integer","","Extracts the integer value if it is an integer.",7,null],[11,"as_float","","Extracts the float value if it is a float.",7,null],[11,"as_bool","","Extracts the boolean value if it is a boolean.",7,null],[11,"as_datetime","","Extracts the datetime value if it is a datetime.",7,null],[11,"as_slice","","Extracts the array value if it is an array.",7,null],[11,"as_table","","Extracts the table value if it is a table.",7,null],[11,"lookup","","Lookups for value at specified path.",7,null],[11,"lookup_mut","","Lookups for mutable value at specified path.",7,null],[11,"from_str","","",7,{"inputs":[{"name":"str"}],"output":{"name":"result"}}]],"paths":[[3,"Parser"],[3,"ParserError"],[3,"Encoder"],[3,"Decoder"],[3,"DecodeError"],[4,"Error"],[4,"DecodeErrorKind"],[4,"Value"]]};
searchIndex["rustc_serialize"] = {"doc":"Support code for encoding and decoding types.","items":[[0,"base64","rustc_serialize","Base64 binary-to-text encoding",null,null],[3,"Config","rustc_serialize::base64","Contains configuration parameters for `to_base64`.",null,null],[12,"char_set","","Character set to use",0,null],[12,"newline","","Newline to use",0,null],[12,"pad","","True to pad output with `=` characters",0,null],[12,"line_length","","`Some(len)` to wrap lines at `len`, `None` to disable line wrapping",0,null],[4,"CharacterSet","","Available encoding character sets",null,null],[13,"Standard","","The standard character set (uses `+` and `/`)",1,null],[13,"UrlSafe","","The URL safe character set (uses `-` and `_`)",1,null],[4,"Newline","","Available newline types",null,null],[13,"LF","","A linefeed (i.e. Unix-style newline)",2,null],[13,"CRLF","","A carriage return and a linefeed (i.e. Windows-style newline)",2,null],[4,"FromBase64Error","","Errors that can occur when decoding a base64 encoded string",null,null],[13,"InvalidBase64Byte","","The input contained a character not part of the base64 format",3,null],[13,"InvalidBase64Length","","The input had an invalid length",3,null],[7,"STANDARD","","Configuration for RFC 4648 standard base64 encoding",null,null],[7,"URL_SAFE","","Configuration for RFC 4648 base64url encoding",null,null],[7,"MIME","","Configuration for RFC 2045 MIME base64 encoding",null,null],[8,"ToBase64","","A trait for converting a value to base64 encoding.",null,null],[10,"to_base64","","Converts the value of `self` to a base64 value following the specified\nformat configuration, returning the owned string.",4,null],[8,"FromBase64","","A trait for converting from base64 encoded values.",null,null],[10,"from_base64","","Converts the value of `self`, interpreted as base64 encoded data, into\nan owned vector of bytes, returning the vector.",5,null],[11,"fmt","","",1,null],[11,"clone","","",1,null],[11,"fmt","","",2,null],[11,"clone","","",2,null],[11,"fmt","","",0,null],[11,"clone","","",0,null],[11,"clone","","",3,null],[11,"fmt","","",3,null],[11,"description","","",3,null],[11,"fmt","","",3,null],[0,"hex","rustc_serialize","Hex binary-to-text encoding",null,null],[4,"FromHexError","rustc_serialize::hex","Errors that can occur when decoding a hex encoded string",null,null],[13,"InvalidHexCharacter","","The input contained a character not part of the hex format",6,null],[13,"InvalidHexLength","","The input had an invalid length",6,null],[8,"ToHex","","A trait for converting a value to hexadecimal encoding",null,null],[10,"to_hex","","Converts the value of `self` to a hex value, returning the owned\nstring.",7,null],[8,"FromHex","","A trait for converting hexadecimal encoded values",null,null],[10,"from_hex","","Converts the value of `self`, interpreted as hexadecimal encoded data,\ninto an owned vector of bytes, returning the vector.",8,null],[11,"clone","","",6,null],[11,"fmt","","",6,null],[11,"description","","",6,null],[11,"fmt","","",6,null],[0,"json","rustc_serialize","JSON parsing and serialization",null,null],[3,"PrettyJson","rustc_serialize::json","",null,null],[3,"AsJson","","",null,null],[3,"AsPrettyJson","","",null,null],[3,"Encoder","","A structure for implementing serialization to JSON.",null,null],[3,"Stack","","A Stack represents the current position of the parser in the logical\nstructure of the JSON stream.\nFor example foo.bar[3].x",null,null],[3,"Parser","","A streaming JSON parser implemented as an iterator of JsonEvent, consuming\nan iterator of char.",null,null],[3,"Builder","","A Builder consumes a json::Parser to create a generic Json structure.",null,null],[3,"Decoder","","A structure to decode JSON to values in rust.",null,null],[4,"Json","","Represents a json value",null,null],[13,"I64","","",9,null],[13,"U64","","",9,null],[13,"F64","","",9,null],[13,"String","","",9,null],[13,"Boolean","","",9,null],[13,"Array","","",9,null],[13,"Object","","",9,null],[13,"Null","","",9,null],[4,"ErrorCode","","The errors that can arise while parsing a JSON stream.",null,null],[13,"InvalidSyntax","","",10,null],[13,"InvalidNumber","","",10,null],[13,"EOFWhileParsingObject","","",10,null],[13,"EOFWhileParsingArray","","",10,null],[13,"EOFWhileParsingValue","","",10,null],[13,"EOFWhileParsingString","","",10,null],[13,"KeyMustBeAString","","",10,null],[13,"ExpectedColon","","",10,null],[13,"TrailingCharacters","","",10,null],[13,"TrailingComma","","",10,null],[13,"InvalidEscape","","",10,null],[13,"InvalidUnicodeCodePoint","","",10,null],[13,"LoneLeadingSurrogateInHexEscape","","",10,null],[13,"UnexpectedEndOfHexEscape","","",10,null],[13,"UnrecognizedHex","","",10,null],[13,"NotFourDigit","","",10,null],[13,"ControlCharacterInString","","",10,null],[13,"NotUtf8","","",10,null],[4,"ParserError","","",null,null],[13,"SyntaxError","","msg, line, col",11,null],[13,"IoError","","",11,null],[4,"DecoderError","","",null,null],[13,"ParseError","","",12,null],[13,"ExpectedError","","",12,null],[13,"MissingFieldError","","",12,null],[13,"UnknownVariantError","","",12,null],[13,"ApplicationError","","",12,null],[13,"EOF","","",12,null],[4,"EncoderError","","",null,null],[13,"FmtError","","",13,null],[13,"BadHashmapKey","","",13,null],[4,"JsonEvent","","The output of the streaming parser.",null,null],[13,"ObjectStart","","",14,null],[13,"ObjectEnd","","",14,null],[13,"ArrayStart","","",14,null],[13,"ArrayEnd","","",14,null],[13,"BooleanValue","","",14,null],[13,"I64Value","","",14,null],[13,"U64Value","","",14,null],[13,"F64Value","","",14,null],[13,"StringValue","","",14,null],[13,"NullValue","","",14,null],[13,"Error","","",14,null],[4,"StackElement","","StackElements compose a Stack.\nFor example, Key(&quot;foo&quot;), Key(&quot;bar&quot;), Index(3) and Key(&quot;x&quot;) are the\nStackElements compositing the stack that represents foo.bar[3].x",null,null],[13,"Index","","",15,null],[13,"Key","","",15,null],[5,"error_str","","Returns a readable error string for a given error code.",null,{"inputs":[{"name":"errorcode"}],"output":{"name":"str"}}],[5,"decode","","Shortcut function to decode a JSON `&amp;str` into an object",null,{"inputs":[{"name":"str"}],"output":{"name":"decoderesult"}}],[5,"encode","","Shortcut function to encode a `T` into a JSON `String`",null,{"inputs":[{"name":"t"}],"output":{"name":"encoderesult"}}],[5,"as_json","","Create an `AsJson` wrapper which can be used to print a value as JSON\non-the-fly via `write!`",null,{"inputs":[{"name":"t"}],"output":{"name":"asjson"}}],[5,"as_pretty_json","","Create an `AsPrettyJson` wrapper which can be used to print a value as JSON\non-the-fly via `write!`",null,{"inputs":[{"name":"t"}],"output":{"name":"asprettyjson"}}],[6,"Array","","",null,null],[6,"Object","","",null,null],[6,"BuilderError","","",null,null],[6,"EncodeResult","","",null,null],[6,"DecodeResult","","",null,null],[8,"ToJson","","A trait for converting values to JSON",null,null],[10,"to_json","","Converts the value of `self` to an instance of JSON",16,null],[11,"fmt","","",9,null],[11,"partial_cmp","","",9,null],[11,"lt","","",9,null],[11,"le","","",9,null],[11,"gt","","",9,null],[11,"ge","","",9,null],[11,"eq","","",9,null],[11,"ne","","",9,null],[11,"clone","","",9,null],[11,"eq","","",10,null],[11,"clone","","",10,null],[11,"fmt","","",11,null],[11,"eq","","",11,null],[11,"fmt","","",12,null],[11,"eq","","",12,null],[11,"ne","","",12,null],[11,"fmt","","",13,null],[11,"clone","","",13,null],[11,"fmt","","",10,null],[11,"description","","",12,null],[11,"cause","","",12,null],[11,"fmt","","",12,null],[11,"from","","",12,{"inputs":[{"name":"parsererror"}],"output":{"name":"decodererror"}}],[11,"description","","",11,null],[11,"fmt","","",11,null],[11,"from","","",11,{"inputs":[{"name":"error"}],"output":{"name":"parsererror"}}],[11,"description","","",13,null],[11,"fmt","","",13,null],[11,"from","","",13,{"inputs":[{"name":"error"}],"output":{"name":"encodererror"}}],[11,"new_pretty","","Creates a new encoder whose output will be written in human-readable\nJSON to the specified writer",17,{"inputs":[{"name":"write"}],"output":{"name":"encoder"}}],[11,"new","","Creates a new encoder whose output will be written in compact\nJSON to the specified writer",17,{"inputs":[{"name":"write"}],"output":{"name":"encoder"}}],[11,"set_indent","","Set the number of spaces to indent for each level.\nThis is safe to set during encoding.",17,null],[11,"emit_nil","","",17,null],[11,"emit_usize","","",17,null],[11,"emit_u64","","",17,null],[11,"emit_u32","","",17,null],[11,"emit_u16","","",17,null],[11,"emit_u8","","",17,null],[11,"emit_isize","","",17,null],[11,"emit_i64","","",17,null],[11,"emit_i32","","",17,null],[11,"emit_i16","","",17,null],[11,"emit_i8","","",17,null],[11,"emit_bool","","",17,null],[11,"emit_f64","","",17,null],[11,"emit_f32","","",17,null],[11,"emit_char","","",17,null],[11,"emit_str","","",17,null],[11,"emit_enum","","",17,null],[11,"emit_enum_variant","","",17,null],[11,"emit_enum_variant_arg","","",17,null],[11,"emit_enum_struct_variant","","",17,null],[11,"emit_enum_struct_variant_field","","",17,null],[11,"emit_struct","","",17,null],[11,"emit_struct_field","","",17,null],[11,"emit_tuple","","",17,null],[11,"emit_tuple_arg","","",17,null],[11,"emit_tuple_struct","","",17,null],[11,"emit_tuple_struct_arg","","",17,null],[11,"emit_option","","",17,null],[11,"emit_option_none","","",17,null],[11,"emit_option_some","","",17,null],[11,"emit_seq","","",17,null],[11,"emit_seq_elt","","",17,null],[11,"emit_map","","",17,null],[11,"emit_map_elt_key","","",17,null],[11,"emit_map_elt_val","","",17,null],[11,"encode","","",9,null],[11,"from_reader","","Decodes a json value from an `&amp;mut io::Read`",9,{"inputs":[{"name":"read"}],"output":{"name":"result"}}],[11,"from_str","","Decodes a json value from a string",9,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"pretty","","Borrow this json object as a pretty object to generate a pretty\nrepresentation for it via `Display`.",9,null],[11,"find","","If the Json value is an Object, returns the value associated with the provided key.\nOtherwise, returns None.",9,null],[11,"find_path","","Attempts to get a nested Json Object for each key in `keys`.\nIf any key is found not to exist, find_path will return None.\nOtherwise, it will return the Json value associated with the final key.",9,null],[11,"search","","If the Json value is an Object, performs a depth-first search until\na value associated with the provided key is found. If no value is found\nor the Json value is not an Object, returns None.",9,null],[11,"is_object","","Returns true if the Json value is an Object. Returns false otherwise.",9,null],[11,"as_object","","If the Json value is an Object, returns the associated BTreeMap.\nReturns None otherwise.",9,null],[11,"as_object_mut","","If the Json value is an Object, returns the associated mutable BTreeMap.\nReturns None otherwise.",9,null],[11,"is_array","","Returns true if the Json value is an Array. Returns false otherwise.",9,null],[11,"as_array","","If the Json value is an Array, returns the associated vector.\nReturns None otherwise.",9,null],[11,"as_array_mut","","If the Json value is an Array, returns the associated mutable vector.\nReturns None otherwise.",9,null],[11,"is_string","","Returns true if the Json value is a String. Returns false otherwise.",9,null],[11,"as_string","","If the Json value is a String, returns the associated str.\nReturns None otherwise.",9,null],[11,"is_number","","Returns true if the Json value is a Number. Returns false otherwise.",9,null],[11,"is_i64","","Returns true if the Json value is a i64. Returns false otherwise.",9,null],[11,"is_u64","","Returns true if the Json value is a u64. Returns false otherwise.",9,null],[11,"is_f64","","Returns true if the Json value is a f64. Returns false otherwise.",9,null],[11,"as_i64","","If the Json value is a number, return or cast it to a i64.\nReturns None otherwise.",9,null],[11,"as_u64","","If the Json value is a number, return or cast it to a u64.\nReturns None otherwise.",9,null],[11,"as_f64","","If the Json value is a number, return or cast it to a f64.\nReturns None otherwise.",9,null],[11,"is_boolean","","Returns true if the Json value is a Boolean. Returns false otherwise.",9,null],[11,"as_boolean","","If the Json value is a Boolean, returns the associated bool.\nReturns None otherwise.",9,null],[11,"is_null","","Returns true if the Json value is a Null. Returns false otherwise.",9,null],[11,"as_null","","If the Json value is a Null, returns ().\nReturns None otherwise.",9,null],[11,"index","","",9,null],[11,"index","","",9,null],[11,"fmt","","",14,null],[11,"eq","","",14,null],[11,"ne","","",14,null],[11,"fmt","","",15,null],[11,"clone","","",15,null],[11,"eq","","",15,null],[11,"ne","","",15,null],[11,"new","","",18,{"inputs":[],"output":{"name":"stack"}}],[11,"len","","Returns The number of elements in the Stack.",18,null],[11,"is_empty","","Returns true if the stack is empty.",18,null],[11,"get","","Provides access to the StackElement at a given index.\nlower indices are at the bottom of the stack while higher indices are\nat the top.",18,null],[11,"is_equal_to","","Compares this stack with an array of StackElements.",18,null],[11,"starts_with","","Returns true if the bottom-most elements of this stack are the same as\nthe ones passed as parameter.",18,null],[11,"ends_with","","Returns true if the top-most elements of this stack are the same as\nthe ones passed as parameter.",18,null],[11,"top","","Returns the top-most element (if any).",18,null],[11,"next","","",19,null],[11,"new","","Creates the JSON parser.",19,{"inputs":[{"name":"t"}],"output":{"name":"parser"}}],[11,"stack","","Provides access to the current position in the logical structure of the\nJSON stream.",19,null],[11,"new","","Create a JSON Builder.",20,{"inputs":[{"name":"t"}],"output":{"name":"builder"}}],[11,"build","","",20,null],[11,"new","","Creates a new decoder instance for decoding the specified JSON value.",21,{"inputs":[{"name":"json"}],"output":{"name":"decoder"}}],[11,"read_nil","","",21,null],[11,"read_usize","","",21,null],[11,"read_u8","","",21,null],[11,"read_u16","","",21,null],[11,"read_u32","","",21,null],[11,"read_u64","","",21,null],[11,"read_isize","","",21,null],[11,"read_i8","","",21,null],[11,"read_i16","","",21,null],[11,"read_i32","","",21,null],[11,"read_i64","","",21,null],[11,"read_f32","","",21,null],[11,"read_f64","","",21,null],[11,"read_bool","","",21,null],[11,"read_char","","",21,null],[11,"read_str","","",21,null],[11,"read_enum","","",21,null],[11,"read_enum_variant","","",21,null],[11,"read_enum_variant_arg","","",21,null],[11,"read_enum_struct_variant","","",21,null],[11,"read_enum_struct_variant_field","","",21,null],[11,"read_struct","","",21,null],[11,"read_struct_field","","",21,null],[11,"read_tuple","","",21,null],[11,"read_tuple_arg","","",21,null],[11,"read_tuple_struct","","",21,null],[11,"read_tuple_struct_arg","","",21,null],[11,"read_option","","",21,null],[11,"read_seq","","",21,null],[11,"read_seq_elt","","",21,null],[11,"read_map","","",21,null],[11,"read_map_elt_key","","",21,null],[11,"read_map_elt_val","","",21,null],[11,"error","","",21,null],[11,"to_json","","",9,null],[11,"fmt","","Encodes a json value into a string",9,null],[11,"fmt","","Encodes a json value into a string",22,null],[11,"fmt","","Encodes a json value into a string",23,null],[11,"indent","","Set the indentation level for the emitted JSON",24,null],[11,"fmt","","Encodes a json value into a string",24,null],[11,"from_str","","",9,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[8,"Decoder","rustc_serialize","",null,null],[16,"Error","","",25,null],[10,"read_nil","","",25,null],[10,"read_usize","","",25,null],[10,"read_u64","","",25,null],[10,"read_u32","","",25,null],[10,"read_u16","","",25,null],[10,"read_u8","","",25,null],[10,"read_isize","","",25,null],[10,"read_i64","","",25,null],[10,"read_i32","","",25,null],[10,"read_i16","","",25,null],[10,"read_i8","","",25,null],[10,"read_bool","","",25,null],[10,"read_f64","","",25,null],[10,"read_f32","","",25,null],[10,"read_char","","",25,null],[10,"read_str","","",25,null],[10,"read_enum","","",25,null],[10,"read_enum_variant","","",25,null],[10,"read_enum_variant_arg","","",25,null],[10,"read_enum_struct_variant","","",25,null],[10,"read_enum_struct_variant_field","","",25,null],[10,"read_struct","","",25,null],[10,"read_struct_field","","",25,null],[10,"read_tuple","","",25,null],[10,"read_tuple_arg","","",25,null],[10,"read_tuple_struct","","",25,null],[10,"read_tuple_struct_arg","","",25,null],[10,"read_option","","",25,null],[10,"read_seq","","",25,null],[10,"read_seq_elt","","",25,null],[10,"read_map","","",25,null],[10,"read_map_elt_key","","",25,null],[10,"read_map_elt_val","","",25,null],[10,"error","","",25,null],[8,"Encoder","","",null,null],[16,"Error","","",26,null],[10,"emit_nil","","",26,null],[10,"emit_usize","","",26,null],[10,"emit_u64","","",26,null],[10,"emit_u32","","",26,null],[10,"emit_u16","","",26,null],[10,"emit_u8","","",26,null],[10,"emit_isize","","",26,null],[10,"emit_i64","","",26,null],[10,"emit_i32","","",26,null],[10,"emit_i16","","",26,null],[10,"emit_i8","","",26,null],[10,"emit_bool","","",26,null],[10,"emit_f64","","",26,null],[10,"emit_f32","","",26,null],[10,"emit_char","","",26,null],[10,"emit_str","","",26,null],[10,"emit_enum","","",26,null],[10,"emit_enum_variant","","",26,null],[10,"emit_enum_variant_arg","","",26,null],[10,"emit_enum_struct_variant","","",26,null],[10,"emit_enum_struct_variant_field","","",26,null],[10,"emit_struct","","",26,null],[10,"emit_struct_field","","",26,null],[10,"emit_tuple","","",26,null],[10,"emit_tuple_arg","","",26,null],[10,"emit_tuple_struct","","",26,null],[10,"emit_tuple_struct_arg","","",26,null],[10,"emit_option","","",26,null],[10,"emit_option_none","","",26,null],[10,"emit_option_some","","",26,null],[10,"emit_seq","","",26,null],[10,"emit_seq_elt","","",26,null],[10,"emit_map","","",26,null],[10,"emit_map_elt_key","","",26,null],[10,"emit_map_elt_val","","",26,null],[8,"Decodable","","",null,null],[10,"decode","","",27,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[8,"Encodable","","",null,null],[10,"encode","","",28,null],[8,"DecoderHelpers","","",null,null],[10,"read_to_vec","","",29,null],[8,"EncoderHelpers","","",null,null],[10,"emit_from_vec","","",30,null]],"paths":[[3,"Config"],[4,"CharacterSet"],[4,"Newline"],[4,"FromBase64Error"],[8,"ToBase64"],[8,"FromBase64"],[4,"FromHexError"],[8,"ToHex"],[8,"FromHex"],[4,"Json"],[4,"ErrorCode"],[4,"ParserError"],[4,"DecoderError"],[4,"EncoderError"],[4,"JsonEvent"],[4,"StackElement"],[8,"ToJson"],[3,"Encoder"],[3,"Stack"],[3,"Parser"],[3,"Builder"],[3,"Decoder"],[3,"PrettyJson"],[3,"AsJson"],[3,"AsPrettyJson"],[8,"Decoder"],[8,"Encoder"],[8,"Decodable"],[8,"Encodable"],[8,"DecoderHelpers"],[8,"EncoderHelpers"]]};
searchIndex["log"] = {"doc":"A lightweight logging facade.","items":[[3,"LogRecord","log","The &quot;payload&quot; of a log message.",null,null],[3,"LogMetadata","","Metadata about a log message.",null,null],[3,"LogLocation","","The location of a log message.",null,null],[3,"MaxLogLevelFilter","","A token providing read and write access to the global maximum log level\nfilter.",null,null],[3,"SetLoggerError","","The type returned by `set_logger` if `set_logger` has already been called.",null,null],[3,"ShutdownLoggerError","","The type returned by `shutdown_logger_raw` if `shutdown_logger_raw` has\nalready been called or if `set_logger_raw` has not been called yet.",null,null],[4,"LogLevel","","An enum representing the available verbosity levels of the logging framework",null,null],[13,"Error","","The &quot;error&quot; level.",0,null],[13,"Warn","","The &quot;warn&quot; level.",0,null],[13,"Info","","The &quot;info&quot; level.",0,null],[13,"Debug","","The &quot;debug&quot; level.",0,null],[13,"Trace","","The &quot;trace&quot; level.",0,null],[4,"LogLevelFilter","","An enum representing the available verbosity level filters of the logging\nframework.",null,null],[13,"Off","","A level lower than all log levels.",1,null],[13,"Error","","Corresponds to the `Error` log level.",1,null],[13,"Warn","","Corresponds to the `Warn` log level.",1,null],[13,"Info","","Corresponds to the `Info` log level.",1,null],[13,"Debug","","Corresponds to the `Debug` log level.",1,null],[13,"Trace","","Corresponds to the `Trace` log level.",1,null],[5,"max_log_level","","Returns the current maximum log level.",null,{"inputs":[],"output":{"name":"loglevelfilter"}}],[5,"set_logger","","Sets the global logger.",null,{"inputs":[{"name":"m"}],"output":{"name":"result"}}],[5,"set_logger_raw","","Sets the global logger from a raw pointer.",null,{"inputs":[{"name":"m"}],"output":{"name":"result"}}],[5,"shutdown_logger","","Shuts down the global logger.",null,{"inputs":[],"output":{"name":"result"}}],[5,"shutdown_logger_raw","","Shuts down the global logger.",null,{"inputs":[],"output":{"name":"result"}}],[8,"Log","","A trait encapsulating the operations required of a logger",null,null],[10,"enabled","","Determines if a log message with the specified metadata would be\nlogged.",2,null],[10,"log","","Logs the `LogRecord`.",2,null],[11,"fmt","","",0,null],[11,"clone","","",0,null],[11,"eq","","",0,null],[11,"eq","","",0,null],[11,"partial_cmp","","",0,null],[11,"partial_cmp","","",0,null],[11,"cmp","","",0,null],[11,"from_str","","",0,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",0,null],[11,"max","","Returns the most verbose logging level.",0,{"inputs":[],"output":{"name":"loglevel"}}],[11,"to_log_level_filter","","Converts the `LogLevel` to the equivalent `LogLevelFilter`.",0,null],[11,"fmt","","",1,null],[11,"clone","","",1,null],[11,"eq","","",1,null],[11,"eq","","",1,null],[11,"partial_cmp","","",1,null],[11,"partial_cmp","","",1,null],[11,"cmp","","",1,null],[11,"from_str","","",1,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",1,null],[11,"max","","Returns the most verbose logging level filter.",1,{"inputs":[],"output":{"name":"loglevelfilter"}}],[11,"to_log_level","","Converts `self` to the equivalent `LogLevel`.",1,null],[11,"args","","The message body.",3,null],[11,"metadata","","Metadata about the log directive.",3,null],[11,"location","","The location of the log directive.",3,null],[11,"level","","The verbosity level of the message.",3,null],[11,"target","","The name of the target of the directive.",3,null],[11,"level","","The verbosity level of the message.",4,null],[11,"target","","The name of the target of the directive.",4,null],[11,"fmt","","",5,null],[11,"clone","","",5,null],[11,"module_path","","The module path of the message.",5,null],[11,"file","","The source file containing the message.",5,null],[11,"line","","The line containing the message.",5,null],[11,"fmt","","",6,null],[11,"get","","Gets the current maximum log level filter.",6,null],[11,"set","","Sets the maximum log level.",6,null],[11,"fmt","","",7,null],[11,"fmt","","",7,null],[11,"description","","",7,null],[11,"fmt","","",8,null],[11,"fmt","","",8,null],[11,"description","","",8,null],[14,"log!","","The standard logging macro.",null,null],[14,"error!","","Logs a message at the error level.",null,null],[14,"warn!","","Logs a message at the warn level.",null,null],[14,"info!","","Logs a message at the info level.",null,null],[14,"debug!","","Logs a message at the debug level.",null,null],[14,"trace!","","Logs a message at the trace level.",null,null],[14,"log_enabled!","","Determines if a message logged at the specified level in that module will\nbe logged.",null,null]],"paths":[[4,"LogLevel"],[4,"LogLevelFilter"],[8,"Log"],[3,"LogRecord"],[3,"LogMetadata"],[3,"LogLocation"],[3,"MaxLogLevelFilter"],[3,"SetLoggerError"],[3,"ShutdownLoggerError"]]};
initSearch(searchIndex);
