var production = process.env.NODE_ENV === "production"

const uri = production ? "https://safe-island-24152.herokuapp.com" : "http://localhost:8000";
export default uri;