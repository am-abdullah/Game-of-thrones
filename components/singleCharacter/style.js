import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  name: {
    boxSizing: "border-box",
    color: "#fff",
    flex: "0 0 20%",
    fontSize: "25px",
    lineHeight: "1.5",
    margin: "10px 0",
    padding: "0 5px",
    textDecoration: "none",
    width: "20%",
    "&:hover": { color: "#f9d633" },
  },
  detailsDiv: {
    // font-family: Game of Thrones;
    color: "#fff",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    textAlign: "left",
    width: "100%",
    paddingBottom: "30px",
  },
});
