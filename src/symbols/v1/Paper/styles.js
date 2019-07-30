export const styles = (theme) => {
  const shadows = {};
  theme.shadows.forEach((shadow, index) => {
    shadows[`shadow${index}`] = {
      boxShadow: shadow
    };
  });

  return {
    root: {
      backgroundColor: theme.palette.background.paper
    },
    rounded: {
      borderRadius: 2
    },
    ...shadows
  };
};
