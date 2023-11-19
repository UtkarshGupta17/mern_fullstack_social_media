import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to dark
    primary: {
      main: "#64B5F6", // Adjust based on your branding
    },
    secondary: {
      main: "#FF8A65", // Adjust based on your branding
    },
    background: {
      default: "#121212", // Dark background color for the entire app
      paper: "#1E1E1E",   // Dark background color for cards and paper elements
    },
    text: {
      primary: "#ffffff", // White text color for primary content
      secondary: "#B0B0B0", // Lighter gray text color for secondary content
    },
  },
  typography: {
    fontFamily: [
      'Roboto', // You can choose other suitable fonts
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          padding: 16,
          borderWidth: "1.5px",
          borderRadius: 12,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#a8c7fa", // Adjust link color based on your primary color
          textDecoration: "none", // Remove underline
          '&:hover': {
            color: "#a8c7fa", // Adjust link color on hover
            '&:after': {
              borderBottomColor: "#a8c7fa", // Adjust underline color on hover
            },
          },
          '&:after': {
            borderBottom: '2px solid transparent', // Initial underline style
            content: '""',
            display: 'block',
            position: 'relative',
            top: '4px', // Adjust to align with text
            transition: 'border-color 0.3s ease', // Add smooth transition
          },
        },
      },
    },
  },
});

export default darkTheme;
