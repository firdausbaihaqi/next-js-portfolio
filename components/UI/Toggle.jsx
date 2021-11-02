import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { initTheme, toggleTheme, isDarkTheme } from "../../helper/theme";

function Toggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    initTheme();
    isDarkTheme() && setEnabled(true);
  });

  const handleToggle = () => {
    setEnabled((enabled) => !enabled);
    toggleTheme();
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-400"
      } inline-flex items-center h-6 rounded-full fixed bottom-5 right-5  w-11 focus:outline-none duration-300`}
    >
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } duration-300 inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
}

export default Toggle;
