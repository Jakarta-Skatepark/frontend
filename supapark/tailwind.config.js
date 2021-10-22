module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      base: {
        1: '#FAFAFB',
        2: ' #F5F6F7',
        3: '#EBECEF',
        4: '#C3C7CE',
        5: '#9AA1AD',
        6: '#727C8C',
        7: '#4A576B',
        8: '#21314A',
        9: '#031531',
      },
      primary: {
        1: '#FDEBD9',
        2: '#FBD3B5',
        3: '#F5B28E',
        4: '#EC9270',
        5: '#E06343',
        6: '#C04330',
        7: '#A12821',
        8: '#811517',
        9: '#6B0C15',
      },
    },

    fontSize: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '10px',
      5: '12px',
      6: '14px',
      7: '16px',
      8: '18px',
      9: '20px',
      10: '22px',
      11: '24px',
      12: '26px',
      13: '28px',
      14: '30px',
      15: '32px',
      16: '34px',
      17: '36px',
      18: '38px',
      19: '40px',
      20: '42px',
      21: '44px',
      22: '46px',
      23: '48px',
      24: '50px',
      25: '52px',
      26: '54px',
      27: '56px',
      28: '58px',
      29: '60px',
    },
    padding: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '10px',
      5: '12px',
      6: '14px',
      7: '16px',
      8: '18px',
      9: '20px',
      10: '22px',
      11: '24px',
      12: '26px',
      13: '28px',
      14: '30px',
      15: '32px',
      16: '34px',
      17: '36px',
      18: '38px',
      19: '40px',
      20: '42px',
      21: '44px',
      22: '46px',
      23: '48px',
      24: '50px',
      25: '52px',
      26: '54px',
      27: '56px',
      28: '58px',
      29: '60px',
    },
    margin: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '10px',
      5: '12px',
      6: '14px',
      7: '16px',
      8: '18px',
      9: '20px',
      10: '22px',
      11: '24px',
      12: '26px',
      13: '28px',
      14: '30px',
      15: '32px',
      16: '34px',
      17: '36px',
      18: '38px',
      19: '40px',
      20: '42px',
      21: '44px',
      22: '46px',
      23: '48px',
      24: '50px',
      25: '52px',
      26: '54px',
      27: '56px',
      28: '58px',
      29: '60px',
    },
    borderRadius: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '10px',
      5: '12px',
      6: '14px',
      7: '16px',
      8: '18px',
      9: '20px',
      10: '22px',
      11: '24px',
      12: '26px',
      13: '28px',
      14: '20px',
      15: '32px',
      16: '34px',
    },
    extend: {
      fontFamily: {
        sans: ['Andika New Basic', 'sans-serif'],
      },
      lineHeight: {
        'leading-none': '0',
        'leading-tight': '16px',
        'leading-snug': '24px',
        'leading-normal': '32px',
      },
      backgroundOpacity: {
        16: '0.16',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
