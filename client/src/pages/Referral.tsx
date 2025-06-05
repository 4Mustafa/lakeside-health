import React, { useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfwlTQbIV3BeQmz2FKy8sMdpkNAXitDj1KXUf_3-qeWzhwvhw/formResponse";

const CustomReferralForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    clientAddress: "",
    clientDOB: "",
    referrerName: "",
    referrerOrg: "",
    referrerPhone: "",
    referrerEmail: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const [year, month, day] = formData.clientDOB.split("-");

    const data = new FormData();
    data.append("entry.1595067365", formData.clientName);
    data.append("entry.231773366", formData.clientPhone);
    data.append("entry.482622615", formData.clientEmail);
    data.append("entry.960048138", formData.clientAddress);
    data.append("entry.523555128_year", year);
    data.append("entry.523555128_month", month);
    data.append("entry.523555128_day", day);
    data.append("entry.1997619018", formData.referrerName);
    data.append("entry.830693960", formData.referrerOrg);
    data.append("entry.1161797991", formData.referrerPhone);
    data.append("entry.417992866", formData.referrerEmail);
    data.append("entry.1868946335", formData.notes);

    fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: data,
    }).then(() => {
      setSubmitted(true);
    });
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 text-center space-y-6 bg-card border border-muted rounded-xl shadow text-foreground">
        <p className="text-xl font-semibold text-primary">
          ✅ Thank you! Your referral has been submitted.
        </p>
        <button
          className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded hover:opacity-90 transition"
          onClick={() => {
            setSubmitted(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
            setFormData({
              clientName: "",
              clientPhone: "",
              clientEmail: "",
              clientAddress: "",
              clientDOB: "",
              referrerName: "",
              referrerOrg: "",
              referrerPhone: "",
              referrerEmail: "",
              notes: "",
            });
          }}
        >
          Submit Another Referral
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-10 p-8 rounded-xl shadow-md bg-card text-foreground space-y-6 border border-muted"
    >
      <h2 className="text-3xl font-bold mb-4">Lakeside Referral Form</h2>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold">Client Info</legend>

        {[
          { label: "Client Name", name: "clientName" },
          { label: "Client Phone", name: "clientPhone" },
          { label: "Client Email", name: "clientEmail" },
          { label: "Client Address", name: "clientAddress" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block text-sm font-medium">{label}</label>
            <input
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-muted rounded-md bg-background text-foreground focus:ring focus:border-primary"
              required={name !== "clientEmail" && name !== "clientAddress"}
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            name="clientDOB"
            value={formData.clientDOB}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-muted rounded-md bg-background text-foreground focus:ring focus:border-primary"
            required
          />
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold">Referrer Info</legend>

        {[
          { label: "Referrer Name", name: "referrerName" },
          { label: "Referrer Organization", name: "referrerOrg" },
          { label: "Referrer Phone", name: "referrerPhone" },
          { label: "Referrer Email", name: "referrerEmail" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block text-sm font-medium">{label}</label>
            <input
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-muted rounded-md bg-background text-foreground focus:ring focus:border-primary"
              required={name === "referrerName"}
            />
          </div>
        ))}
      </fieldset>

      <div>
        <label className="block text-sm font-medium">Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 mt-1 border border-muted rounded-md bg-background text-foreground focus:ring focus:border-primary"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-md hover:opacity-90 transition"
      >
        Submit Referral
      </button>
    </form>
  );
};

export default CustomReferralForm;
