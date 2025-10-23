const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const { email, password } = event.currentTarget.elements;


  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };


  if (data.email === '' || data.password === '') {
      alert('Заповніть порожні поля!');
      return
  }

  console.log(data);

  
  form.reset();
});

