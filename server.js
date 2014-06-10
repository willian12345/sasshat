var http = require("http"),
	url  = require("url"),
	path = require("path"),
	os   = require("os"),
	fs   = require("fs");
// 获取本机ip
var getLocalIp = function () {
    var ip = '';
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      var alias=0;
      ifaces[dev].forEach(function(details){
        if (details.family=='IPv4' && details.internal == false && details.address.indexOf('10.224.68') > -1) {
            ip = details.address;
          ++alias;
        }
      });
    }
    return ip;
};

var sub_dir = "";

// 创建静态服务器
http.createServer(function (req, res) {
	var pathname=__dirname+url.parse(req.url).pathname;
	if (path.extname(pathname)=="") {
		pathname+="";
	}
	
	if (pathname.charAt(pathname.length-1)=="/"){
		pathname+="index.html";
	}
	

	// console.log(new Date().toTimeString());
	// console.log('request path: ' + pathname);
	fs.exists(pathname,function(exists){
		if(exists){
			switch(path.extname(pathname)){
				case ".html":
					res.writeHead(200, {"Content-Type": "text/html"});
					break;
				case ".js":
					res.writeHead(200, {"Content-Type": "text/javascript"});
					break;
				case ".css":
					res.writeHead(200, {"Content-Type": "text/css"});
					break;
				case ".gif":
					res.writeHead(200, {"Content-Type": "image/gif"});
					break;
				case ".jpg":
					res.writeHead(200, {"Content-Type": "image/jpeg"});
					break;
				case ".png":
					res.writeHead(200, {"Content-Type": "image/png"});
					break;
				default:
					res.writeHead(200, {"Content-Type": "application/octet-stream"});
			}

			fs.readFile(pathname,function (err,data){
				res.end(data);
			});
		} else {
			res.writeHead(404, {"Content-Type": "text/html"});
			res.end("<h1>404 Not Found</h1>");
		}
	});

}).listen(8088, getLocalIp());

console.log("Server running at http:// " + getLocalIp() + ":8088/" + sub_dir);
