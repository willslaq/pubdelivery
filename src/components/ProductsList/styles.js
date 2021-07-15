import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 20,
    paddingBottom: 20
  },
  productCard: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    color: 'var(--text)',
    backgroundColor: 'var(--soft)'
  },
  button: {
    backgroundColor: 'var(--secondary)'
  }
}));