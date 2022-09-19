//Função que trata a submissão do formulário de autenticação
authForm.onsubmit = function (event) {
  event.preventDefault()
  if (authForm.submitAuthForm.innerHTML == 'Acessar') {
    showItem(loading)
    firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value).then(() => {
      window.location.href = "redireciona.html"
    }).catch(error => {
      if(error.code === 'auth/wrong-password'){
        console.log("xD")
      } else if (error.code === 'auth/too-many-requests') {
        console.log("Dx")
      }
      hideItem(loading)
      console.log(error.message)
      console.log(error.code)
    })
    
  } else {
    firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error) {
      console.log('Falha no cadastro')
      console.log(error)
      hideItem(loading)
    })
  }
}

//Função que centraliza e trata a autenticação
firebase.auth().onAuthStateChanged(function(user){
  hideItem(loading)
  if(user) {
    showUserContent(user)
  } else {
    showAuth()
  }
})

function signOut(){
  firebase.auth().signOut().catch(function(error){
    console.log("Falha ao sair da conta")
    console.log(error)
  })
}