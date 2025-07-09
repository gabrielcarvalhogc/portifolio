import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '{cyan.50}',
          100: '{cyan.100}',
          200: '{cyan.200}',
          300: '{cyan.300}',
          400: '{cyan.400}',
          500: '{cyan.500}',
          600: '{cyan.600}',
          700: '{cyan.700}',
          800: '{cyan.800}',
          900: '{cyan.900}',
          950: '{cyan.950}',
        },
        highlight: {
          background: '{purple.700}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        custom: {
          primaryCustom: '{cyan.500}',
          secondaryCustom: '{emerald.300}'
        },
      },
      dark: {
        primary: {
          50: '{slate.950}',
          100: '{violet.100}',
          200: '{violet.200}',
          300: '{violet.300}',
          400: '{violet.400}',
          500: '{violet.500}',
          600: '{violet.600}',
          700: '{violet.700}',
          800: '{violet.800}',
          900: '{violet.900}',
          950: '{violet.950}',
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
        custom: {
          primaryCustom: '{violet.950}',
          secondaryCustom: '{violet.800}'
        },
      },
    },
  },
  components: {
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{indigo.400}',
            borderRadius: '4px',
          },
        },
        dark: {
          root: {
            background: '{custom.primaryCustom}',
            borderRadius: '4px',
          },
        },
      },
    },
    toolbar: {
      colorScheme: {
        light: {
          root: {
            background: '{cyan.100}',
          },
        },
        dark: {
          root: {
            background: '{custom.primaryCustom}',
          },
        },
      },
    },
    button: {
      colorScheme: {
        light: {
          primary: {
            root: {
              background: '{custom.secondaryCustom}',
              borderRadius: '4px',
            },
            hover: {
              background: '{emerald.400}'
            }
          }
        },
        dark: {
          primary: {
            root: {
              background: '{custom.secondaryCustom}',
              borderRadius: '4px',
            },
            hover: {
              background: '{violet.600}'
            }
          }
        },
      },
    },
  },
});
