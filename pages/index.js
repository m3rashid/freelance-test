import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ToggleButton from "../components/ToggleButton";

export default function IndexPage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <ToggleButton />
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 2, fontWeight: "700" }}
        >
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }} color="text.secondary">
          Donec pharetra sem et <strong>laoreet</strong> lobortis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Praesent sodales
          odio eget est finibus, ac venenatis est facilisis.
        </Typography>
      </Box>
    </Container>
  );
}
