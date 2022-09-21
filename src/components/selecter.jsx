
   import { Component } from "react";
   import Select from "react-select";
   import options from "./option";
   import "./selecter.css"
  
  const styles = {
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "papayawhip",
      };
    },
  };
  
  
  class SelectBox extends Component {
    render() {
      return (
        <Select className="main"
          styles={styles}
          closeMenuOnSelect={false}
          isMulti
          options={options}
          defaultValue={options[0]}
        />
      );
    }
  }


export default SelectBox;