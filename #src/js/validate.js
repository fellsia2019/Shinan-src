// validate forms

const forms = document.querySelectorAll("form");
const bodyT = {
  name: 'Test',
  age: 22
};
const sendForm = (method, url, body = null) => {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(err => {
      const e = new Error('Ошибка')
      e.data = err
      throw e
    })
  })
}

if (forms != null) {
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const validate = () => {
        const field = form.querySelectorAll('[data-validate="field"]'),
        checkbox = form.querySelectorAll('[data-validate="checkbox"]');
        let result = true;

        if (field != null) {
          field.forEach(item => {
            const val = item.value;
            if (val == '' || val == ' ' || val == null || val.length < 2) {

              const error = document.createElement("span");
              error.classList.add("color-danger", "err")
              item.classList.add("error")
              if (!item.parentNode.querySelector("span.err")) {
                item.parentNode.append(error)
                error.textContent = "Поле должно быть заполненно!";
              }
              result = false
            } else {
              const error = item.parentNode.querySelector("span.err");
              if (error != null) {
                error.remove()
              }
              item.classList.remove("error")
              result = true
            }
          })
        }
        if (checkbox != null) {
          checkbox.forEach(item => {
            if (!item.checked) {
              item.classList.add("error")
              result = false
            } else {
              item.classList.remove("error")
              result = true
            }
          })
        }

        return result
      }
      if(!validate()) {
        return false
      }
      const formData = new FormData(form)
      const handler = form.getAttribute('action')
      sendForm('POST', handler, formData)
        .then(data => {
          form.reset()
          alert("Спасибо! Ваша заявка отправлена!")
        })
        .catch(err => console.log(err))
    })
  })

}