import './App.css'
import React, { Component, Fragment } from 'react'
import NoteApp from './components/NoteApp/NoteApp'
import 'bootstrap/dist/css/bootstrap.css'
import { Alert, Button, Accordion, Badge, Card, Modal } from 'react-bootstrap';



function AdditionalContentExample() {
  return (
    <Alert variant="success" className='mt-2 p-2'>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMUExYUFBQXFhYYGRocGRkYGSIiHx0cHB8cHBkdICEdICoiHyEnHRoYIzQjKC0uMTExHSI2OzYwOiowMS4BCwsLDw4PHRERHTgoIigyMDA7ODAyMDUyODIwMDAyMDAyLjAwODowMDgwMDIwMDAwMjAwMDAwMjAwMDAwMDAwMP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEMQAAIBAgQDBgMECAUEAQUAAAECEQMhAAQSMQVBUQYTImFxgTKRoSNCUrEUYnKSwdHh8AczgqLxFSRDwtIWNHOys//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EADARAAICAQMCBQQABgMBAAAAAAECABEDEiExQVEEEyJhcTKBkaEUscHR8PFCQ+Ez/9oADAMBAAIRAxEAPwD59U7trvTAIMM9MgehK/CfbTPW2INw3V/lEPt4fhe/6rb7fdLfXDJEy7Ehg1EmxkeEz1BJ0+oY+mO5rh9ZVCqAwI+IGZQSeZsDtHl1wC2k1x8zX5IcXsR7c+20X0aRNKrSMysVNJEEFbN9CPlhkeDmugAr0wQBppOO6gEBhpmVaZ3mTiPDa+llDO1QEkLYxBMRqcat+UDljmXyynXl2JFSnUK0mIGko1wpM2DGSOUtyBOAfr+fvGC3irtY7e8I4RwXMZY1u+plQ1FgDFj4lNmHh+uM5QoFrACb7ET8pnGk4NTqoKyayaYpMdAY6Q2pY+zaCrDxDYYztGo8Aa2C3sGMC/QHAQFsh+BGy0vh1sdTLVy1RdQdGWQDOk3AYSduha5/5ErAQIBHUTzGDVpHUFVzqOoSCYgAkgn29ve1FZpVQVgib9RJF/Q4ug9ZB7THk+gEd5wU1CEggnmv8Rhl2FJXOZepIhagDejSP44AqKugQCH59Di3hagOjzBV1MeQIOLld69pBG3s944yz0qC8Sp1gD41RBG7ansOnhBPtgGhnK/dqKVbQphQgXS5nbSVUl+kgz5YK7W0tGfzEEAv41mI8QDT4jAiT54RuGnUW1EgXmfqMY1q6novq03I5t2LHWWLAkEMTqB6Gb4LyNqGZWd0Rv3Xj/3+uLRxSm8DMoaqxArLaonS+1QeTX88VdyiGqKdQVUamQGAI5q0EMLHwm18UfTpO+8gofUNtotFEhQwO/8AX+WPUqbNMCYucSKkKD5DFppsl7HUP7/PFlEysaJlFapqIgYmjAIRMG9o8+uPKpgOFIAO/LEKp1SefpjuJ09l0BYdI549WXxNBFvPpgmsoIUCAbzfpHXEcvl/C7HlPPoMHT0gvrKAvhABv7euOLSYtBGw54kcu0gEH/jHGEExhCvedcirETFsRjn1v88Tvp335euLq1UMoULewnyE46toblS1YXTG9vnjhSCJnFtNRq8UCPLn7Y60EkxI9cDTOuE5khlpsFmVjeLoSLgeRXnj2RzOhkaAII2HIHqb/wBnFtEhcvPMPHX41tz/AFMQy1NW+JWIneYk8gAB9Zt8gUK7zWG6+wg+do6alReSuw+TEY9SEc8G8bearLaJ1fvgP/7YHoDny/ucOomfJsxHuZUoPucTdYE47VqamJ+UdMSqUtO+DUSVKOWJMIx5Fn1OPOsYHSdIC2JFccVccYY6GROPY9GOYWNGCI8DS0hhEA/7SPnjq1nXYlZva3vG0+eKaSFoABJJgAXJPkBfGm4fwlEFMVmqd8SfsxBUTa48xcicUzZ8aL6/xzDgwZXb0c9+Jb2fCZlT3xl9XhcwsWEQwjUZ1TqndfPAPEMrS/S2SrUCB1A1CCkpIF7RYAT67YJ4w4oE0zpaoNgp8Kr1EfQeuEeYGqkhElqbx1JD3HrcP+9jzsaM95apbnqPlCgYSbaiT89pq63DCEqViQx7oqXW61ASulpGzgCDO4giTqJynDVGhSJLklR4SQtzJFrtceSzO8aXHC6fdirTZyXam0op8CxHxHZn5QNryZsFfBszTVQGUm5mGYHf8JOhh7fPFK0uQN9hO168ak7bmEnhsVFDU2TV4ZRpA1SplWlgLzM4V0cqzoJZJ1MNLNBnnE2M+uHGRyuW1eCpoJ5FYIYHwkHYe557WxRwXhtauKhVCZqEMdlUgA6riN5kTN9ujayrWTW3WSbGHWhR36SeS4DXzDLSgKFE94RYAWgkbnaB78sC8d4T3HgLKzcmUm/kQR088benWp5XL6e8V6kTUIP3unoNh/XHz3P5h61RqmlmE2gYkPGu+U19I2+YP4JAm93HXaHMKa9Gu66hWy6zPI6YnyuN+W+AuE5+FIpJRViT/mIpYSeTkX97+uC8lVNWnRDBENCoEkoW+zqCp8SlhIkBYt8XnhFWYK7KFKkMQRuARZhJv8QJ54qjKWJvaUyFgo0izGGbz+ZpuwZ3QsZOk6ZPM+CAfbAXelmJLFgRaSbcjv74nTzoWJBdQI0sPu9ASCBsORA6Y9me6saVXwEn7N1IZPeSGB6zPUDFSy6SNvtMulywbf4MDor8IJIUgg+04sqqZVdxMD3/AOMWZcLpYML6rH5YnQoAhwWuIKXsdzjRiNoJkyinMorkoDTIFjynnfHkmmW1KRItP9Ri/wDRmbXqIGkA+Lc/3GIENUaNzHkMMTJwaii6lk2g8vljtenZivw35+3ri2neEaw5QJuP7OIIqjUCLyYP0GBYqHrPVaGmIuefMYiAxVmmAZ5e2J0UAa5ItyOIrSbw8gSLnbrgEzpBmkqANjzNrY6zeKQAI6eeLmaHmxgRYQL+mOKPCW0gztJ25DHQyphMtpN9sXVFGlQGnqOnX64sA1QqhiALxv8A3OLshVVC5vtAHpvjhOMlwxfDVFoBpnxepX/3xKlRSo0ltKg/dWQq2HMg3I5AySBuRjnDUnvAbakkn/WhP0weaVOoAiOqgMpI0tJ8L3NtMATcmAJmNylS4PpHwYNxlUAEKdRVIJ6BFF/OxwFlqJPKQOmGXE0pBVM64SFPwz43AMTtb5YUCQIB9ffDjaSybsZ4KJtsPzxbUo2knz+f9P4YoRbxyG/8sW1SSLm2OA2idZVTnf5Y5UY7nHVPPEW64U8Q9Z5ccqHHgcRYYU8QzwxycdOIascdoZtOHCkj9zlPHUNmrML/AKwHQDeB5ScWcXzFGgrKp1ubMx3Y7x5La8fmcSpVv0LL92rAu0NUO6rOygbGYjzudsZnO5gVqkpT0Fo8CktJ5xN/bHl48PnPqJtR17/+T2Xz/wAPjpRTHgdpU2ZLElrkmZ/vlgjKsDK/jBF+u6/7gB6E4Y8P7H5hxqcLQTrVMH9wX+cYNOS4dloNSo2YqCDY6VkdApn5k425PE41Gi79hPOxYMrOHrrdmHZTuqyRTpBHNItT0JZ1iGRoAiorSJ+8ADzEKcn2XIpj9IIowPxS25+6BH1xLPds6mnTRRaKeke8D+WEtWpVreJtTiR4nOlLmB6/M2BMWOMmvIxtRX7no6F00d97jl81kqPwUzmKg+89wPUCF+eAeJdpsxV8PeaR+FDsPXYe046OBRp71/CSYAKhbAszSpPhAuTYwDbbCZaLCF5m8dJ/pgHGOSbM4GvpFSa1GIYCTqgb7nph3wyhlQqpXpuWAMsC28z91ton7uAuHUNRDC6JJ8yBGth5nl5DBozOqvqkaVvcWNoUmNpBj2xtxeGDLZ6zHn8WyNpXpzL6/wCjU6VVqIP3NmkgBgwYhmkDUEG3OLzgJ8gjtSaVerWQ1WBEKJPwwDMyHJI6bYJ4U6u9RCFiovdgjqfg/wB2nAGSX7KzJTKVCdTEydSxpChTIhWN95OJtjGNq5BlcebzULHYjtJNUS0U6a7GNIMzzBsY3m/TzxbmKKEyKYQKyrUZATciTAYyBIInVGJZZNJsaNUSZLBiOUiIAv5g48irTkwYNmXVqlDExYbWImYIBm2O9IPP4MIDkXX5EXUcg7NUpqNRHIb+oG59sSamSult4IFhPobg4sAWrXJPgDDwsxgBlUXJPIkfXDepmnHhqKKiWVSw8TQI1a2BViTe+qxgRh8bkChI5cKs1nb9xA9I6RYA6eU3xzTqgjVqi95nDnMZOmdTJIAF+7PiWNwyEke6tGAGy7GSpFQAXIFwOpUiR6i3niy5AZmfAy+8CRbKQb9I/sY9AKg/e1XuL3nbfF7Vj0FrCJt9cRpFRHh2P088PJSt11B2NiOi228sep0w0KLQJJLe3PFkLMzu3oPkPTESouVMTYDy9/fHXOlaMQpAN2MADnNh9MWim1lKgBbmV9hP98sdbLgnwGQNp6+UE7R9cQNIlZ1SSY03nyx286dpVdIYgCTYH6CMSVNBUHexsZ29PPHGc2W4C8idumOA+5Plyx1wVDqDs5diN6dQCbCyk7m24+mCxQQUXppVpgnSWbxEt4rjwKYQTab2kxsoHDzLFZgd3Ut5922DaGXphWQV6YLASQSWsQTYbCAfzPKFLbzQiEqK94LxIIqU5Icd2YKzBh32kA8+mFatAwy4zTVVohXFRQr+ICAfG3L1wtpvBmBJ6gH88MpiZl9f2H8pHyx2o3LHHB22nHXA5DBHEnU4kn0xx4646o67euOMRgdIOs8Zi+IE3xMnriIGAYRORiucWMMcjAMebLOUMkkCtXNQL9xDEtzZiJJJ8ogQOpNa9rKdMFMpQC9SFv7k3+ZwGOy60r12VT+F2AP7oMj/AFEY8/DiQRJCjYqpNM+9IMfoMeWuMsALJH4H4nsnSCWNX+TBs9xWvVMPUP7KX+Z2GAlpney/VvnsPn7Ydv2czGgOmg0zsUqKB8iQ0+owuzWSq0/8ymy/tKRP88bcXhkrn8THm8Q4OwP3lvA0TvFlVJ1oSXv4dUONrbi4HXBq8HqVEqVFcRSMFWvFoZouPuDlywrpMFII3H15R74dcSyrKvfLJ78gLeBFqhB9zJ8o5MYTxC6GBXaP4bJ5iENyDFVfMMPiIIAiARdbEQFsFJufQDAMHn8TzJ6Lz9z/AHvgjUCbE93T9tbHf94j2A8sGI1JssZRu8QgAiAo1Hn1ED1nniKbsL7yzmlNdjX2g9CtpQgAXgC0bc568jj1CsFQ3N+YMwOQI8jgUG0YsLSZMefn5GMeuGniFe8I7zSo/FJYiIINtj8ji/PUNVRgo8NYJUUKJ8RmwE3hu9X3wACZ9PzHT2wfQOulBglGtOxWpET6VQn75xn8Strq7TX4NqYqesHyeZ7skWBO4cEX6Yv/AOqVCCW+QjbqJmcE5/ho1zTrLpqKGAbUWUEfC5CxqiIE6iBJ6njcLq6QFam97f1LCBHtiKBAoY195pyeZZUEj4gNOhKyBeTttdbbmd0A/wBWIJVamVZHIt9xiIi98MszkdALLUp6wAe5RtZlfEWJEBQCu1/XC7OINZ07eErylSAV+hE+mHxlS5UcHf8AEz5lYIGJ3G39pPLZ3S8sikz8S+A+RlLb3uDgmlUp1PEtQU6gv4hpDRe8SgP6wifw88LyDEx88QNP5zcYo2IdNpFc7DY7iGoYcrVTxE7wLdLCJWOhHUTYYqrKFglbGSGVjB8tjBGxBuOeL8u6nTTeGWxVgTK89J6rIuvuL4OWmFVlChwQWdfKCEKkAa5a2qxF7bwlshqW0plF9f3Eh0QN5i8geW15x4UFvDCw5yJ8h8sF5jI6fFqim15bdSdlaNiYMHY+WwDFORMC0SJufniqkMLEyuhQ0Z1sobwVMRsRz/sYg1NhyNv7/liVSmRBIMNtzxW6lTBsemCRADOm3Q/35jHNWOqT+Ie+I6j5Y6oYVkBd/KlUn3Uj+OO0nGll0tBgWYST+4f5Y5kJ01iBP2cCOpdBHyxCkGj4ZM81H57/APOJMd5sxL6R95bxGnK0VQEjQ1hf77dB1wBoIvHltg/ieod0DYikJi271DsPUYoTNOsQWAEwOV98OgFSHiCdZ+38oOyT/O/yxIJyMx5f1wVRz5WBYgHVdQZPn/fTEaub1TKrJMk7W6eVv44pQkd4GE5/LHqlO9pPtGCe8FzpHlHLHXqraEsOpmT/AHfAoVO3lAp22A8zM4qVDgmR0vjgicKxURgpMoaly3PQY8KXlgpEtt74Ky/CqtQSlMsJifP+yMSLqJYYyZUagJ8W/U2+u2Lcut9SMVI5g8/UXGKKlJonQwQ31QY+cYgtEROrf2wB4sjZl/EJ8PvYMYUaTNUB0is5MeItJJtchlb3nGlzFWll8uFps4q1DDMrNEL4m3cWkgSLmLzGBOzGWWlRq5hz4wPAZ2LAQINp59YJ2wJxIO1enl0WWCokdWYd5U9AGcgn9XyxmfxCu4A2A5+ZrXG2PHZ3JjLgWTp5iWrJTZEBapUgrpA2HJ2Y9SY5XOFXa3i5rVNKCNQ0og+5T5DpLbk4cdqK6ZWguWTkA9Uj77nYemx9NOMfSViZ3q1bDyU2J8p29J/EMRZi7X0l1XSPeX5CmuoGCyUjYAE94/M/CRAA58gvOcMcxl3K1j3LIjqrgzqUlSRMiwJDG1vh2xHhvDCVZqZlVA1aoBDRfdry21vbDDL5eGDVWEaSpYgXLCwGhSTva594s4IA2jaCTZmWC4kEw2TKoqkVFuGKyJBkAFbk6Y0kE+Em/wAhnyxDEC/MGIt6csalzgzG/hSN4IE5csX5QidJsrAq1uRFiOdvi/0jE+4xLuPlhvNBFSYwspBEuZA2XchdNdatyCeav3lpj40UzGzrgSpmwyaagDQIDjcDltZ/e/ngnvBTenVZdSyFcdYBH+6nIv8AeQHE6fEAaru1NGa/dqtNWpqsyViFBI213+uIY2C2JsyJqAN/Mo76KQWmoVCAahkaqhF9JP3VHJOZEmTEUNBA6odIn8Jl0/8Acewwe7uGDaKQBFhAgzv4VtIiImcQ4rcCqFRDOlgggFTdTHKGEE/rDFC+4btI+UKK3z0+OIBUW8x6j2xIUiLX1j3BWMEpSJIIuSZ9RE4vo5QsCEGw1avKNjyGNXmDmYfJPFReKY+AFY3DEeW39ME8LrN8EEr1USUJI8UD7sgEjykXAwwrcM0saeksTdFnwzAG4gtN72A54qq1CANTbbooEesCFE8+eJPkDihLY8LIdTGpZSUie80kwQRch13JJAPLSwYG9tjfA2b4aA7MzhQZIlTygHYC45zEzPPBGUfWvdCdYujEg+egkjYnboT5nBFKoW1KzmW+FogyJH4QLeKQJ8OrmBjOS6GwZrC48gAIv+8Tf9JMQjozEwLsDIi3iUKNxeYvvgTM5Z0uwI89wT5ESD88O6OSzhj7P4ZPiQXggEAxMkjy69MW0+GlUl2ShJuuvUDGwZbnaYuee0Yc+IA6gzOPDA9CJmD7R1xHyxqKuUyiBn0Vav6gOhR8/EVm2Bm7QtTtlqFCj+sq6m/eff5YPnlvpH52iP4bQfUfxvAMpkqgpsCujvGQKahCAgamJl4m4G2O0csF/wDDrmRCk3Mi9gLfnJtjvEOIVagXvajVGbV8R+6SAoHIXVjG2LFokEKENrAi83i9oibxN/MYmzNfqm7Eg00O0F40ftY2hKY/2KY+ZOA9OGHFEmtUPLWwHop0j6AYq/R74v5oAmLJiLOfmDAE2/PHVWxED5YNp5a+L6OS3xBvEAR08KxitaXliS0cargvZxKil6tTu11aFOmSXImNxAA/PF9DglCnK1tTMPwSFAkAmSLwT6WOFGe6qFsSLerpMmmXPTBeU4aWIgE+nz9vXGn4ZwOn31vHTiRPXow8jy54DzWbrMXW7XIEWWBIKRziNttsLqduZxbGtad5Vl+zR0d7UdadPkYJJk2jlHmcPshw2qiAUBKG8tuSee1rRbCXii1qhAOskmNAmFMAKL7Xi1t8X8RrkOQoJAtOrfz8/XDYVLEkyPiMpAEzWXp1AxYl6dpZrix67SLRbHKmY1XZFIEgErpa+8Bbeszi1KbV6zqCEVBqA0wq9CV6keK4PoTgfOV9R+I+GFTUZMC0nkPTYcrAYlvdTfahbP8AntHnBlNWNZ+ypsk9CWMv6nSI9/PGn7G8J097ncxAJ1PuLBiWiRzYzfkPXCnstwh3WmmqU1d40W1FrIvuBJPkTzGDP8RONaaaZWkZ1GWjn/yYjyA6nGcUGPaPkJYA9Zj+PZ/9Ir1Kr/ACTG0ybDyJNvIT0xVk6RaXMFm9oHJRb0PlYcjjuWpI7Q3+TSkuR954/KQB6A/iwyOs0lYBX1Fo/F4fxC+mxBueYxTeL0qcWq0ErsSNai51RYj5/ngjM0EpxNRde/iibTBJBgkC5BFpF74Cp66bHwmWgXEBhYkLyInn5Y0uS4ZUbTVoAaCJ1BfGrAEMGNzN1ssT88cdpVGB2J3gPDSSQ1ddKMAGYRELOioI2iSkgT4l6HA2eyyNVqCk7LTRiq6hGu4kW3JgmYtabycOcvRFKSR4mtUUAVCy/rk3MgfEGtJBB3wv4pli1WmwU1KWgmmSCYEiVZVBhlMgmOmCnqNCdl9C6qupUvDTG2Jf9MPTFq1NDPEoYiAWUKOUiAV2O6xthlwviGohFZXMWFpMbnlhv4d+hkB4xOqxPV4UWVkYEBhE9DurexAPpI54X8LyAqCpTcuuYo6oUGdQFgoEj72kWNw6nlfaLxVA+hqAYjfQ0EG3I72OM/2ven3lPNZYxUpwKiNGohCNDwDcCADPIL0xyo6n1Si5sbmhAjk1alqBeSPheChPk0SL9bjFOWphtVMvqUrpa2oiRcSuoWsZaNuWHPDeHZfxVMxVavReondCCAXqg1D4F8M3Ph5ERzGKs1R1sUoK60AJKGStjddQE0xe4+EbRM44swNSgUdos4NQkmm/xISLc+Q9ifzGHQyLRAU7/AokqdhygztfpueSzP5taNZK6qVZDorU4g6bCR1ETBPQTjXdzp7upTMrUmCpvpiQ0cwbfPyxNsjA78QvoQX3iDiuRrKoDgKpnwhgdz67eQt5YXHKeX9ZP8sa6lwv9Jrtd2Slp06ypDMdyCBJAIII9PTBWZ4HTUXYK4EwBYi4+czYYZcr1sPxMrBOWMxP6JbaYuBG4NzJHlg2mpbSV062IBYqDD2uAQbsL+qsemHr8KphNepdO/sN557A4Gyxp6ahpNqZRcQQUF9TQw3gkD188Bszsv0mUxKivQPMG4i3eHumadXh7wH/AMl4H7PhKz1XGbq5AqdLLDKb7yf7GNJl+HrBSDyILEXOq/K5gny3jecMeIcNbSHN2AhiOa/xIxnTMcR9jNObCrmuvSZvJCFYaRJA0knUQhmVj1McjDRthRWykOREAAET+E7A+YIIPpjYtwnTTZ7wAD4RuD5j1G2FVXJmnDMCSNVisTcGI33Gn1eMaEzljYiDAGXSekQV6YL6CfCljpWSCo8XsX1f3OCOEJNbvCLAliSeQkkwBvA9vlg2rlNPj1u2pT3bQF1gCw5E3m9/a8z4Nw+Q9rsVQSfFDQGgRYaWPrB6Yprvcyq46ksjwDvAvjAneQ0zEmLQfn0w34t2Uo0wi0yxcjV4m5c5AX06c8FNRSmyhiAWNhEzFzy2G/tgrjVGnmKqtTRAqC5kKzWsBpMwTMzyxjDvkF3Xt3kMmlHA5mYy3CGNxBB20sD+Rwwy3BGmIvgzPVl7qmVEfaqGjbSrbKfYYGzXFHbNU2oqZkyfukNZJPMEwcOPDMw9RiN40IaUQjiJFHuaKXIL1CeWoAADe/pvYYszKVBl/G0uZltrFpPpa2J1eFRWoo9u7o66jWuaj+LzG3PFGZzqAVWqtppKRoMTqECI6yfzxqRQrCpgyOzg3zOdiqeo12EyuhRefiJv6gDAfDsnUFQ1TbVUJXVYaAWIa53aSAfl5NOw1NUy7Nr1CqzuIsYAC/SGOFXajNk1aQkaQWNmEbnTtMGIxoYczKpoCdzFBk1vUcFtPhRWvLkeIdOdyJtiFLhVRlVtK3VT9Bhj3iN3esqutSYJkhYge9yYxn2GYEKIhRpEsJgWH3umJKxQbSXi3qphcnxOrSkI7AGxE2I6YJbPU3U6gyPyIuvnb4h8zgMr1GOdwDsfng2OZ6xWxRn17h3G8qtD7CqrkLEbMBEElTcE7eQxg+LZ01Ksz4nOkHoD8R+Vh79MZs0mF4PqME5HiJRwzKKkRIbmOk8sQGEA2DK67FGaellR3Zp00LFlDaYNkEG8X33NjHnhhkeIClT1aCHeIqgBwYsE0tphZExqN8JuF8aVq4rd93FUGVYkgDyBAI2tcCcaOo1euq1HhlmVLxc7SAPLnfr0wdJA3iM2/sIkzLlABTkKQASdjzYhHYzNxJkE7CbY1nZjXTpOVPd94SoQqQNWxN9LBgbzsACIGF7UVrnvatFKNFCLKDrrOtrFvFHVvWOuC0zwZ3UtFRNK6FjSiOGGgeYIWSPTriGR6G01YRq2MKrIlMK1Wr3swB3bErMDSzsTqlhELIJm7c8Kc7xsBohtJuoUhQniKyNQkmQRsoM9Zx7s+2VWhUNZkNSpJI2IMCZ08wQbCBMxvGAa+VdczURNVQqzIAV1GFLMsgWYwJkjb0wyVZjjKpG/74gXF+H1CxqDMM+oESY5bBrifcTyxDh+YqU3/wC4p/Z7GLHmfDy9RgynL6nknYBnYkeFSSZFgCAI3uOUjDQZDMU0YiqFpKAbkRBEwSAGBJbaSSdsWXMQaMx5vBA+pdvaKsxWTvA6IyLO6MdUWmYNjhjk21mDq0j7rQQFMAkxdrMN7Gd74UUczuQl4sZO15MsJ2JFiOW8Y0fZvh1FwalSsQLU1EEKzmCoZtyNUbRy5Yd8pCxMXhQN2N/EQ57KPlz3BB7mowdAd5IAiYMGIvBkbXOGuUYA6KqVNVNJSnSQoWWANbNo1zq8MgKtpGLsnw5cytWl4e9Vm1pJknYOJGyx5zMW1TgCrRqUVZqp/wC5BDpV1/8AjQCmB1uZgXmDMTiJNGgbm5G1DcUbqH061MKUbL1Gy7qQSAqeeosIV2EeV774t7G5wMGyuqSAxoMR8SeJmSN5mCB5t+EYWZNKlYs1bWwse7SFLTZbQZW0Cx2vA3ZcQYlELQMwpD061J1hSo/yygMKihYEcwZAJMzq+k7MoPp7/qM+LmaVn0BCNaxB0KZaARBY+t8ENXbMpUK0tSEOgY+HXCyp1GIEsw+E3vywr7R9pKlXLakAWuyimyFSWv8AEyAA+TAnr5Y7Q7SUstw+lTqAz4lZASHjUQzTylbz54ui6V2HM8nI5DAdom7MNWV6NI1ApRyzpKMp0jUoJBkgQDuACfLBSjN5mtmGoVaaSq03mDqCAwAYJJYFmJEACOe6kdoUWnVpI7I6lmAKnWSz0h3bbFCopgEzzxqOHHL0+HCow0NWRS5DlS7soAlwZEXvyv0xZnFXW/ECWNj88xLwLO0K6sma8IT71NxJMsCWAPhKwoAO+5Fhgzg/bcZbL9xWoGoULBWLxqBOrmsCAwECcLslnv0Z6ve0hogrTZNPxNCOwI+6FhgTvJPXDDgPZ+l3LV82qtQeWpknZepqKQbgRBAMjzxzDHp33HaEHIze/eMOGcQp5ik7d7Up0QYFLw+G2tiW3ZR4TAvv7La1RKyoyLCFJ1aXALAagACCSNRFuiDnOEvZw0xSqLUquFMNSFQL3elmK62O8/CI6t0GGvB+GCt3yCoztSQMo1eE65KDYLoERYgyOgupxIq2OBLYfEvq7k/z+IRkMr3tJ2Y02RCdSiQW5nSN5233M73ww7J8OFSsiqukDXUMEEHTCKZHXvef4PLGV4Pm6VWpUy1REBOtDFUBCVk/eDSZWwDCTEETjV5DN1KdLvKNYqzJTpKVRfukspMj73eKDHMHfCsFrfrt+pceLeiDzPdpqpp5lQFawKA6fDJBJGsNvY4q7P5p31sXJRQbOAFJkBWOxPleIv5iXEuMd+GWm111ByOTEnn6KThfmuIijRVJXW/J7gbCSB58iPcYmuFQQZFszMCKklq6kpAmTqZrX3doI5WAX54O7IUFYpN3JAsfhgAKSLW+zBHr64A4YGakHJSE7wBl3MBiOnW2Hf8Ah0hFPWb3X+IM+dx9Maa2mMt6jD88NdZiwJm3IxpIMWtI8W8x5Xwl/wAScuVy7BhJapc7AeEtbrBgYZcK116pc7iowHSWMnnNh8sJ/wDFTOy+hT/lhQbfeYg/kRgBPUAOkByeknvtCcvSfL0qb6IppTAvadR3A85Bv1xjuPZ2lXrTTpU0IgEsACReJgA3P5eePp6IHylIsLimjRztB+ZjGF7T0i2Y8Khm3UT8WyhfmRzGxwRZgddtpncxmKldtFMhEB/FABEg3Jk8/LDgdnUhfG+w27uP91QH6YJ4nkKlNW+ypwiBLsCQwPjblJ5bERhfku0QVY1NTEmBpm3WZveR7YmVfoJFk32MzNLjKt/nUlf9ZPA3rYaT8sSZcu/wVCh/DUH/ALLI+YGFbUiNwRiOjA0L02nqjIesbHJVFEjxL1Uhh81xXpVviX3GAKbsplSQfIxggcSqfeAbzIv8xfAKHpGDCWtw4G6N7HHctmMxQnu2ZQdwDKn1XY+4x6nn18x9cH5bPofiEjywut15EegYZlu3FQkGsgYgQrJA0wLeD4TeDFpjB3DM3l+7ZkzALG5RxpcsSDO5DH0JwCOEUK/wVFDdDY4Cz/ZKvTuFJH99MJqxsCDtDTAg9pq8z2TerLhh4pg8xflbE+LcCermXzCjVpaQhIjWFUSQejz+6cYzIcZzeWMKx0j7jjUvybb2jGl4b/iHTaBmKAXq1MSP3SZHzOLV2kCrC673IZLsrmTXQGVBYanmCLyzSOcT74N7b5/MZlyqJUGXBGgxYgAjX1JIJ9ow4yXE8rmEZaVRZYEGCQwBsfCTNxbbB4pONmAHTQ4/M4Wjqs9IpNLXWfMWoimCWmQRcjTbpHWeeNDxMaESlqtRpy9z/mvBIn9WQJ8sa6pS1Wbu29TH/rgU9nxUhWKEE3IEk9SbiTc3jC5BcfC+m/eV0KyUMq2YYfa5gSTzKgaVIjk0F/cYTVssp1h7WHisSHAhh+yGJWPvWM3wXxPOirmYUfZZZQ0D9WFpqAN/EVt0nFvDc3SkVBUUKk2K6dLGIsZLHzmPfEcWIsdUvkzjHsTv/WUZJcz3vdt4KlNdaGYNgTKgsJ1WmAbarC+DKPBUrNUTMuFLUmqM4bUzCmV1ryhdiQb2MWvinifGsvWIpkl21D7QG6k8wduW22FnajNVHNOnXVWVFOitS8OpGENOkRBEgj13GKsCnWTyZmdRQ55moXiNFclTr16VMrVB0tWbU7o0mwYAIDANiCQJInAHDOz+USk9Sutde8lqKs+gAchvPMQWBkYzWay9Oo1FjVqfYqopLUUNTAQrpUhZLJCwRYnecH5OtUqZgvnalTM2JRKW2rkCqkaAN7xMDe+O8/SBRB9piOIbiqijM8Pd6r1HijQBVQ7aXkjSh0g+J7gsSLTPUYecQ4BmO6FE1kamDaKcLzkypjmeZxGjQWgEqPTVrar3VX1COUjmPkPPDqjn0dQVIVgbaHJ3kCSuwMyZPP3w58R6QauTVGPxMOtHNZRKjaYQ6qYJKsug3lQ5nVPlMgRhzke1eXPC/wBGqoahRWCLJVWJaU1FWmACZBsYwNxXICpVCUnFVnMaQhYgyAAjEeE25GB8sF9meydLMGtXOhmpg6qL+G51XIQA3gkSeXyK5VI9W0cFlO28VU/+niKod4mO5rjVdSrAuUEFZXnvqvsZ0X+HPEVzD5h6mnvGZHGkQBupCjkBI+eEvCexQro1enUZkVvHoi0AmPGdVgeU2OARw6sK0UtSp+O7DTzJKiRysY3xoRUYkBrPaSd2A4rrc0Wc4lkq+bem7lGWpTWi6gaWCwzDVEhi+qCTHw35YK4w4oBNYGlqzOoAOk6VDD0BYkDeI9hia3DC1enQkgmqupoO4kKfxD4uvOfT6PxjMCgaas42gE7wsEmfMwSB/HGfNjAygdvwPvL4W1LqH+5mOIalpUWpghGCCsFUTJtP70j5Y9WiswddGhUGhHU3CrF4Mm6t1vj2Y4u1ZaqU2CKvi1bEncADnJ/PF/CWs9Z2RUWlpCkTNzY+JTdiTvhyOgjXtZkuA1alQZhV0sqkOxWyjUACF6WBEYP7LcYGWoU0Ks9Ry5CqCT8ULMSJMMfTFHZsu6OVNJQwh4kABbgCJ/HFuh6Ys4LmCKQJVfiZlt95QGgzeNm5e+2KrYAEyt9RMe9kK7pZ6TAoGYlmH3ixFhJBi0EDGN4g4euDVAGpyxg7HcKZEbgXv/HGoyFRKlKuzKPs7KwkHmGiII2W89ZHXNZ3JKylidSnZuf139iT64lkZ03iO4IAAmpz/anumeixDR3ZRgZ8LRIPmoBH+oHrjOjiGusuYCkBLMJsfFNvfGYzOWZDZpAMSDtzgjdTEWIGD8t2gqJ4AiRGzExfe0X9ScQDtd3tEZ3PE19Xi1OGJUFjLMD574w2aoaSCWQagHAQmAGuBtuNsRq9+xLFbHfSDGKhUUWl7Wvv+WNIzAruYFG0s429BT9mkf6iR/umMT4L2YfNU2qKEUAwNUjUecEA7emFeRyz5istJd2Nz0HM/LH1LK0lo0gqDwoAAOp8/U4igIFT1WotsJ824r2Wq0LuNImNQIInpYz9MLGyDciD5bH5Y1PbrPTopTJksfyHz8R+WGvYTh4XLs7KD3p2YT4VsN/PUflhyaNRnQJ1nzx8qw3U4r7vH1ytwPLPvRC/seH6AgfTCfjfZSmqGpTlgPiVgNvIrH1nA1RVLE0J8+VmHPDLh/aGvR+F2A6TI+RwZQ4SrmDSqUeYZ7KbE2LQOWB24Wh+GsoPR7fU2+uAyg8iVt15Ea0u1lGqIzFBG/WXwn+WOVuFZKtelV7tvwuP4jCl+BVYkKGHVTIwM2UddwwxHywPpNSiuDzDM52YqpdSGHUGR9MQy3FM3QstSoAOQYx8tjiqhnKibMRgocTLfGob88MGcc7xvSYdle3mbWxqK3/5E/imk/TDfL/4hVSpBoKxIjUlTaeYUrP1xmGFJvL1GKzw8br/ALTglwRRgGNQbE1XZztfl6VJkqU3DtULM6IrEiBpB8U2luXPBWa4twut/mOyk9aTj/8AVYxjUVwZkMdvGs26EmcWDuz8dAqfxUmMfK4+UYZCoG0V8IY2ZoG4bw1mLLngvkRt8wMN85nstUpLSbPZfSs/cEtqiQ0sZW22MfSylFgQtU6uhcofkVZT+8uIZfJMl6qVWXqrn6FdQ+mHu+Ynk1sLmhqZyjQp/wDbVw8R9jGpGY7wNlAm454yPEc3XqsXamqxtpXTtzud/TDk5fLMwK1KtMqDKnUravuMDLkQYOwmOWNBku0OWdFTN5dKzixqoApYbTFr9YMYVca3qoXGKE7CZKtxrO010VkqBDEiohZCDEQWsOsjyxVlOMKp1VFFYCAAHYFfS5+uPqGT4hkkVaaV6lAAWp1aWpQDy2mP9UYozfCMpWnwZCuT+F+6c/U4fy0I4kmwN1sfI/rMmeLUFVKlLvKLzKMCGvbfURO22O5bP1mzD1/0inRZ1ZXIGnWrCJIIKg23kwYwfxPsDlgNX6PmaH61NhVQe9j9cJ//AKSrC9HMJUQA2qoyW5iWGmf9WI+Rp+k/mHyTXG3sZPgGdzOWpV8tRK1VrMkMG2C2cAK0+JQBMggCd9nPZrtFXy9F6T0qdKoSWZ3DsWAEIiU1UAAKAJZ45mZOMNVZ6DfaUwQT4o2ieRnfa04My3FxUeENW2yRqsBJMS1scwO+wP8AntJaCDQO8d/pVSFzFVQtRJ7rmZkXAFoDMCPINgWiGrhO8YE6QneGAAyroAJIgmEEn64I4pxRu6pTGtSwJ0iCZeLCxABA8zOM5QzBJIkiZIG8X5RtYHC47YSpTQtHnmbGnmQKVUSKoXTo0jY6QqHVtdp6yMDcMqtRepTv3dUfeOkqBE7styY3O0WxVkqlqVMEQG13A+6NQ33GsAx5e+K+0PEW/SE7y/2hkKSBEgkQZixAta22LFT/AKkdQ/3Hi5EUstV7tLU3lWDgm8DbzQMCOXzwXw/LU1ydAuwXUzOzCG3JH4THhCbHCvi/F07oKV1EnVpdAFX5FWuI+WG3ZqolXLLpNM6FvT1bNAEHqOhvJg4YFQNyRIsC3AEhlhQRKlOnrLETqLXhY5DwncbdN5xZ2P4vSLJRATUqFiWWwYG5+KDAmCQOW+I53hy0aLGohpLEFl8ZEwbgHVFjfC7slwljVfMJULIoIspBYkCf429MEBNF6vyYp1aha/qOO2FCnspXWQBIAFwGYA9fiHoPXGb4bQWtXWnScAogNRrryaLTBjSL+eGHEc1UZl74FZclQQZJgrcHlsNsLeDUmXNqwI8NI7321Ae+w5YzKo1aSbl2RWW6lfaI5kM1O/h5g3NpNh9MJKdNI8TVp8jb8sbHiWYetUYKIEeKbTIjp1k4yPE8gyuQVMbi/Ikn85xqRFUUJnZADQmg7H8BFOiKjkipUE7Cym4F/b6YcVKQT75IAklrAf2MfP63ajNt/wCRaY/UUfmZOAK+dLXqO1Q9WJP54AFGzN2NSG1NC89mDWrNU2DNbyXYfIRjVL2qp0lWnSVyEAUEkAQLDqfpjDiux+EH+GLEy9Vuo9AT+QwNIlGOP/kbmqr9s6vLQvtJ+tvphTm+01VviqsR0BgfIWxTluBE3YOfcL+eH/DMlSp3GXoz1dwx+sgY664EAzov0iZo52q4lVYjqdvntgng3BK2aLBalNQsapJJE+QBnnjY8T4xRNErWKhYsFaSD5KBvj56KxUt3ZZQwIN4JU8jHIwLeWBZMY5i63e8cZvJZXLGFr1a9bY934KanzYElj5CPMjDDg3F6JDGuzsALKLsTyuwPnc2xm8tkySBBvso3ONX2f4NlxBzDAnlSXaeWojf0FvXHSN94EM7SZqYqUAqVX0o5PmATMANp1CSIwzzfZjL6WdatMgAnwPJgeRA/PFv+I6qMxkVIAUORAsAuqkI8hGAu1HcUgqUEUM1ywuQPX6/u9ccyAGoCa4gFLhNGpPd1xIvDAiw9REYkez9cAFSrA7EHf0xVTyxIp0EtUzBEn8NMXP0BPsMalOEZxVCUs2QigAKEgAAQBY4QqIxdlAmXfh+YXekx+uKyrDdGHt/PGypUnpUMx+l10AKDRUAh0bxbQJJJK2EzGCeCpTpZNKuZq99UdVKAbmeQG7HqTb03wfJ1C4R4hgJhe8ncT+0P5ziVOqAZAK/skj+MfTGozvfKDU/RlKTMFRKpz2uT1tboYvU/FMuKTv3SBoHdggw17gxMWv54noPSaEys3Av4iM5vUIZ9Q6VKat+a2xxKa/dNMfss6fQPH0wwyHF0zFQImTpQZgvVC2G5JKxb54YcWy2Xo6FNBWqvtTRmnyOwIBO0gHyx2lxD5guiIj0k76SOmsR9VwZkc53SuvdUHDgAiqQ0RMFbAqbm48umLHrZVVqBqMVUjwhmK3B56gAARcmPyn1Fab5atXp9zrpR4YYxMHV42NjtMflggPxCci1e8GylQofs2Cn9Q1GJ9tUT7YZrwrMVftHp1X86n8Em/vGGfAqArA1zSSkjqFSkDA0j4nYc2Y/QAeZOzPCKKI1RUGpbjQW3nyNwN+mOOqtzJHxBZqH7ijtXw+hSyzDSKjwILAWvPhGy/Dy9zjM8PytAUmqIIq7KZhRqBB/PGnyjLXzIWqfCiMxhiL2AuL7scN81ksp3Zpspdd4JYmxmxJkexxLGpK2T1jZMgRqq9v3MZkq+U7qmHrMlRQQ0oxBnlsb+YOCKVDJVPhKuf2Hn8jjQ0+FUAJpZZV6MyD8yP44Gr9nMw4/+7dB0BUD0hI/PGgADiYmYncwajwoBkqKdAQEAs5AAMT8Sgi3njM9pcyHzimVPiNxziINrGYw5zHZinTaa/EBPQsFPzZm/LCPiKOphMzTqLyBzCt9GI+mKA9Ih7y/MO5pPUu2kKJmygkCI6dMAZDNQ8syLrOkoLaTuJUiCLdN4xSc+wU02YxIMKQbja4nFFI1XbQqagxAErO219xh7iVNT39dl0CoVRhPjiDp5qdlXaAI288E5evmctQQprp+MkqCskfjIcGx2gRt54XdnOKaH7iqq94hJUkRJWIi8SfSeeHp41XBjSW02UWPh6eIgmRHXyI3wxxow4EkWdTzKOJcdXMih+JXbUIgTETaTs3I4Ep505fOow0ghblmgQReYBIJk7ziGez9M1KemktJiSXCzBAA02XnvtEefIftTm1/SKY1EQm8tA5xEQJ8p8xjFoAyaek9DGSUviaCr2xoVi9J6NjGiojAkEfIj1GMdxPMVBUYd56at488Oci9KrCh6QDEDRADAm9jzvzN8JOKUT3jbeXpiqYwOJzbczvBeyneSarsFERp5n32/rgDjFKlTrMlIeFPDJMkkfEZP60i3THsewzcTv8AiJZTTMqsICAb7XvHPfFT/pHMP9ccx7BEzmRVKxMaXPzOL6GS2LXJMBP/AJHl6C/mMex7DEwooM5nDqaBsLADYfyxbw/IajAIk7FuZ6DzOPY9iZlRzKsnmCKhR2KSYBUXnpuN/Xphjw7MJ31IA1STVQXYRJYDaDb3x7HsOIMoAfaNP8T8xqzeXpi5Uav3mH/xwrUBqju5+zS5I5qNo/aNh5accx7HP9UfSKgWV4jU7xq86WeQscl6D5R7YPocUzGpNdZkVyLkSYJgkDmPPHsex1CRJtjce9qOHjMPSoUX1aRLVGaYsdUnaecCAPkCoTiVTLuwQoVp+BHkPqVdiDsAb7bTj2PY5pqxY1Ym5w57iOaE6+6ojdvgUjzbdvQYM412ZelSWKneVDvaFVRzi5i/P2GPY9hRwYLKkqO8BfjzmtTqoir3SlbqBJ0kBv1V3bpYYGzmbaoRNTxEglySC0XkiJAnYbneMex7AbmUUbQM8QqVKk1PGimSotN5MTzM7kE3wbwRKb10Ri2l3UMomTJ8II535++PY9jjIWST959NY0wP8uALCCbD0x2nW0kMusHqD/THcewklBOJUErlTUQsV2IsbxvpjVtznFTvRo80T5A/S+PY9joIBn+1dBD4Q9Q+QIHzIwlzva/MuCEpmmDzAJb5xjuPYcKItxItVgSxWpJ3P/K4PyWeM/HUp+Zdfy7onHsewxgEuzHGiBAr1z+yacf/AMwfphc3GMzv3rx1MH6xj2PYNToE+YY1O8c6miJNuUDYcscqcTrxDNrgQCLH8r47j2DdcQAA8yfDMwztLEAjlMHYnl6b4u7V5oNVpsov3azck8/aPPfrjmPYj/2zQv8A84NlK2rYAGeVsF1cuJ5jynHsexWIZ//Z" />
      <Card.Body>
        <Card.Title className='text-black'>Card Title</Card.Title>
        <Card.Text className='text-black'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className='text-black'>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>ایا از حذف مطمینی؟.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => { this.closeModal() }}>حذف</Button>
          <Button variant="outline-primary">برگرد به عقب</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}


