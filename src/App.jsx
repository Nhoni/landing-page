import "./App.css";
import { Box, Stack, Typography, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState, useRef } from "react";

function App() {
  const [templateArea, setTemplateArea] = useState({ // Mise en place de la grille par défaut
    gridTemplateAreas: `'box1 box2' 'box1 box3'`,
  });

  const [ isActive, setIsActive ] = useState(false);

  const gridTemplateAres = { // Les grilles disponibles
    "1": {gridTemplateAreas: `'box1 box2' 'box1 box3'`, gridTemplateColumns: '11fr 1fr'},
    "2": {gridTemplateAreas: `'box1 box2' 'box3 box2'`, gridTemplateColumns: '1fr 11fr',},
    "3": {gridTemplateAreas: `'box1 box2' 'box3 box3'`, gridTemplateRows: '2fr 10fr',},
  }

  const handleStyle = (e) => { // On lance la fonction au clic sur le bouton
    const box = e.target.dataset.box 
    setIsActive(box); 
    setTemplateArea(gridTemplateAres[e.target.dataset.box] || gridTemplateAres["1"])
  };

  return (
    <>
      <Typography variant="subtitle1" textTransform={"uppercase"}>
        Caractéristiques
      </Typography>
      <Typography variant="h3" fontWeight={600}>
        Plus de puissance pour plus d'efficacité
      </Typography>

      <Stack className="box-container" marginTop={5} style={templateArea}>
        {[ 1, 2 ,3 ].map((box) => {
            const numero = `box${box}` // resultat "box1", "box2" ou "box3"
            return(
              <Box key={box} className={`${numero}` +  ' box'} id={isActive == box ? 'active': null}>
                <Fab 
                  aria-label="add" 
                  data-box={box} onClick={handleStyle} 
                  sx={{ position: "absolute", bottom: "5%", right: "5%" }}>
                  <AddIcon data-icon={box} />
                </Fab>
              </Box>
            )
          })
        }
      </Stack>
    </>
  );
}

export default App;