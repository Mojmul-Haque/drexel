// #cart is the elements id which you wan to place the cart widget
var cart = $('#cart').DCAJAXPaypalCart({
	width: 600, // Width of the cart
	height: 400, // Height of the cart
	currency: 'USD', // The display currecy of the cart, support USD,YEN,HKD,GBP,AUD..etc (Optional)
	language: 'en', // The language of the cart. Included en, jp, de. (Optional)
	autoOpenWhenAdd: true, // Enable auto open the cart window after a item added to cart (Optional)
	autoCleanCart: true, // Enable auto clean cart after checkout button click (Optional)
	openNewCheckOutWindow: false, // Indicate if the paypal checkout window is open in a new window (Optional)
	themeColor: '#0066cc', // Color in the theme (Optional)
	themeDarkColor: '#0040a1', // Dark color in the theme (Optional)
	header: 'Header Text Here', // The content of header (Optional)
	footer: 'Footer Text Here', // The content of footer (Optional)
	paypalOptions: {
		business: 'YOU_PAYPAL_EMAIL@email.com' // The paypal email addres which use for receive money
	}
});
