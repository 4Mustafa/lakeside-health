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
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 text-center">
        <div className="max-w-2xl mx-auto p-6 rounded-lg border border-neutral-200 bg-white shadow-sm">
          <p className="text-2xl font-semibold text-primary mb-4">
            ✅ Thank you! Your referral has been submitted.
          </p>
          <button
            className="bg-primary text-white font-medium px-6 py-3 rounded hover:opacity-90 transition"
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
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 space-y-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Make a Referral</h1>
        <p className="text-lg text-neutral-700 mb-8">
          For social workers and service providers to refer clients to our Housing Stabilization Services.
        </p>

        <div className="text-left bg-white border border-neutral-200 rounded-lg p-6 shadow-sm space-y-4">
          <ul className="list-disc list-inside text-sm text-neutral-800 space-y-1">
            <li>Complete all required fields in the referral form</li>
            <li>Obtain client consent before sharing their information</li>
            <li>Provide accurate contact information for both client and referrer</li>
            <li>Include any relevant housing history or special considerations in the notes section</li>
            <li>Select all services that might benefit the client</li>
          </ul>

          <div className="p-4 bg-red-100 text-red-800 text-sm rounded-md border-l-4 border-red-500">
            <strong>Note:</strong> Our team will review all referrals within 1–2 business days and follow up as needed.
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white border border-neutral-200 p-8 rounded-xl shadow-sm space-y-6"
      >
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-neutral-800">Client Info</legend>

          {[
            { label: "Client Name", name: "clientName" },
            { label: "Client Phone", name: "clientPhone" },
            { label: "Client Email", name: "clientEmail" },
            { label: "Client Address", name: "clientAddress" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-neutral-700">{label}</label>
              <input
                name={name}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-neutral-300 rounded-md bg-white text-neutral-800 focus:ring focus:border-primary"
                required={name !== "clientEmail" && name !== "clientAddress"}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-neutral-700">Date of Birth</label>
            <input
              type="date"
              name="clientDOB"
              value={formData.clientDOB}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-neutral-300 rounded-md bg-white text-neutral-800 focus:ring focus:border-primary"
              required
            />
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-neutral-800">Referrer Info</legend>

          {[
            { label: "Referrer Name", name: "referrerName" },
            { label: "Referrer Organization", name: "referrerOrg" },
            { label: "Referrer Phone", name: "referrerPhone" },
            { label: "Referrer Email", name: "referrerEmail" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-neutral-700">{label}</label>
              <input
                name={name}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-neutral-300 rounded-md bg-white text-neutral-800 focus:ring focus:border-primary"
                required={name === "referrerName"}
              />
            </div>
          ))}
        </fieldset>

        <div>
          <label className="block text-sm font-medium text-neutral-700">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 mt-1 border border-neutral-300 rounded-md bg-white text-neutral-800 focus:ring focus:border-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition"
        >
          Submit Referral
        </button>
      </form>
    </div>
  );
};

export default CustomReferralForm;
