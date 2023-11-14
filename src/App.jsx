import './App.css'
import { Box, Stack, Typography } from '@mui/material';


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
        <Box sx={{ width:'50%', height: 450, borderRadius: '2vw 4vw', bgcolor: "primary.main",}}></Box>
        <Stack width='50%' spacing={2}>
          <Box sx={{ width: '100%', height: '50%', borderRadius: '2vw', bgcolor: "primary.main",}}></Box>
          <Box sx={{ width: '100%', height: '50%', borderRadius: '2vw', bgcolor: "primary.main",}}></Box>
        </Stack>
      </Stack>
    </>
  );
}

export default App
