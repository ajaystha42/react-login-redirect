import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

const DEFAULT_VALUE: LoginForm = {
  email: "ajay@fusemachines.com",
  password: "1",
};

export const LoginComponent = () => {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = form;
    if (email == DEFAULT_VALUE.email && password == DEFAULT_VALUE.password) {
      localStorage.setItem("user", JSON.stringify(form));
      alert("Login Succesfully");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