class AlertDismissibleExample extends Component {

  state = {
    loading: false,
    showModal: false
  }

  loadingFunc() {
    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 4000)
  }

  showModal() {
    this.setState({
      showModal: true
    })

    setTimeout(() => {
      this.setState({
        showModal: false
      })
    }, 3000)

  }

  render() {
    return (
      <>
        <Accordion className='p-3' defaultActiveKey="0">

          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1 <Badge bg="secondary">New</Badge></Accordion.Header>
            <Accordion.Body className='d-grid gap-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <Button variant="outline-primary"
                onClick={this.loadingFunc.bind(this)}
                disabled={this.state.loading}
                size="lg">{this.state.loading ? "downloading ..." : 'click to download'}</Button>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body className='d-grid gap-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <Button variant="outline-success" onClick={this.showModal.bind(this)} size="lg">click to show modal</Button>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body className='d-grid gap-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <Button variant="outline-warning" size="lg">more</Button>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

        {this.state.showModal && (<StaticExample />)}
      </>
    );
  }
}




export default class App extends Component {

  render() {
    return (
      <div>
        {/* <NoteApp /> */}



        <AlertDismissibleExample />
        <AdditionalContentExample />
        <div className='row gap-5 p-3'>
          <BasicExample />
          <BasicExample />
          <BasicExample />
          <BasicExample />
          <BasicExample />
        </div>
      </div>

    )
  }
}



