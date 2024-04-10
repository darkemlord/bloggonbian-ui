import { Box, ThemeProvider } from "@mui/material";
import Navigation from "./Navigation";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
