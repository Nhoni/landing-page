import "./App.css";
import { Box, Stack, Typography, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
    <>
      <Typography variant="subtitle1" textTransform={"uppercase"}>
        Caractéristiques
      </Typography>
      <Typography variant="h3" fontWeight={600}>
        Plus de puissance pour plus d'efficacité
      </Typography>
      <Stack direction="row" spacing={2} paddingTop={5}>
        <Box sx={{ width: '50%', height: 450, borderRadius: '2vw 4vw', bgcolor: "info.main", position: 'relative'}}>
          <Fab aria-label="add" sx={{ position: 'absolute', bottom: '5%', right: '5%', }}>
            <AddIcon />
          </Fab>
        </Box>
        <Stack width="50%" spacing={2}>
          <Box sx={{ width: '100%', height: '50%', borderRadius: '2vw', bgcolor: "secondary.main", position: 'relative'}}>
            <Fab aria-label="add" sx={{ position: 'absolute', bottom: '5%', right: '5%', }}>
              <AddIcon />
            </Fab>
          </Box>
          <Box sx={{ width: '100%', height: '50%', borderRadius: '2vw', bgcolor: "success.main", position: 'relative'}}>
            <Fab aria-label="add" sx={{ position: 'absolute', bottom: '5%', right: '5%', }}>
              <AddIcon />
            </Fab>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default App;