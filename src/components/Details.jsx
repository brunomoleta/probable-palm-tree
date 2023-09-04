import { DetailsItem } from "./DetailsItem";

export const Details = () => {
  return (
    <>
      <DetailsItem
        summary="How many team members can I invite?"
        paragraph="You can invite up to 2 additional users on the Free plan. There is no limit on 
        team members for the Premium plan."
      />
      <DetailsItem
        summary="What is the maximum file upload size?"
        paragraph="No more than 2GB. All files in your account must fit your allotted storage space."
      />
      <DetailsItem
        summary="How do I reset my password?"
        paragraph="Click “Forgot password” from the login page or “Change password” from your profile page.
    A reset link will be emailed to you."
      />
      <DetailsItem
        summary="Can I cancel my subscription?"
        paragraph="Click “Forgot password” from the login page or “Change password” from your profile page.
    A reset link will be emailed to you."
      />
      <DetailsItem
        summary="Do you provide additional support?"
        paragraph="Chat and email support is available 24/7. Phone lines are open during normal business hours."
      />
    </>
  );
};
