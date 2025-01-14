import { alpha, Theme, PaletteMode } from '@mui/material';
import { createTheme, Shadows } from '@mui/material/styles';

import palette from './lightPalette';
import darkPalette from './darkPalette';
import typography from './typography';

export const base = 8;

declare module '@mui/material/styles' {
  // Custom color palettes
  export interface Palette {
    border: Palette['primary'];
    logo: Palette['primary'];
    backdrop: Palette['primary'];
    static: {
      main: string;
      white: string;
      brand_blue: string; // Added property
      middle_blue: string;
      light_blue: string;
    };
    switch: {
      black_white: string;
      blue: string;
      blue_white: string;
    };
    neutrals: {
      dark: string;
      main: string;
      light: string;
      background: string;
    };
    links: {
      main: string;
      hover: string;
    };
    shadow: {
      main: string;
    };
  }
  export interface PaletteOptions {
    border: PaletteOptions['primary'];
    logo: PaletteOptions['primary'];
    backdrop: PaletteOptions['primary'];
    static: {
      main: string;
      white: string;
      brand_blue: string; // Added property
      middle_blue: string;
      light_blue: string;
    };
    switch: {
      black_white: string;
      blue: string;
      blue_white: string;
    };
    neutrals: {
      dark: string;
      main: string;
      light: string;
      background: string;
    };
    links: {
      main: string;
      hover: string;
    };
    shadow: {
      main: string;
    };
  }

  export interface TypeBackground {
    main: string;
    light: string;
  }

  // Custom color properties
  export interface PaletteColor {
    background?: string;
  }
  export interface SimplePaletteColorOptions {
    background?: string;
  }
}

declare module '@mui/material/SvgIcon' {
  export interface SvgIconPropsColorOverrides {
    border: unknown;
  }
}

declare module '@mui/material/Button' {
  export interface ButtonPropsSizeOverrides {
    stretched: true;
  }

  export interface ButtonPropsColorOverrides {
    background: true;
  }
  export interface ButtonPropsVariantOverrides {
    danger: true;
  }
}

