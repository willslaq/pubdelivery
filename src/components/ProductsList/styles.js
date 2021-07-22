import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 8,
    paddingRight: 8,
  },
  productCard: {
    maxWidth: "100%",
    marginBottom: 5,
    padding: 10,
    color: "var(--text)",
    backgroundColor: "var(--soft)",
  },
  button: {
    backgroundColor: "var(--secondary)",
    color: "var(--white)",
  },
  alignItems: {
    display: "flex",
    alignSelf: "center",
  },
}));
