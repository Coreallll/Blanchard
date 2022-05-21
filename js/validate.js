document.addEventListener('DOMContentLoaded', function () {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);
  new JustValidate('.contacts-form', {
    rules: {
      name: {
        required: true,
        strength: {
          custom: '[а-яёА-ЯЁ]+'
      }
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          console.log(phone)
          return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
        required: "Недопустимый формат",
        strength: "Недопустимый формат"
      },
      tel: {
        required: 'Введите телефон',
        function: 'Например +7 (999)999-99-99'
      },
    },
    submitHandler: function(form) {
      let formData = new FormData(form);
      fetch('mail.php', {
        method: 'POST',
        body: formData
      }).then(() => {
        console.log('Отправлено');
        form.reset();
      })
      .catch(() => console.log('Ошибка'));

      // let xhr = new XMLHttpRequest();

      // xhr.onreadystatechange = function () {
      //     if (xhr.readyState === 4) {
      //       if (xhr.status === 200) {
      //         console.log('Отправлено');
      //       }
      //     }
      // }

      // xhr.open('POST', 'mail.php', true);
      // xhr.send(formData);

      // thisForm.reset();
    }
  });
});
