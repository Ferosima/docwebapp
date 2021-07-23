export const form_name = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "secondName",
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
  // {
  //   name: "birthdate",
  //   label: "Birth Date",
  //   type: "date",
  //   validation: {
  //     required: true,
  //     max: { value: new Date().toJSON(), message: "Not valide date" },
  //   },
  // },
  {
    name: "password",
    label: "Password",
    type: "text",
    validation: {
      required: true,
    },
  },
];
