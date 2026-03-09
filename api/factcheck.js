export default async function handler(req, res) {
  const { query } = req.query;
  const apiKey = process.env.GOOGLE_FACTCHECK_KEY;
  const url = `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(query)}&key=${apiKey}&languageCode=hi`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
}
