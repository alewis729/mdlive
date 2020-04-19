const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

const countryCode = ":countryCode(bo|cl|co|cr|ec|sv|gt|mx|pa|pe|pr|do)";
const brandName = ":brandName(cyzone|esika|lbel|special)";
const page =
	":page([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9]-[1-9]|[1-9][0-9]-[1-9]|[1-9][0-9][0-9]-[1-9]|[1-9]-[1-9][0-9]|[1-9][0-9]-[1-9][0-9]|[1-9][0-9][0-9]-[1-9][0-9])";
const productCuv = ":productCuv([a-z,A-Z,0-9]*)";
const categorySlug = ":categorySlug([a-zA-Z-]*)";

routes.add("cart", `/${countryCode}/cart`);
routes.add("catalog", `/${countryCode}/${brandName}/pages/${page}`);
routes.add(
	"category",
	`/${countryCode}/${brandName}/categories/${categorySlug}`
);
routes.add("home", `/${countryCode}`);
routes.add("pages", `/${countryCode}/${brandName}/pages`);
routes.add(
	"product",
	`/${countryCode}/${brandName}/pages/${page}/products/${productCuv}`
);
routes.add("search", `/${countryCode}/${brandName}/search`);
