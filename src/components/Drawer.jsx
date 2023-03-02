import { ListItem, ListItemText } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { Container } from "@mui/system";

function MyDrawer() {
  return (
    <Drawer
      elevation={0}
      hideBackdrop
      PaperProps={{
        borderRight: 0,
        
      }}
      sx={{
        width: "20vw",
        flexShrink: 0,
        borderRight: "none",
        boxShadow: "none",
      }}
      variant="permanent"
      anchor="left"
    >
      <Container
        sx={{
          height: "100%",
          width: "20vw",

          //   backgroundColor: "#0fffff",
        }}
      >
        {/* Leave top 20% area */}
        <Container sx={{ height: "20%" }} />
        {getSideBarItem("Dashboard")}
        {getSideBarItem("Trades")}
        {getSideBarItem("Setting")}
      </Container>
    </Drawer>
  );

  function getSideBarItem(text) {
    return (
      <ListItem onClick={{}}>
        {/* TODO: Add Icon Later */}

        <ListItemText>{text}</ListItemText>
      </ListItem>
    );
  }
}

export default MyDrawer;
