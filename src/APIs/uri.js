var production = process.env.NODE_ENV === "production"

const uri = production ? "https://infinite-cove.herokuapp.com/" : "http://localhost:8080";
export default uri;