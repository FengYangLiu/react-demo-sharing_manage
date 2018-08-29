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
	},
	pagination(data,callback){
        return {
            onChange:(current)=>{
                callback(current)
            },
            current:data.result.page,
            pageSize:data.result.page_size,
            total: data.result.total_count,
            showTotal:()=>{
                return `共${data.result.total_count}条`
            },
            showQuickJumper:true
        }
    },
}