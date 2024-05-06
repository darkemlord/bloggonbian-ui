import { Box, ThemeProvider } from "@mui/material";
import Navigation from "./Navigation";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  return (
    <Box>
      <Toaster position="top-center" />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
