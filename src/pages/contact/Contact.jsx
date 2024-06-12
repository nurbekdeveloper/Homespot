import React, { useEffect , useState } from 'react'
import emailjs from 'emailjs-com';
import "./contact.css"
import AboutService from '../../componenets/ourserves/AboutService'


function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      setFormData({
        ...formData,
        attachment: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    if (formData.attachment) {
      formDataToSend.append('attachment', formData.attachment);
    }

    emailjs.sendForm(
      'service_1h1wy3c', // Replace with your service ID
      'template_k2emazw', // Replace with your template ID
      e.target,
      'QZV_l_vLAqERc79MY' // Replace with your user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Сообщение отправлено!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Ошибка при отправке сообщения.');
      });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      attachment: null,
    });
  };
  return (
    <div>
      <AboutService/>
      <div className="contact-container">
            <div className="contact-info">
                <div className="contact-item">
                    <i className="fa fa-map-marker"></i>
                    <p>г. Владимир, Большая,<br /> Нижегородская улица, 27</p>
                </div>
                <div className="contact-item">
                    <i className="fa fa-envelope"></i>
                    <p>info@swedstandard.ru</p>
                </div>
                <div className="contact-item">
                    <i className="fa fa-phone"></i>
                    <p>+7(920) 926 07 07</p>
                </div>
            </div>
            <div className="contact-form-map">
                <div className="contact-form">
                    <h2>Форма обратной связи</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    className="input"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Электронная почта"
                    className="input"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    className="input"
                    value={formData.phone}
                    onChange={handleChange}
                    />
                    <textarea
                    name="message"
                    placeholder="Сообщение"
                    rows="4"
                    className="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    />
                    <div className="attachment">

                    <input
                        id="file-upload"
                        type="file"
                        name="attachment"
                        className="file-input"
                        onChange={handleChange}
                    />
                    </div>
                    <button type="submit" className="buttonForm">Отправить</button>
                </form>
                </div>
                <div className="contact-map">
                <iframe src="https://yandex.uz/map-widget/v1/?ll=40.470595%2C56.146894&mode=whatshere&whatshere%5Bpoint%5D=40.426434%2C56.136111&whatshere%5Bzoom%5D=17&z=13.1" width="560" height="400" frameborder="1" allowfullscreen="true" ></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
