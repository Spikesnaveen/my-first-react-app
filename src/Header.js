import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

Header.defaultProp = {
  title: "To do list from default prop",
};

/* function button() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    };

    return(
        <div>
            <h1>Count : </h1>
            <button onClick={handleIncrement}></button>
        </div>
    );
} */

export default Header;
