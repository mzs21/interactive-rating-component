import { useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Thanks from "./components/Thanks";
import { AppContext } from "./contexts/AppContext";

function App() {
  const numArray: number[] = [1, 2, 3, 4, 5];

  const [active, setActive] = useState<boolean>(true);

  const [numValue, setNumValue] = useState<number>(0);

  const changeValue = (value: number) => {
    setNumValue(value);
  };

  const handleSubmit = () => {
    setActive(false);
  };

  return (
    <>
      <AppContext.Provider value={{ numValue, setNumValue }}>
        {active ? (
          <Card
            numArray={numArray}
            changeValue={changeValue}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Thanks />
        )}
      </AppContext.Provider>
      <Footer />
    </>
  );
}

export default App;

// Explanation 1:

// In this code, the App component has a state variable called `numValue` and a function called `setNumValue` created using the useState hook. The `changeValue` function is passed as a prop to the Card component. When a user clicks on a rating number in the Card component, the `handleClick` function is called, which in turn calls the `changeValue` function passed as a prop, passing it the rating number. This `changeValue` function updates the `numValue` state variable in the App component, and this updated value is made available to other components using the Context API. The AppContext provider is defined in the App component, which wraps the Card and Thanks components. This provider provides the `numValue` and `setNumValue` values to any component that needs them. In the Thanks component, the `numValue` value is accessed using the useContext hook and displayed to the user.
