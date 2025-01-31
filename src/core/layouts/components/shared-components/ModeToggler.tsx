// ** MUI Imports
import { PaletteMode } from "@mui/material";
import IconButton from "@mui/material/IconButton";

// ** Icons Imports

// ** Type Import
import { Settings } from "@/core/context/settingsContext";
import { DarkMode, WbSunny } from "@mui/icons-material";

interface Props {
  settings: Settings;
  saveSettings: (values: Settings) => void;
}

const ModeToggler = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props;

  const handleModeChange = (mode: PaletteMode) => {
    saveSettings({ ...settings, mode });
  };

  const handleModeToggle = () => {
    if (settings.mode === "light") {
      handleModeChange("dark");
    } else {
      handleModeChange("light");
    }
  };

  return (
    <IconButton color="inherit" aria-haspopup="true" onClick={handleModeToggle}>
      {settings.mode === "dark" ? <WbSunny /> : <DarkMode />}
    </IconButton>
  );
};

export default ModeToggler;
