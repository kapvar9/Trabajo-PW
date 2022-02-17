import Head from "next/head"
import Footer from "../components/footer.components"
import Cabecera from "../components/header.components"
function TerminosYCondiciones() {
    return <div>
        <header>
                <Cabecera/>  
        </header>
        <a href=".." class="btn btn-success">Siguiente</a>
        <h1 id="term">Estos son los terminos y condiciones</h1>
        <div>
        <h4 id="term1">Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos  que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.</h4>
        </div>

        <Footer />
    </div>
  }
  
  export default TerminosYCondiciones