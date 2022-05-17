// Context: Dung de su dung prop tu CompA ma khong phai truyen qua compB
// CompA => compB => compC

// 1.Create context
// 2.Provider
// 3.Consumer
/* 
    //CompA
    export default const ThemeContext = createContext()
    <ThemeContext.provider value={theme}>
    ...
    <ThemeContext.provider />

    //CompC
    import { ThemeContext } from './App';
    const theme = useContext(ThemeContext)
*/