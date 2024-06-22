import './App.css';
import LogoImage from './assets/logo-mixer.png'
import HeroVideo from './assets/hero_video.mp4'
import LenovoLoq from './assets/lenovo_loq.png'
import LenovoLegion from './assets/lenovo_legion.png'
import HpVictus from './assets/hp_victus.png'
import AsusTuf1 from './assets/asus_tuf.png'
import GoogleReviews from './components/GoogleReviews/GoogleReviews';
import ProductLayoutOne from './components/ProductLayoutOne/ProductLayoutOne';
import ContactForm from './components/ContactForm/ContactForm';
import LocationIcon from './assets/location.png'
import PhoneIcon from './assets/call.png'
import MailIcon from './assets/sms-edit.png'

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="video-background">
        <source src={HeroVideo} type="video/mp4" />
      </video>
      {/* <img src={HeroVideo} alt="background" id="gif-background" /> */}
      <div className="section hero-section">
        <div className="section-sub-container">
          <img src={LogoImage} alt="logo" width={120} />
          <h1>Computadoras gaming <br /> <span style={{ fontWeight: '400' }}>de la más alta calidad.</span></h1>
          <p>Todo lo que necesitás, lo encontrás en Mixerport.</p>
          <button className='btn-info'>Más información</button>
        </div>
      </div>
      <ProductLayoutOne
        title='LENOVO LOQ 82XT001NUS'
        subtitle='Potencia y portabilidad en un diseño compacto'
        description='Con AMD Ryzen 7 y NVIDIA GeForce RTX 4050, disfruta de un rendimiento excepcional en cualquier lugar.'
        imageSrc={LenovoLoq}
      />
      <ProductLayoutOne
        title='LENOVO LEGION 83EF0002US'
        subtitle='Rendimiento extremo con pantalla WQHD de 165Hz'
        description='Impulsado por AMD Ryzen 7 y NVIDIA GeForce RTX 4060, ofrece gráficos impresionantes y juegos fluidos. 16GB de RAM y SSD de 512GB aseguran un rendimiento excepcional.'
        imageSrc={LenovoLegion}
      />
      <ProductLayoutOne
        title='HP VICTUS 16-R0085CL'
        subtitle='Rendimiento robusto con pantalla de 144Hz'
        description='Equipado con Intel Core i7 y NVIDIA GeForce RTX 4070, brinda una experiencia de juego de primera clase. Con 16GB de RAM y SSD de 1TB para un almacenamiento amplio y rápido.'
        imageSrc={HpVictus}
      />
      <ProductLayoutOne
        title='ASUS TUF FX507VV-BH96'
        subtitle='Potencia extrema con diseño resistente'
        description='Con Intel Core i9 y NVIDIA GeForce RTX 4060, ofrece un rendimiento excepcional para juegos exigentes. 32GB de RAM y SSD de 1TB aseguran velocidad y capacidad.'
        imageSrc={AsusTuf1}
      />
      <div className="section-reviews">
        <div className="section-sub-container">
          <h2> Ellos ya confiaron en Mixerport </h2>
          <h3> Testimonios de nuestros clientes </h3>
          <p> Trabajamos arduamente para superar las expectativas. </p>
        </div>
        <GoogleReviews />
      </div>
      <div className="section contacto">
        <div className="section-sub-container">
          <h3> Contactanos </h3>
          <div style={{ width: '160px', height: '5px', backgroundColor: '#FAFAFA' }}></div>
          <p> Complete el formulario con sus datos de contacto y en breve nos estaremos comunicando con usted.</p>
          <ContactForm />
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6568.169847147494!2d-58.37316200000001!3d-34.602014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbf5082dee1d%3A0x87396e43d668cc41!2sMixerport%20Importaciones!5e0!3m2!1ses!2sar!4v1718992688974!5m2!1ses!2sar" className='maps-iframe' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="footer">
        <div className="footer-sub-container">
          <img src={LogoImage} alt="logo-mixer" width={140} />
          <div className="icon-box direccion">
            <img src={LocationIcon} alt="" width={20} />
            <p> Lavalle 445, 3er piso, CABA</p>
          </div>
          <div className="icon-box telefono">
            <img src={PhoneIcon} alt="" width={20} />
            <p> +54 11 2885-9227</p>
          </div>
          <div className="icon-box direccion">
            <img src={MailIcon} alt="" width={20} />
            <p> ventas@mixerport.com </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
