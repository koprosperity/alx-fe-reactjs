import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/formikForm";

const App = () => {
  return (
    <div>
      <h1>Controlled Form</h1>
      <RegistrationForm />
      <h1>Formik Form</h1>
      <formikForm />
    </div>
  );
};

export default App;