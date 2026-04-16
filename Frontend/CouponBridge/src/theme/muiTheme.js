import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    textTransform: 'none'
                }
            }
        },
        MuiToggleButton:{
            styleOverrides:{
                root:{
                    textTransform: 'none'
                }
            }
        },
        MuiSvgIcon:{
            defaultProps:{
                fontSize: 'small'
            }
        }
    }
});