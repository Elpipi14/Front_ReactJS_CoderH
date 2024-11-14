import { object, string, mixed } from "yup";

const formSchema = object({
  name: string()
    .required("El nombre es requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres"),
  lastname: string()
    .required("El apellido es requerido")
    .min(2, "El apellido debe tener al menos 2 caracteres"),
  email: string()
    .email("Debe ser un correo válido")
    .required("El correo es requerido"),
  address: string()
    .required("La dirección es requerida")
    .min(5, "La dirección debe tener al menos 5 caracteres"),
  phone: string()
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .required("El teléfono es requerido"),
  fullname: string()
    .required("El nombre del titular es requerido")
    .min(2, "El nombre del titular debe tener al menos 2 caracteres"),
  numbercard: string()
    .matches(/^[0-9]{16}$/, "El número de la tarjeta debe tener 16 dígitos")
    .required("El número de la tarjeta es requerido"),
  expiry: string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "El formato debe ser MM/YY")
    .required("La fecha de vencimiento es requerida"),
  cvc: string()
    .matches(/^[0-9]{3,4}$/, "El CVC debe tener 3 o 4 dígitos")
    .required("El CVC es requerido"),
});

const completeFormSchema = async (data) => {
  try {
    await formSchema.validate(data, { abortEarly: false });
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.errors };
  }
};

export default completeFormSchema;
