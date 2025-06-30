import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import { ListGroups } from "./components/ListGroup.tsx";

function App() {
  // const items = ["Zenith", "Railley", "Vince", "Nickolei"];
  // const handleSelectItem = (item: string) => console.log(item);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  return (
    <>
      {/* <ListGroups
        items={items}
        heading="Names"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button children="My button" onClick={() => setAlertVisible(true)} />
    </>
  );
}

export default App;
