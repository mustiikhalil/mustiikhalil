var production = process.env.NODE_ENV === "production"

const uri = production ? "https://salty-anchorage-12867.herokuapp.com" : "http://localhost:8000";
export default uri;