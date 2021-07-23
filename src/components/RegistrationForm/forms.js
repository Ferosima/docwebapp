export const form_name = [
  {
    name: "first_name",
    label: "First Name",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "last_name",
    label: "Last Name",
    type: "text",
    validation: {
      required: true,
    },
  },
];
export const form_data = [
  {
    name: "email",
    label: "Email",
    type: "email",
    validation: {
      required: true,
    },
  },
  {
    name: "birthdate",
    label: "Birth Date",
    type: "date",
    validation: {
      required: true,
      max: { value: new Date().toJSON(), message: "Not valide date" },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "text",
    validation: {
      required: true,
    },
  },
];
