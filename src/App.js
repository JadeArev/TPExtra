import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Card from './components/Card';
import Footer from './components/Footer';
import Inscripcion from '../images/inscipcion.jpeg';

function App() {
  return (
    <div>

    <Header/>
    <Banner/>
    <Gallery>

      <Card Titulo = "Inscripción ciclo lectivo 2021 - Nivel Secundario"></Card>
      <Card Titulo = "Inscripción ciclo lectivo 2021 - Nivel Secundario"></Card>
      <Card Titulo = "Inscripción ciclo lectivo 2021 - Nivel Secundario"></Card>
      <Card Titulo = "Inscripción ciclo lectivo 2021 - Nivel Secundario"></Card>
      <Card Titulo = "Inscripción ciclo lectivo 2021 - Nivel Secundario"></Card>
      <Card Titulo = "Inscripción ciclo lectivo 2021 - Nivel Secundario"></Card>
      <Card Image = {Inscripcion}></Card>
      <Card Image = {Inscripcion}></Card>
      <Card Image = {Inscripcion}></Card>
      <Card Image = {Inscripcion}></Card>
      <Card Image = {Inscripcion}></Card>
      <Card Image = {Inscripcion}></Card>
      <Card Texto = "Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"></Card>
      <Card Texto = "Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"></Card>
      <Card Texto = "Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"></Card>
      <Card Texto = "Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"></Card>
      <Card Texto = "Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"></Card>
      <Card Texto = "Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!"></Card>
    </Gallery>
  
    <Footer/>
    </div>
    
  );
}

export default App;
