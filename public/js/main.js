//event listeners.
document.addEventListener('DOMContentLoaded', () => {
	if (typeof fin != 'undefined') {
		fin.desktop.main(onMain);
	} else {
		ofVersion.innerText =
			'OpenFin is not available - you are probably running in a browser.';
	}
});

//once the DOM has loaded and the OpenFin API is ready
function onMain() {
	//get a reference to the current Application.
	const app = fin.desktop.Application.getCurrent();

	//add event listener
	app.addEventListener('window-closed', console.log);

	//open dev tools
	fin.desktop.System.showDeveloperTools(app.uuid);

	//we get the current OpenFin version
	fin.desktop.System.getVersion(version => {
		const ofVersion = document.querySelector('#of-version');
		ofVersion.innerText = version;
	});

	//create a child window
	const childWin = new fin.desktop.Window({
		name: 'childWin',
		autoShow: true
	});

}