import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useInstallPWA } from "./useInstallPWA";

function App() {
  const installPWA = useInstallPWA();

  return (
    <>
      <DynamicWidget />

      <button onClick={installPWA}>Install PWA</button>
    </>
  );
}

export default App;
