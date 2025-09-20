import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './App.css';

function App() {

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be 6 characters").required("Password is required")
  });

  const initialValues = {
    email: "",
    password: ""
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    alert("Form submitted!");
    resetForm();
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1>Simple Login Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Email Field */}
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="p"
              />

            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
              />
              <ErrorMessage
                name="password"
                component="p"
              />
            </div>


            <button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
