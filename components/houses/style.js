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
});
