export default {
	formateDate(sysTime){
		if (!sysTime) return;
		let year = sysTime.getFullYear();
		let month = sysTime.getMonth() + 1;
		let day =  sysTime.getDate();
		let hours = sysTime.getHours();
		let minutes = sysTime.getMinutes();
		let seconds = sysTime.getSeconds();
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	}
}