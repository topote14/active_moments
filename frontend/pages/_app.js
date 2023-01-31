import { UserProvider } from "../context/user"
import { ThemeProvider } from "next-themes"
import "../styles/index.scss"

export default function App({ Component, pageProps }) {

  return(
      <ThemeProvider enableSystem={true} attribute="class">
    <UserProvider>

      <Component {...pageProps} />
    </UserProvider>
      </ThemeProvider>
  )
}