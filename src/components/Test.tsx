import Typography, { TypographyProps } from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

const variants = [
  "h1",
  "h3",
  "body1",
  "caption",
] as readonly TypographyProps["variant"][];

function TypographyDemo(props: { loading?: boolean }) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

export default function SkeletonTypography() {
  return (
    <Grid container spacing={8}>
      <Grid size="grow">
        <TypographyDemo loading />
      </Grid>
      <Grid size="grow">
        <TypographyDemo />
      </Grid>
      <Box
        sx={{
          p: 8,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rounded"
          width={210}
          height={118}
        />
      </Box>
    </Grid>
  );
}
