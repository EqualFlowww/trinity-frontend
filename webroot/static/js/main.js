// javascript here

var main = () => {
	document.getElementById("eqpls-access-token").innerText = window.common.auth.accessToken;

	window.common.rest.get('/uerp/v1/demo/device/cart?$archive&$size=100', (carts) => {
		console.log(carts);
		if (carts && carts.length > 0) {
			window.common.wsock.connect(
				`/router/websocket/cart/${carts[0].id}?org=${window.common.auth.getOrg()}&token=${window.common.auth.accessToken}`,
				(data) => {
					console.log(data);
				}
			);
		}
	});
};

window.common.init(() => {
	window.common.auth.login(main, () => { // login failed
		console.error("login error");
	});
});
