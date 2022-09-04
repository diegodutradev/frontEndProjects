var authForm = document.getElementById("authForm")
var authFormTitle = document.getElementById("authFormTitle")

var acess = document.getElementById("acess")
var register = document.getElementById("register")
var loading = document.getElementById("loading")

var auth = document.getElementById("auth")
var userContent = document.getElementById("userContent")
var userEmail = document.getElementById("userEmail")

function toggleToRegister(){
  authForm.submitAuthForm.innerHTML = "Cadastrar sua conta"
  authFormTitle.innerHTML = "Insira seus dados para se cadastrar"
  
  hideItem(register)
  showItem(acess)

}

function toggleToAcess(){
  authForm.submitAuthForm.innerHTML = "Acesse a sua conta"
  authFormTitle.innerHTML = "Acesse a sua conta para continuar"

  hideItem(acess)
  showItem(register)

}

function hideItem(element){
  element.style.display = "none"
}

function showItem(element){
  element.style.display = "block"
}

function showUserContent(user){
  userEmail.innerHTML = user.email
  hideItem(auth)
  showItem(userContent)
}

function showAuth(){
  authForm.email.value = ""
  authForm.password.value = ""
  hideItem(userContent)
  showItem(auth)
}