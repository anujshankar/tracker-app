const app = {
  background: 'black',
  cardBackground: '#FFFFFF',
  listItemBackground: '#FFFFFF',
};

const brand = {
  brand: {
    primary: 'black',
    secondary: '#17233D',
  },
};

const text = {
  textPrimary: '#222222',
  textSecondary: '#777777',
  headingPrimary: brand.brand.primary,
  headingSecondary: brand.brand.primary,
};

const borders = {
  border: '#D0D1D5',
};

const tabbar = {
  tabbar: {
    background: '#ffffff',
    iconDefault: '#BABDC2',
    iconSelected: brand.brand.primary,
  },
};

export default {
  ...app,
  ...brand,
  ...text,
  ...borders,
  ...tabbar,
};
