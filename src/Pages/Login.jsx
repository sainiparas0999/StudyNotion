import loginImg from "../assets/Images/login.webp"
import Template from "../Components/core/auth/template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1= "Lets Start Saving your expenses from today"
      description2="Login By using your Email And Password."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login;