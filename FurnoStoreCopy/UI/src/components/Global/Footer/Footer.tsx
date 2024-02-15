
import { FooterContainer } from "./Footer.style"

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-left">
        <ul>
          <li>
            <h3>Account</h3>
            <p>Konto</p>
            <p>Bestellliste</p>
            <p className="name-1" >Bestellungen &</p>
            <p className="name-2" >Rechnungen</p>
          </li>
          <li>
            <h3>Kundendienst</h3>
            <p>Kontakt</p>
            <p className="name-1" >Service-</p>
            <p className="name-2" >Anfrage</p>
            <p className="name-1" >Datenshcutzer</p>
            <p className="name-2" >klarung</p>
          </li>
          <li>
            <h3>Informationen</h3>
            <p>Über uns</p>
            <p>Lieferinformationen</p>
            <p>Konto</p>
          </li>
          <li>
            <h3>Kontakt</h3>
            <p>+49 30 077364972</p>
            <p>Germany</p>
          </li>
        </ul>
      </div>
      <div className="footer-right">

      </div>
    </FooterContainer>
  )
}

export default Footer
