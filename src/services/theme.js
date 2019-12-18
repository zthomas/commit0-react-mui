import { createMuiTheme } from '@material-ui/core/styles'

// ref: https://material-ui.com/customization/default-theme/

const PRIMARY_COLOR = '#4637EE'
const MAX_WIDTH = 1024
const INPUT_HEIGHT = 50
const BOX_SHADOW = '0px 5px 20px rgba(35, 43, 43, 0.2)'

const palette = {
  primary: getColorPalette(PRIMARY_COLOR),
  secondary: getColorPalette(PRIMARY_COLOR),
  green: '#34A454',
  greenBg: '#EBF9EC',
  purple: PRIMARY_COLOR,
  purpleBg: '#F3F2FF',
  grey1: '#232B2B',
  grey2: '#8B9193',
  grey3: '#8B9193',
  grey4: '#F2F2F2',
  grey5: '#F6F6F6',
}

const shape = {
  borderRadius: 5,
}

const fontFamily =
  '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;'

const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

const theme = {
  shape,
  typography: {
    htmlFontSize: 15,
    useNextVariants: true,
    fontFamily,
    lineHeight: 1.47,
    fontWeight: 300,
    body1: {
      fontSize: '1rem',
      lineHeight: 1.47,
      fontWeight: 300,
    },
    h1: {
      fontWeight: 'bold',
      fontSize: '2.33rem',
      lineHeight: 1.72,
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '1.67rem',
      lineHeight: 1.72,
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      lineHeight: 1.72,
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '1rem',
      lineHeight: 1.72,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.72,
    },
    h6: {
      fontWeight: 500,
      fontSize: '0.8rem',
      lineHeight: 1,
    },
  },
  palette,

  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiInput: {
      disableUnderline: true,
    },
    MuiInputLabel: {
      shrink: true,
    },
  },

  shadows: ['none', ...Array(24).fill(BOX_SHADOW)],

  overrides: {
    MuiTypography: {
      h6: {
        fontWeight: 'bold',
      },
    },

    // -- Buttons -- //
    MuiButton: {
      root: {
        fontStyle: 'initial',
        padding: '15px 16px',
        fontSize: '1rem',
        lineHeight: 1.2,
        textTransform: 'capitalize',
        transition: 'all .1s ease',
        fontWeight: 'bold',
      },
      contained: {
        color: palette.grey2,
      },
      outlined: {
        padding: '13px 18px 15px',
      },
    },
    MuiFab: {
      extended: {
        textTransform: 'capitalize',
        fontSize: '1rem',
        fontWeight: 500,
        height: 40,
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: '1.2rem',
      },
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'none',
        },
      },
    },

    // --- Structural --- //
    MuiGrid: {
      container: {
        maxWidth: MAX_WIDTH,
        margin: 'auto',
      },
    },
    MuiTabs: {
      root: {
        color: defaultTheme.palette.text.primary,
      },
    },
    MuiAppBar: {
      root: {
        background: 'white !important',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: defaultTheme.spacing(2),
      },
    },
    MuiToolbar: {
      root: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
      },
    },

    // --- Dialog --- //
    MuiDialogTitle: {
      root: {
        padding: '15px 24px',
        borderBottom: `1px solid ${defaultTheme.palette.divider}`,
        boxShadow: '0 0 6px -3px',
      },
    },
    MuiDialog: {
      paper: {
        margin: 5,
      },
      paperScrollPaper: {
        maxHeight: 'calc(100% - 10px)',
      },
    },

    // --- Form Elements --- //
    MuiInput: {
      root: {
        fontSize: 16,
        borderRadius: shape.borderRadius,
        backgroundColor: palette.grey4,
        '&:focus': {
          boxShadow: `0px 0px 0px 2px ${palette.primary.main}`,
          background: defaultTheme.palette.common.white,
        },
      },
      input: {
        minHeight: INPUT_HEIGHT,
        padding: '10px 16px',
        boxSizing: 'border-box',
        transition: 'all .1s ease',
      },
    },
    MuiSelect: {
      select: {
        lineHeight: '30px',
        width: '100%',
        '&:focus': {
          borderRadius: shape.borderRadius,
        },
      },
      icon: {
        fontSize: '1.25rem',
        top: 'calc(50% - 10px)',
        right: 3,
      },
    },
    MuiListItem: {
      root: {
        '&.Mui-selected': {
          backgroundColor: palette.primary.main,
          color: 'white',
        },
        '&.Mui-selected:hover': {
          backgroundColor: palette.primary.main,
          color: 'white',
        },
      },
      button: {
        '&:hover': {
          backgroundColor: palette.primary.main,
          color: 'white',
        },
      },
    },
    MuiMenuItem: {
      root: {
        height: INPUT_HEIGHT,
      },
    },
    MuiNativeSelect: {
      select: {
        width: '100%',
      },
    },
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
    MuiFormLabel: {
      root: {
        fontWeight: 500,
      },
    },
    MuiInputLabel: {
      shrink: {
        transform: 'translate(0, -3px) scale(0.9)',
      },
    },
    MuiInputAdornment: {
      positionStart: {
        marginRight: -defaultTheme.spacing(1),
        marginLeft: defaultTheme.spacing(1),
      },
    },
    MuiSlider: {
      thumb: {
        border: '2px solid',
        backgroundColor: 'white',
        width: 22,
        height: 22,
        marginTop: -8,
      },
      valueLabel: {
        left: 'auto',
      },
      track: {
        height: 5,
      },
      rail: {
        height: 5,
      },
      mark: {
        height: 5,
      },
    },
    PrivateValueLabel: {
      circle: {
        transform: 'none',
        padding: '0 16px',
        borderRadius: 32 / 2,
        width: 'auto',
        minWidth: 32,
      },
      label: {
        whiteSpace: 'nowrap',
        fontWeight: 'bold',
        transform: 'none',
        '&::after': {
          content: 'years',
        },
      },
    },

    // --- MISC --- //
    MuiExpansionPanel: {
      root: {
        flex: 1,
        boxShadow: 'none',
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: 0,
        '&$expanded': {
          margin: 0,
        },
      },
      content: {
        margin: 0,
        '&$expanded': {
          margin: 0,
        },
      },
    },
  },

  // -- Animations --- //
  transitions: {
    duration: {
      shortest: 75,
      shorter: 100,
      short: 150,
      standard: 200,
      complex: 275,
    },
  },
}

function getColorPalette(col) {
  return {
    main: col,
  }
}

export default createMuiTheme(theme)
