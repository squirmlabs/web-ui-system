const nextVariants = {
  display4: 'h1',
  display3: 'h2',
  display2: 'h3',
  display1: 'h4',
  headline: 'h5',
  title: 'h6',
  subheading: 'subtitle1'
};

export function getVariant(theme, variantProp) {
  const typography = theme.typography;
  let variant = variantProp;

  if (!variant) {
    variant = typography.useNextVariants ? 'body2' : 'body1';
  }

  // complete v2 switch
  if (typography.useNextVariants) {
    variant = nextVariants[variant] || variant;
  }

  return variant;
}