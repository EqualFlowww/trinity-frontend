// javascript here

var main = () => {
	document.getElementById("eqpls-access-token").innerText = window.common.auth.accessToken;

	window.common.wsock.connect(
		`/router/websocket/cart/cc181cab-5dda-4b8c-aa3e-3cc9c55f5997?org=${window.common.auth.getOrg()}&token=${window.common.auth.accessToken}`,
		(data) => {
			console.log(data);
		}
	);
};

window.common.init(() => {
	window.common.auth.login(main, () => { // login failed
		console.error("login error");
	});
});
