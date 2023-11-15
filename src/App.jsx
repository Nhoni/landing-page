import "./App.css";
import { Box, Stack, Typography, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function App() {

  const [templateArea, setTemplateArea] = useState({gridTemplateAreas: `'box1 box2' 'box1 box3'`})
  
  return (
    <>
      <Typography variant="subtitle1" textTransform={"uppercase"}>
        Caractéristiques
      </Typography>
      <Typography variant="h3" fontWeight={600}>
        Plus de puissance pour plus d'efficacité
      </Typography>
      
      <Stack className="box-container" marginTop={5} style={templateArea}>
        {/* Box 1 */}
        <Box className="box1" sx={{ bgcolor: "info.main", position: 'relative'}}>
          <Fab 
            aria-label="add" 
            data-box="1"
            sx={{ position: 'absolute', bottom: '5%', right: '5%', }}>
            <AddIcon />
          </Fab>
        </Box>

        {/* Box 2 */}
        <Box className="box2" sx={{ bgcolor: "secondary.main", position: 'relative'}}>
          <Fab 
            aria-label="add"
            data-box="2" 
            sx={{ position: 'absolute', bottom: '5%', right: '5%', }}>
            <AddIcon />
          </Fab>
          </Box>

        {/* Box 3 */}
        <Box className="box3" sx={{ bgcolor: "success.main", position: 'relative'}}>
          <Fab 
            aria-label="add"
            data-box="3" 
            sx={{ position: 'absolute', bottom: '5%', right: '5%', }}>
            <AddIcon />
          </Fab>
        </Box>
      </Stack>
    </>
  );
}

export default App;