const createSafeTheme = (mode: PaletteMode): Theme => {
  const isDarkMode = mode === 'dark';
  const colors = isDarkMode ? darkPalette : palette;
  const shadowColor = colors.primary.light;

  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...colors,
    },
    spacing: base,
    shape: {
      borderRadius: 8,
    },
    shadows: [
      'none',
      isDarkMode
        ? `none`
        : `0 1px 4px ${shadowColor}0a, 0 4px 10px ${shadowColor}14`,
      isDarkMode
        ? `none`
        : `0 1px 4px ${shadowColor}0a, 0 4px 10px ${shadowColor}14`,
      isDarkMode
        ? `none`
        : `0 2px 20px ${shadowColor}0a, 0 8px 32px ${shadowColor}14`,
      isDarkMode
        ? `none`
        : `0 8px 32px ${shadowColor}0a, 0 24px 60px ${shadowColor}14`,
      ...Array(20).fill('none'),
    ] as Shadows,
    typography,
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: ({ theme }) => ({
            ...theme.typography.body1,
            color: theme.palette.text.secondary,
          }),
        },
      },
      MuiButton: {
        variants: [
          {
            props: { size: 'stretched' },
            style: {
              padding: '12px 48px',
            },
          },
          {
            props: { variant: 'danger' },
            style: ({ theme }) => ({
              backgroundColor: theme.palette.error.background,
              color: theme.palette.error.main,
              '&:hover': {
                color: theme.palette.error.dark,
                backgroundColor: theme.palette.error.light,
              },
            }),
          },
        ],
        styleOverrides: {
          sizeSmall: {
            fontSize: '14px',
            padding: '8px 24px',
          },
          sizeMedium: {
            fontSize: '16px',
            padding: '12px 24px',
          },
          sizeLarge: {
            fontSize: '16px',
          },
          root: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius,
            fontWeight: 'bold',
            lineHeight: 1.25,
            boxShadow: 'none',
            textTransform: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          }),
          outlined: {
            border: '2px solid',
            filter: 'brightness(0.9)',
            '&:hover': {
              border: '2px solid',
              backgroundColor: 'transparent',
              filter: 'brightness(1.1)',
            },
          },
        },
      },
      MuiAccordion: {
        variants: [
          {
            props: { variant: 'elevation' },
            style: ({ theme }) => ({
              border: 'none',
              boxShadow: '0',
              '&:not(:last-of-type)': {
                borderRadius: '0 !important',
                borderBottom: `1px solid ${theme.palette.border.light}`,
              },
              '&:last-of-type': {
                borderBottomLeftRadius: '8px',
              },
            }),
          },
        ],
        styleOverrides: {
          root: ({ theme }) => ({
            transition: 'background 0.2s, border 0.2s',
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.palette.border.light}`,
            overflow: 'hidden',

            '&::before': {
              content: 'none',
            },

            '&:hover': {
              borderColor: theme.palette.secondary.light,
            },

            '&:hover > .MuiAccordionSummary-root': {
              background: theme.palette.background.light,
            },

            '&.Mui-expanded': {
              margin: 0,
              borderColor: theme.palette.secondary.light,
            },

            '&.Mui-expanded > .MuiAccordionSummary-root': {
              background: theme.palette.background.light,
            },
          }),
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            '&.Mui-expanded': {
              minHeight: '48px',
            },
          },
          content: {
            '&.Mui-expanded': {
              margin: '12px 0',
            },
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: theme.spacing(2),
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius,
            boxSizing: 'border-box',
            border: '2px solid transparent',
            boxShadow: 'none',
          }),
        },
      },
      MuiDialog: {
        defaultProps: {
          fullWidth: true,
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: theme.spacing(3),
          }),
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderColor: theme.palette.border.light,
          }),
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          outlined: ({ theme }) => ({
            borderWidth: 2,
            borderColor: theme.palette.border.light,
          }),
          root: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius,
            backgroundImage: 'none',
          }),
        },
      },
      MuiPopover: {
        defaultProps: {
          elevation: 2,
        },
        styleOverrides: {
          paper: {
            overflow: 'visible',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          sizeSmall: {
            padding: '4px',
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          standardError: ({ theme }) => ({
            '& .MuiAlert-icon': {
              color: theme.palette.error.main,
            },
            '&. MuiPaper-root': {
              backgroundColor: theme.palette.error.background,
            },
            border: `1px solid ${theme.palette.error.main}`,
          }),
          standardInfo: ({ theme }) => ({
            '& .MuiAlert-icon': {
              color: theme.palette.info.main,
            },
            '&. MuiPaper-root': {
              backgroundColor: theme.palette.info.background,
            },
            border: `1px solid ${theme.palette.info.main}`,
          }),
          standardSuccess: ({ theme }) => ({
            '& .MuiAlert-icon': {
              color: theme.palette.success.main,
            },
            '&. MuiPaper-root': {
              backgroundColor: theme.palette.success.background,
            },
            border: `1px solid ${theme.palette.success.main}`,
          }),
          standardWarning: ({ theme }) => ({
            '& .MuiAlert-icon': {
              color: theme.palette.warning.main,
            },
            '&. MuiPaper-root': {
              backgroundColor: theme.palette.warning.background,
            },
            border: `1px solid ${theme.palette.warning.main}`,
          }),
          root: ({ theme }) => ({
            color: theme.palette.text.primary,
            padding: '12px 16px',
          }),
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& .MuiTableCell-root': {
              borderBottom: `1px solid ${theme.palette.border.light}`,
            },

            [theme.breakpoints.down('sm')]: {
              '& .MuiTableCell-root:first-of-type': {
                paddingRight: theme.spacing(1),
              },

              '& .MuiTableCell-root:not(:first-of-type):not(:last-of-type)': {
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(1),
              },

              '& .MuiTableCell-root:last-of-type': {
                paddingLeft: theme.spacing(1),
              },
            },
          }),
        },
      },
      MuiTableBody: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& .MuiTableCell-root': {
              paddingTop: theme.spacing(1),
              paddingBottom: theme.spacing(1),
              borderBottom: 'none',
            },

            [theme.breakpoints.down('sm')]: {
              '& .MuiTableCell-root:first-of-type': {
                paddingRight: theme.spacing(1),
              },

              '& .MuiTableCell-root:not(:first-of-type):not(:last-of-type)': {
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(1),
              },

              '& .MuiTableCell-root:last-of-type': {
                paddingLeft: theme.spacing(1),
              },
            },

            '& .MuiTableRow-root': {
              transition: 'background-color 0.2s',
              '&:not(:last-of-type)': {
                borderBottom: `1px solid ${theme.palette.border.light}`,
              },
            },

            '& .MuiTableRow-root:hover': {
              backgroundColor: theme.palette.background.light,
            },
            '& .MuiTableRow-root.Mui-selected': {
              backgroundColor: theme.palette.background.light,
            },
          }),
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.primary.main,
          }),
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: ({ theme }) => ({
            '&.MuiButton-text:hover': {
              backgroundColor: theme.palette.background.light,
            },
            '&.MuiMenuItem-root.Mui-selected': {
              backgroundColor: theme.palette.background.light,
            },
          }),
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: ({ theme }) => ({
            '&:focus-within, &:hover': {
              '& .MuiFormLabel-root': {
                color: theme.palette.switch.black_white,
              },
              '& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused ': {
                color: theme.palette.switch.black_white,
              },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.switch.black_white,
              },
              '&.MuiOutlinedInput-root .MuiSvgIcon-root.MuiSelect-iconOpen  .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: theme.palette.switch.black_white,
                },
            },
          }),
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: ({ theme }) => ({
            fontSizeSmall: {
              width: '1rem',
              height: '1rem',
            },
            '&.MuiSelect-iconOpen + .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.switch.black_white,
            },
          }),
        },
      },

      MuiFilledInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 4,
            backgroundColor: theme.palette.background.paper,
            border: '1px solid transparent',
            transition: 'border-color 0.2s',

            '&:hover, &:focus, &.Mui-focused': {
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.switch.black_white,
            },
          }),
        },
      },
      MuiSelect: {
        defaultProps: {
          MenuProps: {
            sx: {
              '& .MuiPaper-root': {
                overflow: 'auto',
              },
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: ({ theme }) => ({
            ...theme.typography.body2,
            color: theme.palette.background.main,
            backgroundColor: theme.palette.text.primary,
            '& .MuiLink-root': {
              color: isDarkMode
                ? theme.palette.background.main
                : theme.palette.secondary.main,
              textDecorationColor: isDarkMode
                ? theme.palette.background.main
                : theme.palette.secondary.main,
            },
            '& .MuiLink-root:hover': {
              color: isDarkMode
                ? theme.palette.text.secondary
                : theme.palette.secondary.light,
            },
          }),
          arrow: ({ theme }) => ({
            color: theme.palette.text.primary,
          }),
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.backdrop.main, 0.75),
          }),
        },
      },
      MuiSwitch: {
        defaultProps: {
          color: isDarkMode ? undefined : 'success',
        },
        styleOverrides: {
          thumb: () => ({
            boxShadow:
              '0px 2px 6px -1px rgba(0, 0, 0, 0.2), 0px 1px 4px rgba(0, 0, 0, 0.14), 0px 1px 4px rgba(0, 0, 0, 0.14)',
          }),
        },
      },
      MuiLink: {
        styleOverrides: {
          root: ({ theme }) => ({
            fontWeight: 700,
            color: theme.palette.links.main,
            textDecoration: 'none',
            '&:hover': {
              color: theme.palette.switch.blue_white,
            },
          }),
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.border.light,
          }),
        },
      },
    },
  });
};

export default createSafeTheme;
