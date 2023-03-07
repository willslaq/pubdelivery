import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  logo: {
    width: 100,
  },
  container: {
    display: "flex",
    flex: 1,
  },
  flexControl: {
    justifyContent: "space-between",
  },
  iconButton: {
    color: "var(--text)",
  },
}));
