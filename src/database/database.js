import {nanoid} from "nanoid";

export const database = [
  {
    id: nanoid(),
    summary: "How many team members can I invite?",
    paragraph:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: nanoid(),
    summary: "What is the maximum file upload size?",
    paragraph:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: nanoid(),
    summary: "How do I reset my password?",
    paragraph:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: nanoid(),
    summary: "Can I cancel my subscription",
    paragraph:
      "Certainly, you can email us at relationship@accordeon.com and ask your cancel. No questions asked :)",
  },
  {
    id: nanoid(),
    summary: "Do you provide additional support?",
    paragraph:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];
