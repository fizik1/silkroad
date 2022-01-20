// import logo from '../img/logo.webp'
import Image from 'react-image-webp';
import 'boxicons'
import React from 'react';
import DemoSimple from './Swepir';





function Page() {
    return(
        <div>
            <div className='nav'>
                <Image webp={require('../img/logo.webp')}/>
                <div className='buttons'>
                    <button className='button'>Regístrese</button>
                    <button className='button'>Reservar llamada</button>
                </div>
                <div className="texts">
                    <p className='text1'>¿Tiene alguna pregunta? ¡Llameme!</p>
                    <p className='text2'>Tel: <span>+998(66) 231-05-48</span></p>
                    <a href="#">Email: <span> spain@silkroaddestinations.com</span></a>
                </div>
                <div className='img'>
                    <span>
                    <Image webp={require('../img/navbar-img-1.webp')}/>
                    </span>
                    <p className='img_text'>Ezoza</p>
                </div>
            </div>
            <div className='section1'>
                <h1>Explore Uzbekistán como un nuevo destino</h1>
                <h1>Gane una gran experiencia para los expertos de viajes</h1>
                <h1>Obtenga beneficios de su FAM-Tour 2022</h1>
                <p className='text2'>Sólo 525 €</p>
                <p className='text3'>Reembolso del pago de FAM-Tour despues de enviar 6 viajeros</p>
                <p className='text4'>Participe en la gira, especialmente organizada para que turoperadores y agentes de viajes de todo el mundo exploren, experimenten y observen de primera mano el destino, que se está convirtiendo rápidamente en uno de los más populares entre sus clientes.</p>
                <div className='boxs'>
                    <button>Marzo del 16 al 22 – 2022</button>
                    <button>Agosto del 3 al 9 – 2022</button>
                    <button>Junio del 8 al 14 – 2022</button>
                    <button>Noviembre del 2 al 8 – 2022</button>
                </div>
            </div>
            <div className='section2'>
                <div className='row'>
                    <div className='items'>
                        <div className='item'>
                            <h2>Acompañamiento de habla hispana</h2>
                            <p>Descubrir el país de forma profesional y original.</p>
                        </div>
                        <div className='item'>
                            <h2>Turismo responsable</h2>
                            <p>Jornada dedicada al turismo responsable en el pueblo de Mitan.</p>
                        </div>
                        <div className='item'>
                            <h2>Workshop</h2>
                            <p>un verdadero momento de intercambio de conocimientos y prácticas entre usted y nosotros.</p>
                        </div>
                        <div className='item'>
                            <h2>Noche uzbeka</h2>
                            <p>Para que su estancia en Samarcanda sea aún más inolvidable, le invitamos a una velada uzbeka.</p>
                        </div>
                        <div className='item'>
                            <h2>“TALGO”</h2>
                            <p>Encuentra de circuito de trenes de España en todo Uzbekistán. Aquí están llamado los trenes de más alta velocidad.</p>
                        </div>
                        <div className='item'>
                            <h2>La UNESCO</h2>
                            <p>La visita a las ciudades incluidas en la Lista del Patrimonio mundial de la UNESCO.</p>
                        </div>
                        <div className='item'>
                            <h2>150+</h2>
                            <p>Los profesionales de los viajes participaron en nuestros cursos de formación y recibieron un reembolso.</p>
                        </div>
                    </div>
                    <div className='video-area'>
                        <p>VIDEO FAM TOUR</p>
                        <Image webp={require('../img/youtube-1.webp')}/>
                    </div>
                </div>
                <div className='direction'>
                    <div className='map'>
                        <h2 className='text1'>LA GIRA POR UZBEKISTÁN “NUEVO DESTINO DE MIS DESTACADOS”</h2>
                        <p className='text2'>7 DÍAS / 6 NOCHES</p>
                        <p className='text3'>TASHKENT – BUJARÁ – EL PUEBLO MITAN (SAMARCANDA) – SAMARCANDA – TASHKENT</p>
                        <Image webp={require('../img/uz-map.webp')}/>
                    </div>
                    <div className='items'>
                        <div className='item'>
                            <div className='son'>1</div>
                            <div className='texts'>
                                <h3 className='text1'>Visita a Tashkent y tren nocturno a Bujara</h3>
                                <p className='text2'>Reunión con nuestro equipo, visita a la capital de Uzbekistán. Traslado a la estación de tren para tomar el tren nocturno a Bujara, una auténtica experiencia en Uzbekistán.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='son'>2</div>
                            <div className='texts'>
                                <h3 className='text1'>Bujara</h3>
                                <p className='text2'>Excursión de un día a Bujara.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='son'>3</div>
                            <div className='texts'>
                                <h3 className='text1'>Bujara – Mitan – Samarcanda</h3>
                                <p className='text2'>Día dedicado al Turismo Responsable en el pueblo de Mitan.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='son'>4</div>
                            <div className='texts'>
                                <h3 className='text1'>Samarcanda.</h3>
                                <p className='text2'>Excursión de un día a Samarcanda.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='son'>5</div>
                            <div className='texts'>
                                <h3 className='text1'>Samarcanda</h3>
                                <p className='text2'>Visitas a Workshop. Noche uzbeka.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='son'>6</div>
                            <div className='texts'>
                                <h3 className='text1'>Samarcanda – Tashkent</h3>
                                <p className='text2'>Visita turística y viaje a Tashkent.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='son'>7</div>
                            <div className='texts'>
                                <h3 className='text1'>Tashkent – Casa</h3>
                                <p className='text2'>Organización de los traslados según su plan de vuelo. Vuelo a casa.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="button">
                    <button>Descargar el programa detallado</button>
                </div>
            </div>
            <div className='section3'>
                <h2>No se quede en la parte de ... ¿Por qué?</h2>
                <div className='items'>
                    <div className='item'>
                        <div className='rasm'>
                        <Image webp={require('../img/icon-1.webp')}/>
                        </div>
                        <div className='texts'>
                            <h3 className='text1'>Se reembolsa el precio total del viaje.</h3>
                            <p className='text2'>Silk road Destinations le devolverá el dinero invertido en este tour para 6 clientes confirmados. Reembolsamos los gastos de tierra, vuelo internacional y visado.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='rasm'>
                        <Image webp={require('../img/icon-2.webp')}/>
                        </div>
                        <div className='texts'>
                            <h3 className='text1'>Su compañero de viaje...</h3>
                            <p className='text2'>Aprovecha el precio de AGV para tus seres queridos. Ahorra más de 400 euros en el viaje de tu acompañante respecto al precio público.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='rasm'>
                        <Image webp={require('../img/icon-3.webp')}/>
                        </div>
                        <div className='texts'>
                            <h3 className='text1'>¿Un proveedor fantasma?</h3>
                            <p className='text2'>No, Silk Road Destinations es un verdadero socio en el desarrollo de sus programas. Intercambiar ideas, compartir experiencias, reunirse con nuestro equipo durante el Workshop en Samarcanda y durante el Eductour.</p>
                            <p className='text3'>El Eductour termina, tú te vas a casa pero... nosotros nos quedamos a tu lado. Siempre disponible para participar en la creación de su producto de Uzbekistán y Asia Central, y con una atención máxima para sus clientes durante su viaje.</p>
                            <p className='text4'>19 años de experiencia = 40.000 viajeros satisfechos desde su creación.</p>
                            <p className='text5'>Expertos polivalentes - IRM, viajes a medida, para grupos pequeños, MICE, creación y gestión de proyectos de turismo responsable y solidario, que operan en toda Asia Central.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='rasm'>
                        <Image webp={require('../img/icon-4.webp')}/>
                        </div>
                        <div className='texts'>
                            <h3 className='text1'>Estar a la moda...</h3>
                            <p className='text2'>Le distinguimos con productos inusuales. Su propia experiencia refuerza su prospección comercial. Guíe a sus clientes perfectamente en los productos de aventura. Contrarrestar la influencia de los medios de comunicación distorsionadores, ofrecer a Uzbekistán.</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='rasm'>
                        <Image webp={require('../img/icon-5.webp')}/>
                        </div>
                        <div className='texts'>
                            <h3 className='text1'>¿Negocios u ocio?</h3>
                            <p className='text2'>Ni de negocios ni de ocio. Pero puro placer, encuentros auténticos, sabores, colores, olores, sonrisas y emociones... Sí... es posible mientras se trabaja.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='carusel'>
                <h2>¿Qué dicen los participantes en los viajes FAM?</h2>
                <DemoSimple/>
            </div>
            <div className='section5'>
                <h2>¿Cómo me inscribo?</h2>
                <div className='boxs'>
                    <div className='box'>
                        <Image webp={require('../img/1.webp')}/>
                        <p className='text1'>Usted envía una solicitud para participar a FAM TORUR.</p>
                    </div>
                    <div className='box'>
                        <Image webp={require('../img/2.webp')}/>
                        <p className='text1'>Nos pondremos en contacto con usted dentro de 24 horas para confirmar su solicitud.</p>
                    </div>
                    <div className='box'>
                        <Image webp={require('../img/3.webp')}/>
                        <p className='text1'>Su considerará que su solicitud confirmada después del pago de la inscripción.</p>
                    </div>
                    <div className='box'>
                        <Image webp={require('../img/4.webp')}/>
                        <p className='text1'>Nosotros le enviaremos el orden con todos los pagos confirmados.</p>
                    </div>
                    <div className='box'>
                        <Image webp={require('../img/5.webp')}/>
                        <p className='text1'>A su llegada al aeropuerto, le daré la bienvenida a nuestro guía que le acompañará durante el viaje por Uzbekistán.</p>
                    </div>
                </div>
                <div className='button'>
                    <button>Llenar el formulario</button>
                </div>
            </div>
            <div className='section6'>
                <h2>Certificados y licencias</h2>
                <div className='images'>
                    <div className='image'>
                        <Image webp={require('../img/sert_1.webp')}/>
                        <div className='lupa'>
                        <Image webp={require('../img/lupa-icon.webp')}/>
                        </div>
                    </div>
                    <div className='image'>
                        <Image webp={require('../img/sert_2.webp')}/>
                        <div className='lupa'>
                        <Image webp={require('../img/lupa-icon.webp')}/>
                        </div>
                    </div>
                    <div className='image'>
                        <Image webp={require('../img/sert_3.webp')}/>
                        <div className='lupa'>
                        <Image webp={require('../img/lupa-icon.webp')}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section7'>
                <h2 className='title'>¿Quieres participar? Regístrate!</h2>
                <div className='forma'>
                    <form>
                        <h3>Formulario de suscripción:</h3>
                        <div className='items'>
                            <div className='item'>
                                <label>Nombre, Apellido
                                <div className='item-inp'>
                                    <Image webp={require('../icons/icon-1.webp')}/>
                                    <input type="text" name='ism' />
                                </div>
                                </label>
                            </div>
                            <div className='item'>
                                <label>Teléfono
                                <div className='item-inp'>
                                    <Image webp={require('../icons/icon-5.webp')}/>
                                    <input type="text" name='ism' />
                                </div>
                                </label>
                            </div>
                            <div className='item'>
                                <label>Agencia
                                <div className='item-inp'>
                                    <Image webp={require('../icons/icon-2.webp')}/>
                                    <input type="text" name='ism' />
                                </div>
                                </label>
                            </div>
                            <div className='item'>
                                <label>E-mail
                                <div className='item-inp'>
                                    <Image webp={require('../icons/icon-6.webp')}/>
                                    <input type="text" name='ism' />
                                </div>
                                </label>
                            </div>
                            <div className='item'>
                                <label>Dirección de la agencia
                                <div className='item-inp'>
                                    <Image webp={require('../icons/icon-3.webp')}/>
                                    <input type="text" name='ism' />
                                </div>
                                </label>
                            </div>
                            <div className='item'>
                                <label>Su pagina de web
                                <div className='item-inp'>
                                    <Image webp={require('../icons/icon-7.webp')}/>
                                    <input type="text" name='ism' />
                                </div>
                                </label>
                            </div>
                            <div className='item'>
                                <label>Número pasaporte
                                <div className='item-inp'>
                                    <Image webp={require('../icons/icon-4.webp')}/>
                                    <input type="text" name='ism' />
                                </div>
                                </label>
                            </div>
                            <div className='item'>
                                <label>A de la llegada eleje la fecha de la visita
                                <div className='item-inp'>
                                <select>
                                    <option value="Ford">Ford</option>
                                    <option value="Volvo" selected>Volvo</option>
                                    <option value="Fiat">Fiat</option>
                                </select>
                                </div>
                                </label>
                            </div>
                        </div>
                        <div className='button'>
                            <button>Regístrate</button>
                        </div>

                    </form>
                </div>
                <div className='call-me'>
                    ¿Tienes preguntas? Llámenos y le daremos una respuesta.
                </div>
            </div>
            <div className='section8'>
                <h2>¿YA QUIERES PAGAR TU INFOREISE?</h2>
                <div className='qism'>
                    <form>
                        <input type="text" />
                        <button>¡HAGA CLIC AQUÍ!</button>
                    </form>
                </div>
            </div>
            <div className='section9'>
                <div className='rows'>
                    <Image webp={require('../img/logo.webp')}/>
                    <div className='texts'>
                        <p>Uzbekistan, 140157, Samarcanda</p>
                        <p>Kuk Saroy 1-calle</p>
                    </div>
                    <div className='contacts'>
                        <p>+998 (66) 231-05-48</p>
                        <a href="#">spain@silkroaddestinations.com</a>
                    </div>
                </div>
                <div className='ending'>© COPYRIGHT 2022 - SILK ROAD DESTINATIONS</div>
            </div>
            <div className='panel'>
                <div className='items'>
                    <div className='item facebook'>
                    <box-icon name='facebook' type='logo' color='white' ></box-icon>
                    </div>
                    <div className='item linkedin'>
                    <box-icon name='linkedin' type='logo' color='white' ></box-icon>
                    </div>
                    <div className='item whatsapp'>
                    <box-icon name='whatsapp' type='logo' color='white' ></box-icon>
                    </div>
                    <div className='item telegram'>
                    <box-icon name='telegram' type='logo' color='white' ></box-icon>
                    </div>
                    <div className='item ok-ru'>
                    <box-icon type='logo' name='ok-ru' color='white'></box-icon>
                    </div>
                    <div className='item twitter'>
                    <box-icon type='logo' name='twitter' color='white'></box-icon>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Page;