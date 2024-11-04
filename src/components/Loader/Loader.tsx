import { FC } from "react";
import { Grid } from "react-loader-spinner";

const Loader: FC = () => {
  return (
    <Grid height="80" width="80" color="blue" ariaLabel="grid-loading"></Grid>
  );
};

export default Loader;
