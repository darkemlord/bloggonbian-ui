import { Box, ThemeProvider } from "@mui/material";
import Navigation from "./Navigation";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider";

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
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
