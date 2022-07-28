import { Sidebar } from "./Components/Sidebar";
import { Feed } from "./Components/Feed";
import { Rightbar } from "./Components/Rightbar";
import { Navbar } from "./Components/Navbar";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Stack direction="row" gap={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
