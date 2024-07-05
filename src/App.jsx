import './App.css';
// Components
import GoogleReviews from './components/GoogleReviews/GoogleReviews';
import ProductLayoutOne from './components/ProductLayoutOne/ProductLayoutOne';
import WhatsAppButton from './components/WhatsappButton/WhatsappButton';

// Assets
import LogoImage from './assets/logo-mixer.png'
import HeroVideo from './assets/hero_video.mp4'
import LenovoLoq from './assets/lenovo_loq.png'
import LenovoLegion from './assets/lenovo_legion.png'
import HpVictus from './assets/hp_victus_2.png'
import AsusTuf1 from './assets/asus_tuf_2.png'
import ContactForm from './components/ContactForm/ContactForm';
import LocationIcon from './assets/location.png'
import PhoneIcon from './assets/call.png'
import MailIcon from './assets/sms-edit.png'
import A24Image from './assets/nota_a24_2.png'

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop playsInline id="video-background">
        <source src={HeroVideo} type="video/mp4" />
      </video>
      {/* <img src={HeroVideo} alt="background" id="gif-background" /> */}
      <div className="section hero-section">
        <div className="section-sub-container">
          <img src={LogoImage} alt="logo" width={120} />
          <h1>Computadoras gaming <br /> <span style={{ fontWeight: '400' }}>de la más alta calidad.</span></h1>
          <p>Todo lo que necesitás, lo encontrás en Mixerport.</p>
          <a href="https://wa.link/sebv41" target='_blank'>
            <button className='btn-info'>Más información</button>
          </a>
        </div>
      </div>
      <ProductLayoutOne
        title='LENOVO LOQ'
        subtitle='Potencia y portabilidad en un diseño compacto'
        description='Modelo 82XT001NUS • AMD Ryzen 7 7840HS • 8GB RAM • 512GB Almacenamiento • NVIDIA GEFORCE RTX 4050 6GB VRAM • 15.6 (1920 X 1080) FULL HD SCREEN • Windows 11'
        imageSrc={LenovoLoq}
        productRoute='https://mixerport.com/producto/lenovo-loq/'
      />
      <ProductLayoutOne
        title='LENOVO LEGION'
        subtitle='Rendimiento extremo con pantalla WQHD de 165Hz'
        description='Modelo 83EF0002US • AMD Ryzen 7 7735H • 16GB RAM • 512GB Almacenamiento • NVIDIA GEFORCE RTX 4060 8GB VRAM •  15.6" WQHD 165HZ SCREEN • Windows 11'
        imageSrc={LenovoLegion}
        productRoute='https://mixerport.com/producto/lenovo-legion/'
      />
      <ProductLayoutOne
        title='HP VICTUS'
        subtitle='Rendimiento robusto con pantalla de 144Hz'
        description='Modelo 16-R0085CL • Intel Core I7-13700H • 16GB RAM • 1TB Almacenamiento • NVIDIA GEFORCE RTX 4070 8GB VRAM • 16.1" MICRO-EDGE IPS FHD (1920 X 1080) 250-NITS 144HZ SCREEN'
        imageSrc={HpVictus}
        productRoute='https://mixerport.com/producto/hp-victus/'
      />
      <ProductLayoutOne
        title='ASUS TUF'
        subtitle='Potencia extrema con diseño resistente'
        description='Modelo FX507VV-BH96 • Intel Core I9-13900H • 32GB RAM • 1TB Almacenamiento • NVIDIA® GEFORCE RTX™ 4060 8GB VRAM • 15.6" IPS ANTI-GLARE FHD (1920 X 1080) 144HZ • Windows 11'
        imageSrc={AsusTuf1}
        productRoute='https://mixerport.com/producto/asus-tuf/'
      />
      {/* <div className="section-nota">
        <div className="section-sub-container">
          <h2> Nota para A24 </h2>
          <h3> Mixerport en los medios </h3>
          <p> Les compartimos la nota publicada sobre Mixerport BA, Gracias a A24 por destacar nuestro trabajo y permitirnos compartir nuestra historia. </p>
          <a href="https://www.a24.com/tecnologia/mixerport-ba-la-vision-fabio-lubnicki-el-mercado-tecnologia-argentina-n1306742">
            <img src={A24Image} alt="Nota para A24" width={800} className='a24-image' />
          </a>
          <a href="https://www.a24.com/tecnologia/mixerport-ba-la-vision-fabio-lubnicki-el-mercado-tecnologia-argentina-n1306742">
            <button className='btn-info'> Ver nota </button>
          </a>
        </div>
      </div> */}
      <div className="section-reviews">
        <div className="section-sub-container">
          <h2> Ellos ya confiaron en Mixerport </h2>
          <h3> Testimonios de nuestros clientes </h3>
          <p> Trabajamos arduamente para superar las expectativas. </p>
        </div>
        <GoogleReviews />
        <a href="https://www.google.com/maps/place/Mixerport+Importaciones/@-34.6020142,-58.3731623,15z/data=!4m8!3m7!1s0x95bccbf5082dee1d:0x87396e43d668cc41!8m2!3d-34.6020142!4d-58.3731623!9m1!1b1!16s%2Fg%2F11t7hb6kdm?entry=ttu" target='_blank'>
          <button className='btn-info'> Ver todos las reseñas </button>
        </a>
      </div>
      <div className="section contacto">
        <div className="section-sub-container">
          <h3> Contactanos </h3>
          <div style={{ width: '160px', height: '5px', backgroundColor: '#FAFAFA' }}></div>
          <p> Complete el formulario con sus datos de contacto y en breve nos estaremos comunicando con usted.</p>
          <ContactForm />
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6568.169847147494!2d-58.37316200000001!3d-34.602014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbf5082dee1d%3A0x87396e43d668cc41!2sMixerport%20Importaciones!5e0!3m2!1ses!2sar!4v1718992688974!5m2!1ses!2sar" className='maps-iframe' loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='google-maps'></iframe>
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
      <WhatsAppButton />
    </div>
  );
}

export default App;
