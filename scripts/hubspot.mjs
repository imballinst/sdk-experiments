import axios from "axios";

const response = await axios(
  "https://api.hubapi.com/crm/v3/properties/company",
  {
    headers: { Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}` },
  }
);
console.info(response.data.results.find((item) => item.label.includes("Test")));
