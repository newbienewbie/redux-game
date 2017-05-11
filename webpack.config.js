const path=require("path");

const PATHS={
    app:path.join(__dirname,"lib"),
    build:path.join(__dirname,"dist","js"),
};

module.exports={
    entry:{
        main: path.join(PATHS.app,"index.js"),
    },
    output:{
        path:PATHS.build,
        filename:"[name].js",
    },
    module:{
        rules:[
            {
                test:/\.jsx?/,
                use:["babel-loader"],//自右向左依次加载
                include:PATHS.app,
            },
            {
                test:/\.css$/,
                use: ["style-loader","css-loader", ]
            },
            {
                test:/\.less$/,
                use: ["style-loader","css-loader??importLoaders=1",'postcss-loader',"less-loader"]
            },
        ],
    }
}